import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie","La Galerie","/pages/galerie.html",[]),
    new Route("/signin","Connexions","/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js",),
    new Route("/signup","Inscrption","/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
    new Route("/account","Mon compte","/pages/auth/account.html",["client","admin"]),
    new Route("/editPassword","changement mot de passe","/pages/auth/editPassword.html",["client","admin"]),
    new Route("/allResa","Vos réservation","/pages/reservations/allResa.html",["client"]),
    new Route("/reserver","Réserver","/pages/reservations/reserver.html",["client"]),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";