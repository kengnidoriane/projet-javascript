/*********************************************************************************
 * 
 * Ce fichier contient toutes les constantes nécessaires au fonctionnement du jeu.
 * En particulier les listes de mots et de phrases proposés à l'utilisateur
 * 
 *********************************************************************************/



const words = [
    "chat",
    "chien",
    "maison",
    "ordinateur",
    "clavier",
    "souris",
    "voiture",
    "arbre",
    "livre",
    "école",
    "table",
    "chaise",
    "fenêtre",
    "porte",
    "lampe",
    "jardin",
    "fleur",
    "soleil",
    "lune",
    "étoile",
    "ciel",
    "nuage",
    "pluie",
    "neige",
    "vent",
    "mer",
    "rivière",
    "montagne",
    "vallee",
    "forêt",
    "oiseau",
    "poisson",
    "pain",
    "fromage",
    "pomme",
    "banane",
    "orange",
    "citron",
    "fraise",
    "raisin",
    "cerise",
    "abricot",
    "pêche",
    "poire",
    "melon",
    "pastèque",
    "tomate",
    "carotte",
    "pomme de terre",
    "salade",
    "courgette",
    "aubergine",
    "brocoli",
    "chou",
    "épinard",
    "poivron",
    "concombre",
    "haricot",
    "champignon",
    "bicyclette",
    "télévision",
    "téléphone",
    "internet",
    "logiciel",
    "application",
    "réseau",
    "serveur",
    "client",
    "protocole",
    "données",
    "fichier",
    "dossier",
    "imprimante",
    "scanner",
    "photocopieuse",
    "caméra",
    "microphone",
    "haut-parleur",
    "casque",
    "batterie",
    "chargeur",
    "clé USB",
    "disque dur",
    "mémoire",
    "processeur",
    "carte mère",
    "carte graphique",
    "système",
    "logiciel",
    "programme",
    "script",
    "code",
    "développeur",
    "ingenieur",
    "architecte",
    "analyste",
    "base de données",
    "requête",
    "algorithme",
    "interface",
    "utilisateur",
    "conception",
    "déploiement",
    "sécurité",
    "protection",
    "encryption",
    "firewall",
    "antivirus",
    "backup",
    "restauration",
    "maintenance",
    "support",
    "équipe",
    "projet",
    "objectif",
    "résultat",
    "performance",
    "efficacité",
    "productivité",
    "qualité",
    "amélioration",
    "innovation",
    "créativité",
    "stratégie",
    "planification",
    "gestion",
    "organisation",
    "communication",
    "collaboration",
    "coordination",
    "leadership",
    "décision",
    "initiative",
    "responsabilité",
    "compétence",
    "expérience",
    "connaissance",
    "formation",
    "éducation",
    "apprentissage",
    "développement",
    "croissance",
    "opportunité",
    "réussite",
    "succès",
    "échec",
    "défi",
    "solution",
    "problème",
    "analyse",
    "synthèse",
    "résolution",
    "confiance",
    "respect",
    "intégrité",
    "éthique",
    "valeur",
    "vision",
    "mission",
    "objectif",
    "but",
    "progrès",
    "évolution",
    "transformation",
    "changement",
    "adaptation",
    "flexibilité",
    "resilience",
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli",
    "vanilla",
    "watermelon",
    "xigua",
    "yam",
    "zucchini",
    "ant",
    "bear",
    "cat",
    "dog",
    "elephant",
    "frog",
    "giraffe",
    "horse",
    "iguana",
    "jaguar",
    "kangaroo",
    "lion",
    "monkey",
    "newt",
    "owl",
    "penguin",
    "quail",
    "rabbit",
    "snake",
    "turtle",
    "urchin",
    "vulture",
    "whale",
    "xenops",
    "yak",
    "zebra",
    "azure",
    "beige",
    "coral",
    "denim",
    "emerald",
    "fuchsia",
    "gold",
    "hazel",
    "indigo",
    "jade",
    "khaki",
    "lavender",
    "magenta",
    "navy",
    "ochre",
    "peach",
    "quartz",
    "ruby",
    "sapphire",
    "teal",
    "umber",
    "violet",
    "white",
    "xanadu",
    "yellow",
    "amber",
    "bronze",
    "copper",
    "diamond",
    "ebony",
    "flint",
    "granite",
    "heliotrope",
    "ivory",
    "jasper",
    "kaolin",
    "limestone",
    "marble",
    "nickel",
    "obsidian",
    "platinum",
    "quartzite",
    "rhodonite",
    "silver",
    "topaz",
    "ultramarine",
    "vermilion",
    "wolfram",
    "xenotime",
    "yellowish",
    "zircon",
    "fdsq", 
    "jklm", 
    "qsdf", 
    "eureka", 
    "Perseverance", 
    "reussite"
];


const phrases = [
    "Bonjour tout le monde",
    "Je suis étudiant",
    "J'aime le chocolat",
    "Il fait beau aujourd'hui",
    "La vie est belle",
    "Apprenons à coder",
    "Les chats sont mignons",
    "Vive la musique",
    "Tu as raison",
    "L'école est importante",
    "Je lis un livre",
    "Il court vite",
    "Elle aime danser",
    "Nous jouons au football",
    "Vous êtes formidables",
    "Ils regardent un film",
    "Il pleut dehors",
    "J'écoute de la musique",
    "Les oiseaux chantent",
    "L'ordinateur est utile",
    "C'est une belle journée",
    "Elle aime cuisiner",
    "Il écrit bien",
    "Je travaille dur",
    "Elle est gentille",
    "Nous sommes contents",
    "Ils voyagent souvent",
    "Le chien aboie",
    "Il fait froid",
    "Je suis heureux",
    "Le soleil brille",
    "La nuit tombe",
    "Je parle français",
    "Il est tard",
    "Nous mangeons ensemble",
    "Vous partez quand",
    "Ils arrivent bientôt",
    "La porte est ouverte",
    "Il est malade",
    "Je suis fatigué",
    "Elle est en retard",
    "Nous attendons l'autobus",
    "Vous aimez voyager",
    "Ils étudient bien",
    "Le chat dort",
    "Il neige beaucoup",
    "Je bois du café",
    "Elle sourit souvent",
    "Nous aimons lire",
    "Vous écoutez la radio",
    "Ils dessinent bien"
];


// Fonction pour choisir aléatoirement 10 mots dans une liste
function choisirMotsAleatoires(listWords, nombreMots) {
    // Vérifier si la liste est vide ou si le nombre de mots demandé est supérieur à la taille de la liste
    if (listWords.length === 0 || nombreMots > listWords.length) {
      return []; // Liste vide si conditions non respectées
    }
  
    // Initialiser un tableau vide pour stocker les mots choisis
    const motsChoisis = [];
  
    // Parcourir la liste des mots
    for (let i = 0; i < listWords.length; i++) {
      // Générer un nombre aléatoire entre 0 et la taille actuelle de la liste (moins les mots déjà choisis)
      const indiceAleatoire = Math.floor(Math.random() * (listWords.length - motsChoisis.length));
  
      // Ajouter le mot aléatoire à la liste des mots choisis
      motsChoisis.push(listWords[indiceAleatoire]);
  
      // Retirer le mot choisi de la liste originale pour éviter les doublons
      listWords.splice(indiceAleatoire, 1);
    }
  
    // Retourner la liste des 10 mots choisis aléatoirement
    return motsChoisis.slice(0, nombreMots);
  }
console.log(choisirMotsAleatoires(words, 10) );

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = choisirMotsAleatoires(words, 10);
const listePhrases = choisirMotsAleatoires(phrases, 10);