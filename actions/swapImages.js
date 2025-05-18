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
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXY9Uupx4QbaP1MHd_tj3NjoJzOR7Y5hi1g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXvVP28l8_7RMSK1ovrM6NfP2pmuGTjm1wA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDDh2xWqqWHifQ6xdjTYjU4YPSfLsTt1bDQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0cyBwW7U1WIoJgulNHCkPrKrh1YpHw_7gg&s',
  'https://preview.redd.it/144p-engra%C3%A7ado-v0-qsvvvgpqc6wd1.png?width=720&format=png&auto=webp&s=e9a62437a782fff580138b5d0613120be6b11480',
  'https://i.pinimg.com/236x/b1/c2/16/b1c2169008bcd54a0eee6a6d7e0b3a24.jpg'
];
