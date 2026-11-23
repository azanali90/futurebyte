"use client";

import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const container = document.getElementById("adsterra-banner");
    if (!container) return;

    const optionsScript = document.createElement("script");
    optionsScript.text = `
      var atOptions = {
        key: "7d67cbc469545448d8161991a17b2b88",
        format: "iframe",
        height: 60,
        width: 468,
        params: {}
      };
    `;

    const adScript = document.createElement("script");
    adScript.src =
      "https://bicea.org/22/7d67cbc469545448d8161991a17b2b88";
    adScript.async = true;

    container.appendChild(optionsScript);
    container.appendChild(adScript);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="adsterra-banner"
      style={{
        width: "100%",
        maxWidth: "468px",
        minHeight: "60px",
        margin: "24px auto",
        overflow: "hidden",
      }}
    />
  );
}
