"use strict";

function fixer() {

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
        script.innerHTML = this.getNavigateContentFunction();
        script.innerHTML += '; \n';
        script.innerHTML += this.getObtenerParamFunction();

        // Append
        document.body.appendChild(script);
    };

    /**
     * Get required script to fix navigate event
     * @returns {string}
     */
    this.getNavigateContentFunction = function () {
        return "window.navigate = function(url) { location.href = url }";
    };

    this.getObtenerParamFunction = function () {
        return obtenerParam.toString();
    }


};