import React, { useEffect } from "react";

export default function Translate() {
  useEffect(() => {
    // Ensure that this runs only on the client side
    if (typeof window === "undefined") return;

    // Check if the script already exists in the DOM
    const existingScript = document.querySelector(
      'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
    );
    if (existingScript) return; // Exit if the script already exists

    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );

    // Function to initialize the Google Translate element
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = googleTranslateElementInit;

    document.body.appendChild(addScript);

    return () => {
      // Cleanup when the component is unmounted
      document.body.removeChild(addScript);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element" className=""></div>
    </div>
  );
}
