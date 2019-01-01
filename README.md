# Crafting UX Portfolio — Home landing page
Hosted using GitHub pages, working off the `master` branch of this repo.

To build:

  1. Open this repo locally
  2. Run `yarn start` to build the JS
  3. Run `yarn sass` (separate terminal) to build the CSS
  4. Run `yarn server` (separate terminal) to start the Express server locally, listening on default stuff
  5. Should be able to open http://localhost:3000 and see your junk!

✌️

To deploy to GH Pages:

  1. Run `git subtree push --prefix _public/ origin gh-pages`
  2. That'll push the `_public/` dir to the `gh-pages` branch, and GitHub
  will take care of the rest
