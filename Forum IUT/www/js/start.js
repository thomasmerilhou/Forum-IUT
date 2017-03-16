
/**
* start.js
* ========
*
* Animation de lancement d'application.
* A Remplacer par un splash screen :
* https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
*/

window.onload = function () {
  var timer = setTimeout(function () {
    window.location = "selection.html";
  }, 2500);
}
