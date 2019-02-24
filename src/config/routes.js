import Home from '../components/screen/Home';
import Place from '../components/screen/Place';
import Rooms from '../components/screen/Rooms'
import Room from '../components/screen/Room'

const routes = [
  {
    textMenu: "Acceuil",
    url: "/acceuil",
    component: Home,
      seo: {
      title: 'Le Mas Bellane, maison d\'hôtes et agriculture biologique au coeur de la Drôme',
      description: ''
    }
  },
  {
    textMenu: "Le Lieu",
    url: "/le-lieu",
    component: Place,
    seo: {
      title: '',
      description: '',
    },
  },
  {
    textMenu: "Les Chambres",
    url: "/les-chambres",
    component: Rooms,
    seo: {
      title: '',
      description: '',
    },
    routes: [
      {
        textMenu: "La Chambre de l'Eau",
        url: "/les-chambres/la-chambre-de-l-eau",
        component: Room
      },
      {
        textMenu: "La Chambre du Feu",
        url: "/les-chambres/la-chambre-du-feu",
        component: Room
      },
      {
        textMenu: "La Chambre de la Terre",
        url: "/les-chambres/la-chambre-de-la-terre",
        component: Room
      }
    ]
  },
  // {
  // textMenu:  
  // url: "/les-annexes",
  //   component: Annex,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  //   routes: [
  //     {
  // textMenu:      
  // url: "/les-annexes/l-espace",
  //       component: Space
  //     },
  //     {
  // textMenu:      
  // url: "/les-annexes/la-cuisine",
  //       component: Kitchen
  //     },
  //   ]
  // },
  // {
  // textMenu:  
  // url: "/les-tarifs-et-modalites",
  //   component: Rate,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/la-table-d-hotes",
  //   component: HosteTable,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/notre-histoire",
  //   component: HosteTable,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/l-ecotourisme-au-Mas-Bellane",
  //   component: Ecotourisme,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/les-alentours",
  //   component: Around,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/notre-livre-d-or",
  //   component: GoldenBook,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
  // {
  // textMenu:  
  // url: "/contactez-nous",
  //   component: Contact,
  //   seo: {
  //     title: '',
  //     description: '',
  //   },
  // },
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
