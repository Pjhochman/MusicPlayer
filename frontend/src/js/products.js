//------------------------------------------- AWS bucket config ---------------------------------------------
const bucketName = 'kaernvirke';
const bucketRegion = 'eu-north-1';
const IdentityPoolId =
  'eu-north-1:290f5a33-7a85-4f4e-9f23-048d74a94f92';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
});
//------------------------------------------- AWS bucket config ---------------------------------------------
//------------------------------------------------- Flags ---------------------------------------------------
let isPlayingFlag = false;
let liveRecordingFlag = false;
let homeRecordingFlag = false;
let studioRehearsalFlag = false;
let originalTrackFlag = false;
let changeBackFlag = false;
let alreadyExecutedFlag = false;
let dblClickFlag = false;
let playPauseFlag = false;
let darkModeFlag = false;
let wrapperflag = false;
let toggleActiveFlag = false;
let sortButtonFlag = false;
let msgDeleteflag = false;
//------------------------------------------------- Flags ---------------------------------------------------
//--------------------------------------------- Dynamic indexes ---------------------------------------------
let imageOrderIndex = 0;
let songIndex = 0;
let imageFooterIndex = 0;
let coverIndex = 0;
let modifyIndex = 0;
let infoNameIndex = 0;
let infoArtistIndex = 0;
let playContainerIndex = 0;
let jsonIndex = 0;
let commentIndex = 0;
let nameIndex = 0;
let artistIndex = 0;
let dropdownIndex = 0;
let liveIndex = 0;
let itemIndex = 0;
let generalIndex = 0;
let nextIndex = 0;
let previousIndex = 0;
let productContainerIndex = 0;
let previousReversedIndex = 0;
let nextReversedIndex = 0;
let trackIndex = 0;
let fibindex = 0;
let playMobileIndex = 0;
let productIndex = 0;
let musicIndex = 0;
let nowPlayingIndex = 0;
let controlIndex = 0;
let buttonIndex = 0;
let imageIndex = 0;
let ellipticIndex = 0;
let footerIndex = 0;
let indexTest = 0;
let playIndex = 0;
let searchOption = 0;
//--------------------------------------------- Dynamic indexes ---------------------------------------------
//------------------------------------------------- Arrays --------------------------------------------------
let chatArray = [];
let recentNameArray = [];
let recentArtistArray = [];
let myImagesArray = [];
let jsonArray = [];
let noTracksVisibleArray = [];
let liveArray = [];
let generalArray = [];
let changebackArray = [];
let trackIndexArray = [];
let previousStateArray = [];
let previousGlobalTrackArray = [];
let previousGlobalTrackArray2 = [];
let previousPlayHandlerArray = [];
let trackListArray = [];
let playListArray = [];
//------------------------------------------------- Arrays --------------------------------------------------
//--------------------------------------------- Global variables --------------------------------------------
let updateTimer;
let index;
let playingElement;
let mobileEventIsTrusted;
let filePath;
let fileName;
let filters;
let filter;
let timeToken;
let userName;
let profilePic;
let userId;
let split;
let clock4;
let trackCount;
let falseIndex;
let trueIndex;
let strTime;
let songlistInfo;
let setTime4;
let preTime4;
let clockDateValue;
let originalArray;
let studioArray;
let homeArray;
let latestValue;
let clonePlayPause;
let previousPlayButtonIndex;
let postResponse;
//pubnub variables - subject to change ↓
let t4;
let c4;
//pubnub variables - subject to change ↑
let i;
//cloneNode variables - subject to change ↓
let a;
let s_prime;
let i_prime;
let a_prime;
let t_prime;
//cloneNode variables - subject to change ↑
let previousValue;
let currentValue;
let globalVariable;
let globalTrackList;
let previousTrackIndex;
let activeFilterTracks;
let filterToSearch;
let ellipticImage;
let ellipticText;
let ellipticArtist;
let ellipticTitle;
let ellipticCover;
let ellipticNowPlaying;
let ellipticModify;
let ellipticModifyPrevious;
let ellipticModifyCurrent;
let ellipticDropdown;
//--------------------------------------------- Global variables --------------------------------------------
//--------------------------------------------- getElementById's --------------------------------------------
const d = document;

const progressBar = d.getElementById('progressBar');
const upcomingGigsTitle = d.getElementById('upcomingGigsTitle');
const upcomingGigs = d.getElementById('upcomingGigs');
const agendaTitle = d.getElementById('agenda');
const practiceTitle = d.getElementById('practiceTitle');
const blur = d.getElementById('blur');
const mediaQuery = window.matchMedia('(max-width: 800px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 900px)');
const recentlyAddedWrapper = d.getElementById('recentlyAddedWrapper');
const ellipticFooter = d.getElementById('ellipticFooter');
const input = d.getElementById('myInput');
const inputWrapper = d.getElementById('inputWrapper');
const playLists = d.getElementById('playLists');
const sortItems = d.getElementsByClassName('sortItems');
const userSettings = d.getElementById('userSettings');
const userPictureWrapper = d.getElementById('userPictureWrapper');
const infoSearch = d.getElementById('infoSearch');
const sendButton = d.getElementById('sendButton');
const line1 = d.getElementsByClassName('line1');
const portraitText = d.getElementById('portraitText');
const deletePrompt = d.getElementById('deletePrompt');
const leavePrompt = d.getElementById('leavePrompt');
const leaveDescription = d.getElementsByClassName('leaveDescription');
const okDelete = d.getElementById('okDelete');
const closeIcon = d.getElementById('closeIcon');
const infoForm = d.getElementById('infoForm');
const clock4Target = d.getElementById('clock4');
const sortButton = d.getElementById('sortButton');
const sortButtonIcon = d.getElementById('navIconify8');
const sortButtonText = d.getElementById('sortButtonText');
const onTheAgenda = d.getElementById('onTheAgenda');
const gigs = d.getElementById('upcomingGigs');
const bandPractice = d.getElementById('bandPractice');
const timeContainer = d.getElementById('timeContainer');
const songCountNumber = d.getElementById('songCountNumber');
const suggestion = d.getElementById('suggestion');
const tracks = d.getElementsByClassName('products');
const playlistInfo = d.getElementById('playlistInfo');
const successAlert = d.getElementById('successAlert');
const toggleState = d.querySelector('.toggle-state');
const submitButton = d.getElementById('submitButton');
const lis = d.getElementsByTagName('li');
const toggle = d.getElementById('toggle');
const indicator = d.getElementById('indicator');
const bandIcon = d.getElementById('bandIcon');
const navbarText = d.getElementById('navbar-text');
const startBuilding = d.getElementById('startBuilding');
const beforeWeCanUse = d.getElementById('beforeWeCanUse');
const userWrapper = d.getElementById('userWrapper');
const homePageWrapper = d.getElementById('homepage-wrapper');
const dynamicDiv = d.getElementById('dynamicDiv');
const wordLetterK = d.getElementById('wordLetterK');
const wordLetterA = d.getElementById('wordLetterA');
const wordLetterE = d.getElementById('wordLetterE');
const wordLetterR = d.getElementById('wordLetterR');
const wordLetterN = d.getElementById('wordLetterN');
const wordLetterV = d.getElementById('wordLetterV');
const wordLetterI = d.getElementById('wordLetterI');
const wordLetterRlast = d.getElementById('wordLetterRlast');
const wordLetterKlast = d.getElementById('wordLetterKlast');
const wordLetterElast = d.getElementById('wordLetterElast');
const cancelSearch = d.getElementById('cancelSearch');
const cancelProceed = d.getElementById('cancelProceed');
const okProceed = d.getElementById('okProceed');
const noSongsYet = d.getElementById('noSongsYet');
const noResults = d.getElementById('noResults');
const noResultsTips = d.getElementById('noResultsTips');
const resultContainer = d.getElementById('resultContainer');
const playlistWrapper = d.getElementById('playlistWrapper');
const allSongs = d.getElementById('allSongs');
const liveRecording = d.getElementById('liveRecording');
const homeRecording = d.getElementById('homeRecording');
const studioRehearsal = d.getElementById('studioRehearsal');
const originalTrack = d.getElementById('originalTrack');
const chatWrapper = d.getElementById('chatWrapper');
const playMobile = d.getElementById('playMobile');
const pauseMobile = d.getElementById('pauseMobile');
const clockElement4 = d.getElementById('clock4');
const date4 = d.getElementById('date4');
const navbar = d.getElementById('navbar');
const mobileSearch = d.getElementById('mobileSearch');
const home = d.getElementById('home');
const footer = d.getElementById('footer');
const playPause = d.getElementById('playPause');
const liveRecordingTracks = d.getElementById('liveRecordingTracks');
const homeRecordingTracks = d.getElementById('homeRecordingTracks');
const awsUpload = d.getElementById('awsUpload');
const originalTracks = d.getElementById('originalTracks');
const playlistTitle = d.getElementById('playlistTitle');
const filler = d.getElementById('filler');
const toggleEvent = d.getElementById('toggle');
const songForm = d.querySelector('.songForm');
const songForm2 = d.querySelector('.songForm2');
const nameTick = d.getElementById('name');
const commentTick = d.getElementById('comment');
const keyTick = d.getElementById('key');
const introTick = d.getElementById('intro');
const verseTick = d.getElementById('verse');
const bridgeTick = d.getElementById('bridge');
const chorusTick = d.getElementById('chorus');
const outroTick = d.getElementById('outro');
const artistTick = d.getElementById('artist');
const fileTick = d.getElementById('file');
const clockDate4 = d.getElementById('clockDate4');
const clockTime4 = d.getElementById('clockTime4');
const invalidDate = d.getElementById('invalidDate');
const infoReturn = d.getElementById('infoReturn');
const returnIcon = d.getElementById('returnIcon');
const infoOptions = d.getElementById('infoOptions');
const recordHole = d.getElementById('recordHole');
const recordContainer = d.getElementById('recordContainer');
const expandAgendaMobile1 = d.getElementById('expandAgendaMobile1');
const agendaDescription = d.getElementById('agendaDescription');
const practiceDescription = d.getElementById('date4');
const expandAgendaMobile2 = d.getElementById('expandAgendaMobile2');
const bandInfoContainer = d.getElementById('bandInfoContainer');
const bandInfoWrapper = d.getElementById('bandInfoWrapper');
const openFullScreen = d.getElementById('openFullScreen');
const userMessage = d.getElementById('userMessage');
const bandLogo = d.getElementById('bandLogo');
const links = d.getElementById('links');
const chatBox = d.getElementById('chatBox');
const chatList = d.getElementById('chatList');
const agendaWrapper = d.getElementById('agendaWrapper');
const gigWrapper = d.getElementById('gigWrapper');
const homePageWrappersongs = d.getElementById('songs');
const chat = d.getElementById('chat');
const setlist = d.getElementById('setlist');
const addSong = d.getElementById('addSong');
const add = d.getElementById('add');
const songCountText = d.getElementById('songCount');
const songCountContainer = d.getElementById('songCountContainer');
const sortWrapper = d.getElementById('sortWrapper');
const toggleDeletePopupForm = d.getElementById('deleteForm');
const togglePopupFormContainer = d.getElementById(
  'deleteFormContainer',
);
const toggleAddSongContainer = d.getElementById(
  'toggleAddSongContainer',
);
const bandIconbandIconContainer1 = d.getElementById(
  'bandIconContainer1',
);
const playlistTitleContainer = d.getElementById(
  'playlistTitleContainer',
);
const upcomingGigsDescription = d.getElementById(
  'upcomingGigsDescription',
);
const submitErrorMessageContainer = d.getElementById(
  'submitErrorMessageContainer',
);
const searchButtonContainer = d.getElementById(
  'searchButtonContainer',
);
const studioRehearsalTracks = d.getElementById(
  'studioRehearsalTracks',
);
const elem = d.documentElement;
let toggling = d.getElementById('toggler');

//--------------------------------------------- getElementById's --------------------------------------------
// ----------------------------------------- Mobile login animation -----------------------------------------
if (mediaQuery.matches) {
  bandLogo.style.animationDuration = '0.6s';
  setTimeout(function () {
    bandLogo.className = 'animate__animated animate__pulse';
  }, 300);
  bandLogo.addEventListener('animationend', () => {
    bandLogo.style.animationDuration = '0.3s';
    setTimeout(function () {
      bandLogo.className = 'animate__animated animate__fadeOut';
    }, 200);
    setTimeout(function () {
      bandLogo.style.display = 'none';
    }, 1000);
  });
}
// ----------------------------------------- Mobile login animation -----------------------------------------
// ----------------------------------------- Wait for images to load ----------------------------------------

//Wait for images to load.
let imgs = d.images,
  len = imgs.length,
  counter = 0;

[].forEach.call(imgs, function (img) {
  if (img.complete) incrementCounter();
  else img.addEventListener('load', incrementCounter, false);
});
// ----------------------------------------- Wait for images to load ----------------------------------------
// -------------------------------------- DISPLAY CORRECT HREF ON LOAD --------------------------------------
function incrementCounter() {
  counter++;
  if (counter === len) {
    if ((window.location.href = '/products.html#home')) {
      if (mediaQuery.matches) {
        userMessage.className = '';
        //Animations
        footer.style.animationDelay = '2s';
        links.style.animationDelay = '2s';
        footer.style.animationDelay = '2s';
        userWrapper.style.animationDelay = '0s';
        homePageWrapper.style.animationDelay = '2s';
        footer.style.animationDuration = '0.5s';

        if (openFullScreen.style.display !== 'flex') {
          footer.style.visibility = 'visible';
          links.style.visibility = 'visible';
        }
        setTimeout(function () {
          userWrapper.style.display = 'flex';
          userWrapper.style.animationDuration = '0.5s';
          userWrapper.className =
            'animate__animated animate__slideInDown';
        }, 2000);

        links.className = 'animate__animated animate__fadeIn';

        if (!darkModeFlag) {
          footer.className = 'animate__animated animate__slideInUp';
        } else if (darkModeFlag) {
          footer.className =
            'animate__animated animate__slideInUp dark-mode';
        }
      } else {
        homePageWrapper.style.animationDelay = '1s';
        navbar.style.animationDelay = '1s';
      }
      homePageWrapper.style.visibility = 'visible';
      homePageWrapper.className = 'animate__animated animate__fadeIn';
      navbar.style.visibility = 'visible';
      if (darkModeFlag) {
        navbar.className =
          'animate__animated animate__fadeIn dark-mode';
      } else if (!darkModeFlag) {
        navbar.className = 'animate__animated animate__fadeIn';
      }
    } else if ((window.location.href = '/products.html#songs')) {
      dynamicDiv.style.display = 'flex';
      homePageWrapper.style.display = 'none';
    }
  }
}
// -------------------------------------- DISPLAY CORRECT HREF ON LOAD --------------------------------------
// -------------------------------------- UPDATE POST REQ PROGRESS BAR --------------------------------------
function updateProgressBar() {
  let percentage = 0;
  let curr = progressBar.value;
  let update = setInterval(function () {
    if (curr > percentage) {
      clearInterval(update);
    }
    progressBar.value = curr++;
  }, 0);
}
updateProgressBar();
// -------------------------------------- UPDATE POST REQ PROGRESS BAR --------------------------------------
// ----------------------------------------- FLIPCLOCK PARAMETERS -------------------------------------------
let year = new Date().getFullYear();
clockDate4.setAttribute('min', year + '-01-01');
clockDate4.setAttribute('max', year + '-12-31');

function practiceTime4(t4) {
  clock4 = $('#clock4').FlipClock(t4, {
    clockFace: 'HourlyCounter',
    countdown: false,
    showSeconds: false,
  });
}
practiceTime4(t4);

clockElement4.addEventListener('click', function () {
  clockTime4.style.display = 'flex';
  clockTime4.focus();
});

date4.addEventListener('click', function () {
  clockDate4.style.display = 'flex';
  clockDate4.focus();
});

function time4(c4) {
  let countup4 = setInterval(function () {
    if (clock4.getTime().time === c4) {
      clock4.stop();
      clearInterval(countup4);
    }
  }, 0);
}
time4(c4);

let date = new Date();
let monthDay =
  date.toLocaleString('default', { month: 'short' }) +
  ' ' +
  date.getDate();

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
formatAMPM(date);
let postDate = monthDay + ', ' + strTime;
// ----------------------------------------- FLIPCLOCK PARAMETERS -------------------------------------------
// ------------------------------------------ PUBNUB PARAMETERS ---------------------------------------------
//check for current user from login.js
let userEmail = localStorage.getItem('userEmail');
// Revisit - possibly loop through an array (only one userName is defined at a time)
if (userEmail === 'alohadanne@hotmail.com') {
  userName = 'Daniel';
  userId = 'publisher4';
  profilePic = 'https://i.ibb.co/FhVMM53/bass.png';
}
if (userEmail === 'maxo@maxo.se') {
  userName = 'Markus';
  userId = 'publisher3';
  profilePic = 'https://i.ibb.co/X8YMcz1/Ray.png';
}
if (userEmail === 'nicolas.steiner.p@gmail.com') {
  userName = 'Nicolas';
  userId = 'publisher2';
  profilePic = 'https://i.ibb.co/HVmTBPX/Jimi-Hendrix.png';
}
if (
  userEmail === 'assessor@email.com' ||
  userEmail === 'helloworld@email.com' ||
  userEmail === 'hello@email.com' ||
  userEmail === 'pip@email.com' ||
  userEmail === 'hellosoundtrap@email.com' ||
  userEmail === 'hellospotify@email.com'
) {
  userName = 'Peter';
  userId = 'publisher1';
  profilePic = 'https://i.ibb.co/bJzz3n3/Bill-Evans.png';
}

