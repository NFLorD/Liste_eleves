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

btnCancel.addEventListener("click", toggle);
btnAdd.addEventListener("click", toggle);
form.addEventListener("submit", listUpdateOnSubmit);

function toggle() {
  list.classList.toggle("d-none");
  form.classList.toggle("d-none");
}

function listUpdateOnSubmit(e) {
  e.preventDefault();
  inputs.forEach(input => input.classList.remove("is-invalid"));
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    Array.from(inputs)
      .filter(input => input.value == "")
      .forEach(input => input.classList.add("is-invalid"));
  } else {
    add(inputs[0].value, inputs[1].value, inputs[2].value);
    toggle();
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

function mapButtons() {
  btnsMod = document.querySelectorAll("td button.btn.btn-primary");
  btnsSuppr = document.querySelectorAll("td button.btn.btn-danger");
  btnsSuppr.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
      del(i, 1);
      display();
    });
  });
  btnsMod.forEach(btn => btn.addEventListener("click", modifyListElement));
}

function modifyListElement() {}

document.body.onload = display(tbody);
