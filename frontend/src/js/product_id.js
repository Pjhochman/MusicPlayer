let productId = Cookies.get('sessionCookie'); // => 'value'
let darkMode = Cookies.get('darkMode');
let songKey = Cookies.get('songKey');
let songLink = Cookies.get('songLink');
let songName = Cookies.get('songName');
let clearSearch1 = document.getElementById('clearSearch1');
let clearSearch2 = document.getElementById('clearSearch2');
let clearSearch3 = document.getElementById('clearSearch3');
let clearSearch4 = document.getElementById('clearSearch4');
let clearSearch5 = document.getElementById('clearSearch5');

let mediaQuery = window.matchMedia('(max-width: 800px)');
let loadFileName = document.getElementById('loadFileName');
let submitButton = document.getElementById('submitButton');
let nameTick = document.getElementById('name');
let artistTick = document.getElementById('artist');
let commentTick = document.getElementById('comment');
let keyTick = document.getElementById('key');
let fileTick = document.getElementById('file');
let loadFileTick = document.getElementById('loadFile');
let introTick = document.getElementById('intro');
let verseTick = document.getElementById('verse');
let bridgeTick = document.getElementById('bridge');
let chorusTick = document.getElementById('chorus');
let outroTick = document.getElementById('outro');
let patchForm = document.getElementById('patchForm');
let togglePopupFormContainer = document.getElementById(
  'discardChangesFormContainer',
);

let cancelProceed = document.getElementById('cancelProceed');
let okProceed = document.getElementById('okProceed');
let togglePopupForm = document.getElementById('discardChangesForm');
let form = document.querySelector('form');
let awsUpload = document.getElementById('awsUpload');
let successAlert = document.getElementById('successAlert');
let inputs = document.getElementsByTagName('input');
let selects = document.getElementsByTagName('select');
let totalContainer = document.getElementById('blur');
let navbarText = document.getElementById('navbar-text');
let discardButton = document.getElementById('goBackButton');
let clearingSearch = document.getElementsByClassName('clear-search');
let bandIcon = document.getElementById('bandIcon');
let bandIconContainer1 = document.getElementById(
  'bandIconContainer1',
);

//darkMode

if (darkMode === 'true') {
  let i;
  cancelProceed.classList.add('dark-mode');
  cancelProceed.classList.add('dark-mode-discard');
  okProceed.classList.add('dark-mode-regularBox');
  okProceed.classList.add('dark-mode-discard');
  loadFileName.classList.add('dark-mode-discard');
  loadFileTick.classList.add('dark-mode-regularBox');
  discardButton.classList.add('dark-mode-discard');
  navbarText.classList.add('dark-mode-text-grey');
  totalContainer.classList.add('dark-mode');
  submitButton.classList.add('dark-mode-regularBox');
  bandIconContainer1.classList.add('dark-mode-regularBox');
  bandIcon.classList.add('dark-mode-regularBox');
  for (i = 0; i < clearingSearch.length; i++) {
    clearingSearch[i].classList.add('dark-mode');
  }
  for (i = 0; i < inputs.length; i++) {
    inputs[i].classList.add('dark-mode-regularBox');
  }
  for (i = 0; i < selects.length; i++) {
    selects[i].classList.add('dark-mode-regularBox');
  }
} else if (darkMode === 'false') {
  let i;
  cancelProceed.classList.remove('dark-mode');
  cancelProceed.classList.remove('dark-mode-discard');
  okProceed.classList.remove('dark-mode-regularBox');
  okProceed.classList.remove('dark-mode-discard');
  loadFileName.classList.remove('dark-mode-discard');
  loadFileTick.classList.remove('dark-mode-regularBox');
  discardButton.classList.remove('dark-mode-discard');
  navbarText.classList.remove('dark-mode-text-grey');
  totalContainer.classList.remove('dark-mode');
  submitButton.classList.remove('dark-mode-regularBox');
  bandIconContainer1.classList.remove('dark-mode-regularBox');
  bandIcon.classList.remove('dark-mode-regularBox');

  for (i = 0; i < clearingSearch.length; i++) {
    clearingSearch[i].classList.remove('dark-mode');
  }
  for (i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove('dark-mode-regularBox');
  }
  for (i = 0; i < selects.length; i++) {
    selects[i].classList.remove('dark-mode-regularBox');
  }
}