function pubNub() {
  let pubnub = new PubNub({
    publishKey: process.env.PUB_PUBLISH,
    subscribeKey: process.env.PUB_SUBSCRIBE,
  });
  function $(id) {
    return d.getElementById(id);
  }

  let chatInput = $('chatInput'),
    channel = 'demo';

  if (mediaQuery.matches) {
    chatInput.addEventListener('focus', function () {
      navbar.style.display = 'none';
      inputWrapper.style.bottom = '1vh';
      chatBox.style.height = '100vh';
      chatList.style.height = '100%';
    });
    chatInput.addEventListener('blur', function () {
      links.classList = '';
      navbar.style.display = 'flex';
      inputWrapper.style.bottom = '11vh';
      chatBox.style.height = '100vh';
      chatList.style.height = '79vh';
    });
  }
  pubnub.addListener({
    message: function (obj) {
      let tooltip = d.createElement('button');
      let deleteMsgContainer = d.createElement('div');
      let deleteMessage = d.createElement('button');
      let publisher = d.createElement('div');
      let liContainer = d.createElement('div');
      let li = d.createElement('li');
      let iconContainer = d.createElement('div');
      let userIcon = d.createElement('img');
      let profileContainer = d.createElement('div');
      let messageContainer = d.createElement('div');
      let messageDate = d.createElement('p');

      liContainer.id = 'liContainer';
      liContainer.className = 'li-container';
      iconContainer.id = 'chatIconContainer';
      messageDate.id = 'messageDate';
      deleteMessage.id = 'deleteMessage';
      deleteMessage.className = 'delete-message';

      deleteMsgContainer.id = 'deleteMsgContainer';
      tooltip.id = 'chatTooltip';
      publisher.id = 'publisher';
      publisher.className = 'nameOfPublisher';
      profileContainer.className = 'profileContainer';
      iconContainer.className = 'chat-icon-container';
      userIcon.className = 'userIcon';

      messageDate.innerHTML = obj.message[4];
      tooltip.innerHTML = '<i class="fas fa-ellipsis-v"></i>';

      deleteMessage.innerHTML =
        '<img height="20px" width="20px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MiAxMmgtMjRjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAyaDI0djI0aC0yMmMtLjUxNCAwLTEuMDA3LjE5Ny0xLjM3OS41NTJsLTEwLjYyMSAxMC4xMTF2LTguNjYzYzAtMS4xMDQtLjg5Ni0yLTItMmgtNHYtMTJjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAydjEyYzAgMi4yMDYgMS43OTQgNCA0IDRoMnY4Ljk5OGMwIDEuMTg2LjY2OSAyLjIzIDEuNzQ3IDIuNzI2LjQwOC4xODguODM3LjI3OSAxLjI2Mi4yNzkuNjk4IDAgMS4zODUtLjI0OCAxLjk0NS0uNzI5LjAyNi0uMDIyLjA1Mi0uMDQ1LjA3Ny0uMDY5bDExLjc2OS0xMS4yMDVoMjEuMmMyLjIwNiAwIDQtMS43OTQgNC00di0yNGMwLTIuMjA2LTEuNzk0LTQtNC00eiIvPjxwYXRoIGQ9Im04LjU4NiAyMi40MTRjLjM5LjM5MS45MDIuNTg2IDEuNDE0LjU4NnMxLjAyNC0uMTk1IDEuNDE0LS41ODZsNC4wODYtNC4wODYgNC4wODYgNC4wODZjLjM5LjM5MS45MDIuNTg2IDEuNDE0LjU4NnMxLjAyNC0uMTk1IDEuNDE0LS41ODZjLjc4MS0uNzgxLjc4MS0yLjA0NyAwLTIuODI4bC00LjA4Ni00LjA4NiA0LjA4Ni00LjA4NmMuNzgxLS43ODEuNzgxLTIuMDQ3IDAtMi44MjgtLjc4LS43ODEtMi4wNDgtLjc4MS0yLjgyOCAwbC00LjA4NiA0LjA4Ni00LjA4Ni00LjA4NmMtLjc4LS43ODEtMi4wNDgtLjc4MS0yLjgyOCAwLS43ODEuNzgxLS43ODEgMi4wNDcgMCAyLjgyOGw0LjA4NiA0LjA4Ni00LjA4NiA0LjA4NmMtLjc4MS43ODEtLjc4MSAyLjA0NyAwIDIuODI4eiIvPjwvc3ZnPg==" />';

      messageContainer.className =
        'messageContainer' + ' ' + obj.message[3];
      messageContainer.id = obj.timetoken;
      li.id = obj.timetoken;

      publisher.textContent = obj.message[0];
      li.textContent = obj.message[1];
      userIcon.setAttribute('src', obj.message[2]);
      li.className = publisher.innerText;
      tooltip.className = obj.message[3] + '-tooltip';

      chatList.appendChild(messageContainer);
      messageContainer.appendChild(tooltip);
      messageContainer.appendChild(profileContainer);
      messageContainer.appendChild(liContainer);
      liContainer.appendChild(li);
      liContainer.appendChild(messageDate);
      profileContainer.appendChild(publisher);
      profileContainer.appendChild(iconContainer);
      iconContainer.appendChild(userIcon);

      tooltip.appendChild(deleteMsgContainer);
      deleteMsgContainer.appendChild(deleteMessage);

      let publisher1 = d.getElementsByClassName('publisher1');
      let publisher2 = d.getElementsByClassName('publisher2');
      let publisher3 = d.getElementsByClassName('publisher3');
      let publisher4 = d.getElementsByClassName('publisher4');

      let publisher1Tooltip = d.getElementsByClassName(
        'publisher1-tooltip',
      );
      let publisher2Tooltip = d.getElementsByClassName(
        'publisher2-tooltip',
      );
      let publisher3Tooltip = d.getElementsByClassName(
        'publisher3-tooltip',
      );
      let publisher4Tooltip = d.getElementsByClassName(
        'publisher4-tooltip',
      );

      if (userName === 'Peter') {
        setTimeout(function () {
          for (let i = 0; i < publisher2.length; i++) {
            publisher2[i].style.flexDirection = 'row';
            publisher2[i].style.alignItems = 'flex-start';
            publisher2Tooltip[i].style.display = 'none';
            publisher2[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher3.length; i++) {
            publisher3[i].style.flexDirection = 'row';
            publisher3[i].style.alignItems = 'flex-start';
            publisher3Tooltip[i].style.display = 'none';
            publisher3[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher4.length; i++) {
            publisher4[i].style.flexDirection = 'row';
            publisher4[i].style.alignItems = 'flex-start';
            publisher4Tooltip[i].style.display = 'none';
            publisher4[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher1.length; i++) {
            publisher1[i].children[2].style.boxShadow =
              'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
          }
        }, 0);
      }

      if (userName === 'Daniel') {
        setTimeout(function () {
          for (let i = 0; i < publisher1.length; i++) {
            publisher1[i].style.flexDirection = 'row';
            publisher1[i].style.alignItems = 'flex-start';
            publisher1Tooltip[i].style.display = 'none';
            publisher1[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher2.length; i++) {
            publisher2[i].style.flexDirection = 'row';
            publisher2[i].style.alignItems = 'flex-start';
            publisher2Tooltip[i].style.display = 'none';
            publisher2[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher3.length; i++) {
            publisher3[i].style.flexDirection = 'row';
            publisher3[i].style.alignItems = 'flex-start';
            publisher3Tooltip[i].style.display = 'none';
            publisher3[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher4.length; i++) {
            publisher4[i].children[2].style.boxShadow =
              'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
          }
        }, 0);
      }

      if (userName === 'Markus') {
        setTimeout(function () {
          for (let i = 0; i < publisher1.length; i++) {
            publisher1[i].style.flexDirection = 'row';
            publisher1[i].style.alignItems = 'flex-start';
            publisher1Tooltip[i].style.display = 'none';
            publisher1[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher2.length; i++) {
            publisher2[i].style.flexDirection = 'row';
            publisher2[i].style.alignItems = 'flex-start';
            publisher2Tooltip[i].style.display = 'none';
            publisher2[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher4.length; i++) {
            publisher4[i].style.flexDirection = 'row';
            publisher4[i].style.alignItems = 'flex-start';
            publisher4Tooltip[i].style.display = 'none';
            publisher4[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher3.length; i++) {
            publisher3[i].children[2].style.boxShadow =
              'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
          }
        }, 0);
      }

      if (userName === 'Nicolas') {
        setTimeout(function () {
          for (let i = 0; i < publisher1.length; i++) {
            publisher1[i].style.flexDirection = 'row';
            publisher1[i].style.alignItems = 'flex-start';
            publisher1Tooltip[i].style.display = 'none';
            publisher1[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher3.length; i++) {
            publisher3[i].style.flexDirection = 'row';
            publisher3[i].style.alignItems = 'flex-start';
            publisher3Tooltip[i].style.display = 'none';
            publisher3[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher4.length; i++) {
            publisher4[i].style.flexDirection = 'row';
            publisher4[i].style.alignItems = 'flex-start';
            publisher4Tooltip[i].style.display = 'none';
            publisher4[i].children[2].style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
          }
          for (let i = 0; i < publisher2.length; i++) {
            publisher2[i].children[2].style.boxShadow =
              'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
          }
        }, 0);
      }

      tooltip.addEventListener('click', function () {
        if (!msgDeleteflag) {
          deleteMsgContainer.className =
            'animate__animated animate__fadeIn';
          deleteMsgContainer.style.display = 'flex';
          msgDeleteflag = true;
        } else if (msgDeleteflag) {
          deleteMsgContainer.className =
            'animate__animated animate__fadeOut';
          msgDeleteflag = false;
        }
      });

      deleteMessage.addEventListener('mousedown', function () {
        tooltip.removeEventListener('blur', tooltipBlur);
        deleteMessage.style.display = 'flex';
        msgDeleteflag = true;
      });

      tooltip.addEventListener('blur', tooltipBlur);
      function tooltipBlur() {
        deleteMsgContainer.className =
          'animate__animated animate__fadeOut';
        msgDeleteflag = false;
      }

      deleteMessage.addEventListener('click', function () {
        pubnub.addMessageAction(
          {
            channel: 'demo',
            start: parseFloat(li.id) - 2,
            end: parseFloat(li.id) + 2,
            action: {
              type: 'deleted',
              value: '',
            },
          },
          function (status, response) {
            console.log(status, response);
            d.getElementById(obj.timetoken).style.display = 'none';
          },
        );
        pubnub.deleteMessages(
          {
            channel: 'demo',
            start: parseFloat(li.id) - 2,
            end: parseFloat(li.id) + 2,
          },
          function (status, response) {
            console.log(status, response);
          },
        );
      });
      chatList.scrollTop = chatList.scrollHeight;

      if (darkModeFlag) {
        for (i = 0; i < lis.length; i++) {
          lis[i].classList.add('dark-mode-text-white');
        }
        deleteMessage.classList.add('dark-mode');
        publisher.classList.add('dark-mode-text-white');
        liContainer.classList.add('dark-mode-focusBox');
        iconContainer.classList.add('dark-mode-focusBox');
        tooltip.classList.add('dark-mode-tooltip');
      } else if (!darkModeFlag) {
        for (i = 0; i < lis.length; i++) {
          lis[i].classList.remove('dark-mode-text-white');
        }
        publisher.classList.remove('dark-mode-text-white');
        iconContainer.classList.remove('dark-mode-focusBox');
        tooltip.classList.remove('dark-mode-tooltip');
        liContainer.classList.remove('dark-mode-focusBox');
        deleteMessage.classList.remove('dark-mode');
      }
    },
  });

  pubnub.subscribe({
    channels: ['demo'],
  });

  sendButton.addEventListener('click', function () {
    if (chatInput.value !== '') {
      pubnub.publish({
        channel: 'demo',
        message: [
          userName,
          chatInput.value,
          profilePic,
          userId,
          postDate,
        ],
        chatArray: (chatInput.value = ''),
      });
    }
  });

  clockDate4.addEventListener('blur', function () {
    clockDate4.style.display = 'none';
    try {
      if (clockDate4.value === '') {
        invalidDate.className = 'animate__animated animate__fadeIn';
        invalidDate.style.display = 'flex';
        setTimeout(function () {
          invalidDate.className =
            'animate__animated animate__fadeOut';
        }, 1000);
      } else {
        split = clockDate4.value.split('-');

        clockDateValue = split[1];
        let d4 = split[2];
        let getMonth = new Date(clockDateValue);
        let getDay = new Date(clockDate4.value);
        let month = getMonth.toLocaleString('default', {
          month: 'short',
        });
        let day = getDay.toLocaleString('default', {
          weekday: 'long',
        });

        date4.innerHTML =
          `${day}.&nbsp;` + `${month}&nbsp;` + `${d4}`;

        pubnub.publish({
          channel: 'clockDate4',
          message: `${day}.&nbsp;` + `${month}&nbsp;` + `${d4}`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  pubnub.fetchMessages(
    {
      channels: ['clockDate4'],
      end: '15343325004275466',
      count: 100,
    },
    (status, response) => {
      try {
        let messages = response.channels.clockDate4.map(
          (v) => v.message,
        );
        for (i = 0; i < messages.length; i++) {
          date4.innerHTML = response.channels.clockDate4[i].message;
        }
      } catch (error) {
        console.log(error);
      }
    },
  );

  clockTime4.addEventListener('blur', function () {
    clockTime4.style.display = 'none';
    let hms = clockTime4.value;
    let split = hms.split(':');
    setTime4 = +split[0] * 60 * 60 + +split[1] * 60 - 1;
    preTime4 = +split[0] * 60 * 60 + +split[1] * 60 + 1;
    pubnub.publish({
      channel: 'clockTime4',
      message: setTime4,
    });
    practiceTime4(setTime4);
  });

  pubnub.fetchMessages(
    {
      channels: ['clockTime4'],
      end: '15343325004275466',
      count: 100,
    },
    (status, response) => {
      try {
        let messages = response.channels.clockTime4.map(
          (v) => v.message,
        );
        for (i = 0; i < messages.length; i++) {
          practiceTime4(response.channels.clockTime4[i].message);
          time4(response.channels.clockTime4[i].message + 2);
        }
      } catch (error) {
        console.log(error);
      }
    },
  );

  // Uncomment to delete all messages
  // pubnub.deleteMessages(
  //   {
  //     channel: 'demo',
  //   },
  //   function (status, response) {
  //     console.log(status, response);
  //   },
  // );

  agendaWrapper.addEventListener('blur', function () {
    pubnub.publish({
      channel: 'agenda1',
      message: agendaWrapper.value,
    });
  });

  gigWrapper.addEventListener('blur', function () {
    pubnub.publish({
      channel: 'gig1',
      message: gigWrapper.value,
    });
  });

  pubnub.fetchMessages(
    {
      channels: ['agenda1'],
      end: '15343325004275466',
      count: 100,
    },
    (status, response) => {
      try {
        let messages = response.channels.agenda1.map(
          (v) => v.message,
        );
        for (i = 0; i < messages.length; i++) {
          agendaWrapper.value = response.channels.agenda1[i].message;
        }
      } catch (error) {
        console.log(error);
      }
    },
  );

  pubnub.fetchMessages(
    {
      channels: ['gig1'],
      end: '15343325004275466',
      count: 100,
    },
    (status, response) => {
      try {
        let messages = response.channels.gig1.map((v) => v.message);
        for (i = 0; i < messages.length; i++) {
          gigWrapper.value = response.channels.gig1[i].message;
        }
      } catch (error) {
        console.log(error);
      }
    },
  );

  chatInput.addEventListener('keyup', function (e) {
    if (
      (e.keyCode || e.charCode) === 13 &&
      chatInput.value !== '' &&
      !e.shiftKey
    ) {
      pubnub.publish({
        channel: 'demo',
        message: [
          userName,
          chatInput.value,
          profilePic,
          userId,
          postDate,
        ],
        chatArray: (chatInput.value = ''),
      });
    }
  });

  // Start, end, count are optional.
  // This part below is for fetching stored messages.
  pubnub.fetchMessages(
    {
      channels: ['demo'],
      end: '15343325004275466',
      count: 100,
    },
    (status, response) => {
      try {
        let messages = response.channels.demo.map((v) => v.message);
        for (i = 0; i < messages.length; i++) {
          let tooltip = d.createElement('button');
          let deleteMsgContainer = d.createElement('div');
          let deleteMessage = d.createElement('button');
          let publisher = d.createElement('div');
          let liContainer = d.createElement('div');
          let li = d.createElement('li');
          let iconContainer = d.createElement('div');
          let userIcon = d.createElement('img');
          let profileContainer = d.createElement('div');
          let messageContainer = d.createElement('div');
          let messageDate = d.createElement('p');

          liContainer.id = 'liContainer';
          liContainer.className = 'li-container';
          messageDate.id = 'messageDate';
          publisher.id = 'publisher';
          publisher.className = 'nameOfPublisher';
          messageDate.innerHTML = messages[i][4];
          deleteMsgContainer.id = 'deleteMsgContainer';
          tooltip.id = 'chatTooltip';
          tooltip.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
          deleteMessage.id = 'deleteMessage';
          deleteMessage.className = 'delete-message';
          deleteMessage.innerHTML =
            '<img height="20px" width="20px" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MiAxMmgtMjRjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAyaDI0djI0aC0yMmMtLjUxNCAwLTEuMDA3LjE5Ny0xLjM3OS41NTJsLTEwLjYyMSAxMC4xMTF2LTguNjYzYzAtMS4xMDQtLjg5Ni0yLTItMmgtNHYtMTJjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAydjEyYzAgMi4yMDYgMS43OTQgNCA0IDRoMnY4Ljk5OGMwIDEuMTg2LjY2OSAyLjIzIDEuNzQ3IDIuNzI2LjQwOC4xODguODM3LjI3OSAxLjI2Mi4yNzkuNjk4IDAgMS4zODUtLjI0OCAxLjk0NS0uNzI5LjAyNi0uMDIyLjA1Mi0uMDQ1LjA3Ny0uMDY5bDExLjc2OS0xMS4yMDVoMjEuMmMyLjIwNiAwIDQtMS43OTQgNC00di0yNGMwLTIuMjA2LTEuNzk0LTQtNC00eiIvPjxwYXRoIGQ9Im04LjU4NiAyMi40MTRjLjM5LjM5MS45MDIuNTg2IDEuNDE0LjU4NnMxLjAyNC0uMTk1IDEuNDE0LS41ODZsNC4wODYtNC4wODYgNC4wODYgNC4wODZjLjM5LjM5MS45MDIuNTg2IDEuNDE0LjU4NnMxLjAyNC0uMTk1IDEuNDE0LS41ODZjLjc4MS0uNzgxLjc4MS0yLjA0NyAwLTIuODI4bC00LjA4Ni00LjA4NiA0LjA4Ni00LjA4NmMuNzgxLS43ODEuNzgxLTIuMDQ3IDAtMi44MjgtLjc4LS43ODEtMi4wNDgtLjc4MS0yLjgyOCAwbC00LjA4NiA0LjA4Ni00LjA4Ni00LjA4NmMtLjc4LS43ODEtMi4wNDgtLjc4MS0yLjgyOCAwLS43ODEuNzgxLS43ODEgMi4wNDcgMCAyLjgyOGw0LjA4NiA0LjA4Ni00LjA4NiA0LjA4NmMtLjc4MS43ODEtLjc4MSAyLjA0NyAwIDIuODI4eiIvPjwvc3ZnPg==" />';
          li.id = response.channels.demo[i].timetoken;
          profileContainer.className = 'profileContainer';
          messageContainer.className = messages[i][3];
          messageContainer.id = response.channels.demo[i].timetoken;
          publisher.textContent = messages[i][0];
          li.textContent = messages[i][1];
          userIcon.setAttribute('src', messages[i][2]);

          tooltip.className = messages[i][3] + '-tooltip';
          iconContainer.id = 'chatIconContainer';
          userIcon.className = 'userIcon';
          iconContainer.className = 'chat-icon-container';

          chatList.appendChild(messageContainer);
          messageContainer.appendChild(tooltip);
          messageContainer.appendChild(profileContainer);
          messageContainer.appendChild(liContainer);
          liContainer.appendChild(li);
          liContainer.appendChild(messageDate);
          profileContainer.appendChild(publisher);
          profileContainer.appendChild(iconContainer);
          iconContainer.appendChild(userIcon);

          tooltip.appendChild(deleteMsgContainer);
          deleteMsgContainer.appendChild(deleteMessage);

          let publisher1 = d.getElementsByClassName('publisher1');
          let publisher2 = d.getElementsByClassName('publisher2');
          let publisher3 = d.getElementsByClassName('publisher3');
          let publisher4 = d.getElementsByClassName('publisher4');

          let publisher1Tooltip = d.getElementsByClassName(
            'publisher1-tooltip',
          );
          let publisher2Tooltip = d.getElementsByClassName(
            'publisher2-tooltip',
          );
          let publisher3Tooltip = d.getElementsByClassName(
            'publisher3-tooltip',
          );
          let publisher4Tooltip = d.getElementsByClassName(
            'publisher4-tooltip',
          );

          if (userName === 'Peter') {
            setTimeout(function () {
              for (let i = 0; i < publisher2.length; i++) {
                publisher2[i].style.flexDirection = 'row';
                publisher2[i].style.alignItems = 'flex-start';
                publisher2Tooltip[i].style.display = 'none';
                publisher2[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher3.length; i++) {
                publisher3[i].style.flexDirection = 'row';
                publisher3[i].style.alignItems = 'flex-start';
                publisher3Tooltip[i].style.display = 'none';
                publisher3[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher4.length; i++) {
                publisher4[i].style.flexDirection = 'row';
                publisher4[i].style.alignItems = 'flex-start';
                publisher4Tooltip[i].style.display = 'none';
                publisher4[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher1.length; i++) {
                publisher1[i].children[2].style.boxShadow =
                  'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
              }
            }, 0);
          }

          if (userName === 'Daniel') {
            setTimeout(function () {
              for (let i = 0; i < publisher1.length; i++) {
                publisher1[i].style.flexDirection = 'row';
                publisher1[i].style.alignItems = 'flex-start';
                publisher1Tooltip[i].style.display = 'none';
                publisher1[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher2.length; i++) {
                publisher2[i].style.flexDirection = 'row';
                publisher2[i].style.alignItems = 'flex-start';
                publisher2Tooltip[i].style.display = 'none';
                publisher2[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher3.length; i++) {
                publisher3[i].style.flexDirection = 'row';
                publisher3[i].style.alignItems = 'flex-start';
                publisher3Tooltip[i].style.display = 'none';
                publisher3[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher4.length; i++) {
                publisher4[i].children[2].style.boxShadow =
                  'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff6e69f7';
              }
            }, 0);
          }

          if (userName === 'Markus') {
            setTimeout(function () {
              for (let i = 0; i < publisher1.length; i++) {
                publisher1[i].style.flexDirection = 'row';
                publisher1[i].style.alignItems = 'flex-start';
                publisher1Tooltip[i].style.display = 'none';
                publisher1[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher2.length; i++) {
                publisher2[i].style.flexDirection = 'row';
                publisher2[i].style.alignItems = 'flex-start';
                publisher2Tooltip[i].style.display = 'none';
                publisher2[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher4.length; i++) {
                publisher4[i].style.flexDirection = 'row';
                publisher4[i].style.alignItems = 'flex-start';
                publisher4Tooltip[i].style.display = 'none';
                publisher4[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher3.length; i++) {
                publisher3[i].children[2].style.boxShadow =
                  'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
              }
            }, 0);
          }

          if (userName === 'Nicolas') {
            setTimeout(function () {
              for (let i = 0; i < publisher1.length; i++) {
                publisher1[i].style.flexDirection = 'row';
                publisher1[i].style.alignItems = 'flex-start';
                publisher1Tooltip[i].style.display = 'none';
                publisher1[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher3.length; i++) {
                publisher3[i].style.flexDirection = 'row';
                publisher3[i].style.alignItems = 'flex-start';
                publisher3Tooltip[i].style.display = 'none';
                publisher3[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher4.length; i++) {
                publisher4[i].style.flexDirection = 'row';
                publisher4[i].style.alignItems = 'flex-start';
                publisher4Tooltip[i].style.display = 'none';
                publisher4[i].children[2].style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
              for (let i = 0; i < publisher2.length; i++) {
                publisher2[i].children[2].style.boxShadow =
                  'inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff';
                publisher2[i].children[2].style.backgroundColor =
                  '#e9c37d';
              }
            }, 0);
          }

          tooltip.addEventListener('click', function () {
            if (!msgDeleteflag) {
              deleteMsgContainer.className =
                'animate__animated animate__fadeIn';
              deleteMsgContainer.style.display = 'flex';
              msgDeleteflag = true;
            } else if (msgDeleteflag) {
              deleteMsgContainer.className =
                'animate__animated animate__fadeOut';
              msgDeleteflag = false;
            }
          });

          deleteMessage.addEventListener('mousedown', function () {
            tooltip.removeEventListener('blur', tooltipBlur);
            deleteMessage.style.display = 'flex';
            msgDeleteflag = true;
          });

          tooltip.addEventListener('blur', tooltipBlur);
          function tooltipBlur() {
            deleteMsgContainer.className =
              'animate__animated animate__fadeOut';
            msgDeleteflag = false;
          }

          deleteMessage.addEventListener('click', function () {
            pubnub.addMessageAction(
              {
                channel: 'demo',
                start: parseFloat(li.id) - 2,
                end: parseFloat(li.id) + 2,
                action: {
                  type: 'deleted',
                  value: '',
                },
              },
              function (status, response) {
                d.getElementById(li.id).style.display = 'none';
                console.log(status, response);
              },
            );
            pubnub.deleteMessages(
              {
                channel: 'demo',
                start: parseFloat(li.id) - 2,
                end: parseFloat(li.id) + 2,
              },
              function (status, response) {
                console.log(response);
              },
            );
          });
          userSettings.addEventListener('click', function () {
            setTimeout(function () {
              if (darkModeFlag) {
                for (i = 0; i < lis.length; i++) {
                  lis[i].classList.add('dark-mode-text-white');
                }
                deleteMessage.classList.add('dark-mode');
                publisher.classList.add('dark-mode-text-white');
                liContainer.classList.add('dark-mode-focusBox');
                iconContainer.classList.add('dark-mode-focusBox');
                tooltip.classList.add('dark-mode-tooltip');
              } else if (!darkModeFlag) {
                for (i = 0; i < lis.length; i++) {
                  lis[i].classList.remove('dark-mode-text-white');
                }
                publisher.classList.remove('dark-mode-text-white');
                iconContainer.classList.remove('dark-mode-focusBox');
                tooltip.classList.remove('dark-mode-tooltip');
                liContainer.classList.remove('dark-mode-focusBox');
                deleteMessage.classList.remove('dark-mode');
              }
            }, 0);
          });
        }
      } catch (error) {}
      chatList.scrollTop = chatList.scrollHeight;
    },
  );
}
pubNub();
// ------------------------------------------ PUBNUB PARAMETERS ---------------------------------------------
// ----------------------------------- DONT TOUCH. FILTER FLAG SETTINGS -------------------------------------
// Flags to determine if a filter is active or not.
let filterFlags = {
  liveRecordingFlag: false,
  homeRecordingFlag: false,
  studioRehearsalFlag: false,
  originalTrackFlag: false,
};

// Used to style our filter buttons if active or not. (Coupled with trueIndex / falseIndex)
let filterButtons = [
  liveRecording,
  homeRecording,
  studioRehearsal,
  originalTrack,
];

// Used to append correct html playlist attribute to all tracks.
let filterNames = [
  'Live recordings',
  'Home recordings',
  'Studio rehearsals',
  'Original tracks',
];

liveRecording.addEventListener('click', liveFlag);
homeRecording.addEventListener('click', homeFlag);
studioRehearsal.addEventListener('click', studioFlag);
originalTrack.addEventListener('click', originalFlag);

function liveFlag() {
  if (!filterFlags.liveRecordingFlag) {
    filterFlags.liveRecordingFlag = true;
  } else if (filterFlags.liveRecordingFlag) {
    filterFlags.liveRecordingFlag = false;
  }

  filterFlags.homeRecordingFlag = false;
  filterFlags.studioRehearsalFlag = false;
  filterFlags.originalTrackFlag = false;

  filterHandler(); // Holds useful variables to check the current Active / Inactive filters
  filterStyling(); // Applies CSS styling to active / inactive filter buttons.
}

function homeFlag() {
  if (!filterFlags.homeRecordingFlag) {
    filterFlags.homeRecordingFlag = true;
  } else if (filterFlags.homeRecordingFlag) {
    filterFlags.homeRecordingFlag = false;
  }

  filterFlags.liveRecordingFlag = false;
  filterFlags.studioRehearsalFlag = false;
  filterFlags.originalTrackFlag = false;

  filterHandler(); // Holds useful variables to check the current Active / Inactive filters
  filterStyling(); // Applies CSS styling to active / inactive filter buttons.
}

function studioFlag() {
  if (!filterFlags.studioRehearsalFlag) {
    filterFlags.studioRehearsalFlag = true;
  } else if (filterFlags.studioRehearsalFlag) {
    filterFlags.studioRehearsalFlag = false;
  }

  filterFlags.liveRecordingFlag = false;
  filterFlags.homeRecordingFlag = false;
  filterFlags.originalTrackFlag = false;

  filterHandler(); // Holds useful variables to check the current Active / Inactive filters
  filterStyling(); // Applies CSS styling to active / inactive filter buttons.
}

function originalFlag() {
  if (!filterFlags.originalTrackFlag) {
    filterFlags.originalTrackFlag = true;
  } else if (filterFlags.originalTrackFlag) {
    filterFlags.originalTrackFlag = false;
  }

  filterFlags.liveRecordingFlag = false;
  filterFlags.studioRehearsalFlag = false;
  filterFlags.homeRecordingFlag = false;

  filterHandler(); // Holds useful variables to check the current Active / Inactive filters
  filterStyling(); // Applies CSS styling to active / inactive filter buttons.
}

// Variables to check the current Active / Inactive filters
function filterHandler() {
  trackCount = [
    liveRecordingTracks,
    homeRecordingTracks,
    studioRehearsalTracks,
    originalTracks,
  ];
  falseIndex = Object.values(filterFlags).reduce(
    (out, bool, index) => (!bool ? out.concat(index) : out), // Returns an array with indexes of all inactive filters
    [],
  );

  trueIndex = Object.values(filterFlags).reduce(
    (out, bool, index) => (bool ? out.concat(index) : out), // Returns an array with the index of the current active filter
    [],
  );
}
// ----------------------------------- DONT TOUCH. FILTER FLAG SETTINGS -------------------------------------
// ----------------------------------------- FILTER STYLE SETTINGS-------------------------------------------
function filterStyling() {
  // if filterButton is active:
  try {
    if (!darkModeFlag) {
      //senaste
      filterButtons[trueIndex].style.color = '#e9c37d';
      allSongs.style.color = '#61677c';
    } else if (darkModeFlag) {
      allSongs.style.color = 'white';
      for (i = 1; i < sortItems.length; i++) {
        sortItems[i].classList.remove('dark-mode-text-grey');
      }
      filterButtons[trueIndex].style.color = '#e9c37d';
    }
  } catch (error) {}
  // if filterButton is inactive:
  for (let i = 0; i < falseIndex.length; i++) {
    filterButtons[falseIndex[i]].style.color = '#61677c';
  }
}
// ----------------------------------------- FILTER STYLE SETTINGS-------------------------------------------
// ------------------------------ SHOW "NO SONGS YET" CTA IF NO TRACKS AT ALL  ------------------------------
// function noTracksText() {
//   setTimeout(function () {
//     if (!d.body.contains(d.getElementById('card0'))) {
//       noSongsYet.className = 'animate__animated animate__fadeIn';
//       noSongsYet.style.display = 'flex'; // Hide text and button to add first track.
//     }
//   }, 3000);
// }
// noTracksText();
// ------------------------------ SHOW "NO SONGS YET" CTA IF NO TRACKS AT ALL  ------------------------------
// ---------------------------------------------- POST REQUEST ----------------------------------------------
awsUpload.addEventListener('submit', (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.style.cursor = 'not-allowed';
  submitButton.style.color = '#61677c';
  submitButton.style.backgroundColor = '#e9f0fb';
  portraitText.style.animationDuration = '0.5s';
  portraitText.style.animationDuration = '0.8s';
  portraitText.className = 'animate__animated animate__fadeOut';
  portraitText.className = 'animate__animated animate__fadeIn';
  navbarText.innerHTML = 'Uploading.. Please Wait';
  let files = d.querySelector('#file').files[0];
  if (files) {
    let file = files;
    fileName = file.name;
    let f = new Date();
    filePath =
      'tracklist/' +
      f.getSeconds() +
      '_' +
      fileName.replace(/[^A-Za-z0-9.]/g, '');

    // S3 Upload
    s3.upload(
      {
        Key: filePath,
        Body: file,
        ACL: 'public-read',
      },
      function (err, data) {
        if (err) {
          console.log(err);
          portraitText.style.animationDuration = '0.5s';
          portraitText.className =
            'animate__animated animate__fadeOutRight';

          setTimeout(function () {
            portraitText.style.animationDuration = '0.8s';

            portraitText.className =
              'animate__animated animate__fadeInRight';
            navbarText.innerHTML = 'Upload Failed.';
          }, 100);

          console.log(err);
        }
        // POST req after successful S3 Upload.
        if (data) {
          function submitData() {
            let formdata = new FormData();
            formdata.append('name', d.querySelector('#name').value);
            formdata.append(
              'artist',
              d.querySelector('#artist').value,
            );
            formdata.append('key', d.querySelector('#key').value);
            formdata.append(
              'comment',
              d.querySelector('#comment').value,
            );
            formdata.append('intro', d.querySelector('#intro').value);
            formdata.append('verse', d.querySelector('#verse').value);
            formdata.append(
              'bridge',
              d.querySelector('#bridge').value,
            );
            formdata.append(
              'chorus',
              d.querySelector('#chorus').value,
            );
            formdata.append('outro', d.querySelector('#outro').value);
            formdata.append(
              'link',
              'https://kaernvirke.s3.eu-north-1.amazonaws.com/' +
                filePath,
            );

            formdata.append('fileName', fileName);

            fetch('/api/products/', {
              method: 'POST',
              body: formdata,
            })
              .then((response) => response.json())
              .catch((error) => console.error('Error:', error))
              .then((response) => {
                console.log(
                  'Success:',
                  response,
                  (postResponse = response.createdProduct),
                  // Running GET req after POST req to simulate SPA without page reload.
                  checkGetReq(),
                );
              });

            // Go back to first form after submit for better UX.
            window.location.href = '/products.html#slide-1';
            successAlert.style.display = 'flex';
            noSongsYet.style.display = 'none';

            d.getElementById('successAlert').className = '';
            setTimeout(function () {
              d.getElementById('successAlert').className =
                'f-modal-alert animate__animated animate__flip';
            }, 0);
            d.getElementById('successAlert').style.opacity = '1';
            window.setTimeout(function () {
              d.getElementById('successAlert').style.opacity = '0';
            }, 1800);

            if (toggleState.checked) {
              toggleState.checked = !toggleState.checked;
              toggling = true;
              labelText.className =
                'animate__animated animate__fadeOut';
              window.setTimeout(function () {
                labelText.className =
                  'animate__animated animate__fadeIn';
                labelText.innerHTML = 'Optional information';
              }, 310);
            }
            songForm.reset();
            songForm2.reset();
            portraitText.style.animationDuration = '0.5s';
            portraitText.className =
              'animate__animated animate__fadeOut';

            setTimeout(function () {
              if (mediaQuery.matches) {
                allSongs.click();
              }
              d.getElementById(
                'portraitText',
              ).style.animationDuration = '0.8s';
              submitButton.disabled = false;
              submitButton.style.cursor = 'default';
              portraitText.className =
                'animate__animated animate__fadeIn';
              navbarText.innerHTML = 'Submitted successfully.';
            }, 100);
            submitErrorMessageContainer.className =
              'animate__animated animate__fadeOut';
            submitErrorMessageContainer.style.animationDuration =
              '0.2s';

            setTimeout(function () {
              portraitText.className =
                'animate__animated animate__fadeOut';
            }, 2000);
          }

          setTimeout(function () {
            portraitText.style.animationDuration = '0.8s';

            portraitText.className =
              'animate__animated animate__fadeInRight';
            navbarText.innerHTML = 'Add song to playlist.';
          }, 2500);
          submitData();
        }
      },
    ).on('httpUploadProgress', ({ loaded, total }) => {});
  }
});
// ---------------------------------------------- POST REQUEST ----------------------------------------------

// ----------------------------------------------- GET REQUEST ----------------------------------------------
// ************************************************ IMPORTANT ***********************************************

// !**** Here begins the Dynamic Scoped Environment for the music player, which covers over 4000 lines of code.
// !**** This part is subject to a total refactoring with classes instead, using setters & getters.

// !**** Below is my initial rough draft of how I want to re-structure the logic going forward
// and divide the code into different files for better readability / having access to global variables

// function Menu () {
//   this.menuItems = [];
//   this.set = function (menuItems) {
//     this.menuItems = menuItems;
//   }
// }

// function SongItem (song) {
//   this.song = song;
//   this.songElement;

//   this.addEventListener = function () {
//     this.songElement.addEventListener('click', function () {
//   }

//   this.render = function (songData) {
//     this.songElement = document.createElement('div');
//     return this.songElement;
//     // songlistDiv.addEventListener('click', this.onPlay);
//   }
// }

//   this.onPlay = function (listener) {
//     this.songElement.addEventListener('click', listener);
//   }

// function SongList () {
//   this.songList = [];
//   this.root = document.createElement('div');

//   return {
//     setSongList: (songList) => {
//       this.songList = songList;
//     },
//     render: () => {
//       this.songList.forEach(song => {
//         const song = new SongItem(song)
//         const htmlElement = song.render();
//         this.root.appendChild(html)
//       })
//     }
//   }
// }

// const MyService = (function () {
//   const mySongList = [1,2,3];
//   const menu = new Menu();
//   const songListComponent = SongList

//   return {
//     get: () => {
//       return mySongList;
//     },
//     set: (songList) => {
//       mySongList = songList;
//     },
//     render: () => {

//     }
//   }
// })()
// ************************************************ IMPORTANT ***********************************************
// ----------------------------------------------- GET REQUEST ----------------------------------------------

function checkGetReq() {
  latestValue = 0;
  let request = new Request('/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  fetch(request)
    .then((res) => res.json())
    .then((json) => {
      if (postResponse === undefined) {
        songlistInfo = json.products;
      } else {
        songlistInfo = json.products;
        latestValue = json.products.length - 1;
      }

      // --------------------------------------------Trying out Vue -----------------------------------------------
      // Parallax Effect.
      Vue.config.devtools = true;
      Vue.component('card', {
        template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">

          <slot name="play"></slot>
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
        mounted() {
          this.width = this.$refs.card.offsetWidth;
          this.height = this.$refs.card.offsetHeight;
        },
        props: ['dataImage'],
        data: () => ({
          width: 0,
          height: 0,
          mouseX: 0,
          mouseY: 0,
          mouseLeaveDelay: null,
        }),
        computed: {
          mousePX() {
            return this.mouseX / this.width;
          },
          mousePY() {
            return this.mouseY / this.height;
          },
          cardStyle() {
            if (!mediaQuery.matches) {
              const rX = this.mousePX * 30;
              const rY = this.mousePY * -30;
              return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
              };
            }
          },
          cardBgTransform() {
            if (!mediaQuery.matches) {
              const tX = this.mousePX * -40;
              const tY = this.mousePY * -40;
              return {
                transform: `translateX(${tX}px) translateY(${tY}px)`,
              };
            }
          },
          cardBgImage() {},
        },
        methods: {
          handleMouseMove(e) {
            if (!mediaQuery.matches) {
              this.mouseX =
                e.pageX - this.$refs.card.offsetLeft - this.width / 2;
              this.mouseY =
                e.pageY - this.$refs.card.offsetTop - this.height / 2;
            }
          },
          handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
          },
          handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
              this.mouseX = 0;
              this.mouseY = 0;
            }, 1000);
          },
        },
      });

      const app = new Vue({
        el: '#app',
      });
      // --------------------------------------------Trying out Vue -----------------------------------------------

      setTimeout(() => {
        let pointer = d.getElementsByClassName('card-bg');
        pointer[0].setAttribute(
          'style',
          `background-image: url(${
            '/images/covers/' + myImagesArray[songlistInfo.length - 1]
          })`,
        );
        pointer[1].setAttribute(
          'style',
          `background-image: url(${
            '/images/covers/' + myImagesArray[songlistInfo.length - 2]
          })`,
        );
        pointer[2].setAttribute(
          'style',
          `background-image: url(${
            '/images/covers/' + myImagesArray[songlistInfo.length - 3]
          })`,
        );
        pointer[3].setAttribute(
          'style',
          `background-image: url(${
            '/images/covers/' + myImagesArray[songlistInfo.length - 4]
          })`,
        );
      }, 0);

      for (
        let loopIndex = latestValue;
        loopIndex < songlistInfo.length;
        loopIndex++
      ) {
        trackListArray[loopIndex] =
          'https://kaernvirke.s3.eu-north-1.amazonaws.com/tracklist/' +
          songlistInfo[loopIndex].link
            .replace(/['"]+/g, '')
            .split('/')
            .pop();

        // ------------------------------------------ Major Dynamic Elements ----------------------------------------
        const songlistDiv = d.createElement('div');
        const modifyContainer = d.createElement('div');
        const iconContainer = d.createElement('div');
        const jsonContainer = d.createElement('div');
        const imageContainer = d.createElement('div');
        const infoContainer = d.createElement('div');
        const informationContainer = d.createElement('div');
        const playContainer = d.createElement('div');
        const musicContainer = d.createElement('div');
        const controlContainer = d.createElement('div');
        const addModifyContainer = d.createElement('div');
        const addContainer = d.createElement('div');
        const iContainer = d.createElement('div');
        const imageButtonBox = d.createElement('div');
        const mainImageButtonBox = d.createElement('div');
        const jsonNameContainer = d.createElement('div');
        const jsonArtistContainer = d.createElement('div');
        const jsonKeyContainer = d.createElement('div');
        const jsonCommentContainer = d.createElement('div');
        const jsonIntroContainer = d.createElement('div');
        const jsonVerseContainer = d.createElement('div');
        const jsonBridgeContainer = d.createElement('div');
        const jsonChorusContainer = d.createElement('div');
        const jsonOutroContainer = d.createElement('div');
        const controlsContainer = d.getElementById(
          'controlsContainer',
        );
        // ------------------------------------------ Major Dynamic Elements ----------------------------------------
        // ---------------------------------------------- Dynamic Buttons -------------------------------------------
        const imageButton = d.createElement('img');
        const infoButton = d.createElement('button');
        const deleteButton = d.createElement('button');
        const addButton = d.createElement('button');
        const modifyButton = d.createElement('button');
        const playButton = d.createElement('button');
        const controlButton = d.createElement('button');
        const nameButton = d.createElement('div');
        const artistButton = d.createElement('div');
        const keyButton = d.createElement('div');
        const commentButton = d.createElement('div');
        const introButton = d.createElement('div');
        const verseButton = d.createElement('div');
        const bridgeButton = d.createElement('div');
        const chorusButton = d.createElement('div');
        const outroButton = d.createElement('div');
        const linkButton = d.createElement('button');
        const dropdownButton = d.createElement('button');
        const dropdownButtonClose = d.createElement('button');
        // ---------------------------------------------- Dynamic Buttons -------------------------------------------
        // ------------------------------------------ Dynamic Audio Components --------------------------------------
        const musicBox = d.createElement('div');
        const totalDuration = d.createElement('div');
        const musicElement = d.createElement('audio');
        const source = d.createElement('source');
        const timeContainer = d.createElement('div');
        const curr_time = d.createElement('div');
        const range = d.createElement('input');
        const fillBar = d.createElement('div');
        // ------------------------------------------ Dynamic Audio Components --------------------------------------
        // ------------------------------------------ Dynamic Icons and SVG's ---------------------------------------
        const modifyIcon = d.createElement('i');
        const SVGplayIcon = d.createElement('svg');
        const SVGpauseIcon = d.createElement('svg');
        const addIcon = d.createElement('i');
        const deleteIcon = d.createElement('i');
        const nameIcon = d.createElement('i');
        const artistIcon = d.createElement('i');
        const keyIcon = d.createElement('i');
        const commentIcon = d.createElement('i');
        const introIcon = d.createElement('i');
        const verseIcon = d.createElement('i');
        const bridgeIcon = d.createElement('i');
        const chorusIcon = d.createElement('i');
        const outroIcon = d.createElement('i');
        const infoIcon = d.createElement('i');
        const pauseItag = d.createElement('i');
        const playItag = d.createElement('i');
        const dropdownIcon = d.createElement('i');
        const dropdownIconClose = d.createElement('i');
        // ------------------------------------------ Dynamic Icons and SVG's ---------------------------------------
        // ------------------------------------------ Other Dynamic Elements ----------------------------------------
        const modifyString = d.createElement('div');
        const deleteContainer = d.createElement('div');
        const deleteString = d.createElement('div');
        const infoString = d.createElement('div');
        const nowPlaying = d.createElement('p');
        const addString = d.createElement('div');
        const jsonKeyTitle = d.createElement('div');
        const jsonKeyString = d.createElement('div');
        const jsonCommentTitle = d.createElement('div');
        const jsonCommentString = d.createElement('div');
        const jsonIntroTitle = d.createElement('div');
        const jsonIntroString = d.createElement('div');
        const jsonVerseTitle = d.createElement('div');
        const jsonVerseString = d.createElement('div');
        const myDropdown = d.createElement('div');
        const jsonChorusTitle = d.createElement('div');
        const jsonChorusString = d.createElement('div');
        const jsonBridgeTitle = d.createElement('div');
        const jsonBridgeString = d.createElement('div');
        const jsonOutroTitle = d.createElement('div');
        const jsonOutroString = d.createElement('div');
        // ------------------------------------------ Other Dynamic Elements ----------------------------------------
        // ------------------------------------------ Dynamic ID's and Classes --------------------------------------
        songlistDiv.id = 'card' + productIndex++;
        songlistDiv.className = 'products';
        informationContainer.id = 'informationContainer';
        playContainer.id = 'playContainer' + playContainerIndex++;
        playContainer.className = 'play-container';
        musicContainer.id = 'musicContainer';
        musicContainer.className = 'music-container';
        controlContainer.id = 'controlContainer';
        musicElement.className = 'music-element';
        musicElement.id = 'musicElement' + musicIndex++;
        musicBox.className = 'music-box';
        musicBox.id = 'musicBox' + controlIndex++;
        infoIcon.id = 'infoIcon';
        totalDuration.className = 'total-duration';
        totalDuration.id = 'totalDuration';
        timeContainer.className = 'time-container';
        timeContainer.id = 'timeContainer';
        curr_time.className = 'current-time';
        range.className = 'seek_slider';
        fillBar.className = 'fillbar';
        jsonContainer.id = 'jsonIndex' + jsonIndex++;
        jsonContainer.className = 'jsonContainer';
        imageContainer.id = 'imageContainer' + coverIndex++;
        infoContainer.id = 'infoContainer';
        infoContainer.className = 'top-bottom-overflow-fade3';
        addModifyContainer.id = 'addModifyContainer' + modifyIndex++;
        addModifyContainer.className = 'addModify-container';
        iconContainer.id = 'iconContainer';
        iconContainer.className = 'icon-container';
        nowPlaying.id = 'now-playing' + nowPlayingIndex++;
        nowPlaying.className = 'now-playing';
        modifyButton.className = 'modifyButton t-right';
        playButton.className = `btn play-pause`;
        controlButton.className = 'controlButton';
        addButton.className = 'addButton t-right';
        deleteButton.className = 'deleteButton t-right';
        SVGplayIcon.className = 'icon play ';
        SVGpauseIcon.className = 'icon pause';
        SVGpauseIcon.id = 'pauseIcon';
        SVGplayIcon.id = 'playIcon' + playIndex++;
        SVGplayIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-play"></i>';
        SVGpauseIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-pause"></i>';
        modifyButton.id = 'modifyButton';
        playButton.id = `playButton${buttonIndex++}`;
        controlButton.id = 'controlButton';
        addButton.id = 'addButton';
        deleteButton.id = 'deleteButton';
        infoString.id = 'infoString';
        addString.id = 'addString';
        modifyString.id = 'modifyString';
        deleteString.id = 'deleteString';
        infoString.className = 'dropdown-strings';
        addString.className = 'dropdown-strings';
        modifyString.className = 'dropdown-strings';
        deleteString.className = 'dropdown-strings';
        iContainer.className = 'dropdown-container';
        addContainer.className = 'dropdown-container';
        modifyContainer.className = 'dropdown-container';
        deleteContainer.className = 'dropdown-container';
        infoButton.id = 'infoButton';
        imageButton.id = `imageButton`;
        imageButton.className = `image-button${imageIndex++}`;
        imageButtonBox.id = 'imageButtonBox';
        mainImageButtonBox.id = `mainImageButtonBox${ellipticIndex++}`;
        mainImageButtonBox.className = 'elliptic-mainImageButtonBox';
        nameButton.id = 'nameButton';
        artistButton.id = 'artistButton';
        keyButton.id = 'keyButton';
        commentButton.id = 'commentButton';
        introButton.id = 'introButton';
        verseButton.id = 'verseButton';
        bridgeButton.id = 'bridgeButton';
        chorusButton.id = 'chorusButton';
        outroButton.id = 'outroButton';
        linkButton.id = 'linkButton';
        dropdownButtonClose.className = 'dropbtnClose';
        dropdownButton.className = 'dropbtn';
        dropdownButton.id = 'dropdownButton';
        dropdownButtonClose.id = 'dropdownButtonClose';
        myDropdown.className = 'dropdown-content';
        myDropdown.id = 'myDropdown' + dropdownIndex++;
        jsonCommentContainer.id = 'jsonComment' + commentIndex++;
        jsonNameContainer.id = `jsonName${infoNameIndex++}`;
        jsonArtistContainer.id = `jsonArtist${infoArtistIndex++}`;
        // ------------------------------------------ Dynamic ID's and Classes --------------------------------------
        // -------------------------------------------- Referencing Iconify -----------------------------------------
        nameIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-star"></i>';
        artistIcon.innerHTML =
          '<i class="iconify" data-icon="md-information-circle"></i>';
        keyIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        commentIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        introIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        verseIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        bridgeIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        chorusIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        outroIcon.innerHTML =
          '<i class="iconify" data-icon="ion-md-quote"></i>';
        // -------------------------------------------- Referencing Iconify -----------------------------------------
        // ---------------------------------------------- Formatting JSON -------------------------------------------
        let jsonName = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].name).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonArtist = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].artist).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonKey = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].key).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonComment = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].comment).join(
            '',
          )}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', '')
          .trim();

        playListArray.push(jsonComment);

        let jsonIntro = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].intro).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonVerse = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].verse).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonBridge = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].bridge).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonChorus = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].chorus).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonOutro = JSON.stringify(
          `${Object.values(songlistInfo[loopIndex].outro).join('')}`,
        )
          .replace(/['"]+/g, '')
          .replaceAll(',', ' ');

        let jsonLink = songlistInfo[loopIndex].link
          .replace(/['"]+/g, '')
          .trimStart();

        //Localstorage for product_id page.
        jsonArray.push(jsonLink);
        window.localStorage.setItem('jsonLink', jsonArray);
        // -------------------------------------------- Formatting JSON ---------------------------------------------
        // --------------------------------------- Setting Dynamic Attributes ---------------------------------------
        jsonNameContainer.setAttribute('class', `json-name`);
        jsonArtistContainer.setAttribute('class', `json-artist`);
        jsonKeyContainer.setAttribute('class', 'json-key');
        jsonKeyContainer.setAttribute('id', 'jsonKey');
        jsonKeyTitle.setAttribute('class', 'jsonTitle');
        jsonKeyTitle.setAttribute('id', 'title');
        jsonKeyString.setAttribute('class', 'jsonString');
        jsonCommentTitle.setAttribute('class', 'jsonTitle');
        jsonCommentString.setAttribute('class', 'jsonString');
        jsonIntroTitle.setAttribute('class', 'jsonTitle');
        jsonIntroString.setAttribute('class', 'jsonString');
        jsonVerseTitle.setAttribute('class', 'jsonTitle');
        jsonVerseString.setAttribute('class', 'jsonString');
        jsonChorusTitle.setAttribute('class', 'jsonTitle');
        jsonChorusString.setAttribute('class', 'jsonString');
        jsonBridgeTitle.setAttribute('class', 'jsonTitle');
        jsonBridgeString.setAttribute('class', 'jsonString');
        jsonOutroTitle.setAttribute('class', 'jsonTitle');
        jsonOutroString.setAttribute('class', 'jsonString');
        jsonCommentContainer.setAttribute('class', 'json-comment');
        jsonIntroContainer.setAttribute('class', 'json-intro');
        jsonVerseContainer.setAttribute('class', 'json-verse');
        jsonChorusContainer.setAttribute('class', 'json-chorus');
        jsonBridgeContainer.setAttribute('class', 'json-bridge');
        jsonOutroContainer.setAttribute('class', 'json-outro');
        // --------------------------------------- Setting Dynamic Attributes ---------------------------------------
        // --------------------------------------- APPENDING DYNAMIC ELEMENTS ---------------------------------------
        //DynamicDiv - Parent Component to all dynamic Elements.
        dynamicDiv.insertBefore(songlistDiv, dynamicDiv.firstChild);

        dynamicDiv.appendChild(songlistDiv);
        jsonContainer.appendChild(jsonNameContainer);
        jsonContainer.appendChild(jsonArtistContainer);
        jsonContainer.appendChild(jsonCommentContainer);
        infoContainer.appendChild(jsonKeyContainer);
        infoContainer.appendChild(jsonIntroContainer);
        infoContainer.appendChild(jsonVerseContainer);
        infoContainer.appendChild(jsonChorusContainer);
        infoContainer.appendChild(jsonBridgeContainer);
        infoContainer.appendChild(jsonOutroContainer);
        jsonKeyContainer.appendChild(jsonKeyTitle);
        jsonIntroContainer.appendChild(jsonIntroTitle);
        jsonIntroContainer.appendChild(jsonIntroString);
        jsonVerseContainer.appendChild(jsonVerseTitle);
        jsonVerseContainer.appendChild(jsonVerseString);
        jsonChorusContainer.appendChild(jsonChorusTitle);
        jsonChorusContainer.appendChild(jsonChorusString);
        jsonBridgeContainer.appendChild(jsonBridgeTitle);
        jsonBridgeContainer.appendChild(jsonBridgeString);
        jsonOutroContainer.appendChild(jsonOutroTitle);
        jsonOutroContainer.appendChild(jsonOutroString);
        addModifyContainer.appendChild(myDropdown);
        myDropdown.appendChild(infoButton);
        myDropdown.appendChild(iContainer);
        myDropdown.appendChild(addContainer);
        myDropdown.appendChild(modifyContainer);
        myDropdown.appendChild(deleteContainer);
        iContainer.appendChild(infoButton);
        iContainer.appendChild(infoString);
        addContainer.appendChild(addButton);
        addContainer.appendChild(addString);
        modifyContainer.appendChild(modifyButton);
        modifyContainer.appendChild(modifyString);
        deleteContainer.appendChild(deleteButton);
        deleteContainer.appendChild(deleteString);
        // --------------------------------------- APPENDING DYNAMIC ELEMENTS ---------------------------------------
        // ------------------------------------ Add upperCase to Artist and Title -----------------------------------
        function ucFirstAllWords(str) {
          let pieces = str.split(' ');
          for (let i = 0; i < pieces.length; i++) {
            let j = pieces[i].charAt(0).toUpperCase();
            pieces[i] = j + pieces[i].substr(1);
          }
          return pieces.join(' ');
        }

        jsonNameContainer.innerHTML = ucFirstAllWords(jsonName);
        jsonArtistContainer.innerHTML = `${ucFirstAllWords(
          jsonArtist,
        )}&nbsp;-&nbsp;${jsonComment}`;
        // ------------------------------------ Add upperCase to Artist and Title -----------------------------------
        // ------------------------------------------ Display JSON in Info ------------------------------------------
        jsonKeyTitle.innerHTML = jsonKey;
        jsonIntroTitle.innerHTML = `${'Intro'}`;
        jsonIntroString.innerHTML = jsonIntro;

        jsonVerseTitle.innerHTML = `${'Verse'}`;
        jsonVerseString.innerHTML = jsonVerse;

        jsonChorusTitle.innerHTML = `${'Chorus'}`;
        jsonChorusString.innerHTML = jsonChorus;

        jsonBridgeTitle.innerHTML = `${'Bridge'}`;
        jsonBridgeString.innerHTML = jsonBridge;

        jsonOutroTitle.innerHTML = `${'Outro'}`;
        jsonOutroString.innerHTML = jsonOutro;
        // ------------------------------------------ Display JSON in Info ------------------------------------------

        let productId = songlistInfo[loopIndex]._id;

        modifyString.addEventListener('click', function () {
          modifyHandler();
        });

        function modifyHandler() {
          let songKey = songlistInfo[loopIndex].link.trimStart();
          let songLink = songlistInfo[loopIndex].link.replace(
            /.*(?=tracklist)/i,
            '',
          );
          let songName = songlistInfo[loopIndex].fileName.trimStart();

          function checkFormInput() {
            let name,
              artist,
              comment,
              file,
              key,
              intro,
              verse,
              bridge,
              chorus,
              outro = null;

            let flag = true;

            name = nameTick;
            artist = artistTick;
            comment = commentTick;
            file = fileTick;
            key = keyTick;
            intro = introTick;
            verse = verseTick;
            bridge = bridgeTick;
            chorus = chorusTick;
            outro = outroTick;

            if (
              !name.value &&
              !artist.value &&
              comment.value === '' &&
              !file.value &&
              key.value === '' &&
              !intro.value &&
              !verse.value &&
              !bridge.value &&
              !chorus.value &&
              !outro.value
            ) {
              songForm.style.display = 'none';

              let productId = {
                value: songlistInfo[loopIndex]._id,
              };
              songlistDiv.className =
                'animate__animated animate__fadeOutRightBig products';

              setTimeout(function () {
                window.location.href = '/product_id.html';
              }, 250);

              Cookies.set('sessionCookie', productId.value);
              Cookies.set('songKey', songKey);
              Cookies.set('songLink', songLink);
              Cookies.set('songName', songName);
              flag = false;
            } else {
              discardChangesPopup();
            }
            return flag;
          }
          checkFormInput();

          function discardChangesPopup() {
            const togglePopupFormContainer = d.getElementById(
              'discardChangesFormContainer',
            );
            const togglePopupForm = d.getElementById(
              'discardChangesForm',
            );
            const cancelbtn = d.getElementById('cancelProceed');
            const okbtn = d.getElementById('okProceed');
            const blur = d.getElementById('blur');
            let showForm = false;

            if (!showForm) {
              togglePopupFormContainer.style.display = 'flex';
              blur.classList.toggle('active');
              if (darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeIn dark-mode-regularBox';
              } else if (!darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeIn';
              }
              togglePopupForm.style.animationDuration = '0.1s';
              showForm = true;
            } else {
              setTimeout(function () {
                togglePopupFormContainer.style.display = 'none';
              }, 100);

              blur.classList.remove('active');
              if (darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeOut dark-mode-regularBox';
              } else if (!darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeOut';
              }
            }

            okbtn.addEventListener('click', function () {
              togglePopupFormContainer.style.animationDuration =
                '0.1s';

              if (darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeOut dark-mode-regularBox';
              } else if (!darkModeFlag) {
                togglePopupForm.className =
                  'animate__animated animate__fadeOut';
              }

              blur.classList.remove('active');

              window.location.href = '/product_id.html';
            });
            cancelbtn.addEventListener('click', toggleForm);
            function toggleForm() {
              if (!showForm) {
                togglePopupFormContainer.style.display = 'flex';
                togglePopupForm.style.animationDuration = '0.1s';
                if (darkModeFlag) {
                  togglePopupForm.className =
                    'animate__animated animate__fadeIn dark-mode-regularBox';
                } else if (!darkModeFlag) {
                  togglePopupForm.className =
                    'animate__animated animate__fadeIn';
                }
                blur.classList.toggle('active');
                showForm = true;
              } else {
                setTimeout(function () {
                  togglePopupFormContainer.style.display = 'none';
                }, 100);

                togglePopupForm.style.animationDuration = '0.1s';

                if (darkModeFlag) {
                  togglePopupForm.className =
                    'animate__animated animate__fadeOut dark-mode-regularBox';
                } else if (!darkModeFlag) {
                  togglePopupForm.className =
                    'animate__animated animate__fadeOut';
                }
                blur.classList.remove('active');
              }
            }
          }
        }

        dropdownButton.addEventListener('click', showOptionsDesktop);
        function showOptionsDesktop() {
          let pointer = d.getElementsByClassName(
            'addModify-container',
          );
          for (i = 0; i < pointer.length; i++) {
            pointer[i].className =
              'addModify-container animate__animated animate__fadeIn';
          }
          dropdownButtonClose.style.display = 'flex';
          addModifyContainer.style.display = 'flex';

          function changePointerEvent() {
            let pointer = d.getElementsByClassName('products');
            for (i = 0; i < pointer.length; i++) {
              pointer[i].style.pointerEvents = 'none';
            }
          }
          changePointerEvent();

          addModifyContainer.style.pointerEvents = 'auto';
          songlistDiv.style.pointerEvents = 'none';
          musicContainer.style.display = 'none';
          setTimeout(function () {
            d.body.addEventListener('click', closeOptions);
          }, 0);
        }

        musicContainer.addEventListener('click', showOptions);

        function showOptions() {
          if (mediaQuery.matches) {
            let pointer = d.getElementsByClassName(
              'addModify-container',
            );
            for (i = 0; i < pointer.length; i++) {
              pointer[i].className =
                'addModify-container animate__animated animate__slideOutRight';
            }

            dropdownButtonClose.style.display = 'flex';
            if (mediaQuery.matches) {
            } else {
              function changePointerEvent() {
                let pointer = d.getElementsByClassName('products');
                for (i = 0; i < pointer.length; i++) {
                  pointer[i].style.pointerEvents = 'none';
                }
              }
              changePointerEvent();
              addModifyContainer.style.pointerEvents = 'auto';
              songlistDiv.style.pointerEvents = 'none';
              musicContainer.style.display = 'none';
              setTimeout(function () {
                d.body.addEventListener('click', closeOptions);
              }, 0);
            }
          }
        }

        dropdownButtonClose.addEventListener('click', hideOptions);
        function hideOptions() {
          if (mediaQuery.matches) {
            addModifyContainer.className =
              'addModify-container animate__animated animate__slideOutRight';
            addModifyContainer.style.display = 'none';
          } else {
            addModifyContainer.className =
              'addModify-container animate__animated animate__flipOutX';

            (function () {
              let pointer = d.getElementsByClassName('products');
              for (i = 0; i < pointer.length; i++) {
                pointer[i].style.pointerEvents = 'auto';
              }
            })();

            addModifyContainer.style.pointerEvents = 'auto';
            songlistDiv.style.pointerEvents = 'auto';
            dropdownButtonClose.style.display = 'none';
            musicContainer.style.display = 'flex';
            addModifyContainer.style.display = 'none';
          }

          d.body.removeEventListener('click', closeOptions);
        }

        function closeOptions() {
          if (!mediaQuery.matches)
            if (addModifyContainer.style.display === 'flex') {
              hideOptions();
            }
        }

        function animatedTitle() {
          if (jsonName.length <= 24) {
            jsonNameContainer.style.animation = 'none';
          }
        }
        animatedTitle();

        infoString.addEventListener('click', function () {
          infoHandler();
        });

        function infoHandler() {
          const toggleInfoForm = d.getElementById('infoForm');
          const cancelbtn = d.getElementById('cancel');
          if (infoContainer.textContent.length === 37) {
            preventDefault();
          } else {
            toggleInfoForm.appendChild(infoContainer);
          }

          const blur = d.getElementById('blur');

          let showForm = false;

          if (!showForm) {
            toggleInfoForm.className =
              'animate__animated animate__fadeIn';
            toggleInfoForm.style.display = 'flex';
            let jsonTitle = d.getElementsByClassName('jsonTitle');

            if (darkModeFlag) {
              for (let i = 0; i < jsonTitle.length; i++) {
                jsonTitle[i].classList.add('dark-mode-focusBox');
                jsonTitle[i].classList.add('dark-mode-text-white');
              }
              infoContainer.classList.add('dark-mode-infoContainer');
              infoForm.classList.add('dark-mode');
            } else if (!darkModeFlag) {
              for (let i = 0; i < jsonTitle.length; i++) {
                jsonTitle[i].classList.remove('dark-mode-focusBox');
                jsonTitle[i].classList.remove('dark-mode-text-white');
              }
              infoContainer.classList.remove(
                'dark-mode-infoContainer',
              );
              infoForm.classList.remove('dark-mode');
            }
            blur.classList.toggle('active');

            showForm = true;
          } else {
            blur.classList.remove('active');
          }

          cancelbtn.addEventListener('click', toggleForm);

          function toggleForm() {
            if (!showForm) {
              blur.classList.toggle('active');
              showForm = true;
            } else {
              toggleInfoForm.style.display = 'none';
              blur.classList.remove('active');
              try {
                toggleInfoForm.removeChild(infoContainer);
              } catch (error) {
                console.log(error);
              }
            }
          }
        }

        addString.addEventListener('click', function () {
          addHandler();
        });

        function addHandler() {
          let productId = songlistInfo[loopIndex]._id;
          const togglePopupForm = d.getElementById('myForm');
          const cancelbtn = d.getElementById('cancel');
          const blur = d.getElementById('blur');

          let showForm = false;

          if (!showForm) {
            togglePopupForm.classList.remove('form-popup');
            blur.classList.toggle('active');
            showForm = true;
          } else {
            togglePopupForm.classList.add('form-popup');
            blur.classList.remove('active');
          }

          cancelbtn.addEventListener('click', toggleForm);

          function toggleForm() {
            if (!showForm) {
              togglePopupForm.classList.remove('form-popup');
              blur.classList.toggle('active');

              showForm = true;
            } else {
              togglePopupForm.classList.add('form-popup');
              blur.classList.remove('active');
            }
          }

          let addForm = d.getElementById('myForm');

          addForm.addEventListener('submit', (e) => {
            let progress = d.getElementById('progress').value;
            let key = d.getElementById('setlistKey').value;
            e.preventDefault();
            fetch('/api/orders/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                productId: productId,
                progress: progress,
                key: key,
              }),
            })
              .then((response) => response.json())
              .then(
                (response) => ('Success:', console.log(response)),
              );
            window.location.href = '/orders.html';
          });
        }

        myImagesArray = [
          'BBKing.png',
          'CountBasie.png',
          'BillEvans2.png',
          'Bluesguitar.png',
          'StevieRayVauhn.png',
          'DrJohn.png',
          'BillEvans1.png',
          'JimiHendrix2.png',
          'JohnColtrane.png',
          'MarcusMiller.png',
          'MilesDavis1.png',
          'MilesDavis1.png',
          'MilesDavis2.png',
          'MuddyWaters.png',
          'RayCharles1.png',
          'RayCharles2.png',
          'JimiHendrix1.png',
          'TheloniusMonk.png',
        ];

        imageButton.src =
          '/images/covers/' + myImagesArray[imageOrderIndex++];

        let artist0 = d.getElementById('artist0');
        let artist1 = d.getElementById('artist1');
        let artist2 = d.getElementById('artist2');
        let artist3 = d.getElementById('artist3');

        let songTitle0 = d.getElementById('songTitle0');
        let songTitle1 = d.getElementById('songTitle1');
        let songTitle2 = d.getElementById('songTitle2');
        let songTitle3 = d.getElementById('songTitle3');

        recentNameArray.push(jsonName);
        recentArtistArray.push(jsonArtist);

        setTimeout(function () {
          try {
            d.querySelectorAll('data-image').value =
              'https://i.postimg.cc/6Q25hkzb/Screenshot-2020-10-30-at-22-03-12.png';
          } catch (error) {}
          try {
            songTitle0.innerHTML =
              recentNameArray[recentNameArray.length - 1];
            artist0.innerHTML =
              recentArtistArray[recentArtistArray.length - 1];
          } catch (error) {}
          try {
            songTitle1.innerHTML =
              recentNameArray[recentNameArray.length - 2];
            artist1.innerHTML =
              recentArtistArray[recentArtistArray.length - 2];
          } catch (error) {}
          try {
            songTitle2.innerHTML =
              recentNameArray[recentNameArray.length - 3];
            artist2.innerHTML =
              recentArtistArray[recentArtistArray.length - 3];
          } catch (error) {}
          try {
            songTitle3.innerHTML =
              recentNameArray[recentNameArray.length - 4];
            artist3.innerHTML =
              recentArtistArray[recentArtistArray.length - 4];
          } catch (error) {}
        }, 0);

        //Sortbutton
        sortButtonText.addEventListener('click', sortButtonToggle);
        sortButton.addEventListener('click', sortButtonToggle);
        function sortButtonToggle() {
          if (sortButtonFlag) {
            filler.style.flexDirection = 'column';
            sortButton.classList.add('active');

            if (mediaQuery.matches) {
              window.scrollTo(0, 0);
              filler.style.marginBottom = '22vh';
              filler.style.marginTop = '15vh';
              songlistDiv.className =
                'productsContainer animate__animated animate__fadeIn';
            } else if (!mediaQuery.matches) {
              songlistDiv.className =
                'products animate__animated animate__fadeIn';
            }
            //next
            if (!darkModeFlag) {
              sortButtonText.className =
                'animate__animated animate__bounceIn';
              sortButtonText.classList.remove('dark-mode-text');
            } else if (darkModeFlag) {
              sortButtonText.className =
                'animate__animated animate__bounceIn dark-mode-text';
            }
            sortButton.className =
              'animate__animated animate__bounceIn';
            sortButtonIcon.style.transform =
              'scaleX(-1)rotate(180deg)';

            if (mediaQuery.matches) {
              sortButtonText.innerHTML = 'Recently added';
            } else {
              sortButtonText.innerHTML = 'Sort by recently added';
            }
            setTimeout(function () {
              sortButtonFlag = false;
            }, 0);

            setTimeout(function () {
              sortButton.className = '';
              if (mediaQuery.matches) {
                songlistDiv.className = 'productsContainer';
              } else if (!mediaQuery.matches) {
                songlistDiv.className = 'products';
              }
            }, 300);
          } else if (!sortButtonFlag) {
            filler.style.flexDirection = 'column-reverse';

            sortButtonIcon.style.transform = 'scaleX(-1)rotate(0deg)';
            sortButton.classList.remove('active');

            sortButton.className =
              'animate__animated animate__bounceIn';

            if (!darkModeFlag) {
              sortButtonText.className =
                'animate__animated animate__bounceIn';
              sortButtonText.classList.remove('dark-mode-text');
            } else if (darkModeFlag) {
              sortButtonText.className =
                'animate__animated animate__bounceIn dark-mode-text';
            }

            if (mediaQuery.matches) {
              songlistDiv.className =
                'productsContainer animate__animated animate__fadeIn';
            } else if (!mediaQuery.matches) {
              songlistDiv.className =
                'products animate__animated animate__fadeIn';
            }

            if (mediaQuery.matches) {
              window.scrollTo(0, 0);
              sortButtonText.innerHTML = 'Default order';
              musicContainer.style.height = '0';
              musicContainer.style.right = '5vw';

              let pointer = d.getElementsByClassName(
                'play-container',
              );
              for (let i = 0; i < pointer.length; i++) {
                pointer[i].style.left = '31px';
              }
            } else {
              sortButtonText.innerHTML = 'Sort by default order';
            }
            setTimeout(function () {
              sortButtonFlag = true;
            }, 0);

            setTimeout(function () {
              sortButton.className = '';
              if (!mediaQuery.matches) {
                songlistDiv.className = 'products';
              } else if (mediaQuery.matches) songlistDiv.className = 'productsContainer';
            }, 300);
          }
        }

        let clearSearch1 = d.getElementById('clearSearch1');
        let clearSearch2 = d.getElementById('clearSearch2');
        let clearSearch3 = d.getElementById('clearSearch3');
        let clearSearch4 = d.getElementById('clearSearch4');
        let clearSearch5 = d.getElementById('clearSearch5');

        clearSearch1.addEventListener('click', function () {
          introTick.value = '';
          clearSearch1.style.display = 'none';
        });

        clearSearch2.addEventListener('click', function () {
          verseTick.value = '';
          clearSearch2.style.display = 'none';
        });

        clearSearch3.addEventListener('click', function () {
          bridgeTick.value = '';
          clearSearch3.style.display = 'none';
        });

        clearSearch4.addEventListener('click', function () {
          chorusTick.value = '';
          clearSearch4.style.display = 'none';
        });

        clearSearch5.addEventListener('click', function () {
          outroTick.value = '';
          clearSearch5.style.display = 'none';
        });

        introTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            introTick.value = '';
            clearSearch1.style.display = 'none';
          } else {
            clearSearch1.style.display = 'flex';
          }
        });

        verseTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            verseTick.value = '';
            clearSearch2.style.display = 'none';
          } else {
            clearSearch2.style.display = 'flex';
          }
        });

        bridgeTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            bridgeTick.value = '';
            clearSearch3.style.display = 'none';
          } else {
            clearSearch3.style.display = 'flex';
          }
        });

        chorusTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            chorusTick.value = '';
            clearSearch4.style.display = 'none';
          } else {
            clearSearch4.style.display = 'flex';
          }
        });

        outroTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            outroTick.value = '';
            clearSearch5.style.display = 'none';
          } else {
            clearSearch5.style.display = 'flex';
          }
        });

        keyTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
          } else {
            keyTick.style.color = 'rgba(97, 103, 124, 1)';
          }
        });

        commentTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            d.getElementById('tickIcon3').style.display = 'none';
          } else {
            d.getElementById('comment').style.color =
              'rgba(97, 103, 124, 1)';
          }
        });

        fileTick.addEventListener('input', function (e) {
          if ((input.textContent = e.target.value === '')) {
            d.getElementById('tickIcon4').style.display = 'none';
          } else {
            d.getElementById('file').style.color =
              'rgba(97, 103, 124, 1)';
            fileTick.style.color = 'rgba(97, 103, 124, 1)';
          }
        });

        let liveRecording = d.getElementById('liveRecording');
        let homeRecording = d.getElementById('homeRecording');
        let studioRehearsal = d.getElementById('studioRehearsal');
        let originalTrack = d.getElementById('originalTrack');

        liveRecording.addEventListener('click', filterHandler);
        homeRecording.addEventListener('click', filterHandler);
        studioRehearsal.addEventListener('click', filterHandler);
        originalTrack.addEventListener('click', filterHandler);

        songlistDiv.setAttribute('playlist', `${jsonComment}s`); // Adding the correct playlist attribute to all tracks.

        filterToSearch = [
          'LIVE RECORDING',
          'HOME RECORDING',
          'STUDIO REHEARSAL',
          'ORIGINAL TRACK',
        ]; // Used for the search functionality to only display tracks inside the active filter.

        // ------------------------------ MASTER FUNCTIONS FOR EVERY FILTER  -----------------------------------------

        function filterHandler() {
          displayTracksInFilter(); // Display only tracks in selected filter.
          filterTrackCount(); // Display amount of tracks in active filter.
          filterTitle(); // Display the title of the active filter.
          emptyFilterInfo(); // Display information when filter is empty.
          noResultsFound(); // Display information if search doesn't yield any results.
          // applyBorderRadius();
        }

        // ------------------------------ MASTER FUNCTIONS FOR EVERY FILTER   -----------------------------------------

        // ------------------------------ DISPLAY TRACKS OF SELECTED FILTER  -----------------------------------------

        function displayTracksInFilter() {
          // activeFilterTracks displays all tracks of the selected filter
          activeFilterTracks = d.querySelectorAll(
            '[playlist = "' + filterNames[trueIndex] + '"]',
          );

          if (falseIndex.length === filterNames.length) {
            songlistDiv.style.display = 'flex'; // Display all tracks if allSongs filter is selected
            allSongs.style.color = '#e9c37d'; // All songs filter is active
          } else {
            songlistDiv.style.display = 'none'; // Hide all tracks if any other filter is selected
            allSongs.style.color = '#61677c'; // All songs filter is inactive
          }

          if (filterNames[trueIndex] !== undefined) {
            if (
              (jsonName.toUpperCase().indexOf(filter) > -1 &&
                jsonComment
                  .toUpperCase()
                  .indexOf(filterToSearch[trueIndex]) > -1) ||
              (jsonArtist.toUpperCase().indexOf(filter) > -1 &&
                jsonComment
                  .toUpperCase()
                  .indexOf(filterToSearch[trueIndex]) > -1)
            ) {
              songlistDiv.style.display = 'flex';
            } else {
              songlistDiv.style.display = 'none';
            }
          }

          if (filterNames[trueIndex] === undefined && input.value) {
            if (
              jsonName.toUpperCase().indexOf(filter) > -1 ||
              jsonArtist.toUpperCase().indexOf(filter) > -1
            ) {
              songlistDiv.style.display = 'flex';
            } else {
              songlistDiv.style.display = 'none';
            }
          }
          if (!input.value) {
            for (let i = 0; i < activeFilterTracks.length; i++) {
              activeFilterTracks[i].style.display = 'flex'; // Now display selected filter tracks.
            }
          }
        }

        // ------------------------------ DISPLAY TRACKS OF SELECTED FILTER  -----------------------------------------

        // ------------------------------ SHOW "NO SONGS YET" CTA IF NO TRACKS IN DB  -----------------------------------------

        function noTracksText() {
          playlistInfo.style.display = 'flex'; // Displays name of active playlist and sort option.
          playlistWrapper.style.display = 'flex'; // show the filter buttons.
          if (mediaQuery.matches) {
          } else {
            footer.style.visibility = 'visible';
            footer.style.animationDelay = '1s';
            footer.style.animationDuration = '1s';
            footer.className = 'animate__animated animate__slideInUp';
          }

          // footer.style.display = 'flex'; // Show the controls for audioPlayer.
          if (!mediaQuery.matches) {
            searchButtonContainer.className =
              'animate__animated animate__slideInDown';
            userWrapper.className =
              'animate__animated animate__slideInDown';
            userWrapper.style.display = 'flex';
            searchButtonContainer.style.animationDelay = '1s';
            searchButtonContainer.style.animationDuration = '1s';
            searchButtonContainer.style.display = 'flex';
          }

          input.placeholder = 'Search title or artist';
          // playPause.style.display = 'flex';
        }
        noTracksText();

        // ------------------------------ SHOW "NO SONGS YET" CTA IF NO TRACKS IN DB   -----------------------------------------

        // ----------------------------- DISPLAY THE NAME OF THE CURRENTLY SELECTED FILTER  -----------------------------------------

        function filterTitle() {
          playlistTitle.innerHTML = `${filterNames[trueIndex]}`;
          if (filterNames[trueIndex] === undefined)
            // If trueIndex is undefined -  no playlist is selected.
            playlistTitle.innerHTML = 'All songs';
        }

        // ----------------------------- DISPLAY THE NAME OF THE CURRENTLY SELECTED FILTER  -----------------------------------------

        //  ----------------------------- DISPLAY ALL TRACKS INSIDE SELECTED FILTER  -----------------------------------------

        songCountNumber.innerHTML = `${playListArray.length}`;

        function filterTrackCount() {
          falseIndex.length === 4 // number of inactive filters (4 is when no filter is selected)
            ? (songCountNumber.innerHTML = `${playListArray.length}`)
            : (songCountNumber.innerHTML = `${activeFilterTracks.length}`);
        }

        //  ----------------------------- DISPLAY ALL TRACKS INSIDE SELECTED FILTER  -----------------------------------------

        // -------------------- DISPLAY INFORMATION IF FILTER IS EMPTY (NO TRACKS ADDED YET) -----------------------------------------

        function emptyFilterInfo() {
          // falseIndex does not equal 4 when a filter is selected (there a 4 filters in total)
          if (
            activeFilterTracks.length === 0 &&
            falseIndex.length !== 4
          ) {
            filler.style.display = 'none';
            suggestion.style.display = 'flex'; // Display "Start building this playlist"
            // playlistInfo.style.display = 'none'; // Hide the name of the empty filter and songcount.
          } else {
            filler.style.display = 'flex';
            suggestion.style.display = 'none';
            // playlistInfo.style.display = 'flex'; // Displays name of active playlist and sort option.
          }
        }

        // -------------------- DISPLAY INFORMATION IF FILTER IS EMPTY (NO TRACKS ADDED YET) -----------------------------------------

        // ------------------------- EV. LISTENER TO CHECK SEARCHED QUERY AGAINST ACTIVE FILTER  -----------------------------------------

        // ------------------------------------------- MOBILE SEARCH  -----------------------------------------

        let infoWrapper1 = d.getElementById('infoWrapper1');
        let infoWrapper2 = d.getElementById('infoWrapper2');

        let agendaIcon1 = d.getElementById('agendaIcon1');
        let agendaIcon2 = d.getElementById('agendaIcon2');

        let expandFlag1 = false;
        infoWrapper1.addEventListener('click', function () {
          if (!expandFlag1) {
            if (mediaQuery.matches) {
              onTheAgenda.style.height = '30vh';
              agendaIcon1.style.transform = 'rotate(180deg)';
            } else if (!mediaQuery.matches) {
            }
            expandFlag1 = true;
          } else if (expandFlag1) {
            if (mediaQuery.matches) {
              onTheAgenda.style.height = '60px';
              agendaIcon1.style.transform = 'rotate(0deg)';
            } else if (!mediaQuery.matches) {
            }
            expandFlag1 = false;
          }
        });

        let expandFlag2 = false;
        infoWrapper2.addEventListener('click', function () {
          if (!expandFlag2) {
            if (mediaQuery.matches) {
              upcomingGigs.style.height = '21vh';
              agendaIcon2.style.transform = 'rotate(180deg)';
            } else if (!mediaQuery.matches) {
            }
            expandFlag2 = true;
          } else if (expandFlag2) {
            if (mediaQuery.matches) {
              upcomingGigs.style.height = '60px';
              agendaIcon2.style.transform = 'rotate(0deg)';
            } else if (!mediaQuery.matches) {
            }
            expandFlag2 = false;
          }
        });

        let searchFlag = false;
        let searchIcon = d.getElementById('searchIcon');

        cancelSearch.addEventListener('touchstart', function () {
          if (homePageWrapper.style.visibility === 'visible') {
            userWrapper.style.display = 'flex';
          } else {
            userWrapper.style.display = 'none';
          }
          infoOptions.style.top = '11vh';
          mobileSearch.style.color = '#61677c';
          mobileSearch.style.boxShadow =
            '5px -5px 20px #fff, 5px 5px 20px #babecc';
          input.value = '';
          input.style.animationDuration = '0.2s';
          if (darkModeFlag) {
            input.className =
              'animate__animated animate__slideOutLeft dark-mode-input dark-mode-input::placeholder';
          } else if (!darkModeFlag) {
            input.className =
              'animate__animated animate__slideOutLeft';
          }
          dynamicDiv.style.height = 'auto';
          clearSearch.style.display = 'none';
          filler.style.display = 'flex';
          resultContainer.style.display = 'none';
          songlistDiv.style.display = 'flex';
          playlistInfo.style.display = 'flex';
          searchFlag = false;
          cancelSearch.className =
            'animate__animated animate__fadeOut';
          cancelSearch.style.display = 'none';
          clearSearch.style.display = 'none';
          setTimeout(function () {
            searchButtonContainer.style.display = 'none';

            input.style.display = 'none';

            playlistInfo.style.pointerEvents = 'auto';
            searchButtonContainer.style.width = '100vw';
          }, 200);
        });

        input.addEventListener('focus', function () {
          toggleAddSongContainer.style.display = 'none';
          if (mediaQuery.matches) {
            allSongs.click();
            playlistInfo.style.display = 'none';
            footer.style.display = 'flex';
          }

          if (homePageWrapper.style.visibility === 'visible') {
            homePageWrapper.style.display = 'none';
            dynamicDiv.style.display = 'flex';
            home.style.color = '#61677c';
            songs.style.color = '#e9c37d';
            addModifyContainer.style.display = 'none';
            infoOptions.style.display = 'none';
            dynamicDiv.style.display;
            dynamicDiv.className =
              'animate__animated animate__fadeIn';
            if (mediaQuery.matches) {
              songs.style.boxShadow =
                '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              home.style.boxShadow =
                '5px -5px 20px #fff, 5px 5px 20px #babecc';
            }
          }
          if (chatWrapper.style.display === 'flex') {
            chatWrapper.style.display = 'none';
            dynamicDiv.style.display = 'flex';
            chat.style.color = '#61677c';
            songs.style.color = '#e9c37d';
            dynamicDiv.className =
              'animate__animated animate__fadeIn';
            if (mediaQuery.matches) {
              songs.style.boxShadow =
                '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              chat.style.boxShadow =
                '5px -5px 20px #fff, 5px 5px 20px #babecc';
            }
          }
          if (mediaQuery.matches) {
            searchButtonContainer.style.width = '75vw';
            cancelSearch.style.animationDelay = '0.1s';
            cancelSearch.style.animationDuration = '0.1s';
            cancelSearch.className =
              'animate__animated animate__fadeIn';
            if (darkModeFlag) {
              cancelSearch.classList.add('dark-mode-text-white');
            } else if (!darkModeFlag) {
              cancelSearch.classList.remove('dark-mode-text-white');
            }
            cancelSearch.style.display = 'flex';
          }
        });

        mobileSearch.addEventListener('touchstart', responsiveSearch);
        function responsiveSearch() {
          if (!searchFlag) {
            searchButtonContainer.style.display = 'flex';
            mobileSearch.style.color = '#221e41';
            mobileSearch.style.boxShadow =
              '-2px -2px 5px #fff, 2px 2px 5px #babecc';
            input.style.animationDuration = '0.2s';
            input.className = 'animate__animated animate__fadeInLeft';
            if (darkModeFlag) {
              closeIcon.classList.add('dark-mode-text-black');
              searchIcon.classList.add('dark-mode-text-black');
              input.classList.add('dark-mode-input');
              input.classList.add('dark-mode-input::placeholder');
            } else if (!darkModeFlag) {
              closeIcon.classList.remove('dark-mode-text-black');
              searchIcon.classList.remove('dark-mode-text-black');
              input.classList.remove('dark-mode-input');
              input.classList.remove('dark-mode-input::placeholder');
            }
            input.style.display = 'flex';
            searchFlag = true;
            setTimeout(function () {
              searchIcon.style.display = 'flex';
            }, 0);
            setTimeout(function () {
              playlistInfo.style.display = 'none';
              playlistInfo.style.pointerEvents = 'none';
            }, 200);
          } else if (searchFlag) {
            if (homePageWrapper.style.visibility === 'visible') {
              userWrapper.style.display = 'flex';
            } else {
              userWrapper.style.display = 'none';
            }
            searchIcon.style.display = 'none';
            input.style.animationDuration = '0s';
            dynamicDiv.style.height = 'auto';
            cancelSearch.style.display = 'none';
            input.value = '';
            clearSearch.style.display = 'none';
            filler.style.display = 'flex';
            songlistDiv.style.display = 'flex';
            playlistInfo.style.display = 'flex';
            mobileSearch.style.color = '#61677c';
            mobileSearch.style.boxShadow =
              '5px -5px 20px #fff, 5px 5px 20px #babecc';
            input.style.animationDuration = '0.2s';
            if (darkModeFlag) {
              input.className =
                'animate__animated animate__slideOutLeft dark-mode-input dark-mode-input::placeholder';
            } else if (!darkModeFlag) {
              input.className =
                'animate__animated animate__slideOutLeft';
            }

            setTimeout(function () {
              input.style.display = 'none';
              resultContainer.style.display = 'none';

              searchButtonContainer.style.width = '100vw';
              playlistInfo.style.pointerEvents = 'auto';
              searchButtonContainer.style.display = 'none';
            }, 200);

            searchFlag = false;
          }
        }

        // ------------------------------------------- MOBILE SEARCH  -----------------------------------------

        input.addEventListener('keyup', filterSearchQuery);
        function filterSearchQuery() {
          filter = input.value.toUpperCase();

          if (filterNames[trueIndex] === undefined) {
            if (
              jsonName.toUpperCase().indexOf(filter) > -1 ||
              jsonArtist.toUpperCase().indexOf(filter) > -1
            ) {
              songlistDiv.style.display = 'flex';
            } else {
              songlistDiv.style.display = 'none';
            }
          } else if (filterNames[trueIndex] !== undefined) {
            if (
              (jsonName.toUpperCase().indexOf(filter) > -1 &&
                jsonComment
                  .toUpperCase()
                  .indexOf(filterToSearch[trueIndex]) > -1) ||
              (jsonArtist.toUpperCase().indexOf(filter) > -1 &&
                jsonComment
                  .toUpperCase()
                  .indexOf(filterToSearch[trueIndex]) > -1)
            ) {
              songlistDiv.style.display = 'flex';
            } else {
              songlistDiv.style.display = 'none';
            }
          }
          noResultsFound(); // Display information if search doesn't yield any results
        }

        // ------------------- EV. LISTENER TO CHECK SEARCHED QUERY AGAINST ACTIVE FILTER -----------------------------------------

        // ----------------------DISPLAY INFORMATION IF SEARCH DOESN'T YIELD ANY RESULTS -----------------------------------------

        function noResultsFound() {
          let compStyles = window.getComputedStyle(songlistDiv);
          let para = compStyles.getPropertyValue('display');
          noResults.innerHTML = `No results for&nbsp<span style='color:#e9c37d'>${input.value}</span>`;
          noTracksVisibleArray.push(para);
          const isBelowThreshold = (currentValue) =>
            currentValue === 'none';

          if (noTracksVisibleArray.every(isBelowThreshold)) {
            if (mediaQuery.matches) {
              dynamicDiv.style.height = '100vw';
            }
            resultContainer.style.display = 'flex';
          } else {
            if (mediaQuery.matches) {
              dynamicDiv.style.height = 'auto';
            }
            resultContainer.style.display = 'none';
          }
          setTimeout(function () {
            noTracksVisibleArray.splice(
              0,
              noTracksVisibleArray.length,
            );
          }, 0);
        }

        // ------------------------ DISPLAY INFORMATION IF SEARCH DOESN'T YIELD ANY RESULTS -----------------------------------------
        // ------------------------ REMOVE CURRENTLY ACTIVE FILTER WHEN SELECTING ALL SONGS -----------------------------------------

        const removeActiveFilter = [
          'liveRecording',
          'homeRecording',
          'studioRehearsal',
          'originalTrack',
        ];

        allSongs.addEventListener('click', allFilter);
        function allFilter() {
          try {
            d.getElementById(
              removeActiveFilter[parseInt(trueIndex)],
            ).click();
          } catch (error) {}
        }

        // --------------------------REMOVE CURRENTLY ACTIVE FILTER WHEN SELECTING ALL SONGS ----------------------------------------
        // ------------------------------------CLEAR SEARCH INPUT FIELD ------------------------------------------------

        let clearSearch = d.getElementById('clearSearch');

        input.addEventListener('input', updateValue);

        function updateValue(e) {
          if ((input.textContent = e.target.value === '')) {
            clearSearch.style.display = 'none';
          } else {
            clearSearch.style.display = 'flex';
          }
        }

        clearSearch.addEventListener('click', function () {
          input.value = '';
          clearSearch.style.display = 'none';
          if (!mediaQuery.matches) {
            playlistInfo.style.display = 'flex';
            playlistWrapper.style.display = 'flex';
            filler.style.display = 'flex';
          }
          resultContainer.style.display = 'none';

          filterSearchQuery(); // Only display tracks inside active filter on clear.
        });

        // --------------------------------------- CLEAR SEARCH INPUT FIELD ------------------------------------------------

        // ----------------------- APPLY BORDER RADIUS TO FIRST AND LAST STRACK IN PLAYLIST ------------------------------------------------

        function scrollDetect() {
          window.onscroll = function () {
            if (!mediaQuery.matches) {
              let currentScroll = d.documentElement.scrollTop; // Get Current Scroll Value
              if (currentScroll > 0) {
                input.style.width = '180px';
              } else if (currentScroll < 50) {
                input.style.width = '300px';
              }
            }
          };
        }

        scrollDetect();

        // ----------------------- APPLY BORDER RADIUS TO FIRST AND LAST CARD IN PLAYLIST ---------------------------

        togglePopupFormContainer.onclick = function (e) {
          if (e.target !== this) return;
          d.getElementById('cancelDelete').click();
        };

        deleteString.addEventListener('click', function () {
          deleteHandler();
        });

        // ---------------------------------------------- DELETE REQUEST --------------------------------------------

        function deleteHandler() {
          let productId = { value: songlistInfo[loopIndex]._id };
          let songKey = songlistInfo[loopIndex].link.replace(
            /.*(?=tracklist)/i,
            '',
          );
          Cookies.set('sessionCookie', productId.value);

          const cancelbtn = d.getElementById('cancelDelete');
          const blur = d.getElementById('blur');
          let showForm = false;
          if (!showForm) {
            togglePopupFormContainer.style.display = 'flex';
            blur.classList.toggle('active');
            toggleDeletePopupForm.className =
              'animate__animated animate__fadeIn';
            showForm = true;
            if (darkModeFlag) {
              toggleDeletePopupForm.classList.add(
                'dark-mode-regularBox',
              );
            } else if (!darkModeFlag) {
              toggleDeletePopupForm.classList.remove(
                'dark-mode-regularBox',
              );
            }
          } else {
            setTimeout(function () {
              togglePopupFormContainer.style.display = 'none';
            }, 300);
            blur.classList.remove('active');

            if (darkModeFlag) {
              toggleDeletePopupForm.className =
                'animate__animated animate__fadeOut dark-mode-regularBox';
            } else if (!darkModeFlag) {
              toggleDeletePopupForm.className =
                'animate__animated animate__fadeOut';
            }
          }
          cancelbtn.addEventListener('click', toggleForm);
          function toggleForm() {
            setTimeout(function () {
              togglePopupFormContainer.style.display = 'none';
            }, 100);

            if (darkModeFlag) {
              toggleDeletePopupForm.className =
                'animate__animated animate__fadeOut dark-mode-regularBox';
            } else if (!darkModeFlag) {
              toggleDeletePopupForm.className =
                'animate__animated animate__fadeOut';
            }

            blur.classList.remove('active');
          }

          const deletebtn = d.getElementById('okDelete');
          deletebtn.addEventListener('click', deleteCard);
          function deleteCard() {
            let params = {
              Bucket: 'kaernvirke',
              Key: songKey,
            };

            s3.deleteObject(params, function (err, data) {
              if (err) console.log(err, err.stack);
              // an error occurred
              else console.log(data); // successful response
              let specificId = Cookies.get('sessionCookie');
              fetch('/api/products/' + specificId, {
                method: 'DELETE',
              })
                .then((res) => res.text())
                .then((res) => console.log(res));
              localStorage.removeItem('songVersion');
              setTimeout(function () {
                window.location.href = '/products.html';
              }, 100);
            });
          }
        }

        for (let i = 1; i < productId.length; i++) {
          modifyButton.addEventListener(
            'click',
            modifyHandler,
            false,
          );

          playButton.addEventListener(
            'touchstart',
            playHandler,
            false,
          );
          playButton.addEventListener('click', playHandler, false);
          addButton.addEventListener('click', addHandler, false);
          infoButton.addEventListener('click', infoHandler, false);
          deleteButton.addEventListener('click', deleteHandler, true);
          d.getElementById('filler').appendChild(songlistDiv);
          songlistDiv.appendChild(imageContainer);
          songlistDiv.appendChild(jsonContainer);
          songlistDiv.appendChild(informationContainer);
          songlistDiv.appendChild(musicContainer);
          songlistDiv.appendChild(dropdownButton);
          musicContainer.appendChild(controlContainer);
          informationContainer.appendChild(dropdownButtonClose);
          dropdownButtonClose.appendChild(dropdownIconClose);
          dropdownButtonClose.id = 'dropdownIcon';
          dropdownButtonClose.innerHTML =
            '<ion-icon name="ellipsis-vertical"></ion-icon>';
          dropdownButton.appendChild(dropdownIcon);
          dropdownIcon.id = 'dropdownIcon';
          dropdownIcon.innerHTML =
            '<ion-icon name="ellipsis-vertical"></ion-icon>';
          infoIcon.innerHTML =
            '<ion-icon name="information-outline"></ion-icon>';
          deleteIcon.innerHTML =
            '<ion-icon name="trash-outline"></ion-icon>';
          modifyIcon.innerHTML =
            '<ion-icon name="create-outline"></ion-icon>';
          addIcon.innerHTML =
            '<ion-icon name="add-outline"></ion-icon>';
          infoString.innerHTML = 'Info';
          addString.innerHTML = 'Setlist';
          modifyString.innerHTML = 'Edit';
          deleteString.innerHTML = 'Delete';

          //icons
          playContainer.appendChild(iconContainer);
          playButton.appendChild(iconContainer);

          iconContainer.appendChild(SVGplayIcon);
          iconContainer.appendChild(SVGpauseIcon);

          addButton.appendChild(addIcon);
          deleteButton.appendChild(deleteIcon);

          modifyButton.appendChild(modifyIcon);
          infoButton.appendChild(infoIcon);

          SVGplayIcon.appendChild(playItag);
          SVGpauseIcon.appendChild(pauseItag);

          nameButton.appendChild(nameIcon);
          artistButton.appendChild(artistIcon);
          keyButton.appendChild(keyIcon);
          introButton.appendChild(introIcon);
          verseButton.appendChild(verseIcon);
          bridgeButton.appendChild(bridgeIcon);
          chorusButton.appendChild(chorusIcon);
          outroButton.appendChild(outroIcon);

          if (mediaQuery.matches) {
            blur.appendChild(addModifyContainer);
          } else {
          }
          if (!mediaQuery.matches) {
            songlistDiv.appendChild(addModifyContainer);
          }
          imageContainer.appendChild(mainImageButtonBox);
          songlistDiv.appendChild(playContainer);
          mainImageButtonBox.appendChild(imageButtonBox);
          imageButtonBox.appendChild(imageButton);
          playContainer.appendChild(playButton);
          timeContainer.appendChild(curr_time);
          timeContainer.appendChild(totalDuration);

          musicBox.appendChild(nowPlaying);
          musicBox.appendChild(timeContainer);
          musicBox.appendChild(range);
          musicBox.appendChild(fillBar);

          timeContainer.appendChild(musicElement);

          musicElement.appendChild(source);
        }

        if (!mediaQuery.matches) {
          songlistDiv.addEventListener('mouseenter', addBackGround);
        }

        function addBackGround() {
          playButton.style.display = 'flex';
          index = songlistDiv.id.charAt(4);
          previousGlobalTrackArray.unshift(index);
          clockDateValue = previousGlobalTrackArray.slice(0, 2);

          if (
            clockDateValue[1] === undefined &&
            clockDateValue[0] === 0
          ) {
            songlistDiv.addEventListener(
              'mouseleave',
              removeBackground,
            );
          } else if (clockDateValue[1] === undefined) {
            songlistDiv.addEventListener(
              'mouseleave',
              removeBackground,
            );
          } else if (clockDateValue[1] === clockDateValue[0]) {
            songlistDiv.addEventListener(
              'mouseleave',
              removeBackground,
            );
          } else if (previousTrackIndex === undefined) {
          } else if (previousTrackIndex[0] === clockDateValue[0]) {
            songlistDiv.removeEventListener(
              'mouseleave',
              removeBackground,
            );
          } else {
            if (!mediaQuery.matches) {
              songlistDiv.removeEventListener('mouseleave', specific);
            }
            songlistDiv.addEventListener(
              'mouseleave',
              removeBackground,
            );
          }
          if (darkModeFlag) {
            songlistDiv.style.backgroundColor = '#181a23'; //DARKEST
          } else if (!darkModeFlag) {
            songlistDiv.style.backgroundColor = '#e3ebf8'; //DARKEST
          }
        }

        function specific() {
          if (darkModeFlag) {
            songlistDiv.style.backgroundColor = '#181a23'; //LIGHTEST
          } else if (!darkModeFlag) {
            if (!mediaQuery.matches) {
              songlistDiv.style.backgroundColor = '#e6edf8'; //LIGHTEST
            } else if (mediaQuery.matches) {
              songlistDiv.style.backgroundColor = '#e3ebf8'; //LIGHTEST
            }
          }
        }

        songlistDiv.addEventListener('click', trackHighlight);

        function trackHighlight() {
          try {
            let eventIsTrusted = event.isTrusted;
            if (eventIsTrusted) {
              index = songlistDiv.id.charAt(4);
              previousGlobalTrackArray2.unshift(index);
              previousTrackIndex = previousGlobalTrackArray2.slice(
                0,
                2,
              );
              if (previousTrackIndex[1] === undefined) {
                if (darkModeFlag) {
                  songlistDiv.style.backgroundColor = '#181a23'; //DARKEST
                } else if (!darkModeFlag) {
                  songlistDiv.style.backgroundColor = '#e3ebf8'; //DARKEST
                }
                if (!mediaQuery.matches) {
                  songlistDiv.addEventListener(
                    'mouseleave',
                    specific,
                  );
                }
              } else if (
                d.getElementById(
                  `musicElement${previousTrackIndex[1]}`,
                ).currentTime > 0 &&
                previousTrackIndex[1] !== previousTrackIndex[0]
              ) {
                if (!mediaQuery.matches) {
                  songlistDiv.addEventListener(
                    'mouseleave',
                    specific,
                  );
                }
                if (darkModeFlag) {
                  if (mediaQuery.matches) {
                    d.getElementById(
                      `card${previousTrackIndex[1]}`,
                    ).style.backgroundColor = '#181a23';
                  } else if (!mediaQuery.matches) {
                    d.getElementById(
                      `card${previousTrackIndex[1]}`,
                    ).style.backgroundColor = '#161820';
                  }
                } else if (!darkModeFlag) {
                  if (mediaQuery.matches) {
                    d.getElementById(
                      `card${previousTrackIndex[1]}`,
                    ).style.backgroundColor = '#e3ebf8';
                  } else if (!mediaQuery.matches) {
                    d.getElementById(
                      `card${previousTrackIndex[1]}`,
                    ).style.backgroundColor = '#e9f0fb';
                  }
                }
              } else if (
                previousTrackIndex[1] === previousTrackIndex[0]
              ) {
                if (darkModeFlag) {
                  songlistDiv.style.backgroundColor = '#181a23'; //DARKEST
                } else if (!darkModeFlag) {
                  songlistDiv.style.backgroundColor = '#e3ebf8'; //DARKEST
                }
              } else {
                if (!mediaQuery.matches) {
                  songlistDiv.addEventListener(
                    'mouseleave',
                    specific,
                  );
                }
                if (darkModeFlag) {
                  d.getElementById(
                    `card${previousTrackIndex[1]}`,
                  ).style.backgroundColor = '#161820';
                } else if (!darkModeFlag) {
                  d.getElementById(
                    `card${previousTrackIndex[1]}`,
                  ).style.backgroundColor = '#e9f0fb';
                }
              }
              if (darkModeFlag) {
                songlistDiv.style.backgroundColor = '#181a23'; //DARKEST
              } else if (!darkModeFlag) {
                songlistDiv.style.backgroundColor = '#e3ebf8'; //DARKEST
              }
              songlistDiv.removeEventListener(
                'mouseleave',
                removeBackground,
              );
            }
          } catch (error) {}
        }

        if (!mediaQuery.matches) {
          songlistDiv.addEventListener(
            'mouseleave',
            removeBackground,
          );
        }

        function removeBackground() {
          songlistDiv.style.left = '0px';
          if (!playButton.classList.contains('active')) {
            playButton.style.display = 'none';
          }

          index = songlistDiv.id.charAt(4);
          previousGlobalTrackArray.unshift(index);
          let y = previousGlobalTrackArray.slice(0, 2);

          if (previousTrackIndex === undefined) {
            if (darkModeFlag) {
              songlistDiv.style.backgroundColor = '#161820'; //DARKEST
            } else if (!darkModeFlag) {
              songlistDiv.style.backgroundColor = '#e9f0fb';
            }
          } else if (previousTrackIndex[0] === clockDateValue[0]) {
            if (darkModeFlag) {
              songlistDiv.style.backgroundColor = '#181a23'; //LIGHTEST
            } else if (!darkModeFlag) {
              if (!mediaQuery.matches) {
                songlistDiv.style.backgroundColor = '#e6edf8'; //LIGHTEST
              } else if (mediaQuery.matches) {
                songlistDiv.style.backgroundColor = '#e3ebf8'; //LIGHTEST
              }
            }
          } else {
            if (darkModeFlag) {
              songlistDiv.style.backgroundColor = '#161820'; //DARKEST
            } else if (!darkModeFlag) {
              songlistDiv.style.backgroundColor = '#e9f0fb';
            }
          }
        }

        musicElement.onloadedmetadata = function test() {
          let durationMinutes = Math.floor(
            musicElement.duration / 60,
          );
          totalDuration.textContent =
            durationMinutes +
            `${':'}` +
            Math.floor(musicElement.duration - durationMinutes * 60);
        };

        // Changed order to display total-duration
        curr_time.textContent = '0:00';
        range.setAttribute('type', 'range');
        range.setAttribute('min', '0');
        range.setAttribute('max', '100');
        range.setAttribute('value', '0');
        range.setAttribute('step', '0.1');

        musicElement.setAttribute('preload', 'auto');
        musicElement.setAttribute('muted', 'muted');

        /// MUSICPLAYER CLONE NODE
        let playWrapper = d.getElementById('playWrapper');
        let playerContainer = d.getElementById('playerContainer');
        playWrapper.appendChild(musicBox);
        musicBox.style.visibility = 'hidden';
        d.getElementById('musicBox0').style.visibility = 'visible';
        i = d.getElementById(`imageContainer${0}`);
        i_prime = i.cloneNode(true);
        i_prime.id = 'imageFooter0';
        i_prime.className = 'image-footer';

        a = d.getElementById(`jsonIndex${0}`);
        a_prime = a.cloneNode(true);
        a_prime.id = 'jsonFooter0';
        a_prime.className = 'json-footer';

        function trackDuration() {
          musicElement.onloadedmetadata = function () {
            let durationMinutes = Math.floor(
              musicElement.duration / 60,
            );
            let durationSeconds = Math.floor(
              musicElement.duration - durationMinutes * 60,
            );
            if (durationSeconds.toString().length === 1) {
              durationSeconds = '0' + durationSeconds;
            } else if (durationSeconds.toString().length > 1) {
              durationSeconds = durationSeconds;
            }

            totalDuration.textContent =
              durationMinutes + ':' + durationSeconds;

            musicContainer.innerHTML = totalDuration.textContent;
          };
        }
        trackDuration();

        function appendImage() {
          if (!alreadyExecutedFlag) {
            playerContainer.appendChild(i_prime);
            playerContainer.appendChild(a_prime);
            alreadyExecutedFlag = true;
          }
        }
        appendImage();

        if (mediaQuery.matches) {
          // ---------------------------------------------- MEDIA SWIPE ------------------------------------------------

          infoReturn.onclick = function () {
            playerContainer.click();
          };

          let footerFlag = false;
          playerContainer.addEventListener('click', displayTrackInfo);
          function displayTrackInfo() {
            let nameSize = d.querySelectorAll(
              `#jsonName${globalTrackList}`,
            );

            let artistSize = d.querySelectorAll(
              `#jsonArtist${globalTrackList}`,
            );

            let pointer = d.querySelectorAll(
              `#mainImageButtonBox${globalTrackList}`,
            );
            if (darkModeFlag) {
              playPause.style.boxShadow =
                '8px 8px 11px #161820, -8px -8px 11px #000';
            } else {
              playPause.style.boxShadow =
                '8px 8px 11px #c5cbd6, -8px -8px 11px #ffffff';
            }

            if (playPause.classList.contains('active')) {
              if (darkModeFlag) {
                playPause.style.boxShadow =
                  '-2px -2px 5px #000, 2px 2px 5px #161820';
              } else {
                playPause.style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
            }
            if (!footerFlag) {
              d.getElementById('ellipticFooter').style.display =
                'none';

              ellipticTitle = d.getElementById(
                `jsonName${globalTrackList}`,
              );
              ellipticArtist = d.getElementById(
                `jsonArtist${globalTrackList}`,
              );
              ellipticImage = d.getElementById(
                `imageFooter${globalTrackList}`,
              );
              ellipticText = d.getElementById(
                `jsonFooter${globalTrackList}`,
              );

              ellipticCover = d.querySelectorAll(
                `.image-button${globalTrackList}`,
              );

              ellipticNowPlaying = d.getElementById(
                `now-playing${globalTrackList}`,
              );

              ellipticModify = d.getElementById(
                `addModifyContainer${globalTrackList}`,
              );

              ellipticDropdown = d.getElementById(
                `myDropdown${globalTrackList}`,
              );

              if (globalTrackList === undefined) {
                globalTrackList = 0;
                nameSize = d.querySelectorAll(`#jsonName0`);
                artistSize = d.querySelectorAll(`#jsonArtist0`);
                pointer = d.querySelectorAll(`#mainImageButtonBox0`);
                ellipticCover = d.querySelectorAll(`.image-button0`);
                ellipticImage = d.getElementById(`imageFooter0`);
                ellipticText = d.getElementById(`jsonFooter0`);
                ellipticModify = d.getElementById(
                  `addModifyContainer0`,
                );
                ellipticDropdown = d.getElementById(`myDropdown0`);
              }

              if (!darkModeFlag) {
                mainImageButtonBox.classList.remove(
                  'dark-mode-regularBox',
                );
                recordHole.classList.remove('dark-mode');
                recordHole.classList.remove('dark-mode-activeBox');
                pointer[1].classList.remove('dark-mode-regularBox');
                playPause.classList.remove('dark-mode-regularBox');
                previous.classList.remove('dark-mode-regularBox');
                next.classList.remove('dark-mode-regularBox');
              } else if (darkModeFlag) {
                recordHole.classList.add('dark-mode');
                recordHole.classList.add('dark-mode-activeBox');
                pointer[1].classList.add('dark-mode-regularBox');
                mainImageButtonBox.classList.add(
                  'dark-mode-regularBox',
                );
                playPause.classList.add('dark-mode-regularBox');
                previous.classList.add('dark-mode-regularBox');
                next.classList.add('dark-mode-regularBox');
              }

              //MODIFY CONTAINER

              nameSize[1].style.fontSize = '19px';
              nameSize[1].style.marginBottom = '1vh';
              nameSize[1].style.overflow = 'unset';
              nameSize[1].style.maxWidth = 'fit-content';

              artistSize[1].style.fontSize = '13px';
              artistSize[1].style.overflow = 'unset';
              artistSize[1].style.maxWidth = 'fit-content';

              pointer[1].style.width = '45vw';
              pointer[1].style.height = '45vw';
              pointer[1].style.borderRadius = '300px';
              pointer[1].style.padding = '10px';

              ellipticCover[1].style.width = '100%';
              ellipticCover[1].style.height = '100%';
              ellipticCover[1].style.justifyContent = 'end';
              ellipticCover[1].style.borderRadius = '300px';
              ellipticCover[1].style.padding = '0';

              ellipticImage.style.display = 'none';
              ellipticText.style.display = 'none';
              ellipticImage.className = '';
              ellipticText.className = '';
              ellipticModify.className = '';

              controlsContainer.style.display = 'none';
              footer.style.height = '100vh';
              footer.style.justifyContent = 'flex-start';
              playWrapper.classList.add('active');
              infoOptions.classList.add('active');
              d.getElementById('mainControls').classList.add(
                'active',
              );
              //PLAY BUTTON

              if (mediaQuery.matches) {
                playPause.style.width = '15vw';
                playPause.style.height = '15vw';
                //NEXT BUTTON
                if (darkModeFlag) {
                  next.style.boxShadow =
                    '8px 8px 11px #161820, -8px -8px 11px #000';
                  previous.style.boxShadow =
                    '8px 8px 11px #161820, -8px -8px 11px #000';
                } else {
                  next.style.boxShadow =
                    '8px 8px 11px #c5cbd6, -8px -8px 11px #ffffff';
                  previous.style.boxShadow =
                    '8px 8px 11px #c5cbd6, -8px -8px 11px #ffffff';
                }

                next.style.width = '12vw';
                next.style.height = '12vw';
                //PREV BUTTON

                previous.style.width = '12vw';
                previous.style.height = '12vw';
              }
              footer.classList.remove('top-bottom-overflow-fade1');

              navbar.style.animationDuration = '0.2s';

              if (!darkModeFlag) {
                navbar.className =
                  'animate__animated animate__slideOutDown';
              } else if (darkModeFlag) {
                navbar.className =
                  'animate__animated animate__slideOutDown dark-mode';
              }

              playerContainer.classList.add('active');
              input.className =
                'animate__animated animate__fadeOutLeft';

              setTimeout(function () {
                searchButtonContainer.style.display = 'none';
                // userWrapper.style.display = 'none';
              }, 100);

              setTimeout(function () {
                filler.style.display = 'none';
              }, 300);

              footer.style.animationDuration = '0s';
              footer.style.animationDelay = '0s';

              //ELIPTIC IMAGE
              ellipticImage.classList.remove(`image-footer`);
              ellipticImage.classList.add('elliptic-footer');
              ellipticDropdown.classList.add('active');
              recordContainer.className = '';

              setTimeout(function () {
                ellipticImage.style.animationDelay = '0s';
                ellipticText.style.animationDelay = '0s';
                ellipticModify.style.animationDelay = '0s';
                controlsContainer.style.animationDelay = '0s';

                ellipticImage.style.animationDuration = '0.1s';
                ellipticText.style.animationDuration = '0.1s';
                ellipticModify.style.animationDuration = '0.1s';
                controlsContainer.style.animationDuration = '0.1s';

                ellipticImage.className =
                  'animate__animated animate__pulse';
                ellipticText.className =
                  'json-footer active animate__animated animate__pulse';
                ellipticModify.className =
                  'addModify-container active animate__animated animate__pulse';
                controlsContainer.className =
                  'controls-container active animate__animated animate__slideInUp';

                ellipticModify.style.display = 'flex';
                ellipticImage.style.display = 'flex';
                ellipticText.style.display = 'flex';
                infoOptions.style.display = 'flex';
                ellipticNowPlaying.style.display = 'flex';
                recordContainer.style.display = 'flex';
                controlsContainer.style.display = 'flex';
                controlsContainer.classList.add('active');
              }, 200);

              footerFlag = true;
            } else if (footerFlag) {
              ellipticNowPlaying = d.getElementById(
                `now-playing${globalTrackList}`,
              );
              controlsContainer.style.display = 'none';
              ellipticText.style.display = 'none';
              ellipticModify.style.display = 'none';
              filler.style.display = 'flex';

              for (i = 0; i < pointer.length; i++) {
                pointer[1].style.padding = '0px';
              }

              infoOptions.style.display = 'none';

              ellipticNowPlaying.style.display = 'none';

              navbar.style.animationDuration = '0.2s';
              ellipticImage.style.display = 'none';
              //here
              if (!darkModeFlag) {
                navbar.className =
                  'animate__animated animate__slideInUp';
                navbar.classList.remove('dark-mode');
              } else if (darkModeFlag) {
                navbar.className =
                  'animate__animated animate__slideInUp';
                navbar.classList.add('dark-mode');
              }

              ellipticText.className =
                'json-footer active animate__animated animate__fadeOut';
              ellipticModify.className =
                'addModify-container active animate__animated animate__fadeOut';
              footer.style.height = '12vh';

              playPause.style.height = 'auto';
              playPause.style.width = '17vw';
              next.style.boxShadow = 'none';
              next.style.height = 'auto';
              next.style.width = '9vw';
              previous.style.boxShadow = 'none';
              previous.style.height = 'auto';
              previous.style.width = '9vw';

              nameSize[1].style.fontSize = '13px';
              nameSize[1].style.marginBottom = '0';

              artistSize[1].style.fontSize = '10px';

              nameSize[1].style.overflow = 'hidden';
              nameSize[1].style.maxWidth = '120px';

              artistSize[1].style.overflow = 'hidden';
              artistSize[1].style.maxWidth = '120px';

              setTimeout(function () {
                footer.style.justifyContent = 'flex-end';
                mainImageButtonBox.removeAttribute('style');
                ellipticDropdown.classList.remove('active');
                ellipticImage.classList.remove('elliptic-footer');
                playerContainer.classList.remove('active');
                playWrapper.classList.remove('active');
                infoOptions.classList.remove('active');
                d.getElementById('mainControls').classList.remove(
                  'active',
                );
                if (!darkModeFlag) {
                  footer.className = 'top-bottom-overflow-fade1';
                } else if (darkModeFlag) {
                  footer.className =
                    'top-bottom-overflow-fade1 dark-mode';
                }
                //ELIPTIC TEXT
                recordContainer.style.display = 'none';
                ellipticModify.style.display = 'none';
                ellipticImage.style.display = 'flex';

                controlsContainer.style.display = 'flex';
                ellipticText.style.display = 'flex';
                controlsContainer.style.display = 'flex';
                ellipticText.style.display = 'flex';

                controlsContainer.className = 'controls-container';

                ellipticText.className = 'json-footer';

                ellipticImage.className =
                  'image-footer animate__animated animate__fadeIn';
                d.getElementById('ellipticFooter').style.display =
                  'flex';

                if (!darkModeFlag) {
                  mainImageButtonBox.classList.remove(
                    'dark-mode-regularBox',
                  );
                  pointer[1].classList.remove('dark-mode-regularBox');
                  playPause.classList.remove('dark-mode-regularBox');
                  previous.classList.remove('dark-mode-regularBox');
                  next.classList.remove('dark-mode-regularBox');
                } else if (darkModeFlag) {
                  pointer[1].classList.remove('dark-mode-regularBox');
                  mainImageButtonBox.classList.add(
                    'dark-mode-regularBox',
                  );
                  playPause.classList.remove('dark-mode-regularBox');
                  previous.classList.remove('dark-mode-regularBox');
                  next.classList.remove('dark-mode-regularBox');
                }
              }, 100);

              footerFlag = false;
            }
          }
        }

        // --------------------------------------- MEDIA HOME EV LISTENER ------------------------------------------------

        // if (mediaQuery.matches) {
        //   home.addEventListener('touchstart', homeQ);
        // } else if (!mediaQuery.matches) {
        //   home.addEventListener('click', homeQ);
        // }
        // function homeQ() {
        //   if (mediaQuery.matches) {
        //   }
        // }

        // --------------------------------------- MEDIA HOME EV LISTENER ------------------------------------------------

        let element = d.body;
        let seekSlider = d.getElementsByClassName('seek_slider');
        let style = d.querySelector('[data="test"]');
        let infoImageContainer = d.getElementsByClassName(
          'infoImageContainer',
        );
        let jsonNameColor = d.getElementsByClassName(`json-name`);
        let jsonArtistColor = d.getElementsByClassName(`json-artist`);

        let trackTime = d.getElementsByClassName(`music-container`);

        let agendaIcons = d.getElementsByClassName(`agenda-icon`);
        let lightDarkModeIcon = d.getElementById('lightDarkMode');

        let currentTimeDark = d.getElementsByClassName(
          `current-time`,
        );

        let totalDurationDark = d.getElementsByClassName(
          `total-duration`,
        );

        let dropdownString = d.getElementsByClassName(
          'dropdown-strings',
        );

        let filterButton = d.getElementById('filterButton');
        let filterIcon = d.getElementById('filterIcon');

        let bandTitle = d.querySelector('.band-title');
        let homeCard = d.getElementsByClassName('card');
        let bandInfoTitle = d.getElementById('bandInfoTitle');
        let inputs = d.getElementsByTagName('input');
        let chatInput = d.getElementById('chatInput');
        let selects = d.getElementsByTagName('select');
        let searchField = d.querySelector('.my-input');
        let imageBoxShadow = d.getElementsByClassName(
          'elliptic-mainImageButtonBox',
        );

        if (mediaQuery.matches) {
          let checkDarkMode = Cookies.get('darkMode');

          let darkModeFlagInfo = false;

          if (checkDarkMode === 'true') {
            darkMode();
          } else if (checkDarkMode === 'false') {
            darkModeFlagInfo = false;
          }

          // darkmode()
          userSettings.addEventListener('click', darkMode);
          function darkMode() {
            trackHighlight();
            let liContainer = d.getElementsByClassName(
              'li-container',
            );
            let iconContainer = d.getElementsByClassName(
              'chat-icon-container',
            );
            let publisher = d.getElementsByClassName(
              'nameOfPublisher',
            );
            let chatTooltip = d.getElementsByClassName(
              'publisher1-tooltip',
            );
            let deleteMessage = d.getElementsByClassName(
              'delete-message',
            );
            let lis = d.getElementsByTagName('li');

            let playMobile = d.getElementsByClassName('play');
            let previousNextMobile = d.getElementsByClassName('skip');
            if (!darkModeFlagInfo) {
              style.innerHTML =
                '.seek_slider::-webkit-slider-thumb { box-shadow: ' +
                '-5px -5px 20px #000, 5px 5px 20px #161820' +
                ' ' +
                '!important; border: ' +
                '6px solid #161820' +
                ' ' +
                '!important; }';

              playlistWrapper.classList.add('dark-mode');
              deletePrompt.classList.add('dark-mode-text-white');
              leavePrompt.classList.add('dark-mode-text-white');
              cancelProceed.classList.add('dark-mode-text-grey');
              noResults.classList.add('dark-mode-text-white');
              noResultsTips.classList.add('dark-mode-text-white');
              navbarText.classList.add('dark-mode-text-grey');
              suggestion.classList.add('dark-mode');
              searchField.classList.add('dark-mode-input');
              startBuilding.classList.add('dark-mode-text-white');
              beforeWeCanUse.classList.add('dark-mode-text-white');
              playlistTitle.classList.add('dark-mode-text');
              sortButtonText.classList.add('dark-mode-text');
              sortButtonIcon.classList.add('dark-mode-fill');
              infoSearch.classList.add('dark-mode-text-white');
              returnIcon.classList.add('dark-mode-text-white');
              ellipticFooter.classList.add('dark-mode-text-white');
              userMessage.classList.add('dark-mode-text-white');
              bandInfoTitle.classList.add('dark-mode-text-white');
              agendaTitle.classList.add('dark-mode-text-white');
              upcomingGigsTitle.classList.add('dark-mode-text-white');
              practiceTitle.classList.add('dark-mode-text-white');
              agendaDescription.classList.add('dark-mode-text-grey');
              upcomingGigsDescription.classList.add(
                'dark-mode-text-grey',
              );
              practiceDescription.classList.add(
                'dark-mode-text-grey',
              );
              add.classList.add('dark-mode-text');

              infoReturn.classList.add('dark-mode');
              infoSearch.classList.add('dark-mode');
              okProceed.classList.add('dark-mode-regularBox');
              okProceed.classList.add('dark-mode-text-white');

              indicator.classList.add('dark-mode-indicator');

              sendButton.classList.add('dark-mode-regularBox');
              submitButton.classList.add('dark-mode-regularBox');
              submitButton.classList.add('dark-mode-text-grey');

              okDelete.classList.add('dark-mode-regularBox');
              okDelete.classList.add('dark-mode-text-white');

              add.classList.add('dark-mode-regularBox');
              element.classList.add('dark-mode');
              navbar.classList.add('dark-mode');
              footer.classList.add('dark-mode');
              bandIconContainer1.classList.add(
                'dark-mode-regularBox',
              );
              bandIcon.classList.add('dark-mode-regularBox');

              clock4Target.classList.add('dark-mode');
              userSettings.classList.add('dark-mode');
              playlistInfo.classList.add('dark-mode');
              onTheAgenda.classList.add('dark-mode-regularBox');
              upcomingGigs.classList.add('dark-mode-regularBox');
              bandPractice.classList.add('dark-mode-regularBox');
              toggle.classList.add('dark-mode-toggleButton');
              home.classList.add('dark-mode-regularBox');
              songs.classList.add('dark-mode-regularBox');
              chat.classList.add('dark-mode-regularBox');
              mobileSearch.classList.add('dark-mode-regularBox');
              userPictureWrapper.classList.add('dark-mode-focusBox');
              filterIcon.classList.add('dark-mode-regularBox');
              infoReturn.classList.add('dark-mode-regularBox');
              infoSearch.classList.add('dark-mode-regularBox');

              for (i = 0; i < imageBoxShadow.length; i++) {
                imageBoxShadow[i].classList.add(
                  'dark-mode-regularBox',
                );
              }

              for (i = 0; i < line1.length; i++) {
                line1[i].classList.add('dark-mode-activeBox');
              }

              for (i = 0; i < homeCard.length; i++) {
                homeCard[i].classList.add('dark-mode-regularBox');
              }

              for (i = 1; i < sortItems.length; i++) {
                sortItems[i].classList.add('dark-mode-text-grey');
              }

              for (i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('dark-mode-regularBox');
              }

              for (i = 0; i < leaveDescription.length; i++) {
                leaveDescription[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              chatInput.classList.add('dark-mode-regularBox');

              for (i = 0; i < selects.length; i++) {
                selects[i].classList.add('dark-mode-regularBox');
              }

              filterIcon.classList.add('dark-mode-text-white');
              lightDarkModeIcon.classList.add('dark-mode-text');
              for (i = 0; i < jsonNameColor.length; i++) {
                jsonNameColor[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < jsonArtistColor.length; i++) {
                jsonArtistColor[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < infoImageContainer.length; i++) {
                infoImageContainer[i].classList.add(
                  'dark-mode-activeBox',
                );
              }

              for (i = 0; i < seekSlider.length; i++) {
                seekSlider[i].classList.add('dark-mode-seek-slider');
              }

              for (i = 0; i < playMobile.length; i++) {
                playMobile[i].classList.add('dark-mode-text-white');
              }

              for (i = 0; i < previousNextMobile.length; i++) {
                previousNextMobile[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < trackTime.length; i++) {
                trackTime[i].classList.add('dark-mode-text-white');
              }

              for (i = 0; i < agendaIcons.length; i++) {
                agendaIcons[i].classList.add('dark-mode-text');
              }

              for (i = 0; i < currentTimeDark.length; i++) {
                currentTimeDark[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < totalDurationDark.length; i++) {
                totalDurationDark[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < dropdownString.length; i++) {
                dropdownString[i].classList.add(
                  'dark-mode-text-white',
                );
              }

              bandTitle.classList.add('dark-mode-text-white');
              lightDarkModeIcon.setAttribute('name', 'sunny-sharp');
              element.classList.add('dark-mode');

              for (i = 0; i < liContainer.length; i++) {
                liContainer[i].classList.add('dark-mode-focusBox');
              }
              for (i = 0; i < iconContainer.length; i++) {
                iconContainer[i].classList.add('dark-mode-focusBox');
              }
              for (i = 0; i < publisher.length; i++) {
                publisher[i].classList.add('dark-mode-text-white');
              }
              for (i = 0; i < chatTooltip.length; i++) {
                chatTooltip[i].classList.add('dark-mode-tooltip');
              }
              for (i = 0; i < deleteMessage.length; i++) {
                deleteMessage[i].classList.add('dark-mode');
              }
              for (i = 0; i < lis.length; i++) {
                lis[i].classList.add('dark-mode-text-white');
              }

              darkModeFlagInfo = true;
              darkModeFlag = true;
            } else if (darkModeFlagInfo) {
              for (i = 0; i < liContainer.length; i++) {
                liContainer[i].classList.remove('dark-mode-focusBox');
              }
              for (i = 0; i < iconContainer.length; i++) {
                iconContainer[i].classList.remove(
                  'dark-mode-focusBox',
                );
              }
              for (i = 0; i < publisher.length; i++) {
                publisher[i].classList.remove('dark-mode-text-white');
              }
              for (i = 0; i < chatTooltip.length; i++) {
                chatTooltip[i].classList.remove('dark-mode-tooltip');
              }

              for (i = 0; i < deleteMessage.length; i++) {
                deleteMessage[i].classList.remove('dark-mode');
              }
              cancelProceed.classList.remove('dark-mode-text-grey');
              okDelete.classList.remove('dark-mode-regularBox');
              okDelete.classList.remove('dark-mode-text-white');
              deletePrompt.classList.remove('dark-mode-text-white');
              leavePrompt.classList.remove('dark-mode-text-white');
              navbarText.classList.remove('dark-mode-text-grey');
              add.classList.remove('dark-mode-text');
              startBuilding.classList.remove('dark-mode-text-white');
              beforeWeCanUse.classList.remove('dark-mode-text-white');
              suggestion.classList.remove('dark-mode');
              infoSearch.classList.remove('dark-mode-text-white');
              returnIcon.classList.remove('dark-mode-text-white');
              ellipticFooter.classList.remove('dark-mode-text-white');
              agendaDescription.classList.remove(
                'dark-mode-text-grey',
              );
              upcomingGigsDescription.classList.remove(
                'dark-mode-text-grey',
              );
              practiceDescription.classList.remove(
                'dark-mode-text-grey',
              );
              agendaTitle.classList.remove('dark-mode-text-white');
              upcomingGigsTitle.classList.remove(
                'dark-mode-text-white',
              );
              playlistWrapper.classList.remove('dark-mode');
              practiceTitle.classList.remove('dark-mode-text-white');
              element.classList.remove('dark-mode');
              navbar.classList.remove('dark-mode');
              footer.classList.remove('dark-mode');
              infoReturn.classList.remove('dark-mode');
              infoSearch.classList.remove('dark-mode');
              clock4Target.classList.remove('dark-mode');
              userSettings.classList.remove('dark-mode');
              playlistInfo.classList.remove('dark-mode');
              userMessage.classList.remove('dark-mode-text-white');
              bandInfoTitle.classList.remove('dark-mode-text-white');
              add.classList.remove('dark-mode-regularBox');
              onTheAgenda.classList.remove('dark-mode-regularBox');
              upcomingGigs.classList.remove('dark-mode-regularBox');
              bandPractice.classList.remove('dark-mode-regularBox');
              bandIconContainer1.classList.remove(
                'dark-mode-regularBox',
              );
              bandIcon.classList.remove('dark-mode-regularBox');
              home.classList.remove('dark-mode-regularBox');
              songs.classList.remove('dark-mode-regularBox');
              chat.classList.remove('dark-mode-regularBox');
              mobileSearch.classList.remove('dark-mode-regularBox');
              userPictureWrapper.classList.remove(
                'dark-mode-focusBox',
              );
              filterIcon.classList.remove('dark-mode-regularBox');
              infoReturn.classList.remove('dark-mode-regularBox');
              infoSearch.classList.remove('dark-mode-regularBox');
              sendButton.classList.remove('dark-mode-regularBox');
              submitButton.classList.remove('dark-mode-regularBox');
              submitButton.classList.remove('dark-mode-text-grey');
              submitButton.classList.remove('dark-mode-text');
              indicator.classList.remove('dark-mode-indicator');
              toggle.classList.remove('dark-mode-toggleButton');
              sortButtonText.classList.remove('dark-mode-text');
              sortButtonIcon.classList.remove('dark-mode-fill');
              okProceed.classList.remove('dark-mode-regularBox');
              okProceed.classList.remove('dark-mode-text-white');

              for (i = 0; i < imageBoxShadow.length; i++) {
                imageBoxShadow[i].classList.remove(
                  'dark-mode-regularBox',
                );
              }

              for (i = 0; i < line1.length; i++) {
                line1[i].classList.remove('dark-mode-activeBox');
              }
              for (i = 0; i < homeCard.length; i++) {
                homeCard[i].classList.remove('dark-mode-regularBox');
              }

              for (i = 1; i < sortItems.length; i++) {
                sortItems[i].classList.remove('dark-mode-text-grey');
              }

              for (i = 0; i < inputs.length; i++) {
                inputs[i].classList.remove('dark-mode-regularBox');
              }

              for (i = 0; i < selects.length; i++) {
                selects[i].classList.remove('dark-mode-regularBox');
              }

              for (i = 0; i < leaveDescription.length; i++) {
                leaveDescription[i].classList.remove(
                  'dark-mode-text-white',
                );
              }
              for (i = 0; i < lis.length; i++) {
                lis[i].classList.remove('dark-mode-text-white');
              }

              chatInput.classList.remove('dark-mode-regularBox');

              style.innerHTML =
                '.seek_slider::-webkit-slider-thumb { box-shadow: ' +
                '-5px -5px 20px #fff, 5px 5px 20px #babecc' +
                ' ' +
                '!important; border: ' +
                '6px solid #e9f0fb' +
                ' ' +
                '!important; }';

              filterIcon.classList.remove('dark-mode-text-white');
              lightDarkModeIcon.classList.remove('dark-mode-text');
              bandTitle.classList.remove('dark-mode-text-white');
              lightDarkModeIcon.setAttribute('name', 'moon-sharp');
              element.classList.remove('dark-mode');
              playPause.classList.remove('dark-mode-regularBox');
              previous.classList.remove('dark-mode-regularBox');
              next.classList.remove('dark-mode-regularBox');
              for (i = 0; i < seekSlider.length; i++) {
                seekSlider[i].classList.remove(
                  'dark-mode-seek-slider',
                );
              }

              for (i = 0; i < jsonNameColor.length; i++) {
                jsonNameColor[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < jsonArtistColor.length; i++) {
                jsonArtistColor[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < infoImageContainer.length; i++) {
                infoImageContainer[i].classList.remove(
                  'dark-mode-activeBox',
                );
              }
              for (i = 0; i < homeCard.length; i++) {
                homeCard[i].classList.remove('dark-mode-regularBox');
              }

              for (i = 0; i < playMobile.length; i++) {
                playMobile[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < previousNextMobile.length; i++) {
                previousNextMobile[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < trackTime.length; i++) {
                trackTime[i].classList.remove('dark-mode-text-white');
              }

              for (i = 0; i < agendaIcons.length; i++) {
                agendaIcons[i].classList.remove('dark-mode-text');
              }

              for (i = 0; i < currentTimeDark.length; i++) {
                currentTimeDark[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < totalDurationDark.length; i++) {
                totalDurationDark[i].classList.remove(
                  'dark-mode-text-white',
                );
              }

              for (i = 0; i < dropdownString.length; i++) {
                dropdownString[i].classList.remove(
                  'dark-mode-text-white',
                );
              }
              darkModeFlagInfo = false;
              darkModeFlag = false;
            }
            Cookies.set('darkMode', darkModeFlagInfo);
          }
        }
        // ---------------------------------------------- MEDIA SWIPE ------------------------------------------------

        // TRIAL AND ERROR
        musicContainer.addEventListener(
          'touchstart',
          startTouch,
          false,
        );
        musicContainer.addEventListener(
          'touchmove',
          moveTouch,
          false,
        );

        // Swipe Up / Down / Left / Right
        let initialX = null;
        let initialY = null;

        function startTouch(e) {
          initialX = e.touches[0].clientX;
          initialY = e.touches[0].clientY;
        }

        function moveTouch(e) {
          if (initialX === null) {
            return;
          }

          if (initialY === null) {
            return;
          }

          let currentX = e.touches[0].clientX;
          let currentY = e.touches[0].clientY;

          let diffX = initialX - currentX;
          let diffY = initialY - currentY;

          if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
              // swiped left
              // let pointer = d.getElementsByClassName(
              //   'addModify-container',
              // );
              // for (i = 0; i < pointer.length; i++) {
              //   pointer[i].className =
              //     'addModify-container animate__animated animate__slideOutRight';
              // }
              // console.log('swiped left');
              // addModifyContainer.className =
              //   'addModify-container animate__animated animate__slideInRight';
              // addModifyContainer.style.display = 'flex';
            } else {
              // swiped right
              // console.log('swiped right');
              // addModifyContainer.className =
              //   'addModify-container animate__animated animate__slideOutRight';
              // setTimeout(function () {
              //   addModifyContainer.style.display = 'none';
              // }, 200);
            }
          } else {
            // sliding vertically
            if (diffY > 0) {
              // swiped up
              console.log('swiped up');
            } else {
              // swiped down
              console.log('swiped down');
            }
          }

          initialX = null;
          initialY = null;

          e.preventDefault();
        }
        addModifyContainer.addEventListener(
          'touchstart',
          startTouch1,
          false,
        );
        addModifyContainer.addEventListener(
          'touchmove',
          moveTouch1,
          false,
        );

        // Swipe Up / Down / Left / Right
        function startTouch1(e) {
          initialX = e.touches[0].clientX;
          initialY = e.touches[0].clientY;
        }

        function moveTouch1(e) {
          if (initialX === null) {
            return;
          }

          if (initialY === null) {
            return;
          }

          let currentX = e.touches[0].clientX;
          let currentY = e.touches[0].clientY;

          let diffX = initialX - currentX;
          let diffY = initialY - currentY;

          if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
              // swiped left
              console.log('swiped left');
            } else {
              // swiped right
              // console.log('swiped right');
              // addModifyContainer.className =
              //   'addModify-container animate__animated animate__slideOutRight';
              // setTimeout(function () {
              //   addModifyContainer.style.display = 'none';
              // }, 200);
            }
          } else {
            // sliding vertically
            if (diffY > 0) {
              // addModifyContainer.className =
              //   'addModify-container animate__animated animate__slideOutRight';
              // setTimeout(function () {
              //   addModifyContainer.style.display = 'none';
              // }, 200);
              // swiped up
              console.log('swiped up');
            } else {
              // addModifyContainer.className =
              //   'addModify-container animate__animated animate__slideOutRight';
              // setTimeout(function () {
              //   addModifyContainer.style.display = 'none';
              // }, 200);
              // swiped down
              console.log('swiped down');
            }
          }
          initialX = null;
          initialY = null;
          e.preventDefault();
        }
        // ---------------------------------------------- MEDIA SWIPE ------------------------------------------------

        // ----------------------------------------- MEDIA RESPONSIVENESS ------------------------------------------------

        function homePage() {
          if (mediaQuery.matches) {
            nowPlaying.style.display = 'none';
            let pointer2 = d.getElementsByClassName('play-container');
            for (let i = 0; i < pointer2.length; i++) {
              pointer2[i].style.pointerEvents = 'none';
            }
          } else {
          }
        }
        homePage();
        // ----------------------------------------- MEDIA RESPONSIVENESS ------------------------------------------------

        let cardPlayIcon1 = d.getElementById('cardPlayIcon1');
        let cardPlayIcon2 = d.getElementById('cardPlayIcon2');
        let cardPlayIcon3 = d.getElementById('cardPlayIcon3');
        let cardPlayIcon4 = d.getElementById('cardPlayIcon4');

        let playCardWrapper1 = d.getElementById('playCardWrapper1');
        let playCardWrapper2 = d.getElementById('playCardWrapper2');
        let playCardWrapper3 = d.getElementById('playCardWrapper3');
        let playCardWrapper4 = d.getElementById('playCardWrapper4');

        let musicElement0 = d.getElementById(
          `musicElement${songlistInfo.length - 1}`,
        );

        let musicElement1 = d.getElementById(
          `musicElement${songlistInfo.length - 2}`,
        );

        let musicElement2 = d.getElementById(
          `musicElement${songlistInfo.length - 3}`,
        );

        let musicElement3 = d.getElementById(
          `musicElement${songlistInfo.length - 4}`,
        );

        let musicElement4 = d.getElementById(
          `musicElement${songlistInfo.length - 4}`,
        );

        let playCardContainer1 = d.getElementById(
          'playCardContainer1',
        );
        let playCardContainer2 = d.getElementById(
          'playCardContainer2',
        );
        let playCardContainer3 = d.getElementById(
          'playCardContainer3',
        );
        let playCardContainer4 = d.getElementById(
          'playCardContainer4',
        );

        let playCard1 = d.getElementById('playCard1');
        let playCard2 = d.getElementById('playCard2');
        let playCard3 = d.getElementById('playCard3');
        let playCard4 = d.getElementById('playCard4');

        playCardWrapper1.addEventListener('mouseenter', function () {
          playCard1.style.display = 'flex';
          playCardContainer1.className =
            'animate__animated animate__fadeIn';
        });

        playCardWrapper1.addEventListener('mouseleave', function () {
          playCardContainer1.className =
            'animate__animated animate__fadeOut';
          setTimeout(function () {
            playCard1.style.display = 'none';
          }, 300);
        });

        playCardWrapper1.addEventListener('click', function () {
          try {
            if (!musicElement0.paused) {
              cardPlayIcon1.className = 'icon play';
            } else {
            }
          } catch (error) {}
        });

        playCardWrapper2.addEventListener('mouseenter', function () {
          playCard2.style.display = 'flex';
          playCardContainer2.className =
            'animate__animated animate__fadeIn';
        });

        playCardWrapper2.addEventListener('mouseleave', function () {
          playCardContainer2.className =
            'animate__animated animate__fadeOut';
          setTimeout(function () {
            playCard2.style.display = 'none';
          }, 300);
        });

        playCardWrapper2.addEventListener('click', function () {
          try {
            if (!musicElement1.paused) {
              playCard2.classList.add('active');
            } else {
              playCard2.classList.remove('active');
            }
          } catch (error) {}
        });

        playCardWrapper3.addEventListener('mouseenter', function () {
          playCard3.style.display = 'flex';
          playCardContainer3.className =
            'animate__animated animate__fadeIn';
        });

        playCardWrapper3.addEventListener('mouseleave', function () {
          playCardContainer3.className =
            'animate__animated animate__fadeOut';
          setTimeout(function () {
            playCard3.style.display = 'none';
          }, 300);
        });

        playCardWrapper3.addEventListener('click', function () {
          try {
            if (!musicElement2.paused) {
              cardPlayIcon3.className = 'icon play';
            } else {
            }
          } catch (error) {}
        });

        playCardWrapper4.addEventListener('mouseenter', function () {
          playCard4.style.display = 'flex';
          playCardContainer4.className =
            'animate__animated animate__fadeIn';
        });

        playCardWrapper4.addEventListener('mouseleave', function () {
          playCardContainer4.className =
            'animate__animated animate__fadeOut';
          setTimeout(function () {
            playCard4.style.display = 'none';
          }, 300);
        });

        playCardWrapper4.addEventListener('click', function () {
          try {
            if (!musicElement3.paused) {
              cardPlayIcon4.className = 'icon play';
            } else {
            }
          } catch (error) {}
        });

        playButton.onclick = function () {
          try {
            if (musicElement0.paused) {
              cardPlayIcon1.className = 'icon play';
              playCard1.classList.remove('active');
            } else {
              playCard1.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement1.paused) {
              cardPlayIcon2.className = 'icon play';
              playCard2.classList.remove('active');
            } else {
              playCard2.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement2.paused) {
              cardPlayIcon3.className = 'icon play';
              playCard3.classList.remove('active');
            } else {
              playCard3.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement3.paused) {
              cardPlayIcon4.className = 'icon play';
              playCard4.classList.remove('active');
            } else {
              playCard4.classList.add('active');
            }
          } catch (error) {}
        };

        playCardWrapper1.onclick = function () {
          if (musicElement1.paused) {
            playCard1.classList.add('active');
            playCard2.classList.remove('active');
            playCard3.classList.remove('active');
            playCard4.classList.remove('active');
          } else {
            playCard1.classList.remove('active');
          }
          d.getElementById(
            `playButton${songlistInfo.length - 1}`,
          ).click();
        };

        playCardWrapper2.onclick = function () {
          playCard2.style.display = 'flex';
          if (musicElement2.paused) {
            playCard2.classList.add('active');
            playCard1.classList.remove('active');
            playCard3.classList.remove('active');
            playCard4.classList.remove('active');
          } else {
            playCard2.classList.remove('active');
          }

          d.getElementById(
            `playButton${songlistInfo.length - 2}`,
          ).click();
        };

        playCardWrapper3.onclick = function () {
          if (musicElement3.paused) {
            playCard3.classList.add('active');
            playCard1.classList.remove('active');
            playCard2.classList.remove('active');
            playCard4.classList.remove('active');
          } else {
            playCard3.classList.remove('active');
          }

          d.getElementById(
            `playButton${songlistInfo.length - 3}`,
          ).click();
        };

        playCardWrapper4.onclick = function () {
          console.log(musicElement4);
          if (musicElement4.paused) {
            playCard4.classList.add('active');
            playCard1.classList.remove('active');
            playCard2.classList.remove('active');
            playCard3.classList.remove('active');
          } else {
            playCard4.classList.remove('active');
          }

          d.getElementById(
            `playButton${songlistInfo.length - 4}`,
          ).click();
        };

        let touchmoved;
        songlistDiv.addEventListener('touchend', function (e) {
          if (touchmoved != true) {
            if (
              addModifyContainer.style.display === 'flex' ||
              d.activeElement === musicContainer
            ) {
            } else {
              playButton.click();
            }
          }
        });
        songlistDiv.addEventListener('touchmove', function (e) {
          touchmoved = true;
        });
        songlistDiv.addEventListener('touchstart', function () {
          touchmoved = false;
        });

        songlistDiv.ondblclick = function () {
          const mediaQuery = window.matchMedia('(max-width: 400px)');
          if (!mediaQuery.matches) {
            dblClickFlag = true;
            playButton.click();
          } else {
          }
        };

        // ---------------------------------------------- AUDIO PLAYER LOGIC ---------------------------------------------

        /// AUDIO VARIABLE CREATED BEFORE DEFINING THE FUNCTION
        musicElement.src = jsonLink;

        let currentSong = musicElement;
        playButton.style.display = 'none';

        function playHandler() {
          toggleActiveFlag = true;
          let eventIsTrusted = event.isTrusted;

          globalTrackList = trackListArray.indexOf(jsonLink);
          previousStateArray.slice(0, 2);
          previousStateArray.length = 1;
          previousValue = previousStateArray.slice(0, 2)[0];

          if (
            globalTrackList !== previousValue &&
            previousValue !== undefined &&
            !eventIsTrusted &&
            wrapperflag
          ) {
            previousPlayButtonIndex = d.getElementById(
              `playButton${previousValue}`,
            );
            s_prime = previousPlayButtonIndex.cloneNode(true);
            clonePlayPause = playPause.cloneNode(true);
            d.getElementById(`playWrapper`).replaceChild(
              d.getElementById('playPause'),
              d.getElementById(`playButton${previousValue}`),
            );

            d.getElementById(
              `playContainer${previousValue}`,
            ).appendChild(s_prime);

            clonePlayPause.id = 'playPause';
            s_prime.id = `playButton${previousValue}`;
          }

          trackIndex = trackListArray.indexOf(jsonLink);
          playButton.classList.toggle('active');
          SVGpauseIcon.style.color = '#e9c37d'; //#746eff

          if (playButton.classList.contains('active')) {
            playPause.style.opacity = 1;
            if (footer.style.height === '100vh') {
              if (darkModeFlag) {
                playPause.style.boxShadow =
                  '-2px -2px 5px #000, 2px 2px 5px #161820';
              } else {
                playPause.style.boxShadow =
                  '-2px -2px 5px #fff, 2px 2px 5px #babecc';
              }
            }
            playPause.classList.add('active');
            playButton.classList.add('active');
            nowPlaying.innerHTML = 'PLAYING NOW';
          } else if (!playButton.classList.contains('active')) {
            resetValues();
            playPause.classList.remove('active');
            d.getElementById(
              `playButton${globalTrackList}`,
            ).classList.remove('active');
            if (footer.style.height === '100vh') {
              if (darkModeFlag) {
                playPause.style.boxShadow =
                  '8px 8px 11px #161820, -8px -8px 11px #000';
              } else {
                playPause.style.boxShadow =
                  '8px 8px 11px #c5cbd6, -8px -8px 11px #ffffff';
              }
            }
            // playPause.classList.remove('active');
            nowPlaying.innerHTML = '';
            // imageButton.style.transition = '2s ease';
          }

          function resetValues() {
            curr_time.textContent = '0:00';
            range.value = 0;
          }

          function loadTrack() {
            clearInterval(updateTimer);
            resetValues();
            updateTimer = setInterval(seekUpdate, 0);
            previousStateArray.unshift(
              trackListArray.indexOf(jsonLink),
            );
            if (previousStateArray.length === 1) {
              previousStateArray = [previousStateArray[0]];
            } else {
              previousStateArray = previousStateArray;
            }
            previousPlayHandlerArray = previousStateArray;
          }

          loadTrack();

          function playpauseTrack() {
            if (isPlayingFlag && musicElement.paused) {
              playCurrent();
            } else if (!isPlayingFlag || !toggleActiveFlag) {
              playTrack();
              imageButton.style.filter = 'grayscale(0%)';
              try {
                let fadeButton = d.querySelectorAll(
                  `.image-button${globalTrackList}`,
                );
                fadeButton[1].style.filter = 'grayscale(0%)';
                fadeButton[1].style.transition =
                  'all 0.3s ease-in-out';
              } catch (error) {}

              nowPlaying.innerHTML = 'PLAYING NOW';
              clearInterval(updateTimer);
              resetValues();
              updateTimer = setInterval(seekUpdate, 0);
            } else {
              pauseTrack();
              musicElement;
            }
          }
          playpauseTrack();

          function pauseTrack() {
            musicElement.pause();
            nowPlaying.innerHTML = 'RESUME';
            isPlayingFlag = false;
            imageButton.style.filter = 'grayscale(60%)';
            let fadeButton = d.querySelectorAll(
              `.image-button${globalTrackList}`,
            );
            fadeButton[1].style.transition = 'all 0.3s ease-in-out';
            fadeButton[1].style.filter = 'grayscale(60%)';
          }

          function playTrack() {
            musicElement.play();
            isPlayingFlag = true;
            if (
              d.getElementById(
                `now-playing${previousStateArray[1]}`,
              ) === null
            ) {
            } else {
              d.getElementById(
                `now-playing${previousStateArray[1]}`,
              ).innerHTML = '';
            }
          }

          function playCurrent() {
            currentSong.play();
            trackIndex = trackListArray.indexOf(jsonLink);
            d.getElementById(
              `musicElement${previousStateArray[1]}`,
            ).pause();
            d.getElementById(
              `now-playing${previousStateArray[1]}`,
            ).innerHTML = '';
            d.getElementById(
              `playButton${previousStateArray[1]}`,
            ).classList.remove('active');

            d.getElementById(
              `musicElement${previousStateArray[1]}`,
            ).currentTime = 0;

            isPlayingFlag = true;
          }
          trackIndexArray.push(trackListArray.indexOf(jsonLink));

          d.body.addEventListener('click', function () {
            if (
              musicElement.currentTime === 0 ||
              (isPlayingFlag && musicElement.paused)
            ) {
              musicElement.currentTime = 0;

              resetValues();
            }
          });

          range.addEventListener('input', seekTo);

          function seekTo() {
            let seekto = musicElement.duration * (range.value / 100);
            musicElement.currentTime = seekto;
          }

          let seekColorValue = range.offsetWidth / 100;
          window.setInterval(function () {
            let seekColor = range.value * seekColorValue;

            fillBar.style.width = seekColor + 'px';
          }, 0);

          function seekUpdate() {
            let seekPosition = 0;

            if (!isNaN(musicElement.duration)) {
              seekPosition =
                musicElement.currentTime *
                (100 / musicElement.duration);
              range.value = seekPosition;

              let currentMinutes = Math.floor(
                musicElement.currentTime / 60,
              );
              let currentSeconds = Math.floor(
                musicElement.currentTime - currentMinutes * 60,
              );
              let durationMinutes = Math.floor(
                musicElement.duration / 60,
              );
              let durationSeconds = Math.floor(
                musicElement.duration - durationMinutes * 60,
              );

              if (currentSeconds < 10) {
                currentSeconds = '0' + currentSeconds;
              }
              if (durationSeconds < 10) {
                durationSeconds = '0' + durationSeconds;
              }
              if (currentMinutes < 10) {
                currentMinutes = '' + currentMinutes;
              }
              if (durationMinutes < 10) {
                durationMinutes = '' + durationMinutes;
              }
              if (currentMinutes > 10) {
                currentMinutes = '0' + currentMinutes;
              }
              if (durationMinutes > 10) {
                durationMinutes = '0' + durationMinutes;
              }
              // Display the updated duration
              curr_time.textContent =
                currentMinutes + ':' + currentSeconds;
              totalDuration.textContent =
                durationMinutes + ':' + durationSeconds;
            }
          }

          globalVariable = trackListArray.indexOf(jsonLink);

          i = d.getElementById(`imageContainer${globalVariable}`);
          i_prime = i.cloneNode(true);
          i_prime.id = 'imageFooter' + globalVariable;
          i_prime.className = 'image-footer';

          a = d.getElementById(`jsonIndex${globalVariable}`);
          a_prime = a.cloneNode(true);
          a_prime.id = 'jsonFooter' + globalVariable;

          if (!mediaQuery.matches) {
            try {
              if (previousValue === undefined) {
              } else {
                d.getElementById(
                  `card${previousValue}`,
                ).style.boxShadow = 'none';
              }
            } catch (error) {}

            if (!musicElement.paused) {
              d.getElementById(
                `card${globalTrackList}`,
              ).style.boxShadow =
                '-5px -5px 20px #fff, 5px 5px 20px #babecc';
            }
          } else {
            try {
              if (previousValue === undefined) {
              } else {
                d.getElementById(
                  `card${previousValue}`,
                ).style.backgroundColor = 'transparent';
              }
            } catch (error) {}
            if (!musicElement.paused) {
              if (!darkModeFlag) {
                if (!mediaQuery.matches) {
                  d.getElementById(
                    `card${globalTrackList}`,
                  ).style.backgroundColor = '#e6edf8';
                } else if (mediaQuery.matches) {
                  d.getElementById(
                    `card${globalTrackList}`,
                  ).style.backgroundColor = '#e3ebf8';
                }
              } else if (darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = '#181a23';
              }
            }
          }

          if (
            previousStateArray[1] === undefined &&
            globalTrackList === 0
          ) {
            if (eventIsTrusted) {
              if (darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = ' #181a23';
              } else if (!darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = '#e3ebf8';
              }
            }
          } else if (previousStateArray[1] === undefined) {
            if (eventIsTrusted) {
              if (darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = ' #181a23';
              } else if (!darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = '#e3ebf8';
              }
            }
            d.getElementById(
              `musicBox${globalVariable}`,
            ).setAttribute('style', 'visibility:visible');
            d.getElementById(`musicBox${0}`).setAttribute(
              'style',
              'display:none',
            );
            playerContainer.appendChild(i_prime);
            playerContainer.removeChild(
              d.getElementById(`imageFooter${0}`),
            );
            playerContainer.appendChild(a_prime);
            playerContainer.removeChild(
              d.getElementById(`jsonFooter${0}`),
            );
          } else if (globalTrackList === previousStateArray[1]) {
          } else if (globalTrackList !== previousStateArray[1]) {
            d.getElementById(
              `musicBox${previousStateArray[1]}`,
            ).setAttribute('style', 'visibility:hidden');

            d.getElementById(
              `musicBox${globalVariable}`,
            ).setAttribute('style', 'visibility:none');

            playerContainer.appendChild(i_prime);
            playerContainer.removeChild(
              d.getElementById(`imageFooter${previousStateArray[1]}`),
            );
            playerContainer.appendChild(a_prime);
            playerContainer.removeChild(
              d.getElementById(`jsonFooter${previousStateArray[1]}`),
            );

            if (eventIsTrusted) {
              if (darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = ' #181a23';
                d.getElementById(
                  `card${previousStateArray[1]}`,
                ).style.backgroundColor = '#161820';
              } else if (!darkModeFlag) {
                d.getElementById(
                  `card${globalTrackList}`,
                ).style.backgroundColor = '#e3ebf8';
                d.getElementById(
                  `card${previousStateArray[1]}`,
                ).style.backgroundColor = '#e9f0fb';
              }
            }
          }
        }
        // PlAYLIST ARRAYS
        liveArray = playListArray
          .map((e, i) => (e === 'Live recording' ? i : ''))
          .filter(String);
        originalArray = playListArray
          .map((e, i) => (e === 'Original track' ? i : ''))
          .filter(String);
        studioArray = playListArray
          .map((e, i) => (e === 'Studio rehearsal' ? i : ''))
          .filter(String);
        homeArray = playListArray
          .map((e, i) => (e === 'Home recording' ? i : ''))
          .filter(String);
        changebackArray = playListArray
          .map((e, i) =>
            e === 'Live recording' ||
            'Home recording' ||
            'Studio rehearsal' ||
            'Original track'
              ? i
              : '',
          )
          .filter(String);

        checkActiveArray = [
          liveArray,
          homeArray,
          studioArray,
          originalArray,
          changebackArray,
        ];

        liveRecording.addEventListener('click', function () {
          playingElement = d.getElementById(
            `musicElement${globalTrackList}`,
          );

          if (playingElement === null) {
            generalArray = checkActiveArray[0];
          } else {
            if (playingElement.currentTime > 0) {
              generalArray = generalArray;
            }
          }
        });

        homeRecording.addEventListener('click', function () {
          playingElement = d.getElementById(
            `musicElement${globalTrackList}`,
          );

          if (playingElement === null) {
            generalArray = checkActiveArray[1];
          } else {
            if (playingElement.currentTime > 0) {
              generalArray = generalArray;
            }
          }
        });

        studioRehearsal.addEventListener('click', function () {
          playingElement = d.getElementById(
            `musicElement${globalTrackList}`,
          );

          if (playingElement === null) {
            generalArray = checkActiveArray[2];
          } else {
            if (playingElement.currentTime > 0) {
              generalArray = generalArray;
            }
          }
        });

        originalTrack.addEventListener('click', function () {
          playingElement = d.getElementById(
            `musicElement${globalTrackList}`,
          );

          if (playingElement === null) {
            generalArray = checkActiveArray[3];
          } else {
            if (playingElement.currentTime > 0) {
              generalArray = generalArray;
            }
          }
        });

        allSongs.addEventListener('click', function () {
          playingElement = d.getElementById(
            `musicElement${globalTrackList}`,
          );

          if (playingElement === null) {
            generalArray = checkActiveArray[4];
          } else {
            if (playingElement.currentTime > 0) {
              generalArray = generalArray;
            }
          }
        });

        if (mediaQuery.matches) {
          songlistDiv.addEventListener(
            'touchstart',
            playMobileElement,
          );

          function playMobileElement() {
            mobileEventIsTrusted = event.isTrusted;
            let activePlaylist = Object.values(filterFlags).indexOf(
              true,
            );
            if (generalArray.lenght !== 0) {
              previous.style.opacity = '1';
              next.style.opacity = '1';
            }

            if (mobileEventIsTrusted) {
              if (
                generalArray == undefined ||
                generalArray.length === 0
              ) {
                generalArray = checkActiveArray[4];
              } else {
                if (activePlaylist === -1) {
                  generalArray = checkActiveArray[4];
                } else {
                  generalArray = checkActiveArray[activePlaylist];
                }
              }
            } else {
              generalArray = generalArray;
            }
          }
          next.addEventListener('touchstart', nextCard);
          function nextCard() {
            if (
              d.getElementById(`musicElement${globalTrackList}`)
                .currentTime > 0
            ) {
              nextTrack();
            }
          }
        }
        if (!mediaQuery.matches) {
          songlistDiv.addEventListener('click', playElement);

          function playElement() {
            let activePlaylist = Object.values(filterFlags).indexOf(
              true,
            );

            if (event.isTrusted) {
              if (
                generalArray == undefined ||
                generalArray.length === 0
              ) {
                generalArray = checkActiveArray[4];
              } else {
                if (activePlaylist === -1) {
                  generalArray = checkActiveArray[4];
                } else {
                  generalArray = checkActiveArray[activePlaylist];
                }
              }
            } else {
              generalArray = generalArray;
            }

            next.addEventListener('click', nextCard, {
              once: true,
            });
            function nextCard() {
              if (musicElement.currentTime > 0) {
                nextTrack();
                return;
              }
            }
          }
        }

        previous.addEventListener('click', function () {
          try {
            if (musicElement0.paused) {
              cardPlayIcon1.className = 'icon play';
              playCard1.classList.remove('active');
            } else {
              playCard1.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement1.paused) {
              // console.log('1');
              cardPlayIcon2.className = 'icon play';
              playCard2.classList.remove('active');
              playCard1.classList.remove('active');
            } else {
              // console.log('2');
              playCard2.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement2.paused) {
              cardPlayIcon3.className = 'icon play';
              playCard3.classList.remove('active');
            } else {
              playCard3.classList.add('active');
            }
          } catch (error) {}
          try {
            if (musicElement3.paused) {
              cardPlayIcon4.className = 'icon play';
              playCard4.classList.remove('active');
            } else {
              playCard4.classList.add('active');
            }
          } catch (error) {}
        });

        //PREVIOUS TRACK EVENTLISTENER
        previous.addEventListener('click', previousCard);
        function previousCard() {
          if (musicElement.currentTime > 0) {
            previousTrack();
            return;
          }
        }

        //PREVIOUS TRACK
        function previousTrack() {
          if (mediaQuery.matches) {
            if (footer.style.height === '100vh') {
              function displayTrackInfo() {
                if (
                  generalArray.length === 1 ||
                  musicElement.currentTime >= 3 ||
                  (!sortButtonFlag &&
                    globalTrackList === generalArray[0]) ||
                  (sortButtonFlag &&
                    globalTrackList ===
                      generalArray[generalArray.length - 1])
                ) {
                } else {
                  //här previ
                  let removeModify = d.getElementsByClassName(
                    'addModify-container',
                  );
                  for (i = 0; i < removeModify.length; i++) {
                    removeModify[i].style.display = 'none';
                  }
                  playerContainer.classList.remove('active');
                  playerContainer.style.display = 'none';

                  setTimeout(function () {
                    let nameSize = d.querySelectorAll(
                      `#jsonName${globalTrackList}`,
                    );

                    let artistSize = d.querySelectorAll(
                      `#jsonArtist${globalTrackList}`,
                    );

                    let pointer = d.querySelectorAll(
                      `#mainImageButtonBox${globalTrackList}`,
                    );

                    ellipticTitle = d.getElementById(
                      `jsonName${globalTrackList}`,
                    );
                    ellipticArtist = d.getElementById(
                      `jsonArtist${globalTrackList}`,
                    );
                    ellipticImage = d.getElementById(
                      `imageFooter${globalTrackList}`,
                    );
                    ellipticText = d.getElementById(
                      `jsonFooter${globalTrackList}`,
                    );

                    ellipticCover = d.querySelectorAll(
                      `.image-button${globalTrackList}`,
                    );

                    ellipticNowPlaying = d.querySelectorAll(
                      `.now-playing${globalTrackList}`,
                    );

                    ellipticModify = d.getElementById(
                      `addModifyContainer${globalTrackList}`,
                    );

                    ellipticModifyCurrent = d.getElementById(
                      `addModifyContainer${trackListArray.indexOf(
                        jsonLink,
                      )}`,
                    );

                    ellipticDropdown = d.getElementById(
                      `myDropdown${globalTrackList}`,
                    );
                    ellipticModifyCurrent.style.display = 'none';
                    controlsContainer.classList.add('active');

                    for (i = 0; i < pointer.length; i++) {
                      pointer[1].style.width = '45vw';
                      pointer[1].style.height = '45vw';
                      pointer[1].style.borderRadius = '300px';
                      pointer[1].style.padding = '10px';
                    }

                    for (i = 0; i < ellipticCover.length; i++) {
                      ellipticCover[1].style.width = '100%';
                      ellipticCover[1].style.height = '100%';
                      ellipticCover[1].style.justifyContent = 'end';
                      ellipticCover[1].style.borderRadius = '300px';
                      ellipticCover[1].style.padding = '0';
                    }
                    nameSize[1].style.fontSize = '19px';
                    nameSize[1].style.marginBottom = '1vh';
                    nameSize[1].style.overflow = 'unset';
                    nameSize[1].style.maxWidth = 'fit-content';

                    artistSize[1].style.fontSize = '13px';
                    artistSize[1].style.overflow = 'unset';
                    artistSize[1].style.maxWidth = 'fit-content';
                    ellipticImage.classList.remove(`image-footer`);
                    ellipticImage.classList.add('elliptic-footer');
                    ellipticDropdown.classList.add('active');
                    ellipticText.classList.add('active');
                    ellipticModify.classList.add('active');
                    //här prev
                    ellipticModify.style.animationDuration = '0.6s';
                    ellipticText.style.animationDuration = '0.6s';
                    ellipticImage.style.animationDuration = '0.5s';
                  }, 0);
                  setTimeout(function () {
                    playerContainer.classList.add('active');
                    playerContainer.style.display = 'flex';
                    ellipticModify.style.display = 'flex';
                    ellipticText.style.display = 'flex';
                    ellipticImage.style.display = 'flex';
                  }, 0);
                }
              }
              displayTrackInfo();
            }
          }

          // DEFAULT ORDER
          if (
            !sortButtonFlag &&
            globalTrackList === generalArray[0]
          ) {
            musicElement.currentTime = 0;
          }
          if (
            !sortButtonFlag &&
            globalTrackList !== generalArray[0] &&
            musicElement.currentTime < 3
          ) {
            setTimeout(function () {
              try {
                ellipticText.className =
                  'json-footer active animate__animated animate__fadeInLeft';
                ellipticImage.className =
                  'animate__animated animate__fadeInLeft';
                ellipticModify.className =
                  'addModify-container active animate__animated animate__fadeInLeft';
                recordContainer.style.display = 'flex';
              } catch (error) {}
            }, 0);

            let prev = generalArray.indexOf(globalTrackList);
            d.getElementById(
              `playButton${generalArray[prev - 1]}`,
            ).click();
            d.getElementById(
              `playButton${globalTrackList}`,
            ).style.display = 'flex';
            d.getElementById(
              `playButton${previousStateArray[1]}`,
            ).style.display = 'none';
          } else if (
            !sortButtonFlag &&
            globalTrackList === generalArray[0] &&
            musicElement.currentTime < 3
          ) {
            setTimeout(function () {
              ellipticText.className = 'json-footer active';
              ellipticImage.className = '';
              ellipticModify.className = 'addModify-container active';
            }, 0);
            musicElement.currentTime = 0;
          }
          // RECENTLY ADDED
          if (
            sortButtonFlag &&
            globalTrackList === generalArray[generalArray.length - 1]
          ) {
            musicElement.currentTime = 0;
          }
          try {
            if (
              sortButtonFlag &&
              globalTrackList !==
                generalArray[generalArray.length - 1] &&
              musicElement.currentTime < 3
            ) {
              setTimeout(function () {
                ellipticText.className =
                  'json-footer active animate__animated animate__fadeInLeft';
                ellipticImage.className =
                  'animate__animated animate__fadeInLeft';
                ellipticModify.className =
                  'addModify-container active animate__animated animate__fadeInLeft';
              }, 0);

              let prev = generalArray.indexOf(globalTrackList);

              d.getElementById(
                `playButton${generalArray[prev + 1]}`,
              ).click();
              d.getElementById(
                `playButton${globalTrackList}`,
              ).style.display = 'flex';
              d.getElementById(
                `playButton${previousStateArray[1]}`,
              ).style.display = 'none';
            } else {
              musicElement.currentTime = 0;
            }
          } catch (error) {
            console.log(error);
          }
        }

        //NEXT TRACK
        musicElement.addEventListener('ended', nextTrack);
        function nextTrack() {
          nowPlaying.style.display = 'flex';
          // DEFAULT ORDER
          if (!sortButtonFlag) {
            if (
              globalTrackList !==
              generalArray[generalArray.length - 1]
            ) {
              d.getElementById(
                `playButton${previousStateArray[0]}`,
              ).style.display = 'none';

              if (generalArray.length === 0) {
                generalArray = playListArray
                  .map((e, i) =>
                    e === 'Live recording' ||
                    'Home recording' ||
                    'Studio rehearsal' ||
                    'Original track'
                      ? i
                      : '',
                  )
                  .filter(String);
              } else {
                generalArray = generalArray;
              }
              console.log(generalArray);
              d.getElementById(
                `playButton${
                  generalArray[generalArray.indexOf(trackIndex) + 1]
                }`,
              ).style.display = 'flex';

              d.getElementById(
                `playButton${
                  generalArray[generalArray.indexOf(trackIndex) + 1]
                }`,
              ).click();
              nowPlaying.innerHTML = '';
              curr_time.textContent = '0:00';
              range.value = 0;
            } else {
              if (generalArray.length === 1) {
                d.getElementById(
                  `musicElement${globalTrackList}`,
                ).currentTime = 0;
              } else {
                songlistDiv.style.boxShadow = 'none';
                d.getElementById(
                  `playButton${globalTrackList}`,
                ).style.display = 'none';

                d.getElementById(
                  `playButton${generalArray[0]}`,
                ).style.display = 'flex';

                d.getElementById(
                  `playButton${generalArray[0]}`,
                ).click();
                nowPlaying.innerHTML = '';
                curr_time.textContent = '0:00';
                range.value = 0;
              }
            }
          } else if (sortButtonFlag) {
            // RECENTLY ADDED
            if (globalTrackList !== generalArray[0]) {
              d.getElementById(
                `playButton${previousStateArray[0]}`,
              ).style.display = 'none';
              d.getElementById(
                `playButton${
                  generalArray[generalArray.indexOf(trackIndex) - 1]
                }`,
              ).style.display = 'flex';
              d.getElementById(
                `playButton${
                  generalArray[generalArray.indexOf(trackIndex) - 1]
                }`,
              ).click();
              nowPlaying.innerHTML = '';
              curr_time.textContent = '0:00';
              range.value = 0;
            } else {
              if (generalArray.length === 1) {
                d.getElementById(
                  `musicElement${globalTrackList}`,
                ).currentTime = 0;
              } else {
                songlistDiv.style.boxShadow = 'none';
                d.getElementById(
                  `playButton${globalTrackList}`,
                ).style.display = 'none';

                d.getElementById(
                  `playButton${
                    generalArray[generalArray.length - 1]
                  }`,
                ).style.display = 'flex';

                d.getElementById(
                  `playButton${
                    generalArray[generalArray.length - 1]
                  }`,
                ).click();
                nowPlaying.innerHTML = '';
                curr_time.textContent = '0:00';
                range.value = 0;
              }
            }
          }

          // MEDIA QUERY
          if (mediaQuery.matches) {
            if (footer.style.height === '100vh') {
              if (!sortButtonFlag && generalArray.length !== 1) {
                if (
                  globalTrackList <=
                  generalArray[generalArray.length - 1]
                ) {
                  let nameSize = d.querySelectorAll(
                    `#jsonName${globalTrackList}`,
                  );
                  let artistSize = d.querySelectorAll(
                    `#jsonArtist${globalTrackList}`,
                  );
                  let pointer = d.querySelectorAll(
                    `#mainImageButtonBox${globalTrackList}`,
                  );

                  ellipticTitle = d.getElementById(
                    `jsonName${globalTrackList}`,
                  );
                  ellipticArtist = d.getElementById(
                    `jsonArtist${globalTrackList}`,
                  );

                  ellipticImage = d.getElementById(
                    `imageFooter${globalTrackList}`,
                  );

                  ellipticText = d.getElementById(
                    `jsonFooter${globalTrackList}`,
                  );

                  ellipticText.style.display = 'none';

                  ellipticCover = d.getElementsByClassName(
                    `image-button${globalTrackList}`,
                  );

                  ellipticNowPlaying = d.getElementById(
                    `now-playing${globalTrackList}`,
                  );

                  ellipticModify = d.getElementById(
                    `addModifyContainer${globalTrackList}`,
                  );
                  let prev = generalArray.indexOf(globalTrackList);

                  if (generalArray.length === 1) {
                  } else {
                  }
                  try {
                    ellipticModifyPrevious = d.getElementById(
                      `addModifyContainer${generalArray[prev - 1]}`,
                    );
                    ellipticModifyPrevious.style.display = 'none';
                  } catch (error) {
                    ellipticModifyPrevious = d.getElementById(
                      `addModifyContainer${
                        generalArray[generalArray.length - 1]
                      }`,
                    );
                    ellipticModifyPrevious.style.display = 'none';
                  }

                  addModifyContainer.style.display = 'none';
                  ellipticImage.style.display = 'none';
                  recordContainer.style.display = 'none';

                  ellipticDropdown = d.getElementById(
                    `myDropdown${globalTrackList}`,
                  );

                  setTimeout(function () {
                    playerContainer.style.display = 'flex';
                    playerContainer.classList.add('active');
                    //ELIPTIC TEXT
                    controlsContainer.classList.add('active');

                    try {
                      pointer[1].style.width = '45vw';
                      pointer[1].style.height = '45vw';
                      pointer[1].style.borderRadius = '300px';
                      pointer[1].style.padding = '10px';

                      ellipticCover[1].style.width = '100%';
                      ellipticCover[1].style.height = '100%';
                      ellipticCover[1].style.justifyContent = 'end';
                      ellipticCover[1].style.borderRadius = '300px';
                      ellipticCover[1].style.padding = '0';

                      nameSize[1].style.fontSize = '19px';
                      nameSize[1].style.marginBottom = '1vh';
                      nameSize[1].style.overflow = 'unset';
                      nameSize[1].style.maxWidth = 'fit-content';

                      artistSize[1].style.fontSize = '13px';
                      artistSize[1].style.overflow = 'unset';
                      artistSize[1].style.maxWidth = 'fit-content';
                    } catch (error) {
                      console.log(error);
                    }
                    ellipticImage.classList.remove(`image-footer`);
                    ellipticImage.classList.add('elliptic-footer');
                    ellipticDropdown.className =
                      'dropdown-content active';

                    if (
                      trackListArray.indexOf(jsonLink) ===
                      trackListArray.length - 1
                    ) {
                    }

                    if (generalArray.length === 1) {
                      ellipticText.className = 'json-footer active';
                      ellipticImage.className = '';

                      ellipticModify.className =
                        'addModify-container active';
                    } else {
                      recordContainer.className =
                        'json-footer active animate__animated animate__fadeIn';
                      ellipticText.className =
                        'json-footer active animate__animated animate__fadeInRight';
                      ellipticImage.className =
                        'animate__animated animate__fadeInRight';

                      ellipticModify.className =
                        'addModify-container active animate__animated animate__fadeInRight';
                    }

                    // här next
                    ellipticModify.style.animationDelay = '0s';
                    ellipticText.style.animationDelay = '0s';
                    ellipticImage.style.animationDelay = '0s';
                    recordContainer.style.animationDelay = '0.3s';
                    ellipticModify.style.animationDuration = '0.6s';
                    ellipticText.style.animationDuration = '0.6s';
                    ellipticImage.style.animationDuration = '0.5s';
                    recordContainer.style.animationDuration = '0.1s';
                    ellipticModify.style.display = 'flex';
                    ellipticText.style.display = 'flex';
                    ellipticImage.style.display = 'flex';
                    recordContainer.style.display = 'flex';
                  }, 0);
                }
              } else if (
                sortButtonFlag &&
                generalArray.length !== 1
              ) {
                playerContainer.style.display = 'none';

                if (globalTrackList >= generalArray[0]) {
                  console.log(
                    'ändrat nameSize från json-name var uppmärksam',
                  );
                  let nameSize = d.querySelectorAll(
                    `#jsonName${globalTrackList}`,
                  );
                  let artistSize = d.querySelectorAll(
                    `#jsonArtist${globalTrackList}`,
                  );
                  let pointer = d.querySelectorAll(
                    `#mainImageButtonBox${globalTrackList}`,
                  );

                  ellipticTitle = d.getElementById(
                    `jsonName${globalTrackList}`,
                  );
                  ellipticArtist = d.getElementById(
                    `jsonArtist${globalTrackList}`,
                  );

                  ellipticImage = d.getElementById(
                    `imageFooter${globalTrackList}`,
                  );

                  ellipticText = d.getElementById(
                    `jsonFooter${globalTrackList}`,
                  );
                  ellipticText.style.display = 'none';

                  ellipticCover = d.getElementsByClassName(
                    `image-button${globalTrackList}`,
                  );

                  ellipticNowPlaying = d.getElementById(
                    `now-playing${globalTrackList}`,
                  );

                  ellipticModify = d.getElementById(
                    `addModifyContainer${globalTrackList}`,
                  );
                  let prev = generalArray.indexOf(globalTrackList);

                  ellipticModifyPrevious = d.getElementById(
                    `addModifyContainer${generalArray[prev + 1]}`,
                  );

                  if (generalArray.length === 1) {
                  } else {
                  }
                  try {
                    ellipticModifyPrevious = d.getElementById(
                      `addModifyContainer${generalArray[prev + 1]}`,
                    );
                    ellipticModifyPrevious.style.display = 'none';
                  } catch (error) {
                    ellipticModifyPrevious = d.getElementById(
                      `addModifyContainer${generalArray[0]}`,
                    );
                    ellipticModifyPrevious.style.display = 'none';
                  }

                  ellipticImage.style.display = 'none';
                  addModifyContainer.style.display = 'none';
                  ellipticDropdown = d.getElementById(
                    `myDropdown${globalTrackList}`,
                  );
                  ellipticImage.style.display = 'none';
                  setTimeout(function () {
                    playerContainer.style.display = 'flex';
                    playerContainer.classList.add('active');
                    //ELIPTIC TEXT
                    controlsContainer.classList.add('active');

                    try {
                      pointer[1].style.width = '45vw';
                      pointer[1].style.height = '45vw';
                      pointer[1].style.borderRadius = '300px';
                      pointer[1].style.padding = '10px';

                      ellipticCover[1].style.width = '100%';
                      ellipticCover[1].style.height = '100%';
                      ellipticCover[1].style.justifyContent = 'end';
                      ellipticCover[1].style.borderRadius = '300px';
                      ellipticCover[1].style.padding = '0';

                      nameSize[1].style.fontSize = '19px';
                      nameSize[1].style.marginBottom = '1vh';
                      nameSize[1].style.overflow = 'unset';
                      nameSize[1].style.maxWidth = 'fit-content';

                      artistSize[1].style.fontSize = '13px';
                      artistSize[1].style.overflow = 'unset';
                      artistSize[1].style.maxWidth = 'fit-content';
                    } catch (error) {
                      console.log(error);
                    }
                    ellipticImage.classList.remove(`image-footer`);
                    ellipticImage.classList.add('elliptic-footer');
                    ellipticDropdown.className =
                      'dropdown-content active';

                    if (
                      trackListArray.indexOf(jsonLink) ===
                      trackListArray.length - 1
                    ) {
                    }

                    ellipticText.className =
                      'json-footer active animate__animated animate__fadeInRight';
                    ellipticImage.className =
                      'animate__animated animate__fadeInRight';

                    ellipticModify.className =
                      'addModify-container active animate__animated animate__fadeInRight';
                    ellipticModify.style.display = 'flex';
                    ellipticModify.style.animationDuration = '0.6s';
                    ellipticText.style.animationDuration = '0.6s';
                    ellipticImage.style.animationDuration = '0.5s';

                    ellipticText.style.display = 'flex';
                    ellipticImage.style.display = 'flex';
                  }, 0);
                }
              }
            }
          }
        }
      }
    });
}
checkGetReq();
// ---------------------------------------------- END OF DYNAMIC ENVIRONMENT ---------------------------------------------

let currentMusicBox = d.getElementById('musicBox');
let previous = d.getElementById('previous');
let next = d.getElementById('next');

let checkActiveFlag = [];
let checkActiveArray = [];
let indexOfTrue;

if (mediaQuery.matches) {
  playPause.addEventListener('touchstart', playPauseFunction);
  function playPauseFunction() {
    if (globalTrackList === undefined) {
      d.getElementById(`playButton${0}`).click();
    } else {
      d.getElementById(`playButton${globalTrackList}`).click();
    }
  }
} else if (!mediaQuery.matches) {
  playPause.addEventListener('click', playPauseFunction);
  function playPauseFunction() {
    if (globalTrackList === undefined) {
      d.getElementById(`playButton${0}`).click();
    } else {
      d.getElementById(`playButton${globalTrackList}`).click();
    }
  }
}

submitButton.disabled = true;
submitButton.style.cursor = 'default';
submitButton.style.cursor = 'not-allowed';

nameTick.addEventListener('input', function () {
  checkFormInput();
});
artistTick.addEventListener('input', function () {
  checkFormInput();
});

commentTick.addEventListener('input', function () {
  checkFormInput();
});

fileTick.addEventListener('input', function () {
  checkFormInput();
});

submitButton.addEventListener('click', function () {
  checkFormInput();
});

add.addEventListener('click', function () {
  checkFormInput();
});

function checkFormInput() {
  let flag = true;

  if (
    nameTick.value.length === 0 ||
    artistTick.value.length === 0 ||
    commentTick.value.length === 0 ||
    fileTick.value.length === 0
  ) {
    submitButton.disabled = true;
    submitButton.style.cursor = 'not-allowed';
    if (!darkModeFlag) {
      submitButton.style.color = '#61677c';
      submitButton.style.backgroundColor = '#e9f0fb';
      submitButton.classList.remove('dark-mode-text-grey');
      submitButton.classList.remove('dark-mode-text');
      submitButton.classList.remove('dark-mode-regularBox');
    } else if (darkModeFlag) {
      submitButton.classList.add('dark-mode-text-grey');
      submitButton.classList.remove('dark-mode-text');
    }

    flag = false;
  } else {
    submitButton.disabled = false;
    submitButton.style.cursor = 'pointer';
    if (!darkModeFlag) {
      submitButton.classList.remove('dark-mode-text-grey');
      submitButton.classList.remove('dark-mode-text');
      submitButton.classList.remove('dark-mode-regularBox');
      submitButton.style.backgroundColor = '#6e69f7';
      submitButton.style.color = 'white';
    } else if (darkModeFlag) {
      //latest
      submitButton.classList.remove('dark-mode-text-grey');
      submitButton.classList.add('dark-mode-text');
    }
  }

  return flag;
}

let slideButton1 = d.getElementById('slideButton1');
let slideButton2 = d.getElementById('slideButton2');

const togglePopupForm = d.getElementById('myForm');

//Logo

const spans = d.querySelectorAll('.word span');

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

//slider
d.getElementById('label1').addEventListener('click', function () {
  d.getElementById('name').focus();
});

d.getElementById('label2').addEventListener('click', function () {
  d.getElementById('artist').focus();
});

let toggleTooltip = d.getElementById('toggleTooltip');
let labelText = d.getElementById('label-text');
toggling.addEventListener('click', nextSlide);
toggling = toggling.value;
function nextSlide() {
  if (toggling) {
    submitErrorMessageContainer.className =
      'animate__animated animate__fadeOut';
    toggleEvent.style.pointerEvents = 'none';

    setTimeout(function () {
      toggleEvent.style.pointerEvents = 'all';
    }, 500);
    submitErrorMessageContainer.style.animationDuration = '0.2s';
    portraitText.style.animationDuration = '0.5s';
    portraitText.className =
      'animate__animated animate__fadeOutRight';

    setTimeout(function () {
      portraitText.style.animationDuration = '0.8s';

      portraitText.className =
        'animate__animated animate__fadeInRight';
      navbarText.innerHTML = 'Optional information.';
    }, 100);

    addSong.style.pointerEvents = 'none';
    window.location.href = '#slide-2';
    labelText.className = 'animate__animated animate__fadeOut';
    toggling = false;
    window.setTimeout(function () {
      labelText.className = 'animate__animated animate__fadeIn';
      labelText.innerHTML = 'Go back to Required Information';
    }, 310);
  } else if (!toggling) {
    toggleEvent.style.pointerEvents = 'none';
    setTimeout(function () {
      toggle.style.pointerEvents = 'all';
    }, 1000);
    portraitText.style.animationDuration = '0.5s';
    portraitText.className =
      'animate__animated animate__fadeOutRight';
    setTimeout(function () {
      portraitText.style.animationDuration = '0.8s';

      portraitText.className =
        'animate__animated animate__fadeInRight';
      navbarText.innerHTML = 'Required information.';
    }, 100);
    d.getElementById('toggler').removeAttribute('checked');
    window.location.href = '#slide-1';
    labelText.className = 'animate__animated animate__fadeOut';
    toggling = true;
    window.setTimeout(function () {
      labelText.className = 'animate__animated animate__fadeIn';
      labelText.innerHTML = 'Go to Optional Information';
    }, 310);
  }
}

//hide navbar on scroll
window.onscroll = function () {
  // scrollFunction1();
};

// load playlist by default
let welcomeText = d.getElementById('userMessage');

function changeText() {
  let date = new Date();
  let hour = date.getHours();
  if (!mediaQuery.matches) {
    if (hour >= 0 && hour < 12) {
      welcomeText.innerHTML = `Good Morning,&nbsp;${userName}`;
    } else if (hour >= 12 && hour < 18) {
      welcomeText.innerHTML = `Good Afteroon,&nbsp;${userName}`;
    } else if (hour >= 18) {
      welcomeText.innerHTML = `Good Evening,&nbsp;${userName}`;
    }
  } else if (mediaQuery.matches) {
    if (hour >= 0 && hour < 12) {
      welcomeText.innerHTML = `Hello,&nbsp;${userName}`;
    } else if (hour >= 12 && hour < 18) {
      welcomeText.innerHTML = `Hello,&nbsp;${userName}`;
    } else if (hour >= 18) {
      welcomeText.innerHTML = `Hello,&nbsp;${userName}`;
    }
  }
}
changeText();

let informationTooltip1 = d.getElementById('informationTooltip1');
let informationTooltip2 = d.getElementById('informationTooltip2');
let informationTooltip3 = d.getElementById('informationTooltip3');

let keyInformation1 = d.getElementById('informationWrapper1');
let keyInformation2 = d.getElementById('informationWrapper2');
let keyInformation3 = d.getElementById('informationWrapper3');

let keyInformationText1 = d.getElementById('information1');
let keyInformationText2 = d.getElementById('information2');
let keyInformationText3 = d.getElementById('information3');

informationTooltip2.addEventListener('mouseenter', function () {
  keyInformation2.style.display = 'flex';
  keyInformation2.style.pointerEvents = 'none';
  keyInformationText2.innerHTML =
    'Select a playlist for easier cataloging.';
  keyInformation2.className = 'animate__animated animate__fadeIn';
});

informationTooltip2.addEventListener('mouseleave', function () {
  keyInformation2.className = 'animate__animated animate__fadeOut';
});

informationTooltip3.addEventListener('mouseenter', function () {
  keyInformation3.style.display = 'flex';
  keyInformation3.style.pointerEvents = 'none';
  keyInformationText3.innerHTML = 'Upload audio/video.';
  keyInformation3.className = 'animate__animated animate__fadeIn';
});

informationTooltip3.addEventListener('mouseleave', function () {
  keyInformation3.className = 'animate__animated animate__fadeOut';
});

let formRowContainer = d.getElementById('formRowContainer');

let mouseContainer = d.getElementById('mouseContainer');

formRowContainer.addEventListener('scroll', function () {
  mouseContainer.className = 'animate__animated animate__fadeOut';
  mouseContainer.style.animationDuration = '0.2s';
});

// Listen to all clicks
addSong.addEventListener('click', addSongPage);
function addSongPage(event) {
  // if (!event.target.matches('#addSong:target')) {
  home.style.pointerEvents = 'auto';
  songs.style.pointerEvents = 'auto';
  chat.style.pointerEvents = 'auto';
  home.style.color = '#61677c';
  setlist.style.color = '#61677c';
  songs.style.color = '#61677c';
  chat.style.color = '#61677c';
  addSong.style.color = '#e9c37d';
  if (mediaQuery.matches) {
    addSong.style.boxShadow =
      '-2px -2px 5px #fff, 2px 2px 5px #babecc';
    songs.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    chat.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
    home.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
  }
  portraitText.className = 'animate__animated animate__fadeInRight';
  navbarText.innerHTML = 'Add song to playlist.';
  // DISPLAY
  chatWrapper.style.animationDelay = '0s';
  dynamicDiv.style.animationDelay = '0s';
  homePageWrapper.style.animationDelay = '0s';

  // MEDIA
  if (mediaQuery.matches) {
    // If media query matches
    toggleAddSongContainer.style.animationDelay = '0s';
    toggleAddSongContainer.style.animationDuration = '0.3s';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      dynamicDiv.style.display = 'none';
      homePageWrapper.style.display = 'none';
    }, 100);
  } else {
    toggleAddSongContainer.style.animationDelay = '0.1s';
    toggleAddSongContainer.style.animationDuration = '0.3s';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      dynamicDiv.style.display = 'none';
      homePageWrapper.style.display = 'none';
    }, 300);
  }

  toggleAddSongContainer.style.display = 'flex';
  toggleAddSongContainer.className =
    'animate__animated animate__fadeIn';

  // HIDE
  chatWrapper.style.animationDuration = '0.1s';
  dynamicDiv.style.animationDuration = '0.1s';
  homePageWrapper.style.animationDuration = '0.1s';

  chatWrapper.className = 'animate__animated animate__fadeOut';
  dynamicDiv.className = 'animate__animated animate__fadeOut';
  homePageWrapper.className = 'animate__animated animate__fadeOut';
}

if (mediaQuery.matches) {
  home.addEventListener('touchstart', homeRef);
} else if (!mediaQuery.matches) {
  home.addEventListener('click', homeRef);
}

function homeRef(event) {
  footer.style.display = 'flex';
  if (!darkModeFlag) {
    footer.className = 'top-bottom-overflow-fade1';
  } else if (darkModeFlag) {
    footer.className = 'top-bottom-overflow-fade1 dark-mode';
  }
  if (input.style.display === 'flex') {
    userWrapper.style.display = 'none';
  } else {
    userWrapper.style.display = 'flex';
  }

  addSong.style.pointerEvents = 'auto';
  songs.style.pointerEvents = 'auto';
  chat.style.pointerEvents = 'auto';
  songs.style.color = '#61677c';
  setlist.style.color = '#61677c';
  addSong.style.color = '#61677c';
  chat.style.color = '#61677c';
  home.style.color = '#e9c37d';
  // DISPLAY
  chatWrapper.style.animationDelay = '0s';
  dynamicDiv.style.animationDelay = '0s';
  toggleAddSongContainer.style.animationDuration = '0s';
  toggleAddSongContainer.style.animationDelay = '0s';

  // MEDIA
  if (mediaQuery.matches) {
    userWrapper.className = '';
    d.getElementById('userMessage').className = '';
    if (darkModeFlag) {
      userMessage.classList.add('dark-mode-text-white');
    } else if (!darkModeFlag) {
      userMessage.classList.remove('dark-mode-text-white');
    }
    home.style.boxShadow = '-2px -2px 5px #fff, 2px 2px 5px #babecc';
    songs.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    chat.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
    addSong.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    footer.style.boxShadow = 'none';
    homePageWrapper.style.animationDelay = '0s';
    homePageWrapper.style.animationDuration = '0.3s';
    homePageWrapper.style.display = 'flex';
    homePageWrapper.className = 'animate__animated animate__fadeIn';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      dynamicDiv.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 100);
  } else if (!mediaQuery.matches) {
    homePageWrapper.style.animationDelay = '0.1s';
    homePageWrapper.style.animationDuration = '0.2s';
    homePageWrapper.style.display = 'flex';
    homePageWrapper.className = 'animate__animated animate__fadeIn';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      dynamicDiv.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 300);
  }

  // HIDE
  chatWrapper.style.animationDuration = '0s';
  dynamicDiv.style.animationDuration = '0s';
  toggleAddSongContainer.style.animationDuration = '0s';

  chatWrapper.className = 'animate__animated animate__fadeOut';
  dynamicDiv.className = 'animate__animated animate__fadeOut';
  toggleAddSongContainer.className =
    'animate__animated animate__fadeOut';
}

