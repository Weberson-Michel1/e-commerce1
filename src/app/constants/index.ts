export const inclusions = [
  {
    title: 'Livraison offerte',
    description: 'Pour toute commande supérieur à 150€',
    icon: '/assets/icons/shipping.svg',
  },
  {
    title: 'Satisfait ou remboursé',
    description: 'Jusqu' + "' " + 'à 30 jours changer d' + "' " + 'avis',
    icon: '/assets/icons/dollar.svg',
  },
  {
    title: 'Service après vente',
    description: 'Disponible 24h/24, 7 jours/7 ',
    icon: '/assets/icons/support.svg',
  },
  {
    title: 'Méthodes de paiement fléxible',
    description: 'Carte de crédit, ApplePay, Paypal',
    icon: '/assets/icons/payment.svg',
  },
]

export const profileNavItems = [
  {
    title: 'Informations Personnelles',
    url: '/account',
    icon: '/assets/icons/user.svg',
  },
  {
    title: 'Mes Achats',
    url: '/account/purchases',
    icon: '/assets/icons/purchases.svg',
  },
  {
    title: 'Mes Commandes',
    url: '/account/orders',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Déconnexion',
    url: '/logout',
    icon: '/assets/icons/logout.svg',
  },
]

export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']
