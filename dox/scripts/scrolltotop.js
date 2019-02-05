//literally just copied from w3schools ;-;
    window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backtotop").style.opacity = "100";
    document.getElementById("backtotop").style.cursor = "pointer";
  } else {
    document.getElementById("backtotop").style.opacity = "0";
    document.getElementById("backtotop").style.cursor = "default";
  }
  }
