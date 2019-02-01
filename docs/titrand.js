function titleRandomiser() {
  switch (Math.floor(Math.random() * Math.floor(25))) {
    default:
      txt = 'Pythogon Technologies';
      break;
    case 1:
      txt = 'Sub to Pewds'
      document.getElementById('logo').style.right = "25vw";
      document.getElementById('logo').style.marginBottom = "-12vw";
      break;
    case 18:
      txt = 'Pytec 2: Electric Boogaloo'
      break;
  }
  document.getElementById('titlechanger').innerHTML = txt;
}
