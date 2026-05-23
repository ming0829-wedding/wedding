# Mobile Wedding Invitation (Invite You My Wedding)

## Related Docs
- [Build & Deploy Guide](./DEPLOY.md) — GitHub integration, build/deploy commands, custom domain setup, troubleshooting

## Project Overview
A React-based mobile wedding invitation web application.
- **Live site**: https://ming0829-wedding.github.io/wedding/
- **Repository**: https://github.com/ming0829-wedding/wedding

## Key Features
- **Intro / Poster**: Welcome animation and main visual on the first screen
- **D-Day Countdown**: Real-time display of days remaining until the wedding
- **Calendar**: Visual representation of the wedding date
- **Gallery**: Wedding photo album in slide format (react-slick)
- **Location**: Venue address, map, and transportation guide
- **MusicBox**: User-controllable background BGM
- **Share**: Share the invitation via mobile share API
- **Posting (Account Info)**: Bank account information for both families / groom / bride

## Directory Structure
```
mobile_ccz/
├── public/                # Static assets (images, fonts, favicon)
├── server/                # Express server code
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button/
│   │   ├── Icons/
│   │   ├── Modal/
│   │   ├── Slick/         # Gallery slider
│   │   ├── Sound/
│   │   ├── DdayCount.jsx
│   │   ├── MusicBox.jsx
│   │   └── WelcomeComponent.jsx
│   ├── sections/          # Page section components
│   │   ├── Intro.jsx
│   │   ├── Starting.jsx
│   │   ├── Poster.jsx
│   │   ├── Poetry.jsx
│   │   ├── WeddingInfo.jsx
│   │   ├── CalendarSection.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   ├── Ending.jsx
│   │   └── Footer.jsx
│   ├── core/              # Core logic
│   ├── store/             # Recoil atoms / selectors
│   ├── hooks/             # Custom hooks
│   ├── configs/           # Environment configs
│   ├── constants/         # Constants
│   ├── fonts/             # Web fonts
│   ├── App.jsx
│   └── index.js
├── webpack.client.js
├── webpack.server.js
└── package.json
```

## Page Flow
1. **Intro** → Welcome message / names of the bride and groom
2. **Starting** → Invitation greeting
3. **Poster** → Main poster image
4. **Poetry** → Short poem or quote
5. **WeddingInfo** → Date / venue summary
6. **Calendar + DdayCount** → Date visualization and countdown
7. **Gallery** → Photo album
8. **Location** → Map and transportation guide
9. **Ending / Footer** → Closing message and share buttons

## output answer language
- Korean
- inside code : english