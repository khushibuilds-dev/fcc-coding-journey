// Hackthon Fortune teller
function fortuneTeller(name){
  let fortune = ["ye saal apka bhut achha jayga.💕",
    "apko is saal korbaar mai trakki milegi. ❤️",
    "app ko kal tak achhi khbar milegi",
    "aap bikul gadhe jaise dhikhte hai.🫏🙉🙈",
    "App ulloo ho.🥴",
    "Aap bhut hoshiyaar ho.😘",
    "Apko bhut tarkki karoge",
    "App bhut sundar dhkhte",
    "Apko 50 ruppee garib ko daan kar jo apke bagl mai khada hai use",
    "App bilkul achhe nahi lagte ho",
    "app bhut sundar ho"
  ]

  let color = ["Red", "Blue", "Black", "Green", "Orange", "Purple"];
  let colorIndex = Math.floor(Math.random() * color.length);
  let fortuneIndex = Math.floor(Math.random() * fortune.length);
  return `Hello ${name}!  
  Ajj apka lucky color: ${color[colorIndex]} 
  Ajj apka bhagya: ${fortune[fortuneIndex]}`
}
console.log(fortuneTeller("Khuhsi"));
// Added js into html

const btn = document.getElementById("myBtn");
const result = document.getElementById("result");
const nameBox = document.getElementById("input")


btn.addEventListener("click", function(){

let enteredName = nameBox.value;

if(enteredName === ""){
    enteredName = "Stranger";
}

let report = fortuneTeller(enteredName);
result.innerText = report;


})
