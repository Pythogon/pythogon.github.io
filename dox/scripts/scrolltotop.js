//literally just copied from w3schools ;-;
    window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backtotop").style.opacity = "100";
  } else {
    document.getElementById("backtotop").style.opacity = "0";
  }
  }
