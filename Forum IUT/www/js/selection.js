
window.onload = function () {

  document.getElementById('commencer-session').onclick = function () {
    window.location = "intervenant.html";
  }

  function success (nbEtudiant) {
    alert(nbEtudiant);
  }

  function error () {
    alert("Error");
  }

  document.getElementById('envoyer-infos').onclick = function () {
    _writeInteger("nb_etudiant", 10, success, error);
  }
}
