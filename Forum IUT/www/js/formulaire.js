
/**
* formulaire.js
* =============
*
* Définit les différentes interractions ainsi que l'enregistrement
* des données pour le fichier formulaire.html.
*/

// Ajout de l'événement deviceready

document.addEventListener("deviceready", onDeviceReady, false);

/**
* Fonction appelée lorsque l'appareil est prêt
*/

function onDeviceReady () {

	// Ajout des événements sur les boutons

  getId("envoyer").addEventListener("click", saveData, false);
}

/**
* Fonction récupérant l'ID d'un élément HTML.
* @param id ID de l'élément
*/

function getId(id) {
  return document.getElementById(id);
}

/**
* Vérifie si les données sont valides avant d'être
* enregistrée.
* @param data Les données à enregistrer
* @return Les erreurs
*/

function isValidData (data) {

  var errors = "";

  if (data.civilite.length == 0) {
    errors += " * Vous devez spécifier la civilité\n";
  }

  if (data.nom.length == 0) {
    errors += " * Vous devez entrer votre nom\n";
  }


  if (data.prenom.length == 0) {
    errors += " * Vous devez entrer votre prénom\n";
  }


  if (data.email.length == 0) {
    errors += " * Vous devez entrer une adresse mail\n";
  }


  if (data.situation.length == 0) {
    errors += " * Vous devez spécifier votre situation\n";
  }


  if (data.etablissement.length == 0) {
    errors += " * Vous devez spécifier votre établissement\n";
  }


  if (data.ville.length == 0) {
    errors += " * Vous devez spécifier le champ ville\n";
  }


  if (data.departement.length == 0) {
    errors += " * Vous devez spécifier le département\n";
  }

  if (data.connaitIUT.length == 0) {
    errors += " * Vous devez spécifier si vous connaissez l'IUT aupauravant\n";
  }

  if (data.connaitIUT == "Oui") {
    if (data.connaitHOW.length == 0) {
       errors += " * Vous devez spécifier comment vous avez connu l'IUT\n";
    }
  }

  if (data.recevoirInfos.length == 0) {
    errors += " * Vous devez accepter de recevoir des informations relatives à l'IUT\n";
  }

  if (errors == "") {
    return true;
  }

  alert(errors);

  return false;
}

/**
* Fonction enregistrant les données dans un fichier
* sur la tablette.
*/

function saveData () {

  // Définition d'un objet étudiant

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

  // Récupération des données du formulaire

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
    etudiant.connaitHOW = getId("autre").value;
  } else {
    etudiant.connaitHOW = getId("connaitHow").options[getId("connaitHow").selectedIndex].text;
  }



  if (document.forms.formulaire.recevoirIUT[0].checked) {
    etudiant.recevoirInfos = "Oui";
  } else if (document.forms.formulaire.recevoirIUT[1].checked) {
    etudiant.recevoirInfos = "Non";
  }

  // Vérification de la validité des informations

  if (isValidData(etudiant)) {

    // Lecture du fichier et récupération d'un objet contenant les données

    NativeStorage.getItem("sauvegarde", function (obj) {

      var indexSession  = obj.nbSession - 1;
      var indexEtudiant = obj.sessions[indexSession].nbEtudiant - 1;

      // Enregistrement dans l'objet des données

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

      // Enregistrement de l'objet dans le fichier sauvegarde

      NativeStorage.setItem("sauvegarde", obj, function () {
        
        // On passe à la page suivante
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
