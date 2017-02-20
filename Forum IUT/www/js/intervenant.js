
// Ajout de l'événement deviceready

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {

	// Ajout des événements sur les boutons

		document.getElementById("valider").addEventListener("click", saveData, false);
		document.getElementById("annuler").addEventListener("click", cancel, false);
}

function isValidData (data) {
	var errors = "";

	if (data.nomIntervenant == "") {
		errors += " * Le champ 'nom' doit être renseigné\n";
	}
	if (data.lieu == "") {
		errors += " * Le champ 'lieu' doit être renseigné\n";
	}
	if (data.date == "") {
		errors += " * Le champ 'date' doit être renseigné\n";
	}
	if (data.roleIntervenant == "") {
		errors += " * Le champ 'role' doit être renseigné\n";
	}

	// Aucun champ n'est vide

	if (errors == "") {
		if (data.nomIntervenant.length < 2) {
			errors += " * Le champ 'nom' ne contient qu'une seule lettre\n";
		}
		if (data.lieu.length < 2) {
			errors += " * Le champ 'lieu' ne contient qu'une seule lettre\n";
		}
		if (data.date.length < 2) {
			errors += " * Le champ 'date' ne contient qu'une seule lettre\n";
		}

		if (data.nomIntervenant.length > 20) {
			errors += " * Le champ 'nom' est trop long\n";
		}
		if (data.lieu.length > 20) {
			errors += " * Le champ 'lieu' est trop long\n";
		}
		if (data.date.length > 20) {
			errors += " * Le champ 'date' est trop long\n";
		}

		if (errors == "") {
			return true;
		}
	}

	alert(errors);
	return false;
}

function saveData () {

	var session = {
		nomIntervenant: "",
		roleIntervenant: "",
		lieu: "",
		date: ""
	};

	session.nomIntervenant  = document.getElementById("nom").value;
	session.lieu = document.getElementById("lieu").value;
	session.date = document.getElementById("date").value;
	session.roleIntervenant = "";

	if (document.forms.intervenant.role[0].checked == true) {
		session.roleIntervenant = "Professeur";
	} else if (document.forms.intervenant.role[1].checked == true) {
		session.roleIntervenant = "Etudiant";
	}

	if (isValidData(session)) {

		NativeStorage.getItem("sauvegarde", function (obj) {

			// Ajout d'une nouvelle session

			obj.nbSession++;
			obj.sessions.push(new Session(obj.nbSession));

			obj.sessions[obj.nbSession-1].nomIntervenant = session.nomIntervenant;
			obj.sessions[obj.nbSession-1].roleIntervenant = session.roleIntervenant;
			obj.sessions[obj.nbSession-1].lieu = session.lieu;
			obj.sessions[obj.nbSession-1].date = session.date;

			NativeStorage.setItem("sauvegarde", obj, function () {

				alert("Enregistrement réussi !");
				window.location = "formation.html";

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

function cancel () {
	window.location = "selection.html";
}
