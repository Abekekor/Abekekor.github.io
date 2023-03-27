let Airpods = [
    {
        version: "AirPods2",
        production: "U.S.A.",
        price: 60000,
        
        
    },
    {
        version: "Airpods3",
        production: "U.S.A.",
        price: 90000,
        
        
    },
    {
        version: "AirPodsPro",
        production: "U.S.A",
        price: 110000,
        
    },
    {
        version: "AirPodsPro2",
        production: "U.S.A",
        price: 140000,
        
    },
];
let sum = 0;


function avg(Airpods){ 
    let sum = 0; 
    for (let i = 0; i < Airpods.length; i++) { 
        sum += Airpods[i]["price"]; 
    } 
    return sum / Airpods.length; 
} 

for (let i = 0; i < Airpods.length; i++) {
    document.write("<h5>Airpods: " + Airpods[i]["version"] + "</h5>");
    document.write("<h5>Production: " + Airpods[i]["production"] + "</h5>");
    document.write("<h5>Price: " + Airpods[i]["price"] + "</h5>");
    document.write("&nbsp;")
    document.writeln("")
    
}
document.write("<h5>Average duration: " + avg(Airpods) + " price</h5>")

function createAirPods (version,production,price,color,features) { 
    return { 
      version: version, 
      production: production, 
      price: price, 
      color: color, 
      features: features, 
      getAirPodsInfo: function() { 
        return '${this.color} ${this.price} ${this.version} ${this.production}'; 
      } 
    }; 
  } 
   
  function createAirPodsArray() { 
    const airp = [ 
      createAirPods("AirPods Max", "U.S.A", 300000, "black", ["noise suppresion", "spatial audio", "Bluetooth"]), 
      
    ]; 
   
    return airp; 
  } 
   
  console.log(createAirPodsArray());



