document.addEventListener("DOMContentLoaded", async () => {
  const { customScript } = await chrome.storage.local.get("customScript");
  document.getElementById("scriptInput").value = customScript || "";

  document.getElementById("save").addEventListener("click", async () => {
    const value = document.getElementById("scriptInput").value;
    await chrome.storage.local.set({ customScript: value });
    document.getElementById("status").textContent = "Saved!";
    setTimeout(() => {
      document.getElementById("status").textContent = "";
    }, 1500);
  });
});
