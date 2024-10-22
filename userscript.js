// ==UserScript==
// @name         Vanis.io Enhancement
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Enhance Vanis.io with custom features
// @author       Your Name
// @match        https://vanis.io/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

// MutationObserver to observe changes in the body
    const observer = new MutationObserver(() => {
        // Code to react to DOM changes goes here
        console.log("DOM changed"); // Log for debugging
    });

    // Start observing the document body for child list changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Set a timeout to execute code after 1 second
    setTimeout(() => {
        // Additional code can go here
        console.log("Timeout reached"); // Log for debugging
    }, 1000); // Adjust the time as necessary
    'use strict';

    // Your code here...

    // Example: Change color of server list items
    GM_addStyle(`
        .server-list-item {
            color: cyan !important;
        }
    `);
})();
