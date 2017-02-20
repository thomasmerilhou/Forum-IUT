
function ForumIut () {
  this.nbSession = 0;
  this.sessions = [];
}

function Session (numeroSes) {
  this.nomIntervenant = "unknown";
  this.roleIntervenant = "unknown"
  this.lieu = "unknown";
  this.date = "unknown";
  this.etudiants = [];
  this.nbEtudiant = 0;
  this.numeroSes = numeroSes;
}

function Etudiant (numeroSes, numeroEtu) {
  this.condition = false;
  this.formations = "unknown";
  this.civilite = "unknown";
  this.nom = "unknown";
  this.prenom = "unknown";
  this.naissance = "unknown";
  this.email = "unknown";
  this.situation = "unknown";
  this.etablissement = "unknown";
  this.ville = "unknown";
  this.departement = "unknown";
  this.connaitIUT = false;
  this.connaitHOW = "unknown";
  this.recevoirInfos = false;
  this.numeroSes = numeroSes;
  this.numeroEtu = numeroEtu;
}
