function titleRandomiser() {
  switch (Math.floor(Math.random() * Math.floor(25))) {
    default:
      txt = 'Pythogon';
      break;
    case 1:
      txt = 'Sub to Pewds'
      break;
    case 18:
      txt = 'Pytec 2: Electric Boogaloo'
      break;
  }
  document.getElementById('titlechanger').innerHTML = txt;
}
