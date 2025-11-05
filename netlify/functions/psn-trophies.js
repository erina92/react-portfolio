const {
  exchangeNpssoForCode,
  exchangeCodeForAccessToken,
  getUserTitles,
} = require("psn-api");

// Cache trophy data for 24 hours to avoid rate limits
const cache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  try {
    const npsso =
      process.env.PSN_NPSSO ||
      "tSgXF7F8pw5k4JIRgtN2B6ZsYZcmHCHdwaDY0LTEXlvmRvXisHd1uytSmw0GzTBG";
    const accountId = process.env.PSN_ACCOUNT_ID; // We'll resolve this on first call

    // Get game title from query params
    const gameTitle = event.queryStringParameters?.title;

    if (!gameTitle) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing title parameter" }),
      };
    }

    // Check cache first
    const cacheKey = `trophy_${gameTitle}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(cached.data),
      };
    }

    // Step 1: Exchange NPSSO for access token
    const accessCode = await exchangeNpssoForCode(npsso);
    const authorization = await exchangeCodeForAccessToken(accessCode);

    // Step 2: Get user's titles to find the matching game
    const titlesResponse = await getUserTitles(
      authorization,
      "me",
      { limit: 800 } // Fetch more titles to ensure we find it
    );

    // Find the game by title (case-insensitive partial match)
    const titleLower = gameTitle.toLowerCase();
    const matchedTitle = titlesResponse.trophyTitles.find(
      (t) =>
        t.trophyTitleName.toLowerCase().includes(titleLower) ||
        titleLower.includes(t.trophyTitleName.toLowerCase())
    );

    if (!matchedTitle) {
      // Log available titles for debugging
      console.log(`Could not find match for: ${gameTitle}`);
      console.log('Available titles:', titlesResponse.trophyTitles.slice(0, 20).map(t => t.trophyTitleName));
      
      // Game not found or no trophies available
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          title: gameTitle,
          trophies: null,
          message: "Game not found or no trophies available yet",
        }),
      };
    }

    // Step 3: Get trophy summary (not individual trophies)
    // The earned trophy counts are already in the matchedTitle object
    const trophies = {
      platinum: matchedTitle.earnedTrophies?.platinum || 0,
      gold: matchedTitle.earnedTrophies?.gold || 0,
      silver: matchedTitle.earnedTrophies?.silver || 0,
      bronze: matchedTitle.earnedTrophies?.bronze || 0,
      progress: matchedTitle.progress || 0,
    };

    const result = {
      title: matchedTitle.trophyTitleName,
      trophies,
    };

    // Cache the result
    cache.set(cacheKey, {
      data: result,
      timestamp: Date.now(),
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("PSN API Error:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Failed to fetch trophy data",
        details: error.message,
      }),
    };
  }
};
