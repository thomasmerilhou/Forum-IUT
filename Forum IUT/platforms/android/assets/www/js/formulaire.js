
var nom = "", prenom = "", adresse = "";

function est_vide (_var) {
  if (typeof _var === 'string') {
    return _var.length == 0;
  }
}

window.onload = function () {
  document.getElementById('envoyer').onclick = function () {
    document.location = "succes.html";
  }
}
