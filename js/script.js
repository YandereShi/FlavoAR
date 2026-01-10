const images = [
    "img/Ar.jpg",
    "img/Ar2.jpg",
    "img/Ar3.jpg"
  ];

  let currentIndex = 0;
  const arImage = document.getElementById("ArImage");

  setInterval(() => {
    arImage.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      arImage.src = images[currentIndex];
      arImage.style.opacity = 1;
    }, 500);
  }, 3000);