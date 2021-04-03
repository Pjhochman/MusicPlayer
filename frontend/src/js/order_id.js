let orderId = Cookies.get("orderId"); // => 'value'
let productId = Cookies.get("productId");
console.log(orderId);
console.log(productId);

let request = new Request("/api/orders/" + orderId, {
  method: "GET"
});

fetch(request)
  .then(res => res.json())
  .then(json => {
    let setlistInfo = json;
    console.log(setlistInfo);

    document.querySelector("#progress").value = setlistInfo.request.progress;
    document.querySelector("#comment").value = setlistInfo.request.comment;

    // document.querySelector("#file").value = song.request.product.file;
  });

// var raw = JSON.stringify([{ propName: name, value: value }]);
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  document.querySelector("#propName").value;
  document.querySelector("#propName1").value;
  // document.querySelector("#propName2").value;
  //   document.querySelector("#propName3").value;

  // const prop2 = document.querySelector("#prop2").value;

  const progress = document.querySelector("#progress").value;
  // const composer = document.querySelector("#composer").value;
  const comment = document.querySelector("#comment").value;
  //   const file = document.querySelector("#file").value;

  e.preventDefault();

  fetch("/api/orders/" + orderId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([
      {
        propName: "progress",
        propName1: "comment",
        value: progress,
        value1: comment
      }
    ])
  })
    .then(res => res.json())
    .then(res => {
      window.location.href = "/orders.html";
      console.log(res);
    });
});

document.getElementById("delete").addEventListener("click", e => {
  e.preventDefault();
  fetch("/api/orders/" + orderId, {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(res => console.log(res));

  window.location.href = "/orders.html";
});
