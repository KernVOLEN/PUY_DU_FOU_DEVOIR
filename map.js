var map = L.map('map').setView([46.889591, -0.928152], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([46.889591, -0.928152]).addTo(map);

var popup = L.popup()
    .setLatLng([46.889591, -0.928152])
    .setContent("Puy du Fou")
    .openOn(map);

    var envoyer = document.getElementById("envoyer");
    function notification(){
      var audio = new Audio("SON/ENVOYER_NOTIF.mp3");
      audio.play();
    }
    envoyer.addEventListener("mousedown", notification);

    var viking = document.getElementById("G11");
    function warCry(){
      var audio = new Audio("SON/VALHALLA.mp3");
      audio.play();
    }
    viking.addEventListener("mousedown", warCry);

    var pirate = document.getElementById("G12");
    function YouAre(){
      var audio = new Audio("SON/YOU_ARE.mp3");
      audio.play();
    }
    pirate.addEventListener("mousedown", YouAre);

    var chevalier = document.getElementById("D11");
    function deus(){
      var audio = new Audio("SON/DEUS_VULT.mp3");
      audio.play();
    }
    chevalier.addEventListener("mousedown", deus);

    var duel = document.getElementById("D12");
    function fight(){
      var audio = new Audio("SON/DUEL.mp3");
      audio.play();
    }
    duel.addEventListener("mousedown", fight);
