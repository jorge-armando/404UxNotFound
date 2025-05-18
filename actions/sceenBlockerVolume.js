function getOpacityInfo(input) {
  if (input < 0 || input > 16) {
    return "Erro: o valor deve estar entre 0 e 16.";
  }

  const opacity = parseFloat(((16 - input) / 16).toFixed(2));

  return opacity;
}

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
      let parsedVolume = 1 - (volume * 5) / 100;

      if (volume >= 20) {
        console.log("eee");
        document.querySelector(".screen-blocker").style.opacity = 0;
        setTimeout(() => {
          getVolume();
        }, 5000);
      } else if (volume >= 4 && volume < 20) {
        document.querySelector(".screen-blocker").style.opacity = parsedVolume;
        setTimeout(() => {
          getVolume();
        }, 50);
      } else {
        document.querySelector(".screen-blocker").style.opacity = 1;
        setTimeout(() => {
          getVolume();
        }, 50);
      }
    }

    getVolume();
  } catch (err) {
    console.error("Erro ao acessar o microfone:", err);
    document.getElementById("volume").textContent =
      "Erro ao acessar o microfone.";
  }
}

function screenBlocker() {
  const screenBlocker = document.createElement("div");
  screenBlocker.className = "screen-blocker";
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
  screenBlocker.style.display = "flex";
  screenBlocker.style.justifyContent = "center";
  screenBlocker.style.alignItems = "center";

  const message = document.createElement("p");
  message.textContent = "Grite para ver o website";
  message.style.fontSize = "40px";
  message.style.fontFamily = "Arial, sans-serif";
  message.style.fontWeight = "bold";
  message.style.color = "#ffffff";

  screenBlocker.appendChild(message);

  document.body.appendChild(screenBlocker);
  startMicVolumeDetection();
}
