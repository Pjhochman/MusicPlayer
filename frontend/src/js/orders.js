let request = new Request('/api/orders', {
  method: 'GET',
});

fetch(request)
  .then((res) => res.json())
  .then((json) => {
    let setlistInfo = json.products;
    console.log(setlistInfo);

    for (const property in setlistInfo) {
      let setlistDiv = document.createElement('div');
      let modifyButton = document.createElement('button');
      let sendButton = document.createElement('button');
      let starButton = document.createElement('button');
      let progressButton = document.createElement('button');
      let commentButton = document.createElement('button');
      let nameButton = document.createElement('button');

      let jsonContainer = document.createElement('div');
      let modifyIcon = document.createElement('i');
      let sendIcon = document.createElement('i');
      let starIcon = document.createElement('i');
      let nameIcon = document.createElement('i');

      let progressIcon = document.createElement('i');
      let commentIcon = document.createElement('i');

      modifyIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-create"></i>';
      sendIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-mail"></i>';
      starIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-checkmark-circle"></i>';
      progressIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-information-circle"></i>';
      commentIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-quote"></i>';
      nameIcon.innerHTML =
        '<i class="iconify" data-icon="ion-md-musical-note"></i>';

      jsonContainer.id = 'jsonContainer';
      setlistDiv.className = 'setlistDiv';
      modifyButton.id = 'modifyButton';
      sendButton.id = 'sendButton';
      starButton.id = 'starButton';
      progressButton.id = 'progressButton';
      commentButton.id = 'commentButton';
      nameButton.id = 'nameButton';

      let dynamicDiv = document.getElementById('dynamicDiv');

      dynamicDiv.insertBefore(setlistDiv, dynamicDiv.firstChild);

      dynamicDiv.insertBefore(setlistDiv, dynamicDiv.firstChild);
      console.log(setlistDiv);

      let jsonProgress = JSON.stringify(
        `${Object.values(setlistInfo[property].progress).join('')}`,
      )
        .replace(/['"]+/g, '')
        .replaceAll(',', ' ');

      let jsonComment = JSON.stringify(
        `${Object.values(setlistInfo[property].comment).join('')}`,
      )
        .replace(/['"]+/g, '')
        .replaceAll(',', ' ');

      let jsonName = JSON.stringify(
        `${Object.values(setlistInfo[property].product_id.name).join(
          '',
        )}`,
      )
        .replace(/['"]+/g, '')
        .replaceAll(',', ' ');

      jsonContainer.innerHTML =
        jsonName +
        '<br /><br /><br />' +
        jsonComment +
        '<br /><br /><br />' +
        jsonProgress;

      dynamicDiv.appendChild(setlistDiv);

      let orderId = setlistInfo[property].order_id;
      let productId = setlistInfo[property].product_id;

      function modifyHandler() {
        orderId = { value: setlistInfo[property].order_id };
        productId = setlistInfo[property].product_id;

        window.location.href = '/order_id.html';
        Cookies.set('orderId', orderId.value);
        Cookies.set('productId', productId.value);
        console.log(orderId);
        console.log(productId);
      }

      function sendHandler() {
        window.location.href = '/orders.html';
      }

      function starHandler() {}

      for (let i = 1; i < orderId.length; i++) {
        modifyButton.addEventListener('click', modifyHandler, false);
        sendButton.addEventListener('click', sendHandler, false);
        starButton.addEventListener('click', starHandler, false);

        document
          .getElementById('dynamicDiv')
          .appendChild(modifyButton);
        document.getElementById('dynamicDiv').appendChild(sendButton);
        document.getElementById('dynamicDiv').appendChild(starButton);
        document
          .getElementById('dynamicDiv')
          .appendChild(jsonContainer);
        document
          .getElementById('dynamicDiv')
          .appendChild(progressButton);
        document
          .getElementById('dynamicDiv')
          .appendChild(commentButton);
        document.getElementById('dynamicDiv').appendChild(nameButton);

        modifyButton.appendChild(modifyIcon);
        sendButton.appendChild(sendIcon);
        starButton.appendChild(starIcon);
        progressButton.appendChild(progressIcon);
        commentButton.appendChild(commentIcon);
        nameButton.appendChild(nameIcon);
      }
    }
  });

//logo

//Logo

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
