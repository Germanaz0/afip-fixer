"use strict";

var fixer = function () {

    /**
     * Init method
     */
    this.main = function () {
        this.addFooterScripts();
    };

    /**
     * Detect which scripts are missing and append content scripts
     */
    this.addFooterScripts = function () {
        // Create the element
        var script = document.createElement("script");

        // Add script content
        script.innerHTML = this.getNavigateContentScript();

        // Append
        document.body.appendChild(script);
    };

    /**
     * Get required script to fix navigate event
     * @returns {string}
     */
    this.getNavigateContentScript = function() {
        return "window.navigate = function(url) { location.href = url }";
    };

};