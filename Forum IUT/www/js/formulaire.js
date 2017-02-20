
// Ajout de l'événement deviceready

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {

	// Ajout des événements sur les boutons

  getId("envoyer").addEventListener("click", saveData, false);
}

function getId(id) {
  return document.getElementById(id);
}

function isValidData (data) {
  var errors = "";

  // Fonctions de vérifications ici

  return true;
}

function saveData () {

  var etudiant = {
    civilite: "unknown",
    nom: "unknown",
    prenom: "unknown",
    naissance: "unknown",
    email: "unknown",
    situation: "unknown",
    etablissement: "unknown",
    ville: "unknown",
    departement: "unknown",
    connaitIUT: false,
    connaitHOW: "unknown",
    recevoirInfos: false
  };

  if (document.forms.formulaire.civilite[0].checked) {
    etudiant.civilite = "Madame";
  } else if (document.forms.formulaire.civilite[1].checked) {
    etudiant.civilite = "Monsieur";
  }

  etudiant.nom = getId("nom").value;
  etudiant.prenom = getId("prenom").value;
  etudiant.naissance = getId("naissance").value;
  etudiant.email = getId("email").value;
  etudiant.situation = getId("situation").options[getId("situation").selectedIndex].text;
  etudiant.etablissement = getId("etablissement").value;
  etudiant.ville = getId("ville").value;
  etudiant.departement = getId("departement").options[getId("departement").selectedIndex].text;

  if (document.forms.formulaire.connaitIUT[0].checked) {
    etudiant.connaitIUT = "Oui";
  } else if (document.forms.formulaire.connaitIUT[1].checked) {
    etudiant.connaitIUT = "Non";
  }

  if (getId("connaitHow").options[getId("connaitHow").selectedIndex].text == "") {
    etudiant.connaitHOW = getId("Autre").value;
  } else {
    etudiant.connaitHOW = getId("connaitHow").options[getId("connaitHow").selectedIndex].text;
  }

  if (document.forms.formulaire.recevoirIUT[0].checked) {
    etudiant.recevoirInfos = "Oui";
  } else if (document.forms.formulaire.recevoirIUT[1].checked) {
    etudiant.recevoirInfos = "Non";
  }

  if (isValidData(etudiant)) {

    NativeStorage.getItem("sauvegarde", function (obj) {

      var indexSession  = obj.nbSession - 1;
      var indexEtudiant = obj.sessions[indexSession].nbEtudiant - 1;

      obj.sessions[indexSession].etudiants[indexEtudiant].civilite = etudiant.civilite;
      obj.sessions[indexSession].etudiants[indexEtudiant].nom = etudiant.nom;
      obj.sessions[indexSession].etudiants[indexEtudiant].prenom = etudiant.prenom;
      obj.sessions[indexSession].etudiants[indexEtudiant].naissance = etudiant.naissance;
      obj.sessions[indexSession].etudiants[indexEtudiant].email = etudiant.email;
      obj.sessions[indexSession].etudiants[indexEtudiant].situation = etudiant.situation;
      obj.sessions[indexSession].etudiants[indexEtudiant].etablissement = etudiant.etablissement;
      obj.sessions[indexSession].etudiants[indexEtudiant].ville = etudiant.ville;
      obj.sessions[indexSession].etudiants[indexEtudiant].departement = etudiant.departement;
      obj.sessions[indexSession].etudiants[indexEtudiant].connaitIUT = etudiant.connaitIUT;
      obj.sessions[indexSession].etudiants[indexEtudiant].connaitHOW = etudiant.connaitHOW;
      obj.sessions[indexSession].etudiants[indexEtudiant].recevoirInfos = etudiant.recevoirInfos;

      NativeStorage.setItem("sauvegarde", obj, function () {

        alert("Enregistrement réussi !");
        window.location = "succes.html";

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
