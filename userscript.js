// ==UserScript==
// @name         Vanis.io Enhancement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhance Vanis.io with custom features
// @author       Your Name
// @match        https://vanis.io/*
// @require      http://localhost:5000/userscript.js// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // Example: Change color of server list items
    GM_addStyle(`
        .server-list-item {
            color: green !important;
        }
    `);
})();
