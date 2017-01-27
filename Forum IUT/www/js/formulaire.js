
var nom = "", prenom = "", adresse = "";

function est_vide (_var) {
  if (typeof _var === 'string') {
    return _var.length == 0;
  }
}

window.onload = function () {
  document.getElementById('valider').onclick = function () {
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    adresse = document.getElementById("adresse").value;

    document.getElementById("nom").className = "form-control";
    document.getElementById("prenom").className = "form-control";
    document.getElementById("adresse").className = "form-control";

    if (est_vide(nom)) {
      document.getElementById("nom").className += " erreur-champ";
    }

    if (est_vide(prenom)) {
      document.getElementById("prenom").className += " erreur-champ";
    }

    if (est_vide(adresse)) {
      document.getElementById("adresse").className += " erreur-champ";
    }

    if (!est_vide(nom) && !est_vide(prenom) && !est_vide(adresse)) {
      window.location = "succes.html";
    }
    else {
      alert("Les champs en rouge doivent être renseignés...");
    }
  }
}
