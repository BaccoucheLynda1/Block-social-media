// ==UserScript==
// @name         Block Social Media Sites
// @version      1.0
// @description  Block access to social media domains
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    const blockedDomains = [
        "facebook.com",
        "instagram.com",
        "tiktok.com",
        "youtube.com"
    ];
    const currentDomain = window.location.hostname;
    if (blockedDomains.some(domain => currentDomain.includes(domain))) {
        document.documentElement.innerHTML = "";
        alert("You NEED to STUDY");
        window.stop();
    }
})();
