/**
* classe.js
* =========
*
* Définit les classes nécessaires à l'enregistrement des données
* dans les fichiers via NativeStorage.
*/

/**
* Classe principale de l'application
*/

function ForumIut () {
  this.nbSession = 0; // Nombre de session enregistrée
  this.sessions = []; // Tableau contenant les sessions
}

/**
* Classe représentant les informations d'une sesion
* @param numeroSes Le numéro de la session à instantier
*/

function Session (numeroSes) {
  this.nomIntervenant = "unknown";  // Nom de l'intervenant
  this.roleIntervenant = "unknown"  // Rôle de l'intervenant
  this.lieu = "unknown";            // Lieu du où se déroule le forum
  this.date = "unknown";            // Date à laquelle s'est déroulé le forum
  this.etudiants = [];              // Tableau contenants tous les étudiants
  this.nbEtudiant = 0;              // Le nombre d'étudiant dans cette session
  this.numeroSes = numeroSes;       // Le numéro de la sesion
}

/**
* Classe représentant les informations d'un étudiant
* @param numeroSes Le numéro de la session
* @param numeroEtu Le numéro de l'étudiant à instantier
*/

function Etudiant (numeroSes, numeroEtu) {
  this.condition = false;          // Indique si l'étudiant à accepter les conditions
  this.formations = "unknown";     // Les formations choisies séparées par des points-virgules
  this.civilite = "unknown";       // La civilité
  this.nom = "unknown";            // Le nom de l'étudiant
  this.prenom = "unknown";         // Le prénom de l'étudiant
  this.naissance = "unknown";      // La date de naissance de l'étudiant
  this.email = "unknown";          // L'adresse email de l'étudiant
  this.situation = "unknown";      // La situation actuel de l'étudiant
  this.etablissement = "unknown";  // L'établissement précédent de l'étudiant
  this.ville = "unknown";          // La ville de l'étudiant
  this.departement = "unknown";    // Le département de l'étudiant
  this.connaitIUT = false;         // Indique si l'étudiant connait l'IUT
  this.connaitHOW = "unknown";     // Comment l'étudiant a connu l'IUT
  this.recevoirInfos = false;      // Indique si l'étuiant désire recevoir des informations
  this.numeroSes = numeroSes;      // Numéro de la session
  this.numeroEtu = numeroEtu;      // Numéro de l'étudiant
}