function updateProgressBar() {
  var percentage = 0;
  var curr = progressBar.value;
  var update = setInterval(function () {
    if (curr > percentage) {
      clearInterval(update);
    }
    progressBar.value = curr++;
  }, 1);
}

updateProgressBar();

loadFileTick.onclick = function (e) {
  e.preventDefault();
  document.getElementById('file').click();
};

let bucketName = 'kaernvirke';
let bucketRegion = 'eu-north-1';
let IdentityPoolId =
  'eu-north-1:290f5a33-7a85-4f4e-9f23-048d74a94f92';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
});

let s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
});

let params = {
  Bucket: 'kaernvirke',
  Key: songLink,
};

let request = new Request('/api/products/' + productId, {
  method: 'GET',
});

function getFetchReq() {
  fetch(request)
    .then((res) => res.json())
    .then((json) => {
      let txt = JSON.stringify(json);

      let song = JSON.parse(txt);

      document.querySelector('#name').value =
        song.request.product.name;
      document.querySelector('#artist').value =
        song.request.product.artist;
      document.querySelector('#comment').value =
        song.request.product.comment;
      document.querySelector('#loadFile').value = songKey
        .split('/')
        .pop();
      document.querySelector('#key').value = song.request.product.key;
      document.querySelector('#intro').value =
        song.request.product.intro;
      document.querySelector('#verse').value =
        song.request.product.verse;
      document.querySelector('#bridge').value =
        song.request.product.bridge;
      document.querySelector('#chorus').value =
        song.request.product.chorus;
      document.querySelector('#outro').value =
        song.request.product.outro;

      discardButton.addEventListener('click', checkFormInput);

      function checkFormInput() {
        let name = song.request.product.name;
        let artist = song.request.product.artist;
        let comment = song.request.product.comment;
        // let file = song.request.product.file.split('/').pop();
        let key = song.request.product.key;
        let intro = song.request.product.intro;
        let verse = song.request.product.verse;
        let bridge = song.request.product.bridge;
        let chorus = song.request.product.chorus;
        let outro = song.request.product.outro;

        let flag = true;
        if (
          name === nameTick.value &&
          artist === artistTick.value &&
          comment === commentTick.value &&
          !fileTick.value &&
          key === keyTick.value &&
          intro === introTick.value &&
          verse === verseTick.value &&
          bridge === bridgeTick.value &&
          chorus === chorusTick.value &&
          outro === outroTick.value
        ) {
          flag = false;
          togglePopupFormContainer.style.display = 'none';
          patchForm.style.animationDuration = '0.2s';
          patchForm.className =
            'animate__animated animate__fadeOutLeft';
          setTimeout(function () {
            window.location.href = '/products.html#songs';
          }, 200);
        } else {
          togglePopupFormContainer.style.display = 'flex';
          togglePopupForm.style.display = 'flex';
          //här
          discardChangesPopup();
        }
        return flag;
      }

      submitButton.addEventListener('mouseenter', function () {
        checkFormInput4();
      });

      function checkFormInput4() {
        let name = song.request.product.name;
        let artist = song.request.product.artist;
        let comment = song.request.product.comment;
        // let file = song.request.product.file.split("/").pop();
        let key = song.request.product.key;
        let intro = song.request.product.intro;
        let verse = song.request.product.verse;
        let bridge = song.request.product.bridge;
        let chorus = song.request.product.chorus;
        let outro = song.request.product.outro;

        let flag = true;
        if (
          nameTick.value.trim() === '' ||
          artistTick.value.trim() === '' ||
          (name === nameTick.value.trim() &&
            artist === artistTick.value.trim() &&
            !fileTick.value &&
            comment === commentTick.value.trim() &&
            key === keyTick.value.trim() &&
            verse === verseTick.value &&
            bridge === bridgeTick.value &&
            chorus === chorusTick.value &&
            outro === outroTick.value &&
            intro === introTick.value)
        ) {
          submitButton.disabled = true;
          submitButton.style.cursor = 'not-allowed';
          submitButton.style.color = '#61677c';
          submitButton.style.backgroundColor = '#e9f0fb';
          flag = false;
        } else {
          submitButton.disabled = false;
          submitButton.style.cursor = 'pointer';
          submitButton.style.backgroundColor = '#6e69f7';
          submitButton.style.color = 'white';
        }

        return flag;
      }

      nameTick.addEventListener('input', function () {
        checkFormInput4();
      });
      artistTick.addEventListener('input', function () {
        checkFormInput4();
      });

      commentTick.addEventListener('input', function () {
        checkFormInput4();
      });

      keyTick.addEventListener('input', function () {
        checkFormInput4();
      });
      fileTick.addEventListener('input', function () {
        checkFormInput4();
      });
      introTick.addEventListener('input', function () {
        checkFormInput4();
        if (introTick.value === '') {
          clearSearch1.style.display = 'none';
        } else {
          clearSearch1.style.display = 'flex';
        }
      });
      verseTick.addEventListener('input', function () {
        checkFormInput4();
        if (verseTick.value === '') {
          clearSearch2.style.display = 'none';
        } else {
          clearSearch2.style.display = 'flex';
        }
      });
      bridgeTick.addEventListener('input', function () {
        checkFormInput4();
        if (bridgeTick.value === '') {
          clearSearch3.style.display = 'none';
        } else {
          clearSearch3.style.display = 'flex';
        }
      });
      chorusTick.addEventListener('input', function () {
        checkFormInput4();
        if (chorusTick.value === '') {
          clearSearch4.style.display = 'none';
        } else {
          clearSearch4.style.display = 'flex';
        }
      });
      outroTick.addEventListener('input', function () {
        checkFormInput4();
        if (outroTick.value === '') {
          clearSearch5.style.display = 'none';
        } else {
          clearSearch5.style.display = 'flex';
        }
      });

      function discardChangesPopup() {
        const togglePopupFormContainer = document.getElementById(
          'discardChangesFormContainer',
        );
        const togglePopupForm = document.getElementById(
          'discardChangesForm',
        );
        const cancelbtn = document.getElementById('cancelProceed');
        const okbtn = document.getElementById('okProceed');
        const blur = document.getElementById('blur');
        let showForm = false;

        if (!showForm) {
          togglePopupFormContainer.style.display = 'flex';
          blur.classList.toggle('active');
          if (darkMode) {
            togglePopupForm.className =
              'animate__animated animate__fadeIn dark-mode-regularBox';
          } else if (!darkMode) {
            togglePopupForm.className =
              'animate__animated animate__fadeIn';
          }
          togglePopupForm.style.animationDuration = '0.3s';

          showForm = true;
        } else {
          setTimeout(function () {
            togglePopupFormContainer.style.display = 'none';
          }, 300);
          blur.classList.remove('active');
          if (darkMode) {
            togglePopupForm.className =
              'animate__animated animate__fadeOut dark-mode-regularBox';
          } else if (!darkMode) {
            togglePopupForm.className =
              'animate__animated animate__fadeOut';
          }
        }
        okbtn.addEventListener('click', function () {
          blur.classList.remove('active');
          togglePopupFormContainer.style.display = 'none';
          patchForm.style.animationDuration = '0.2s';
          patchForm.className =
            'animate__animated animate__fadeOutLeft';
          //här
          setTimeout(function () {
            window.location.href = '/products.html#songs';
          }, 200);
        });
        cancelbtn.addEventListener('click', toggleForm);
        function toggleForm() {
          if (!showForm) {
            togglePopupFormContainer.style.display = 'flex';

            togglePopupForm.style.animationDuration = '0.3s';
            if (darkMode) {
              togglePopupForm.className =
                'animate__animated animate__fadeIn dark-mode-regularBox';
            } else if (!darkMode) {
              togglePopupForm.className =
                'animate__animated animate__fadeIn';
            }
            blur.classList.toggle('active');

            showForm = true;
          } else {
            setTimeout(function () {
              togglePopupFormContainer.style.display = 'none';
            }, 300);
            if (darkMode) {
              togglePopupForm.className =
                'animate__animated animate__fadeOut dark-mode-regularBox';
            } else if (!darkMode) {
              togglePopupForm.className =
                'animate__animated animate__fadeOut';
            }

            blur.classList.remove('active');
          }
        }
      }
    });
}
getFetchReq();
loadFileName.innerHTML = songName;
// --------------------------- PATCH REQUEST IF NO NEW TRACK SELECTED ---------------------------------

