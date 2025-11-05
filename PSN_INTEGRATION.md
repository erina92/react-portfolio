# PlayStation Network Trophy Integration

This portfolio site fetches real-time trophy data from your PlayStation Network account.

## Setup

### 1. Local Development

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Get your NPSSO token:

   - Log in to your PlayStation account in Chrome
   - Visit: https://ca.account.sony.com/api/v1/ssocookie
   - Copy the `npsso` value from the JSON response
   - Paste it into `.env` as `PSN_NPSSO`

3. Add your PSN Online ID to `.env` as `PSN_ONLINE_ID`

### 2. Netlify Deployment

Add these environment variables in your Netlify dashboard:

1. Go to: Site settings → Build & deploy → Environment → Environment variables
2. Add:
   - `PSN_NPSSO` - Your NPSSO token
   - `PSN_ONLINE_ID` - Your PSN Online ID (puffy1511)

### 3. How It Works

- The `/api/psn-trophies` endpoint is a Netlify Function
- It authenticates with PSN using your NPSSO token
- Fetches trophy data for the requested game title
- Caches results for 24 hours to avoid rate limits
- Returns trophy counts (platinum, gold, silver, bronze)

### 4. Security

- `.env` is gitignored - your NPSSO token never goes to GitHub
- The Netlify Function runs server-side only
- NPSSO tokens are stored as environment variables in Netlify

### 5. Updating Trophy Data

Trophy data is cached for 24 hours. To force a refresh:

- Clear the Netlify Functions cache, or
- Wait 24 hours for automatic refresh

## Game Titles

The function matches game titles from your PSN library. Current games:

- Death Stranding 2
- Clair Obscur: Expedition 33
- Assassin's Creed Mirage
- Ghost of Yotei
- Astro Bot
- Horizon Forbidden West

Games that aren't released yet or don't have trophies will show "Coming Soon".
