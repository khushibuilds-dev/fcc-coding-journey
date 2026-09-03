// Hackthon Fortune teller
function fortuneTeller(name){
  let fortune = ["ye saal apka bhut achha jayga.",
    "apko is saal korbaar mai trakki milegi. ❤️",
    "apko is mahine thoda sambhal kar rahna hoga.",
    "Apki do mhino mai pooch nikla jayegi nahi to jada sochna band kar do.",
    "Agr mummy se maar kahana hai to aaj ghr der se jaye."
  ]
  let color = ["Red", "Blue", "Black", "Green", "Orange", "Purple"];
  let colorIndex = Math.floor(Math.random() * color.length);
  let fortuneIndex = Math.floor(Math.random() * fortune.length);
  return `Hello ${name}! Ajj apka magal color: ${color[colorIndex]} Ajj apka bhagya: ${fortune[fortuneIndex]}`
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
