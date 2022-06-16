const element = document.getElementById("starSigns");
window.addEventListener("load", loadInpirationQuote());
window.addEventListener("load", horoscopeToday);
element.addEventListener("click", horoscopeToday);




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
function loadSelectMenu(){

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
