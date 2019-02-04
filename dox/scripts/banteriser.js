ans = ''
function banter() {
  switch (Math.floor(Math.random() * 10 + 1)) {
    default:
      ans = 'banter1'
      break;
    case 6: case 7:
      ans = 'banter2';
      break;
    case 8: case 9:
      ans = 'banter0'
      break;
  }
  document.getElementById('bant').innerHTML = '<img src="images/' + ans + '.svg" id="bantimg">'; 
}
