const monuments = {
    premierMonument: {
        name: "Exemple1",
        city: "Ville1",
        country: "France",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        imgUrl: "images/carte_france.webp",
    },

    deuxiemeMonument: {
        name: "Exemple2",
        city: "Ville2",
        country: "France",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        imgUrl: "images/carte_france.webp",
    },

    troisiemeMonument: {
        name: "Exemple3",
        city: "Ville3",
        country: "France",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        imgUrl: "images/carte_france.webp",
    },

    quatriemeMonument: {
        name: "Exemple4",
        city: "Ville4",
        country: "France",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        imgUrl: "images/carte_france.webp",
    },

    cinquiemeMonument: {
        name: "Exemple5",
        city: "Ville5",
        country: "France",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        imgUrl: "images/carte_france.webp",
    },
};

// Sélectionner toutes les images et tous les boutons
const images = document.querySelectorAll('.img_monument');
const buttons = document.querySelectorAll('.btn_monument');
const containerTxt = document.getElementById('container_txt');
const containers = document.querySelectorAll('.container_img_button'); // Sélectionner toutes les divs contenant les images et boutons

let containerTxtVisible = false;

// Ajouter un événement de clic pour chaque image
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        toggleContainerTxt(index); // Appeler la fonction pour afficher ou cacher le container_txt
        flouterElements(index); // Appliquer le flou aux autres éléments
    });
});

// Ajouter un événement de clic pour chaque bouton
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleContainerTxt(index); // Appeler la fonction pour afficher ou cacher le container_txt
        flouterElements(index); // Appliquer le flou aux autres éléments
    });
});

// Fonction pour afficher ou cacher le container_txt
function toggleContainerTxt(index) {
    if (!containerTxtVisible) {
        containerTxt.style.display = "block"; // Afficher le container_txt
        containerTxtVisible = true;
    }
    
    maFonction(index); // Mettre à jour les informations du monument
}

// Fonction pour flouter les autres images et boutons
function flouterElements(index) {
    // Réinitialiser le flou de tous les éléments
    containers.forEach((container, i) => {
        if (i !== index) {
            container.classList.add('flou'); // Ajouter la classe floutée
        } else {
            container.classList.remove('flou'); // Enlever la classe floutée de l'élément sélectionné
        }
    });
}

// Fonction pour mettre à jour les informations du monument
function maFonction(index) {
    const monumentKey = Object.keys(monuments)[index]; // Trouver la clé du monument (ex: 'premierMonument', 'deuxiemeMonument', etc.)
    const monument = monuments[monumentKey]; // Accéder à l'objet du monument sélectionné

    // Mettre à jour le contenu de la section #container_txt
    const titre = containerTxt.querySelector('h2');
    const sousTitre = containerTxt.querySelector('h3');
    const description = containerTxt.querySelector('#txt_monument');
    const carte = containerTxt.querySelector('#img_carte');

    // Mise à jour du contenu avec les informations du monument
    titre.textContent = monument.name;
    sousTitre.innerHTML = `${monument.city}, <span id="bold">${monument.country}</span>`;
    description.textContent = monument.description;
    carte.src = monument.imgUrl; // Modifier l'image de la carte en fonction du monument
}

// Cacher le container_txt lorsque l'on clique en dehors de celui-ci
document.addEventListener('click', function(event) {
    if (!containerTxt.contains(event.target) && !event.target.closest('.container_img_button')) {
        containerTxt.style.display = "none"; // Cache le container_txt
        containerTxtVisible = false; // Mettre à jour la variable pour savoir qu'il est caché
        resetFlou(); // Réinitialiser les éléments floutés
    }
});

// Réinitialiser tous les éléments floutés lorsqu'on clique en dehors du container_txt
function resetFlou() {
    containers.forEach(container => {
        container.classList.remove('flou');
    });
}
