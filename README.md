# stencil-import-issue

This repo is meant to reproduce the issue https://github.com/ionic-team/stencil/issues/1765.

To start demo :

`npm install` 

`npm start`

Then you can open chrome on http://localhost:8080/index.html
If you refresh twice the page without DevTools open, you'll only see one component.

If DevTools is open, everything works fine.