// --------------------------------------- AWS POST REQUEST -------------------------------------------
awsUpload.addEventListener('submit', (e) => {
  e.preventDefault();
  let files = document.querySelector('#file').files[0];

  if (files === undefined || files.name === songName) {
    document.getElementById('portraitText').style.animationDuration =
      '0.5s';
    document.getElementById('portraitText').className =
      'animate__animated animate__fadeOut';

    setTimeout(function () {
      document.getElementById(
        'portraitText',
      ).style.animationDuration = '0.8s';

      document.getElementById('portraitText').className =
        'animate__animated animate__fadeIn';
      document.getElementById('navbar-text').innerHTML =
        'Submitted successfully.';
    }, 100);

    setTimeout(function () {
      document.getElementById(
        'portraitText',
      ).style.animationDuration = '0.8s';

      document.getElementById('portraitText').className =
        'animate__animated animate__fadeInRight';
      document.getElementById('navbar-text').innerHTML = 'Edit Song.';
    }, 2500);
    setTimeout(function () {
      document.getElementById('portraitText').className =
        'animate__animated animate__fadeOut';
    }, 2000);

    progressWrapper.style.display = 'none';
    successAlert.style.display = 'flex';

    document.getElementById('successAlert').className = '';
    setTimeout(function () {
      document.getElementById('successAlert').className =
        'f-modal-alert animate__animated animate__flip';
    }, 0);
    document.getElementById('successAlert').style.opacity = '1';
    window.setTimeout(function () {
      document.getElementById('successAlert').style.opacity = '0';
    }, 1800);
    let formdata = new FormData();
    formdata.append('name', document.querySelector('#name').value);
    formdata.append(
      'artist',
      document.querySelector('#artist').value,
    );
    formdata.append('key', document.querySelector('#key').value);
    formdata.append(
      'comment',
      document.querySelector('#comment').value,
    );
    formdata.append('intro', document.querySelector('#intro').value);
    formdata.append('verse', document.querySelector('#verse').value);
    formdata.append(
      'bridge',
      document.querySelector('#bridge').value,
    );
    formdata.append(
      'chorus',
      document.querySelector('#chorus').value,
    );
    formdata.append('outro', document.querySelector('#outro').value);
    formdata.append('link', songKey);
    formdata.append('fileName', songName);

    fetch('/api/products/' + productId, {
      method: 'PATCH',
      body: formdata,
    })
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log(form + 'Success:', response));

    submitButton.style.backgroundColor = '#e9f0fb';
    submitButton.style.color = '#61677c';
    submitButton.setAttribute('disabled', true);
    submitButton.style.cursor = 'not-allowed';
    setTimeout(function () {
      getFetchReq();
    }, 1000);
  } else {
    document.getElementById('portraitText').style.animationDuration =
      '0.5s';
    document.getElementById('portraitText').className =
      'animate__animated animate__fadeOut';

    document.getElementById('portraitText').style.animationDuration =
      '0.8s';
    progressWrapper.style.display = 'flex';
    document.getElementById('portraitText').className =
      'animate__animated animate__fadeIn';
    document.getElementById('navbar-text').innerHTML =
      'Uploading.. Please Wait';

    s3.deleteObject(params, function (err, data) {
      if (err) console.log(err, err.stack);
      // error
      else console.log('Successfully deleted', params, data); // deleted
    });

    let files = document.querySelector('#file').files[0];
    if (files) {
      let file = files;
      let fileName = file.name;
      let f = new Date();
      let filePath =
        'tracklist/' +
        f.getSeconds() +
        '_' +
        fileName.replace(/[^A-Za-z0-9.]/g, '');
      // .replace(/[^A-Z0-9]+/gi, '_') +

      // console.log(filePath);
      let fileUrl =
        'https://' +
        bucketRegion +
        '.amazonaws.com/tracklist/' +
        filePath;
      s3.upload(
        {
          Key: filePath,
          Body: file,
          ACL: 'public-read',
        },
        function (err, data) {
          if (err) {
            document.getElementById(
              'portraitText',
            ).style.animationDuration = '0.5s';
            document.getElementById('portraitText').className =
              'animate__animated animate__fadeOutRight';

            setTimeout(function () {
              document.getElementById(
                'portraitText',
              ).style.animationDuration = '0.8s';

              document.getElementById('portraitText').className =
                'animate__animated animate__fadeInRight';
              document.getElementById('navbar-text').innerHTML =
                'Upload Failed.';
            }, 100);
            console.log(err);
          }
          console.log('Successfully Uploaded!');

          document.getElementById(
            'portraitText',
          ).style.animationDuration = '0.5s';
          document.getElementById('portraitText').className =
            'animate__animated animate__fadeOut';

          setTimeout(function () {
            document.getElementById(
              'portraitText',
            ).style.animationDuration = '0.8s';

            document.getElementById('portraitText').className =
              'animate__animated animate__fadeIn';
            document.getElementById('navbar-text').innerHTML =
              'Submitted successfully.';
          }, 100);

          setTimeout(function () {
            document.getElementById(
              'portraitText',
            ).style.animationDuration = '0.8s';

            document.getElementById('portraitText').className =
              'animate__animated animate__fadeInRight';
            document.getElementById('navbar-text').innerHTML =
              'Edit Song.';
          }, 2500);
          setTimeout(function () {
            document.getElementById('portraitText').className =
              'animate__animated animate__fadeOut';
          }, 2000);

          progressWrapper.style.display = 'none';
          successAlert.style.display = 'flex';

          document.getElementById('successAlert').className = '';
          setTimeout(function () {
            document.getElementById('successAlert').className =
              'f-modal-alert animate__animated animate__flip';
          }, 0);
          document.getElementById('successAlert').style.opacity = '1';
          window.setTimeout(function () {
            document.getElementById('successAlert').style.opacity =
              '0';
          }, 1800);
        },
      ).on('httpUploadProgress', function (progress) {
        var uploaded = parseInt(
          (progress.loaded * 100) / progress.total,
        );
        $('progress').attr('value', uploaded);

        let progressWrapper = document.getElementById(
          'progressWrapper',
        );

        if (uploaded === 100) {
          function submitData() {
            setTimeout(function () {
              let formdata = new FormData();
              formdata.append(
                'name',
                document.querySelector('#name').value,
              );
              formdata.append(
                'artist',
                document.querySelector('#artist').value,
              );
              formdata.append(
                'key',
                document.querySelector('#key').value,
              );
              formdata.append(
                'comment',
                document.querySelector('#comment').value,
              );
              formdata.append(
                'intro',
                document.querySelector('#intro').value,
              );
              formdata.append(
                'verse',
                document.querySelector('#verse').value,
              );
              formdata.append(
                'bridge',
                document.querySelector('#bridge').value,
              );
              formdata.append(
                'chorus',
                document.querySelector('#chorus').value,
              );
              formdata.append(
                'outro',
                document.querySelector('#outro').value,
              );
              formdata.append(
                'link',
                'https://kaernvirke.s3.eu-north-1.amazonaws.com/' +
                  filePath,
              );

              formdata.append('fileName', fileName);
              // formdata.append(
              //   'file',
              //   document.querySelector('#file').files[0],
              // );
              fetch('/api/products/' + productId, {
                method: 'PATCH',
                body: formdata,
              })
                .then((response) => response.json())
                .catch((error) => console.error('Error:', error))
                .then((response) =>
                  console.log(form + 'Success:', response),
                );
              setTimeout(function () {
                // window.location.href = '/products.html';
              }, 500);
            }, 100);
          }
          submitData();
        }
      });
    }
  }
});

