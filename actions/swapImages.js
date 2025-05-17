function swapImages(randomImages) {
  const imgs = document.querySelectorAll('img');
  if (!randomImages || randomImages.length === 0) {
    console.warn('Nenhuma imagem para substituir foi passada.');
    return;
  }
  
  imgs.forEach(img => {
    // Escolhe uma imagem aleatória da lista para substituir
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    const newSrc = randomImages[randomIndex];
    
    // Troca o src da imagem original
    img.src = newSrc;
  });
}

// Exemplos de URLs de memes/imagens engraçadas para substituir
const memes = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXY9Uupx4QbaP1MHd_tj3NjoJzOR7Y5hi1g&s'];
