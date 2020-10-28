
// Première fonction JavaScript: le bouton en bas de la page d'accueil fait afficher un message d'alerte
  // définition de la fonction d'écoute (listener)
  var action1 = function() {
    var bouton =  document.getElementById("bouton");
    window.alert("Parcourez le site pour découvrir Only Learn");  // cette fonction va afficher une fenêtre d'alerte avec ce texte
  }
  // sélection de l'élément
  var bouton =  document.getElementById("bouton"); 
bouton.addEventListener("click",action1); // abonnement pour l'événement lorsque l'utilisateur clique sur le bouton

// ajout du lien des deux images qui vont se remplacer mutuellement au clic de l'utilisateur sur la page contact
var tabImage = [
  "WhatsApp Image 2020-10-27 at 10.45.36.jpeg",
  "WhatsApp Image 2020-10-27 at 10.45.37.jpeg"
];

// ajout de la variable représentant l'indice de l'image courante, qui vaut 0 initialement
var indiceImage = 0;

// une fonction qui change la source de l'image dont l'id est "Julia" et lui donne la valeur de l'élément d'indice indiceImage du tableau de la ligne 14, tabImage
var afficheImage = function () {
  var Julia = document.getElementById("Julia");
  Julia.src = tabImage[indiceImage];
}

// une autre fonction, image suivante, qui va afficher dans l'id "Julia" l'image du tableau ayant l'indice suivant par rapport à indiceImage.
var imageSuivante = function () {
  indiceImage ++;
  if (indiceImage == tabImage.length) {
    indiceImage = 0;
  }
  afficheImage ();
}

// la dernière fonction va faire en sorte d'un clic de souris permettre de changer l'image, grâce à une fonction d'écoute
var setupListeners = function () {
  var Julia = document.getElementById("Julia");
  Julia.addEventListener ("click", imageSuivante);
  afficheImage ();
}

window.addEventListener("load", setupListeners);

