// ==UserScript==
// @name         Vanis.io Enhancement
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Enhance Vanis.io with custom features
// @author       Your Name
// @match        https://vanis.io/*
// @grant        GM_addStyle
// @run-at document-end
// ==/UserScript==

setTimeout(() => {
    // Your code to change the DOM goes here
}, 1000); // Adjust the time as necessary


const observer = new MutationObserver(() => {
    // Your code to change the DOM goes here
});

observer.observe(document.body, { childList: true, subtree: true });

(function() {
    'use strict';

    // Your code here...

    // Example: Change color of server list items
    GM_addStyle(`
        .server-list-item {
            color: pink !important;
        }
    `);
})();
