
// Tableau contenant les formations sélectionnées par l'étudiant

var formEtudiant = [];

// Ajout de l'événement deviceready

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {

	// Ajout des événements sur les boutons

  document.getElementById("gaco").addEventListener("click", gaco, false);
  document.getElementById("gea").addEventListener("click", gea, false);
  document.getElementById("tc").addEventListener("click", tc, false);
  document.getElementById("geii").addEventListener("click", geii, false);
  document.getElementById("info").addEventListener("click", info, false);
  document.getElementById("gim").addEventListener("click", gim, false);
  document.getElementById("bio").addEventListener("click", bio, false);
  document.getElementById("gte").addEventListener("click", gte, false);

  // Ajout de l'événement valider sur le bouton valider

  document.getElementById('valider').addEventListener("click", saveData, false);

  // Ajout de l'événement annuler sur le bouton annuler

  document.getElementById('annuler').addEventListener("click", cancel, false);

}

function gaco () {
  actionFormation("gaco");
}

function gea () {
  actionFormation("gea");
}

function tc () {
  actionFormation("tc");
}

function geii ()  {
  actionFormation("geii");
}

function info () {
  actionFormation("info");
}

function gim () {
  actionFormation("gim");
}

function bio () {
  actionFormation("bio");
}

function gte () {
  actionFormation("gte");
}

function saveData () {

  // Création de l'objet étudiant

  var etudiant =
  {
    condition: false,
    formations: ""
  };

  // Récupération de la valeur du bouton pour accepter les conditions

  etudiant.condition = document.forms.formulaire.conditions.checked;

  // Récupération des formations choisies

  for (var i = 0; i < formEtudiant.length; i++) {
    if (i + 1 < formEtudiant.length) {
      etudiant.formations += formEtudiant[i].toUpperCase() + "-";
    } else {
      etudiant.formations += formEtudiant[i].toUpperCase();
    }
  }

  if (isValidData(etudiant)) {

    if (confirm("Êtes-vous sûr(e) de vouloir valider les formations choisies ?")) {

      NativeStorage.getItem("sauvegarde", function (obj) {

        // Ajout d'un étudiant

        var indexSession  = obj.nbSession - 1;

        obj.sessions[indexSession].nbEtudiant++;

        var indexEtudiant = obj.sessions[indexSession].nbEtudiant - 1;

        obj.sessions[indexSession].etudiants.push(new Etudiant(obj.nbSession, indexEtudiant + 1));


        var indexEtudiant = obj.sessions[indexSession].nbEtudiant - 1;

        obj.sessions[indexSession].etudiants[indexEtudiant].condition = etudiant.condition;
        obj.sessions[indexSession].etudiants[indexEtudiant].formations = etudiant.formations;

        NativeStorage.setItem("sauvegarde", obj, function () {

          window.location = "formulaire.html";

        }, function () {

          alert("FATAL ERROR: Impossible de modifier le fichier 'sauvegarde'...");
          return;

        });

      }, function () {

        alert("FATAL ERROR: Impossible de lire le fichier 'sauvegarde'...");
        return;

      });

    }

  }
}

function isValidData (etudiant) {
  var errors = "";

  if (etudiant.condition == false) {
    errors += " * Vous devez accepter les conditions d'utilisation\n";
  }

  if (etudiant.formations.length == 0) {
    errors += " * Vous devez choisir une formation...\n";
  }

  if (errors == "") {
    return true;
  }

  alert(errors);
  return false;
}

function actionFormation(id) {
  if (formEtudiant.indexOf(id) == -1) {
    enableFormation(id);
  } else {
    disableFormation(id);
  }
}

function enableFormation(id) {
  document.getElementById(id).style.backgroundColor = "black";
  formEtudiant.push(id);
}

function disableFormation(id) {
  var bc = "";

  if (id === "gaco" || id === "gea"  || id === "tc") {
    bc = "#d73362";
  }
  else if (id === "geii" || id === "info") {
    bc = "#0093d2";
  }
  else if (id === "gim") {
    bc = "#848687";
  }
  else if (id === "bio") {
    bc = "#89ba17";
  }
  else if (id === "gte") {
    bc = "#f08a00";
  }

  document.getElementById(id).style.backgroundColor = bc;
  formEtudiant.splice(formEtudiant.indexOf(id), 1);
}

function cancel () {
  window.location = "selection.html";
}
