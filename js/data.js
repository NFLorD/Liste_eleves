const eleves = [
  { firstName: "Mickaël", lastName: "Benalli", email: "mika@3wa.fr" },
  { firstName: "Jean", lastName: "Louis", email: "JLbg@3wa.fr" },
  { firstName: "Camille", lastName: "Jolliet", email: "cam@3wa.fr" },
  { firstName: "Nicolas", lastName: "Fasano", email: "nico@3wa.fr" }
];

function add(x, y, z) {
  eleves.push({
    lastName: x,
    firstName: y,
    email: z
  });
}

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

// function edit(index, propName, value) {
//   let eleve = eleves[index];
//   eleve[propName] = value;
// }

//https://notepad.pw/3wam
