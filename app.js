
// Task 2
let names = ["Moritz","Hannes", "MAX", "Angela","jerry"," ÄgidiUS "]
document.getElementById("count").innerHTML = names.length;
document.getElementById("names").innerHTML = names.join("<<=>>");

// Task 3
let sanitizedNames = [];
names.forEach(name => {
    sanitizedNames.push(name.charAt(0).toUpperCase() + name.slice(1));
});

sanitizedNames.sort().forEach(name => {
    if (name === "Hannes") {
        document.getElementById("names3").innerHTML += "<li style='font-weight:bold;color:red;'>" + name + "</li>";
    } else {
        document.getElementById("names3").innerHTML += "<li>" + name + "</li>";
    }
});

// Task 4
setInterval(() => {
    let now = new Date()
    let day = ("" + now.getDay()).padStart(2, "0");
    let month = ("" + now.getMonth() + 1).padStart(2, "0");
    let hour = ("" + now.getHours()).padStart(2, "0");
    let minute = ("" + now.getMinutes()).padStart(2, "0");
    let seconds = ("" + now.getSeconds()).padStart(2, "0");
    let time = day + "\\" + month + "\\" + now.getFullYear() + " " + hour + "::" + minute + "::" + seconds;
    document.getElementById("time").innerHTML = time;
}, 1000);


// Task 5
let msg = document.getElementById('msg');
function validateAndSend() {
    msg.innerHTML = "";
    document.querySelectorAll("#myform > input[type=text]").forEach(item => {
        if (item.value === '') {
            msg.innerHTML += item.name + " fehlt<br/>";
        }
    });
    
    if (msg.innerText === '') {
        let name = document.querySelectorAll("#myform > input[name='Name']")[0].value;
        let firstName = document.querySelectorAll("#myform > input[name='Vorname']")[0].value;
        let location = document.querySelectorAll("#myform > input[name='Wohnort']")[0].value;
        let email = document.querySelectorAll("#myform > input[name='EMail']")[0].value;
        // console.log(0);
    
        msg.innerHTML = "Vielen Dank<br/>" + name + ", " + firstName + " aus " + location + "<br/>" + "E-Mail: " + email;
    }
}

function deleteData() {
    document.querySelectorAll("#myform > input[type=text]").forEach(item => item.value = '');
}


// Task 6
let a = [
    {'anrede': 'm', 'name': 'Manfred', 'ort': 'Paris', 'geburtstag': '1990.01.01'},
    {'anrede': 'w', 'name': 'Sylvia', 'ort': 'Hamburg', 'geburtstag': '2000.01.01'},    
]

console.dir(a);

let divPersonen = document.getElementById("personen");
a.forEach(item => {
    snippet = "<div class='" + item.anrede + "'>";
    snippet += "<div class='name'>" + ((item.anrede === 'w') ? "Frau " : "Herr ") + item.name + "</div>";
    snippet += "<div class='ort'>Wohnort: " + item.ort + "</div>";
    snippet += "<div class='geburtstag'>Geburtstag: " + ((item.anrede === 'w') ? "******" : item.geburtstag) + "</div>";
    snippet += "</div>";

    document.getElementById("personen").innerHTML += snippet;
});


