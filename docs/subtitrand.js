function strand() {
  switch (Math.floor(Math.random() * Math.floor(25))) {
    default:
      txt = 'Est. 2017-11-09';
      break;
    case 1:
      txt = 'Subscribe to Pewdiepie'
      break;
    case 2:
      txt = 'Pytec 2: Electric Boogaloo'
      break;
  }
  document.getElementById('stc').innerHTML = txt;
}
