function titleRandomiser() {
  switch (Math.floor(Math.random() * Math.floor(100))) {
    default:
      response = 'Pythogon';
      break;
    case 1:
      response = 'Sub to Pewds'
      break;
    case 18:
      response = 'Pytec 2: Electric Boogaloo'
      break;
  }
  document.getElementById('titlechanger').innerHTML = response;
}
