const eleves = [
  { firstName: "Mickaël", lastName: "Benalli", email: "mika@3wa.fr" },
  { firstName: "Jean", lastName: "Louis", email: "J-L@3wa.fr" },
  { firstName: "Camille", lastName: "Jolliet", email: "cam@3wa.fr" },
  { firstName: "Nicolas", lastName: "Fasano", email: "nico@3wa.fr" }
];

function add(lName, fName, email){
  eleves.push(new Eleve(lName, fName, email));
}

/*function add(x, y, z) {
  eleves.push({
    lastName: x,
    firstName: y,
    email: z
  });
}*/

function del(index, num) {
  eleves.splice(index, num);
}

function edit(index, x, y, z) {
  eleves[index] = {
    lastName: x,
    firstName: y,
    email: z
  };
}

function Eleve(lName, fName, email){
  this.lastName = lName;
  this.firstName = fName;
  this.email = email;
  this.edit = function(x, y, z){
    this.lastName = x;
    this.firstName = y;
    this.email = z;
  }
}

// function edit(index, propName, value) {
//   let eleve = eleves[index];
//   eleve[propName] = value;
// }

//https://notepad.pw/3wam

/*function digPow(n, p){
let N = Array.from(n.toString()).map((eachN,i) => eachN**(p+i)).reduce((acc, curr) => acc + curr);
  for(let i = 0; i<100; i++){
    if(i*n == N){
      return i;
    }
  }
  return -1;
}*/