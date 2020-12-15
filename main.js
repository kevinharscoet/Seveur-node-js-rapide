axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

$("#clique").click(function () {
  $("body").append("<p class='coucou'>coucou</p>");
});

$("#clear").click(function () {
  $(".coucou").remove();
});

$("#submit").submit(function (e) {
    e.preventDefault();
    console.log("le bouton marche")
    const name = $("#name")[0].value;
    console.log(name)
    axios.post("/name", { name });
});

$("#getName").click(function () {
    $(".lesNoms").remove()
    axios.get("/getName")
    .then(function (res) {
      for (i = [0]; i < res.data.length; i++) {
        $("#div").append("<p class='lesNoms'>nom "+ i +": " + res.data[i].nom + "<br></p>");
      }
    })
    .catch(function (error) {
      console.log(error);
    })
});