if (mediaQuery.matches) {
  songs.addEventListener('touchstart', songRef);
} else if (!mediaQuery.matches) {
  songs.addEventListener('click', songRef);
}

function songRef(event) {
  footer.style.display = 'flex';
  if (!darkModeFlag) {
    footer.className = 'top-bottom-overflow-fade1';
  } else if (darkModeFlag) {
    footer.className = 'top-bottom-overflow-fade1 dark-mode';
  }
  sortWrapper.className = '';
  addSong.style.pointerEvents = 'auto';
  home.style.pointerEvents = 'auto';
  chat.style.pointerEvents = 'auto';
  home.style.color = '#61677c';
  setlist.style.color = '#61677c';
  addSong.style.color = '#61677c';
  chat.style.color = '#61677c';
  songs.style.color = '#e9c37d';
  // DISPLAY
  chatWrapper.style.animationDelay = '0s';
  homePageWrapper.style.animationDelay = '0s';
  toggleAddSongContainer.style.animationDelay = '0s';

  // MEDIA
  if (mediaQuery.matches) {
    songs.style.boxShadow = '-2px -2px 5px #fff, 2px 2px 5px #babecc';
    home.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
    chat.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
    addSong.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    // If media query matches
    let pointer = d.getElementsByClassName('image-footer');
    for (i = 0; i < pointer.length; i++) {
      pointer[i].style.display = 'flex';
    }
    previous.style.display = 'flex';
    next.style.display = 'flex';
    dynamicDiv.style.animationDelay = '0s';
    dynamicDiv.style.animationDuration = '0.3s';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      homePageWrapper.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 100);
  } else {
    dynamicDiv.style.animationDelay = '0.1s';
    dynamicDiv.style.animationDuration = '0.2s';
    setTimeout(function () {
      chatWrapper.style.display = 'none';
      homePageWrapper.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 300);
  }
  dynamicDiv.style.display = 'flex';
  dynamicDiv.className = 'animate__animated animate__fadeIn';
  // HIDE
  chatWrapper.style.animationDuration = '0s';
  homePageWrapper.style.animationDuration = '0s';
  toggleAddSongContainer.style.animationDuration = '0s';

  chatWrapper.className = 'animate__animated animate__fadeOut';
  homePageWrapper.className = 'animate__animated animate__fadeOut';
  toggleAddSongContainer.className =
    'animate__animated animate__fadeOut';
}

