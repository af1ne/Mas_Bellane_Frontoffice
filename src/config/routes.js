import Home from '../components/Home';

const routes = [
  {
    textMenu: "Accueil",
    mainMenu: false,
    url: "/",
    component: Home,
    id: "cover",
    seo: {
      title:
        "Le Mas Bellane, maison d'hôtes et agriculture biologique au coeur de la Drôme",
      description: ""
    }
  },
  {
    textMenu: "Accueil",
    mainMenu: true,
    url: "/accueil",
    component: Home,
    id: "cover",
    seo: {
      title:
        "Le Mas Bellane, maison d'hôtes et agriculture biologique au coeur de la Drôme",
      description: ""
    }
  },
  {
    textMenu: "Le Lieu",
    mainMenu: true,
    url: "/le-lieu",
    component: Home,
    id: "place",
    seo: {
      title: "",
      description: ""
    }
  },
  {
    textMenu: "Les Chambres",
    mainMenu: true,
    url: "/les-chambres",
    component: Home,
    id: "rooms",
    seo: {
      title: "",
      description: ""
    }
  },
  // {
  //   textMenu: "La Chambre de l'Eau",
  //   mainMenu: false,
  //   url: "/les-chambres/la-chambre-de-l-eau",
  //   component: Room
  // },
  // {
  //   textMenu: "La Chambre du Feu",
  //   mainMenu: false,
  //   url: "/les-chambres/la-chambre-du-feu",
  //   component: Room
  // },
  // {
  //   textMenu: "La Chambre de la Terre",
  //   mainMenu: false,
  //   url: "/les-chambres/la-chambre-de-la-terre",
  //   component: Room
  // },
  {
    textMenu: "Les Annexes",
    mainMenu: true,
    url: "/les-annexes",
    component: Home,
    id: "annexes",
    seo: {
      title: "",
      description: ""
    }
    // routes: [
    //   {
    //     textMenu: 'L\'Espace',
    //     url: "/les-annexes/l-espace",
    //           component: Space,
    //   },
    //   {
    //     textMenu: 'La Cuisine',
    //     url: "/les-annexes/la-cuisine",
    //     component: Kitchen,
    //   },
    // ]
  },
  // {
  // textMenu:
  // url: "/les-tarifs-et-modalites",
  //   component: Rate,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  {
    textMenu: "La Table d'Hôtes",
    mainMenu: true,
    url: "/la-table-d-hotes",
    component: Home,
    id: "hostTable",
    seo: {
      title: "",
      description: ""
    }
  },
  {
    textMenu: "Notre Histoire",
    mainMenu: true,
    url: "/notre-histoire",
    component: Home,
    id: "ourHistory",
    seo: {
      title: "",
      description: ""
    }
  },
  {
    textMenu: "L'écotourisme",
    mainMenu: true,
    url: "/l-ecotourisme-au-Mas-Bellane",
    component: Home,
    id: "ecotourism",
    seo: {
      title: "",
      description: ""
    }
  },
  {
    textMenu: "Les Alentours",
    mainMenu: true,
    url: "/les-alentours",
    component: Home,
    id: "around",
    seo: {
      title: "",
      description: ""
    }
  },
  // {
  // textMenu:
  // url: "/notre-livre-d-or",
  //   component: GoldenBook,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  {
    textMenu: 'Contactez-nous',
    mainMenu: true,
    url: "/contactez-nous",
    component: Home,
    id: "contactUs",
    seo: {
      title: '',
      description: '',
    },
  },
  // {
  // textMenu:
  // url: '/mentions-legales/',
  //   component: LegalTerms,
  //   seo: {
  //     title: '📃 Mentions légales - Mas Bellane',
  //   },
  // },
  // {
  // textMenu:
  // url: "/reserver-votre-sejour-au-mas-bellane",
  //   component: Booking,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
];

// module.exports = routes;
export default routes;
