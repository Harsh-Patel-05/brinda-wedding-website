/** Editable packages & prices — update amounts and features easily */
export const packages = [
  {
    id: 'silver',
    name: 'Silver',
    price: '₹45,000', // TODO: update pricing
    priceNote: 'Starting from',
    description: 'A solid option for smaller weddings or a single main event.',
    popular: false,
    features: [
      '1 Photographer',
      'Up to 8 hours coverage',
      '300+ edited photos',
      'Private online gallery',
      'Short highlight reel (1–2 min)',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '₹85,000', // TODO: update pricing
    priceNote: 'Starting from',
    description: 'Our most booked package for a full wedding day with photo and film.',
    popular: true,
    features: [
      '2 Photographers',
      'Full-day coverage',
      '600+ edited photos',
      'Cinematic film (4–6 min)',
      'Private online gallery',
      'Drone highlights (if allowed)*',
      'Album design credit',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '₹1,45,000', // TODO: update pricing
    priceNote: 'Starting from',
    description: 'Best for multi-day weddings where you want photo, film, and keepakes covered.',
    popular: false,
    features: [
      'Photo + film crew',
      'Multi-day coverage',
      '1000+ edited photos',
      'Feature film + teaser',
      'Drone coverage (if allowed)*',
      'Premium wedding album',
      'Same-day edit option*',
      'Priority editing timeline',
    ],
  },
]
