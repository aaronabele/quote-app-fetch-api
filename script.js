const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      document.body.append(document.createTextNode(data.quote));
      document.body.append(document.createTextNode(" " + "-" + data.author));
    });
});
