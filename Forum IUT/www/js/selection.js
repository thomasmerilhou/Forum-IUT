
/**
* selection.js
* =============
*
* Définit les différentes interractions ainsi que l'enregistrement
* des données pour le fichier selection.html.
*/

// Ajout de l'événement deviceready

document.addEventListener("deviceready", onDeviceReady, false);

/**
* Fonction appelée par l'événement deviceready
*/

function onDeviceReady() {

  // Création des fichiers nécessaires au fonctionnement de l'application

  initializeFile();

  // Ajout des événements sur les boutons

  document.getElementById("start-session").addEventListener("click", startSession, false);
  document.getElementById("start-sending").addEventListener("click", startSending, false);

}

/**
* Cette fonction exécute les différentes action de l'utilisateur en appelant les
* fonctions correspondantes
*/

function startSending () {
  if (confirm("Voulez-vous afficher les informations enregistrées ?")) {
    showData();
  } else {
    if (confirm("Voulez-vous supprimer les informations enregistrées ?")) {
      purgeData();
    }
  }
}

/**
* Cette fonction crée les fichiers nécessaires au fonctionnement de
* l'application
*/

function initializeFile () {

  NativeStorage.getItem("sauvegarde", function (obj) {}, function () {

    var obj = new ForumIut();

    NativeStorage.setItem("sauvegarde", obj, null, null);

  });

}

/**
* Cette fonction affiche l'intégralité des données sur la tablette
*/

function showData () {

  // Lecture du fichier sauvegarde

  NativeStorage.getItem("sauvegarde", function (obj) {

    for (var i = 0; i < obj.nbSession; i++) {

      // Affichage des données dans des alertes de toutes les
      // informations enregistrées

      var session = obj.sessions[i];
      var s = "";

      s += "Session n°" + session.numeroSes + ":\n";
      s += "   Nom intervenant: " + session.nomIntervenant + "\n";
      s += "   Rôle: " + session.roleIntervenant + "\n";
      s += "   Lieu: " + session.lieu + "\n";
      s += "   Date: " + session.date + "\n";

      alert(s);

      for (var j = 0; j < obj.sessions[i].nbEtudiant; j++) {

        var etudiant = obj.sessions[i].etudiants[j];
        var s = "";

        s += "Session n°" + etudiant.numeroSes + " etudiant n°" + etudiant.numeroEtu + ":\n";
        s += "   Conditions: " + etudiant.condition + "\n";
        s += "   Formation(s):" + etudiant.formations + "\n";
        s += "   Nom étudiant: " + etudiant.nom + "\n";
        s += "   Prénom étudiant: " + etudiant.prenom + "\n";
        s += "   Date de naissance: " + etudiant.naissance + "\n";
        s += "   Email: " + etudiant.email + "\n";
        s += "   Situation: " + etudiant.situation + "\n";
        s += "   Etablissement: " + etudiant.etablissement + "\n";
        s += "   Ville: " + etudiant.ville + "\n";
        s += "   Département: " + etudiant.departement + "\n";
        s += "   Connait IUT: " + etudiant.connaitIUT + "\n";
        s += "   Comment: " + etudiant.connaitHOW + "\n";
        s += "   Envoyer infos: " + etudiant.recevoirInfos + "\n";

        alert(s);

      }

    }

  }, function () {

    alert("FATAL ERROR: Impossible de lire le fichier 'sauvegarde'...");
    return;

  });

}

/**
* Cette fonction supprime l'intégralité des données et génère les fichiers
* nécessaires au fonctionnement de l'application
*/

function purgeData () {
  NativeStorage.clear(function () {
    alert("Suppression réussie !");
    initializeFile();
  }, function () {
    alert("FATAL ERROR: Echec de la suppression...");
    return;
  });
}

/**
* Cette fonction redirige vers la page intervenant.html
*/

function startSession () {
  document.location = "intervenant.html";
}
