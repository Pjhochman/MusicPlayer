const loginButton = document.getElementById('red');
const form = document.querySelector('form');
const mediaQuery = window.matchMedia('(max-width: 850px)');
const logoContainer = document.getElementById('logoContainer');

form.addEventListener('submit', (e) => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  window.localStorage.setItem('userEmail', email);
  e.preventDefault();

  // console.log(email);
  fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      window.location.href = '/products.html';
    });
});

//animation
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1));
});

if (mediaQuery.matches) {
  function isRunningFullscreen() {
    return window.matchMedia('(display-mode: fullscreen)').matches;
  }

  if (isRunningFullscreen()) {
    openFullScreen.style.display = 'none';
    document.getElementById('addToHomeScreenIos').style.display =
      'none';
    form.style.display = 'flex';
    logoContainer.style.display = 'flex';
  } else {
    let winNav = window.navigator;
    let isIOSChrome = winNav.userAgent.match('CriOS');

    if (isIOSChrome) {
      openFullScreen.style.display = 'flex';
      openFullScreen.innerHTML =
        'No support for Chrome on iPhone.<br><br>Open website in Safari';
      form.style.display = 'none';
      logoContainer.style.display = 'none';
      bandLogo.style.display = 'none';
    } else if (
      /iphone|ipod|ipad/gi.test(navigator.platform) &&
      /Safari/i.test(navigator.appVersion)
    ) {
      logoContainer.style.display = 'none';
      bandLogo.style.display = 'none';
      document.getElementById('addToHomeScreenIos').style.display =
        'flex';
      form.style.display = 'none';
    } else {
      openFullScreen.style.display = 'flex';
      form.style.display = 'none';
      logoContainer.style.display = 'none';
      bandLogo.style.display = 'none';
    }
  }
}

let welcomeText = document.getElementById('userMessage');

function changeText() {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    welcomeText.innerHTML = `Good Morning,`;
  } else if (hour >= 12 && hour < 18) {
    welcomeText.innerHTML = `Good Afternoon,`;
  } else if (hour >= 18) {
    welcomeText.innerHTML = `Good Evening,`;
  }
}
changeText();

// Registering our Service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '/' });
}
