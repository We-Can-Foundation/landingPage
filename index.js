function scrollFunction() {
    let header = document.getElementById("header");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = "rgba(255,255,255,0.95)";
      header.style.boxShadow = "1px 2px 10px rgba(0,0,0,0.1)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  }

window.onscroll = function() {scrollFunction()};


