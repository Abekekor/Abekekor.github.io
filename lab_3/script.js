let Airpods = [
    {
        "name": "AirPods2",
        "production": "U.S.A.",
        "price": 60000
    },
    {
        "name": "Airpods3",
        "production": "U.S.A.",
        "price": 90000,
    },
    {
        "name": "AirPodsPro",
        "production": "U.S.A",
        "price": 110000,
    },
    {
        "name": "AirPodsPro2",
        "production": "U.S.A",
        "price": 140000,
    },
];
let sum = 0;

function avg(Airpods){ 
    let sum = 0; 
    for (let i = 0; i < Airpods.length; i++) { 
        sum += Airpods[i]['price']; 
    } 
    return sum / Airpods.length; 
} 


let Airpods_1 = {
    "name": "AirPods",
    "country": "U.S.A",
    "price": 100000
}


Airpods.push(Airpods_1)

for (let i = 0; i < Airpods.length; i++) {
    document.write("<h5>Airpods: " + Airpods[i]["name"] + "</h5>");
    document.write("<h5>Production: " + Airpods[i]["production"] + "</h5>");
    document.write("<h5>Price: " + Airpods[i]["price"] + "</h5>");
    document.writeln("")
}

document.write("<h5>Average duration: " + avg(Airpods) + " price</h5>")


