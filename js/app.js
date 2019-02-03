// MAIN ELEMENTS
// FROM LIST
const list = document.getElementById("liste");
const tbody = document.querySelector("tbody");
// AND FORM
const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

// TOGGLE FORM
const btnAdd = document.getElementById("btn-add");
const btnCancel = document.getElementById("btn-cancel");

btnAdd.addEventListener("click", toggleOn);
btnCancel.addEventListener("click", toggleOff);
form.addEventListener("submit", listUpdateOnSubmit);

function toggleOn() {
  // apparition du formulaire
  list.classList.add("d-none");
  form.classList.remove("d-none");

  // pré-remplissement des inputs si edit
  if(modify){
      inputs[0].value = eleves[remember].lastName;
      inputs[1].value = eleves[remember].firstName;
      inputs[2].value = eleves[remember].email;
  }
}

function toggleOff(){
	// disparition du formulaire, reset des inputs et réinitialisation de la variable de contrôle "modify"
  	list.classList.remove("d-none");
  	form.classList.add("d-none");
	inputs[0].value = "";
	inputs[1].value = "";
	inputs[2].value = "";
  	modify = false;
}

function listUpdateOnSubmit(e) {
  e.preventDefault();

  // enlèvement des class invalid puis recalcul et application si nécessaire
  inputs.forEach(input => input.classList.remove("is-invalid"));
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    Array.from(inputs)
      .filter(input => input.value == "")
      .forEach(input => input.classList.add("is-invalid"));
  } 

  // appel des fonctions modifier ou ajouter, fermeture du formulaire, ré-affichage du tableau updaté,
  else {
  	if (modify) {
    	edit(remember, inputs[0].value, inputs[1].value, inputs[2].value);
    	/*eleves[remember].edit(inputs[0].value, inputs[1].value, inputs[2].value);*/
  	} else {
    	add(inputs[0].value, inputs[1].value, inputs[2].value);
  	}
    toggleOff();
    display();
  }
}

function display() {
  let html = "";
  for (let i = 0; i < eleves.length; i++) {
    let newLine = `
        <tr>
            <td>${i}</td>
            <td>${eleves[i].lastName}</td>
            <td>${eleves[i].firstName}</td>
            <td>${eleves[i].email}</td>
            <td>
                <button class="btn btn-primary">Modifier</button> 
                <button class="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    `;
    html += newLine;
  }
  tbody.innerHTML = html;
  mapButtons();
}

let btnsMod;
let btnsSuppr;
let modify = false;
let remember;

function mapButtons() {
  btnsMod = document.querySelectorAll("td button.btn.btn-primary");
  btnsSuppr = document.querySelectorAll("td button.btn.btn-danger");

  btnsSuppr.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
      if(window.confirm("Voulez-vous vraiment supprimer cet élève ?")){
	      del(i, 1);
	      display();
      }
    });
  });
  btnsMod.forEach((btn, i) =>
    btn.addEventListener("click", function() {
      modify = true;
      remember = i;
      toggleOn();
    })
  );
}

/*document.body.onload = display(tbody);*/
