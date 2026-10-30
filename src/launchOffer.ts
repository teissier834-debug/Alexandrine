// Passer enabled à false masque la section ET les prix promotionnels des fiches.
// Modifier ici les montants, horaires et conditions ; aucune date de fin n’a été fournie.
export const launchOffer = {
  enabled: true,
  title: 'Offre de lancement',
  subtitle: 'Nos îles se découvrent, les beaux moments se partagent.',
  currency: 'XPF',
  childLabel: 'Enfant de moins de 12 ans',
  offers: [
    { id: 'tahaa-journee', title: 'Journée Taha’a', adult: 13000, child: 6500, time: '8 h 30 – 16 h 30', group: '4 à 8 personnes', included: 'Ferme perlière, jardin de corail, vanilleraie, rhumerie et motu. Repas inclus.' },
    { id: 'tahaa-demi', title: 'Demi-journée Taha’a', adult: 8000, child: 4000, time: '8 h 30 – 12 h 30', group: '3 à 8 personnes', included: 'Deux activités au choix : ferme perlière, rhumerie, jardin de corail ou vanilleraie. Collation de fruits de saison.' },
    { id: 'raiatea', title: 'Demi-journée Raiatea', adult: 8000, child: 4000, time: '8 h 30 – 12 h 30', group: '3 à 8 personnes', included: 'Rivière de Faaroa, jardin botanique et marae Taputapuatea. Collation de fruits de saison.' },
  ],
  privateOffers: [
    { title: 'Privatisation à la journée', time: '8 h – 17 h', small: 50000, large: 80000, unit: 'par sortie à la journée', note: 'Destination et activités selon vos envies, à définir ensemble.' },
    { title: 'Privatisation en demi-journée', time: '8 h – 12 h ou 13 h – 17 h', small: 31000, large: 58000, unit: 'par sortie en demi-journée', note: 'Repas et collation non inclus. Destination et activités à définir ensemble.' },
  ],
};
export const formatPrice = (value: number) => new Intl.NumberFormat('fr-FR').format(value) + ' XPF';
export const activeOffer = (id: string) => launchOffer.enabled ? launchOffer.offers.find(o => o.id === id) : undefined;
