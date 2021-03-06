/*
       _           _   ____  _ _ _       _    _ 
      | |         | | |  _ \(_) | |     | |  | |
      | |_   _ ___| |_| |_) |_| | |_   _| |__| |
  _   | | | | / __| __|  _ <| | | | | | |  __  |
 | |__| | |_| \__ \ |_| |_) | | | | |_| | |  | |
  \____/ \__,_|___/\__|____/|_|_|_|\__, |_|  |_|
                                    __/ |       
                                   |___/        
*/

// Konami code
const onKonamiCode = (cb) => { //https://stackoverflow.com/a/45576888
  var input = '';
  var key = '38384040373937396665';
  document.addEventListener('keydown', (e) => {
    input += ('' + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ('' + e.keyCode);
  });
}

// Easter Egg
onKonamiCode(() => {
  var audio = new Audio('assets/audio/kirbe.ogg');
  audio.play();
  alert('konami code activated, click ok to enable kirbe mode');
  document.body.style.background = "url('assets/img/kirby.jpg')";
  document.body.style.color = 'white';
  document.title = 'kirbe mode enabled';
  document.getElementById('icon').src = 'assets/img/kirby.gif';
  document.getElementById('titletext').innerHTML = 'Kirby <3';
  document.getElementById('kirby1').innerHTML = "Enjoyed this Easter egg? Star this repo on GitHub <a href='https://github.com/ohlookitsderpy/derpyenterprises.org' target=_blank'>here</a>!";
  document.getElementById('kirby2').innerHTML = 'The page will automatically refresh once the song is over!';
  document.getElementById('content').style.display = 'none';
  audio.onended = () => { location.reload(); };
});

// Wallpapers
const getCurrentSeason = () => { //https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  var now = new Date();
  var currentYear = now.getFullYear();
  
  if (now < new Date(currentYear, 2, 1))  return 'winter';
  if (now < new Date(currentYear, 5, 1))  return 'spring';
  if (now < new Date(currentYear, 8, 1))  return 'summer';
  if (now < new Date(currentYear, 11, 1)) return 'autumn';
  return 'winter';
};

switch (getCurrentSeason()) { //https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  case 'winter':
    document.body.style.background = "url('assets/img/seasons/winter.jpg')";
    break;
  case 'spring':
    document.body.style.background = "url('assets/img/seasons/spring.jpg')";
    break;
  case 'summer':
    document.body.style.background = "url('assets/img/seasons/summer.jpg')";
    break;
  case 'autumn':
    document.body.style.background = "url('assets/img/seasons/autumn.jpg')";
    document.getElementById('titletext').setAttribute('style', 'color: white !important;');
    document.getElementById('gang').setAttribute('style', 'color: white !important;');
    break;
}
