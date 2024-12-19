This bug occurs when using the Expo Constants module to access device-specific information. The issue arises when the app is running in a development environment (e.g., using Expo Go or a development server) and attempts to access certain constants that are only available in a production build.  For example, trying to access `Constants.manifest.extra` which is set through the app.json in a development context will result in undefined or missing keys.