let welcomeText = document.getElementById('navbar-text');

welcomeText.innerHTML = 'Edit Song.';

let mouseContainer = document.getElementById('mouseContainer');
let formContainer = document.getElementById('formContainer');

formContainer.addEventListener('scroll', function () {
  mouseContainer.className = 'animate__animated animate__fadeOut';
  mouseContainer.style.animationDuration = '0.2s';
});

formContainer.addEventListener('mouseenter', function () {
  submitButton.disabled = false;
});
submitButton.style.cursor = 'not-allowed';

document
  .querySelector('#file')
  .addEventListener('change', function () {
    document.querySelector('#loadFile').style.display = 'none';
    document.querySelector('#file').style.display = 'flex';
    document.querySelector('#fileUpload').style.marginTop = '47px';
  });

clearSearch1.addEventListener('click', function (e) {
  introTick.value = '';
  clearSearch1.style.display = 'none';
  e.preventDefault();
});

clearSearch2.addEventListener('click', function (e) {
  verseTick.value = '';
  clearSearch2.style.display = 'none';
  e.preventDefault();
});

clearSearch3.addEventListener('click', function (e) {
  bridgeTick.value = '';
  clearSearch3.style.display = 'none';
  e.preventDefault();
});

clearSearch4.addEventListener('click', function (e) {
  chorusTick.value = '';
  clearSearch4.style.display = 'none';
  e.preventDefault();
});

clearSearch5.addEventListener('click', function (e) {
  outroTick.value = '';
  clearSearch5.style.display = 'none';
  e.preventDefault();
});
