var chemicals = ["acetic acid", "acetone", "carbon dioxide", "hydrogen peroxide",
"ethanol", "lye", "methanol", "nitric acid", "propane", "salt", "sulfuric acid", "water"];
 // var imageAdd = ["https://tse1.mm.bing.net/th?id=OIP.w2CjgN8YRxlrysJQNo70UwHaFF&pid=Api",
 // "https://tse2.mm.bing.net/th?id=OIP.S8ThG7Fu2XCleMqhARU9OAHaFq&pid=Api",
 // "https://tse2.mm.bing.net/th?id=OIP.CHrtX_QpWvSC5Nwlaa0yuwHaCL&pid=Api",
 // "https://tse1.mm.bing.net/th?id=OIP.0Yb2FG448FVZOFpTVSHF3gAAAA&pid=Api",
 // "https://tse2.mm.bing.net/th?id=OIP.IvomVxWamdLcUe7AkE-yuAHaEh&pid=Api",
 // "https://tse1.mm.bing.net/th?id=OIP.q4zAllLN9IGggsD1HUDxNgHaD8&pid=Api",
 // "https://tse3.mm.bing.net/th?id=OIP.-Y8zVExDS1WKC7BEbSaFowHaFs&pid=Api",
 // "https://tse4.mm.bing.net/th?id=OIP.lLATzRSJ1BnXJW2CJNnfgQHaCj&pid=Api",
 // "https://tse1.mm.bing.net/th?id=OIP.m52bGiUYVIR9KJvuC6JLQgHaEO&pid=Api",
 // "https://tse3.mm.bing.net/th?id=OIP.WpuFOxQPLO187UnmisCTrgHaF4&pid=Api",
 // "https://tse4.mm.bing.net/th?id=OIP.FNti9GMHDyty7FUr4T4uowHaE8&pid=Api",
 // "https://tse1.mm.bing.net/th?id=OIP.vfwUpx9iOMqsRi99_xVWswHaDL&pid=Api"];
var chemHere = $('.chemHere');
var button = $('button');

//sets up variables

button.on('click', randomChemical);
//when button is clicked, calls the randomChemical function
function randomChemical(){
  event.preventDefault();
  //prevents it from doing nothing
  var random = Math.floor(Math.random()*(chemicals.length-1));
  //random value for index
  var newChem = chemicals[random];
  //calls the value at that index
  chemHere.text(newChem);
  //replaces the keysmashing with the new text
}
