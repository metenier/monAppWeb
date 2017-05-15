function verif(entree) {
  var seulement_ceci ="0123456789-+*/.";
  for (var i = 0; i < entree.length; i++)
    if (seulement_ceci.indexOf(entree.charAt(i))<0 )
      return false;
  return true;
}

function affResult() {
  var x = 0;
  if (verif(window.document.maCalculette.ecran.value))
    x = eval(window.document.maCalculette.ecran.value);
  window.document.maCalculette.ecran.value = x;
}

function touche(caracteres) {
  window.document.maCalculette.ecran.value = window.document.maCalculette.ecran.value + caracteres;
}