if (mediaQuery.matches) {
  chat.addEventListener('touchstart', chatRef);
} else if (!mediaQuery.matches) {
  chat.addEventListener('click', chatRef);
}

function chatRef(event) {
  if (!event.target.matches('#chat:target')) {
    home.style.color = '#61677c';
    setlist.style.color = '#61677c';
    addSong.style.color = '#61677c';
    songs.style.color = '#61677c';
    chat.style.color = '#e9c37d';
  }

  // DISPLAY
  dynamicDiv.style.animationDelay = '0s';
  homePageWrapper.style.animationDelay = '0s';
  toggleAddSongContainer.style.animationDelay = '0s';

  // MEDIA
  if (mediaQuery.matches) {
    footer.style.display = 'none';
    chat.style.boxShadow = '-2px -2px 5px #fff, 2px 2px 5px #babecc';
    home.style.boxShadow = '5px -5px 20px #fff, 5px 5px 20px #babecc';
    songs.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    addSong.style.boxShadow =
      '5px -5px 20px #fff, 5px 5px 20px #babecc';
    chatWrapper.style.animationDelay = '0s';
    chatWrapper.style.animationDuration = '0.3s';
    setTimeout(function () {
      dynamicDiv.style.display = 'none';
      homePageWrapper.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 100);
  } else {
    chatWrapper.style.display = 'flex';
    chatWrapper.style.animationDelay = '0.1s';
    chatWrapper.style.animationDuration = '0.2s';
    setTimeout(function () {
      dynamicDiv.style.display = 'none';
      homePageWrapper.style.display = 'none';
      toggleAddSongContainer.style.display = 'none';
    }, 300);
  }
  chatWrapper.style.display = 'flex';
  chatWrapper.className = 'animate__animated animate__fadeIn';
  // HIDE
  dynamicDiv.style.animationDuration = '0s';
  homePageWrapper.style.animationDuration = '0s';
  toggleAddSongContainer.style.animationDuration = '0s';

  dynamicDiv.className = 'animate__animated animate__fadeOut';
  homePageWrapper.className = 'animate__animated animate__fadeOut';
  toggleAddSongContainer.className =
    'animate__animated animate__fadeOut';
}

let bandWrapper1 = d.getElementById('bandWrapper1');
let bandWrapper2 = d.getElementById('bandWrapper2');
let bandWrapper3 = d.getElementById('bandWrapper3');
let bandWrapper4 = d.getElementById('bandWrapper4');

agendaWrapper.addEventListener('blur', hideTextArea1);

function hideTextArea1() {
  agendaWrapper.style.boxShadow = 'none';
}

function expandAgenda() {
  if (!mediaQuery.matches) {
    gigs.className = 'animate__animated animate__zoomOut';
    bandPractice.className = 'animate__animated animate__zoomOut';
    gigs.style.width = '0';
    bandPractice.style.width = '0';
    onTheAgenda.style.width = '100%';
    practiceTitle.className = 'animate__animated animate__zoomOut';
    upcomingGigsTitle.className =
      'animate__animated animate__zoomOut';
  }
}

function compactAgenda() {
  if (!mediaQuery.matches) {
    gigs.className = 'animate__animated animate__zoomIn';
    bandPractice.className = 'animate__animated animate__zoomIn';
    gigs.style.width = '15vw';
    bandPractice.style.width = '15vw';
    onTheAgenda.style.width = '15vw';
    practiceTitle.className = 'animate__animated animate__zoomIn';
    upcomingGigsTitle.className = 'animate__animated animate__zoomIn';
  }
}

// MOBILE.
// External buttons
add.addEventListener('click', function () {
  footer.style.animationDelay = '0s';
  footer.className = 'animate__animated animate__fadeOutDown';
  if (!darkModeFlag) {
    footer.classList.remove('dark-mode');
  } else if (darkModeFlag) {
    footer.classList.add('dark-mode');
  }
  addSongPage();
  checkFormInput();
  if (trueIndex.toString() == 0) {
    selectElement('comment', 'Live recording');
  }
  if (trueIndex.toString() == 1) {
    selectElement('comment', 'Home recording');
  }
  if (trueIndex.toString() == 2) {
    selectElement('comment', 'Studio rehearsal');
  }
  if (trueIndex.toString() == 3) {
    selectElement('comment', 'Original track');
  }
  function selectElement(id, valueToSelect) {
    let element = d.getElementById(id);
    element.value = valueToSelect;
  }
});

// ----------------------------------------- MEDIA RESPONSIVENESS ------------------------------------------------

if (mediaQuery.matches) {
  input.setAttribute('maxLength', '26');
  sortButtonText.innerHTML = 'Recently added';
  sortWrapper.style.display = 'none';
  allSongs.innerHTML = 'All';
  liveRecording.innerHTML = 'Live';
  playLists.innerHTML =
    '<ion-icon id="filterIcon" name="color-filter-outline">';
  homeRecording.innerHTML = 'Home';
  studioRehearsal.innerHTML = 'Studio';
  originalTrack.innerHTML = 'Original';
  setTimeout(function () {
    playPause.style.display = 'flex';
  }, 500);
  playMobile.style.fontSize = '25px';
  pauseMobile.style.fontSize = '25px';
  footer.style.boxShadow = 'none';

  input.style.display = 'none';
} else {
}
// ----------------------------------------- MEDIA RESPONSIVENESS ------------------------------------------------

let flag = false;

if (mediaQuery.matches) {
  filterButton.addEventListener('touchstart', filterMedia);
} else if (!mediaQuery.matches) {
}

function filterMedia() {
  if (!flag) {
    playlistWrapper.style.width = '22vw';
    sortWrapper.style.animationDuration = '0.3s';
    if (darkModeFlag) {
      sortWrapper.className =
        'top-bottom-overflow-fade2 animate__animated animate__bounceInRight dark-mode';
    } else if (!darkModeFlag) {
      sortWrapper.className =
        'top-bottom-overflow-fade2 animate__animated animate__bounceInRight';
    }

    sortWrapper.style.display = 'flex';
    filterIcon.style.color = '#e9c37d';
    filterIcon.classList.remove('dark-mode-text-white');
    filterIcon.style.boxShadow =
      '-2px -2px 5px #fff, 2px 2px 5px #babecc';
    // }
    flag = true;
  } else if (flag) {
    setTimeout(function () {
      playlistWrapper.style.width = '100vw';
    }, 100);
    sortWrapper.style.animationDuration = '0.3s';
    if (darkModeFlag) {
      sortWrapper.className =
        'top-bottom-overflow-fade2 animate__animated animate__bounceOutRight dark-mode';
    } else if (!darkModeFlag) {
      sortWrapper.className =
        'top-bottom-overflow-fade2 animate__animated animate__bounceOutRight';
    }
    setTimeout(function () {
      sortWrapper.style.display = 'none';
    }, 300);
    filterIcon.style.color = '#221e41';
    filterIcon.style.boxShadow =
      '-5px -5px 20px #fff, 5px 5px 20px #babecc';
    if (!darkModeFlag) {
      filterIcon.classList.remove('dark-mode-text-white');
    } else if (darkModeFlag) {
      filterIcon.classList.add('dark-mode-text-white');
    }
    flag = false;
  }
}
