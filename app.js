const element = document.getElementById("starSigns");
const getNewJoke = document.getElementById("goButton");
window.addEventListener("load", loadInpirationQuote());
window.addEventListener("load", horoscopeToday);
window.addEventListener("load", loadPublicIP);
window.addEventListener("load", getJokes);


element.addEventListener("click", horoscopeToday);
getNewJoke.addEventListener("click", getJokes);


function loadInpirationQuote() {
    const hourlyInspiration = "https://api.goprogram.ai/inspiration";
    let text = " ";
    fetch(hourlyInspiration)
        .then((res) => res.json())
        .then(function (object) {
            text += "<blockquote>" + object.quote + "</blockquote>" +
                "<p><h5>***** " + object.author + " *****</h5></p>";
            document.getElementById("one").innerHTML = text;
        })
        .catch((err) => {
            text += "No quote available, sorry...";
            document.getElementById("one").innerHTML = text;
        })
}

function loadPublicIP(){
    const url = "https://api.ipify.org/?format=json";
    let text ="";
    fetch(url)
        .then((res) => res.json())
        .then(function (object) {
            text += "<h1>" + object.ip + "</h1>"
            document.getElementById("three").innerHTML = text;
        })
        .catch((err) => {
            text += "No public IP detected...";
            document.getElementById("three").innerHTML = text;
        })
}

function horoscopeToday() {
    var starSign = document.getElementById("starSigns").value;
    const url = `https://aztro.sameerkumar.website/?sign=${starSign}&day=today`;
    const method = `POST`;
    let text = "";
    fetch(url, {
        method: method
    })
        .then(response => response.json())
        .then(json => {
            const data = json;
            console.log(data);
            text += "<h5 style='text-align: center; color:"+data.color+";'>Date Range: " + data.date_range + "</h5>" +
                "<p style='text-align: justify; color:"+data.color+";'>" + data.description + "</p>" +
                "<ul id='aztro' style='color:"+data.color+"'>" +
                "<li>Compatibility: " + data.compatibility + "</li>" +
                "<li>Lucky Number: " + data.lucky_number + "</li>" +
                "<li>Lucky Time: " + data.lucky_time + "</li>" +
                "<li>Color: " + data.color + "</li>" +
                "<li>Mood: " + data.mood + "</li>" +
                "</ul>";
                document.getElementById("two").innerHTML = text;
        })
        .catch((err) => {
            text += `No horoscope information available for ${starSign}, sorry...`;
            document.getElementById("two").innerHTML = text;
        })
}

function getJokes(){
    const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist";
    let text = "";
    let text2 = "";
    fetch(jokeUrl)
        .then((res) => res.json())
        .then(function (object) {
            if (object.type == "twopart") {
                text += "<p><h3>"+ object.setup + "</h3></p>";
                text2 += "<div class='coverInfo' id ='six'><h4>"+object.delivery+"<h4></div>"
            }else if(object.type == "single"){
                text += "<p><h3>"+ object.joke + "</h3></p>";
            }
            document.getElementById("four").innerHTML = text;
            document.getElementById("five").innerHTML = text2;
        })
        .catch((err) => {
            text += "No jokes to deliver...";
            document.getElementById("four").innerHTML = text;
        })
}
