/* @license Plasttic v2.0 | MIT License | https://plasttic.dev/ */

/**
 * main.js
 *
 * Global scripts
 * This are utility scripts that can be used across projects
 *
 * Note: create other Javascript files if needed
 * in the build process they will be concatenated
 * and minified into one file scripts.min.js,
 * except files on the vendor folder.
 */

/**
 * Imports
 *
 * 1. ...
 */

// import someThing from './modules/module.js';
// someThing();

/**
 * Global variables
 * variables that can be used in multiple functions
 *
 * 1. Current Date
 */

const dateCurrent = new Date();

/**
 * Set current year in footer copyright
 * Use: ©2021-<span id="footer-year"></span> Company
 */
const footerYear = document.getElementById('footer-year');

if (footerYear) {
  footerYear.innerText = dateCurrent.getFullYear();
}

/**
 * Reset form values on page load
 * Use:
 * <form id="form-name">
 * <input type="text">
 * </form>
 */
// document.getElementById("form-name").reset();

/**
 * Copy code to clipboard in code.html
 */
const copyCodeBtn = document.getElementById('copy-code-btn');

if (copyCodeBtn) {
  import('./modules/plasttic.js').then(({ copyCodeToClipboard }) => {
    copyCodeToClipboard(copyCodeBtn);
  });
}

console.log('the main.js file loaded 50 times');