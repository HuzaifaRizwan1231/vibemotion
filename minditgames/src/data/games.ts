export interface GameScreenshot {
  src: string
  alt: string
}

export interface Game {
  id: number
  slug: string
  title: string
  tagline: string
  category: string
  description: string
  features: string[]
  /** Square app icon — placeholder path, swap with real asset later */
  icon: string
  /** Wide feature/banner graphic shown on the card */
  banner: string
  /** In-game screenshots, 2–4 recommended */
  screenshots: GameScreenshot[]
  rating: number
  ratingCount: string
  downloads: string
  playStoreUrl: string
  appStoreUrl: string
  accent: 'blue' | 'orange'
  isNew?: boolean
}

export const games: Game[] = [
  {
    id: 1,
    slug: 'grocery-sort-shopping-puzzle',
    title: 'Grocery Sort: Shopping Puzzle',
    tagline: 'Sort groceries, organize shelves, solve puzzles & build your supermarket!',
    category: 'Puzzle',
    description:
      'A fun and addictive sorting puzzle game where every shelf is waiting to be organized. Match items, sort products, and solve relaxing yet satisfying challenges designed for players of all ages — combining strategy, organization, and hundreds of engaging levels.',
    features: [
      'Hundreds of engaging sort puzzle levels with increasing difficulty',
      'Relaxing sorting gameplay that blends organization & strategy',
      'Clever brain puzzle and logic puzzle mechanics',
      'Satisfying matching and shelf-organizing gameplay loop',
      'Fresh layouts and creative objectives in every level',
    ],
    icon: '/images/games/grocery-sort/icon.png',
    banner: '/images/games/grocery-sort/feature-graphic.jpg',
    screenshots: [
      { src: '/images/games/grocery-sort/screenshot-1.jpg', alt: 'Grocery Sort gameplay screenshot 1' },
      { src: '/images/games/grocery-sort/screenshot-2.jpg', alt: 'Grocery Sort gameplay screenshot 2' },
      { src: '/images/games/grocery-sort/screenshot-3.jpg', alt: 'Grocery Sort gameplay screenshot 3' },
      { src: '/images/games/grocery-sort/screenshot-4.jpg', alt: 'Grocery Sort gameplay screenshot 4' },
    ],
    rating: 4.7,
    ratingCount: '9.8K',
    downloads: '1M+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.minditgames.grocery.sort.shopping.puzzle',
    appStoreUrl: '#',
    accent: 'orange',
    isNew: true,
  },
  {
    id: 2,
    slug: 'home-cleaning-asmr-game',
    title: 'Home Cleaning ASMR Game',
    tagline: 'Enjoy ASMR house cleaning — clean, fix & decorate everything in cleaning ASMR',
    category: 'Simulation',
    description:
      'A relaxing cleaning simulation focused on oddly satisfying restoration. Wash, wipe, and restore dirty objects to a sparkling shine, peel away old wallpaper, repair furniture, and slowly transform every room back to life with calming ASMR sound design.',
    features: [
      'Repair and upgrade interiors — roofs, walls, fireplaces & more',
      'Unlock new furniture and design styles as you progress',
      'Soft, calming ASMR sound effects with every tap and swipe',
      'Dozens of rooms to restore from messy to magnificent',
      'Relaxing, pressure-free pacing — play freely, your way',
    ],
    icon: '/images/games/home-cleaning-asmr/icon.png',
    banner: '/images/games/home-cleaning-asmr/feature-graphic.jpg',
    screenshots: [
      { src: '/images/games/home-cleaning-asmr/screenshot-1.jpg', alt: 'Home Cleaning ASMR gameplay screenshot 1' },
      { src: '/images/games/home-cleaning-asmr/screenshot-2.jpg', alt: 'Home Cleaning ASMR gameplay screenshot 2' },
      { src: '/images/games/home-cleaning-asmr/screenshot-3.jpg', alt: 'Home Cleaning ASMR gameplay screenshot 3' },
      { src: '/images/games/home-cleaning-asmr/screenshot-4.jpg', alt: 'Home Cleaning ASMR gameplay screenshot 4' },
    ],
    rating: 4.6,
    ratingCount: '6.2K',
    downloads: '500K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.minditgames.cleaning.game',
    appStoreUrl: '#',
    accent: 'blue',
  },
]
