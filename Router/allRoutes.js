import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie","La Galerie","/pages/galerie.html"),
    new Route("/signin","Connexions","/pages/auth/signin.html","/js/auth/signin.js"),
    new Route("/signup","Inscrption","/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account","Mon compte","/pages/auth/account.html"),
    new Route("/editPassword","changement mot de passe","/pages/auth/editPassword.html"),
    new Route("/allResa","Vos réservation","/pages/reservations/allResa.html"),
    new Route("/reserver","Réserver","/pages/reservations/reserver.html"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";