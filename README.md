# Expo Constants undefined in development

This repository demonstrates a bug encountered when using the Expo Constants module in a development environment.  The `Constants.manifest.extra` property, populated in `app.json`, is undefined during development but available in production builds.  The solution involves using conditional logic to handle this discrepancy.

## Bug

The `bug.js` file shows the problematic code that attempts to access `Constants.manifest.extra` directly, leading to an error when running in development mode.  This is because the `extra` property is dynamically attached to the manifest in a production build only.

## Solution

The `bugSolution.js` file provides a solution by adding a check that only accesses `Constants.manifest.extra` if it's defined.  This ensures a smooth execution in both development and production environments.

## Reproduction

1. Clone this repository.
2. `npm install`
3. Run the app using Expo Go or a similar development environment.
4. Observe the console logs.  The console will show an error or undefined output for `bug.js`, while `bugSolution.js` will correctly handle the case.
5. Build a release version and see that both methods work.