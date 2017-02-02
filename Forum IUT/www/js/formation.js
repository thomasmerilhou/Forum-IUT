
// créer un fichier de sessions + ficiher contenant 

var formSelect = [];
var nbEtudiant = 0;


function actionFormation(id) {
  if (formSelect.indexOf(id) == -1) {
    this.selectionnerFormation(id);
  } else {
    this.deselectionnerFormation(id);
  }
}

function selectionnerFormation(id) {
  document.getElementById(id).style.backgroundColor = "black";
  formSelect.push(id);
}

function deselectionnerFormation(id) {
  var backgroundColor = "";

  if (id === "gaco" || id === "gea"  || id === "tc") {
    backgroundColor = "#d73362";
  }
  else if (id === "geii" || id === "info") {
    backgroundColor = "#0093d2";
  }
  else if (id === "gim") {
    backgroundColor = "#848687";
  }
  else if (id === "bio") {
    backgroundColor = "#89ba17";
  }
  else if (id === "gte") {
    backgroundColor = "#f08a00";
  }

  document.getElementById(id).style.backgroundColor = backgroundColor;
  formSelect.splice(formSelect.indexOf(id), 1);
}

function sauvegarderFormation() {

  var obj = {name: "", author: "IUT"};

  for (var i = 0; i < formSelect.length; i++) {
    obj.name += formSelect[i] + ";";
  }

  putData("session", obj);
  getData("session");

  var timer = setTimeout(function() {
    alert("retrieveData = " + retrieveData);
  }, 2);
}

function getNbEtudiant () {
  NativeStorage.getItem("nb_etudiant", retNbEtudiant, createNbEtudiantFile);
}

function createNbEtudiantFile () {
  NativeStorage.setItem("nb_etudiant", 0, null, null);
}

function retNbEtudiant (obj) {
  return parseInt(obj.name);
}

window.onload = function () {

  /** Mise en place des éléments relatives à la formation */

  document.getElementById('gaco').onclick = function () {
    actionFormation('gaco');
  }

  document.getElementById('gea').onclick = function () {
    actionFormation('gea');
  }

  document.getElementById('tc').onclick = function () {
    actionFormation('tc');
  }

  document.getElementById('geii').onclick = function () {
    actionFormation('geii');
  }

  document.getElementById('info').onclick = function () {
    actionFormation('info');
  }

  document.getElementById('gim').onclick = function () {
    actionFormation('gim');
  }

  document.getElementById('bio').onclick = function () {
    actionFormation('bio');
  }

  document.getElementById('gte').onclick = function () {
    actionFormation('gte');
  }

  /** Mise en place de l'événement de finalisation */

  document.getElementById('valider').onclick = function () {
    //  fileManager.initialize();
    if (formSelect.length > 0) {
      if (confirm("Êtes-vous sûr(e) de vouloir valider les formations choisies ?")) {
        //sauvegarderFormation();
        window.location = "formulaire.html";
      }
    } else {
      alert("Vous devez choisir une formation...");
    }
  }

  document.getElementById('annuler').onclick = function () {
    window.location = "selection.html";
  }
}
