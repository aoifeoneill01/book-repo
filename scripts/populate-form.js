
// FETCH DATA FROM DATABASE
fetch("../profile-includes/retrieve.php").then(response => {
    console.log('success');
return response.json();
}).then(data => {
//GRAB ALL LIST NAMES AND CREATE SEPERATE LIST SECTIONS
  var allLists = data.map( val => {
       return val.createlist;
    });

const uniqueList = allLists.reduce((total, amount) => {
  allLists.forEach( val => {
    if (total.indexOf(val) === -1){
     total.push(val);
    }
  });
  return total;
}, []);


uniqueList.forEach(val => {

  let test =
  `<option value="${val}">${val}</option>`;
  document.getElementById("currentLists").innerHTML += test;
});

});
