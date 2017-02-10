
/** Fonction d'écriture / de lecture d'entiers dans un fichier **/

function _writeInteger (ref, val, callbackSuccess, callbackError) {
	if (typeof val === 'number') {
		alert("_writeInteger");
		NativeStorage.putInt(ref, val, callbackSuccess, callbackError);
	} else {
		alert("Mauvaise méthode d'écriture (entier)");
	}
}

function _readInteger (ref, callbackSuccess, callbackError) {
	alert("_readInteger");
	NativeStorage.getInt(ref, callbackSuccess, callbackError);
}

/** Fonction d'écriture / de lecture de chaîne de caractères dans un fichier **/

function _writeString (ref, str, callbackSuccess, callbackError) {
	if (typeof str === 'string') {
		NativeStorage.putString(ref, str, callbackSuccess, callbackError);
	} else {
		alert("Mauvaise méthode d'écriture (string)");
	}
}

function _readString (ref, callbackSuccess, callbackError) {
	NativeStorage.getString(ref, callbackSuccess, callbackError);
}
