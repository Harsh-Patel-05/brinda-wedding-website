import { asset } from '@/lib/utils'

/** Editable services — images from @brinda.wedding portfolio */
export const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    short: 'Full coverage from getting-ready to the last farewell.',
    description:
      'We cover your wedding day end to end — rituals, family portraits, guest moments, and the quiet in-between hours. You get a complete story of the day, not just a few set poses.',
    icon: 'Camera',
    image: asset('/portfolio/archi-brijesh.jpg'),
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Shoots',
    short: 'Relaxed couple sessions before the big day.',
    description:
      'A pre-wedding shoot is a chance to get comfortable in front of the camera. We keep direction light, choose a location that feels like you, and focus on natural chemistry.',
    icon: 'Heart',
    image: asset('/portfolio/mukesh-hima-1.jpg'),
  },
  {
    id: 'candid',
    title: 'Candid Photography',
    short: 'Unposed moments as they actually happen.',
    description:
      'Candid work is about noticing — a grandmother’s blessing, friends teasing the groom, a tear during the pheras. These frames often become the ones families love most.',
    icon: 'Aperture',
    image: asset('/portfolio/dimple-rajnit.jpg'),
  },
  {
    id: 'films',
    title: 'Cinematic Wedding Films',
    short: 'A short film of your day you can watch again and again.',
    description:
      'We craft highlight films with music, pacing, and emotion. Perfect for sharing with family who couldn’t attend, or for reliving the day on anniversaries.',
    icon: 'Film',
    image: asset('/portfolio/visweta-wedding.jpg'),
  },
  {
    id: 'drone',
    title: 'Drone Coverage',
    short: 'Beautiful aerial views of the venue and baraat.',
    description:
      'When the venue allows it, drone shots add a grand view of your décor, location, and celebrations. We follow local rules and only fly where it’s safe and permitted.',
    icon: 'Plane',
    image: asset('/portfolio/vidhi-krupal.jpg'),
  },
  {
    id: 'albums',
    title: 'Albums & Prints',
    short: 'Printed memories you can keep at home.',
    description:
      'Alongside your online gallery, we can design a wedding album and fine prints — something physical for your parents, and for you to open years later.',
    icon: 'BookOpen',
    image: asset('/portfolio/mukesh-hima-2.jpg'),
  },
]
