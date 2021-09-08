// let billInput = document.getElementById("bill").value;

// FIRST METHOD TO ADD AN EVENT LISTENER TO THE TIP BUTTON CLASSNAME
let tipButton = document.querySelectorAll(".tip-button");

tipButton.forEach((btn) => btn.addEventListener("click", calculateTip));

// SECOND METHOD TO ADD AN EVENT LISTENER TO THE TIP BUTTON CLASSNAME
// let tipButton = document.getElementsByClassName("tip-button");

// for (const button of tipButton) {
//     // console.log(button)
//     button.addEventListener('click', calculateTip)
// }

let customInputField = document.getElementById("custom");
let clearBtn = document.getElementById("clearBtn");

customInputField.addEventListener("input", calculateCustomTip);
clearBtn.addEventListener("click", reset);

function calculateTip(e) {
  let targetButton = e.target;

  targetButton.classList.add("highlightButton");

  let percent = e.target.innerText;

  if (percent.length <= 2) {
    res = percent.substr(0, 1);
  } else {
    res = percent.substr(0, 2);
  }

  let billInput = document.getElementById("bill").value;
  let peopleInput = document.getElementById("people").value;
  let people = document.getElementById("people");

  if (billInput == "" || peopleInput == "") {
    people.classList.add("error");
    document.getElementById("errorDisplay").style.display = "inline-block";
    return;
  } else {
    people.classList.remove("error");
    document.getElementById("errorDisplay").style.display = "none";
  }

  let tipPercent = (billInput / 100) * res;

  let tipPerPerson = tipPercent / peopleInput;

  let bill = parseInt(billInput, 10);

  let totalBill = bill + tipPercent;
  let totalPerPerson = totalBill / peopleInput;

  document.getElementById("tip-amount").innerHTML = tipPerPerson;
  document.getElementById("total-amount").innerHTML = totalPerPerson;
}

function calculateCustomTip() {
  let customInput = document.getElementById("custom").value;

  let billInput = document.getElementById("bill").value;
  let peopleInput = document.getElementById("people").value;

  if (billInput == "" || peopleInput == "") {
    people.classList.add("error");
    document.getElementById("errorDisplay").style.display = "inline-block";
    return;
  } else {
    people.classList.remove("error");
    document.getElementById("errorDisplay").style.display = "none";
  }

  let customPercent = (billInput / 100) * customInput;

  let bill = parseInt(billInput, 10);
  let tipPerPerson = customPercent / peopleInput;

  let totalBill = bill + customPercent;
  let totalPerPerson = totalBill / peopleInput;

  document.getElementById("tip-amount").innerHTML = tipPerPerson;
  document.getElementById("total-amount").innerHTML = totalPerPerson;
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tip-amount").innerHTML = "0.00";
  document.getElementById("total-amount").innerHTML = "0.00";

  let customInput = document.getElementById("custom").value;
  let clearBtn = document.getElementById("clearBtn");

  if (customInput.length <= 2) {
    document.getElementById("custom").value = "";
  }

  clearBtn.classList.add("btnChange");
}
