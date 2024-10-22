// ==UserScript==
// @name         Vanis.io Enhancement
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Enhance Vanis.io with custom features
// @author       Your Name
// @match        https://vanis.io/*
// @require      https://raw.githack.com/Potter14324/github.io-Vanis-Extension/main/userscript.js
// @grant        GM_addStyle
// @run-at document-end
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...

    // Example: Change color of server list items
    GM_addStyle(`
        .server-list-item {
            color: yellow !important;
        }
    `);
})();
