const monuments = {
    premierMonument: {
        name: "Tour Eiffel",
        city: "Paris",
        country: "France",
        description: "La Tour Eiffel est l'un des monuments les plus célèbres au monde, située à Paris, sur le Champ de Mars. Conçue par l'ingénieur Gustave Eiffel pour l'Exposition Universelle de 1889, elle mesure 330 mètres de hauteur et fut, jusqu'en 1930, la plus haute structure du monde. Initialement critiquée pour son apparence, elle est aujourd'hui un symbole incontesté de la France et de la capitale parisienne. Chaque année, des millions de visiteurs montent ses étages pour admirer une vue imprenable sur Paris. La Tour Eiffel, illuminée la nuit, est un spectacle à part entière, fascinant les touristes comme les Parisiens.",
        imgUrl: "images/Paris.jpg",
    },

    deuxiemeMonument: {
        name: "Pont du Gard",
        city: "Nîmes",
        country: "France",
        description: "Cet Aqueduc romain impressionnant, construit au Ier siècle après J.-C., situé près de Nîmes, dans le sud de la France. Il traverse le Gardon sur trois niveaux de arches, mesurant 49 mètres de hauteur, et servait à acheminer l'eau de la rivière. Cet édifice remarquable témoigne de l'ingéniosité des ingénieurs romains de l'époque. Parfaitement conservé, il est un exemple exceptionnel d'architecture et de génie civil antique. Classé au patrimoine mondial de l'UNESCO, il attire des milliers de visiteurs chaque année.",
        imgUrl: "images/Nîmes.jpg",
    },

    troisiemeMonument: {
        name: "Basilique du Sacré-Coeur ",
        city: "Paris",
        country: "France",
        description: "La basilique du Sacré-Cœur est un monument emblématique situé au sommet de la butte Montmartre, à Paris. Construite entre 1875 et 1914, elle est dédiée au Sacré-Cœur de Jésus en expiation des péchés commis durant la guerre franco-prussienne. Son style romano-byzantin, avec ses coupoles blanches et son dôme central, la distingue des autres églises parisiennes. L’intérieur abrite l’un des plus grands mosaïques du monde, représentant le Christ en gloire. Depuis son parvis, la vue panoramique sur Paris est l’une des plus spectaculaires de la capitale.",
        imgUrl: "images/Paris.jpg",
    },

    quatriemeMonument: {
        name: "Mont Aiguille",
        city: "Vercors",
        country: "France",
        description: "Le Mont Aiguille est l'un des sommets les plus emblématiques du massif du Vercors, situé dans les Alpes françaises. Culminant à 2 087 mètres d'altitude, il est connu pour sa forme pyramidale unique, entourée de falaises vertigineuses. Ce mont a marqué l’histoire de l’alpinisme, étant l'un des premiers sommets à être grimpé en 1492. Il offre des panoramas spectaculaires sur les montagnes environnantes et la vallée du Trièves. Très prisé des randonneurs et des grimpeurs, le Mont Aiguille est un véritable défi pour les amateurs de nature et de sensations fortes.",
        imgUrl: "images/Vercors.jpg",
    },

    cinquiemeMonument: {
        name: "Château de Chenonceau",
        city: "Loire",
        country: "France",
        description: "Le château de Chenonceau, surnommé le 'château des Dames', est l’un des plus emblématiques de la vallée de la Loire. Construit au XVIe siècle, il enjambe gracieusement le Cher grâce à sa galerie en arches, unique en son genre. Il doit sa renommée aux femmes qui l’ont façonné, comme Diane de Poitiers et Catherine de Médicis. Son architecture Renaissance, ses jardins raffinés et son décor intérieur riche en œuvres d’art attirent chaque année de nombreux visiteurs. C’est un symbole de l’élégance française et de l’influence féminine dans l’histoire.",
        imgUrl: "images/Loire.jpg",
    },
};

const images = document.querySelectorAll('.img_monument');
const buttons = document.querySelectorAll('.btn_monument');
const containerTxt = document.getElementById('container_txt');
const containers = document.querySelectorAll('.container_img_button');

let containerTxtVisible = false;


images.forEach((image, index) => {
    image.addEventListener('click', () => {
        toggleContainerTxt(index);
        flouterElements(index); 
    });
});


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleContainerTxt(index);
        flouterElements(index);
    });
});


function toggleContainerTxt(index) {
    if (!containerTxtVisible) {
        containerTxt.style.display = "block";
        containerTxtVisible = true;
    }
    
    maFonction(index);
}


function flouterElements(index) {
    containers.forEach((container, i) => {
        if (i !== index) {
            container.classList.add('flou'); 
        } else {
            container.classList.remove('flou'); 
        }
    });
}


function maFonction(index) {
    const monumentKey = Object.keys(monuments)[index]; 
    const monument = monuments[monumentKey]; 


    const titre = containerTxt.querySelector('h2');
    const sousTitre = containerTxt.querySelector('h3');
    const description = containerTxt.querySelector('#txt_monument');
    const carte = containerTxt.querySelector('#img_carte');


    titre.textContent = monument.name;
    sousTitre.innerHTML = `${monument.city}, <span id="bold">${monument.country}</span>`;
    description.textContent = monument.description;
    carte.src = monument.imgUrl; 
}


document.addEventListener('click', function(event) {
    if (!containerTxt.contains(event.target) && !event.target.closest('.container_img_button')) {
        containerTxt.style.display = "none"; 
        containerTxtVisible = false; 
        resetFlou(); 
    }
});


function resetFlou() {
    containers.forEach(container => {
        container.classList.remove('flou');
    });
}
