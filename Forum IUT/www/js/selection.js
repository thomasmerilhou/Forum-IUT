
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    var nbEtudiant = 0;
    var nbSession  = 0;

    document.getElementById('')

    NativeStorage.getInt("nbSession", function(val) {

      nbSession = val;

      NativeStorage.getInt("nbEtudiant", function (val) {

        nbEtudiant = val;

        alert("nbSession  = " + nbSession);
        alert("nbEtudiant = " + nbEtudiant);

        /*for (var i = 0; i < nbSession; i++) {

          for (var j = 0; j < nbEtudiant; j++) {

            NativeStorage.getInt("session-" + i "-etudiant-" + j, function (val) {

              alert("Session n° " + i + " Etudiant n° " + j + " = " + val);

            }, function () {

                alert('Aucun fichier trouvé...');
                return;

            });

          }

        }*/

      }, function () {

        alert("Aucun étudiant sauvegardé");
        return;

      });
    
    }, function () {
      
      alert("Aucune session sauvegardée");
      return;
    
    });

  /*document.getElementById("commencer-session").onclick = function () {
    window.location = "intervenant.html";
  }*/

  //document.getElementById("envoi-conteneur").onclick = function () {


  //}
}
