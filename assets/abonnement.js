window.onload = function() {
    // Récupérer les éléments des images du DOM
    var imgA = document.getElementById('imgA');
    var imgC = document.getElementById('imgC');
    var imgD = document.getElementById('imgD');
    
    // Ajouter un gestionnaire d'événement pour la fenêtre de défilement
    window.addEventListener('scroll', function() {
      // Calculer la distance de défilement depuis le haut de la page
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      // Si l'image A est visible sur la page
      if (scrollTop < imgA.offsetTop + imgA.offsetHeight) {
        // Changer l'opacité de l'image A pour la faire apparaître
        var opacityA = ((scrollTop - imgA.offsetTop) / imgA.offsetHeight ) + 1;
        imgA.style.opacity = opacityA;
        console.log(opacityA);
      }
  
      // Si l'image C est visible sur la page
      if (scrollTop < imgC.offsetTop + imgC.offsetHeight) {
        // Changer l'opacité de l'image C pour la faire apparaître
        var opacityC = ((scrollTop - imgC.offsetTop) / imgC.offsetHeight ) + 1;
        imgC.style.opacity = opacityC;
        console.log(opacityC);
      }
  
      // Si l'image D est visible sur la page
      if (scrollTop < imgD.offsetTop + imgD.offsetHeight) {
        // Changer l'opacité de l'image D pour la faire apparaître
        var opacityD = ((scrollTop - imgD.offsetTop) / imgD.offsetHeight ) + 1;
        imgD.style.opacity = opacityD;
        console.log(opacityD);
      }
    });
  }
  
  // window.addEventListener("scroll", function() {
  //   var navbar = document.getElementById("navbar");
  
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("fixe");
  //     }else{
  //       navbar.classList.remove("fixe");
  //     }
  // });
  
  window.addEventListener("scroll", function() {
    var header = document.getElementById("hheader")
  
    if (window.scrollY < 50) {
      console.log(header)
      header.classList.remove("translate")
      }else{
      header.classList.add("translate")
      }
  });
  