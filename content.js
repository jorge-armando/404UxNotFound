(async () => {
  const { customScript } = await chrome.storage.local.get("customScript");

  if (customScript) {
    const script = document.createElement("script");
    script.textContent = customScript;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
  }
})();
