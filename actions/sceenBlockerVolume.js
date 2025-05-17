async function startMicVolumeDetection() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);

    function getVolume() {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        const value = dataArray[i] - 128;
        sum += value * value;
      }
      const rms = Math.sqrt(sum / bufferLength);
      const volume = Math.min(100, Math.round((rms / 128) * 100));

      document.querySelector(".screen-blocker").style.opacity =
        1 - (volume * 6) / 100;

      console.log("Volume:", 1 - (volume * 6) / 100);

      setTimeout(() => {
        getVolume();
      }, 200);
    }

    getVolume();
  } catch (err) {
    console.error("Erro ao acessar o microfone:", err);
    document.getElementById("volume").textContent =
      "Erro ao acessar o microfone.";
  }
}

app.addAction("sceenBlockerVolume", () => {
  const screenBlocker = document.createElement("div");
  screenBlocker.className = "screen-blocker";
  screenBlocker.style.display = "block";
  screenBlocker.style.position = "fixed";
  screenBlocker.style.top = "0";
  screenBlocker.style.left = "0";
  screenBlocker.style.backgroundColor = "#000000";
  screenBlocker.style.opacity = "1";
  screenBlocker.style.zIndex = "999999";
  screenBlocker.style.width = "100%";
  screenBlocker.style.height = "100%";
  screenBlocker.style.transition = "0.1s";
  screenBlocker.style.userSelect = "none";

  document.body.appendChild(screenBlocker);
  console.log("ddd");
  startMicVolumeDetection();
});
