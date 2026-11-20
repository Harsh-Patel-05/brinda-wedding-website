import { asset } from '@/lib/utils'

/** Portfolio from @brinda.wedding — local copies in /public/portfolio */
export const portfolioCategories = [
  'All',
  'Wedding',
  'Pre-Wedding',
  'Engagement',
  'Candid',
  'Films',
]

export const portfolioItems = [
  {
    id: 1,
    title: 'Archi & Brijesh',
    category: 'Wedding',
    location: 'Gujarat',
    image: asset('/portfolio/archi-brijesh.jpg'),
    span: 'tall',
  },
  {
    id: 2,
    title: 'Mukesh & Hima · Pre-Wedding',
    category: 'Pre-Wedding',
    location: 'Rustic Villa',
    image: asset('/portfolio/mukesh-hima-1.jpg'),
    span: 'wide',
  },
  {
    id: 3,
    title: 'Vidhi & Krupal',
    category: 'Wedding',
    location: 'Gujarat',
    image: asset('/portfolio/vidhi-krupal.jpg'),
    span: 'normal',
  },
  {
    id: 4,
    title: 'Visweta Wedding',
    category: 'Wedding',
    location: 'Gujarat',
    image: asset('/portfolio/visweta-wedding.jpg'),
    span: 'tall',
  },
  {
    id: 5,
    title: 'Krupa & Jaimin · Film still',
    category: 'Films',
    location: 'Gujarat',
    image: asset('/portfolio/krupa-jaimin.jpg'),
    span: 'normal',
  },
  {
    id: 6,
    title: 'Mukesh & Hima · Soft light',
    category: 'Pre-Wedding',
    location: 'Rustic Villa',
    image: asset('/portfolio/mukesh-hima-2.jpg'),
    span: 'wide',
  },
  {
    id: 7,
    title: 'Het & Nency · Ring ceremony',
    category: 'Engagement',
    location: 'Gujarat',
    image: asset('/portfolio/het-nency.jpg'),
    span: 'normal',
  },
  {
    id: 8,
    title: 'Dimple & Rajnit',
    category: 'Candid',
    location: 'Gujarat',
    image: asset('/portfolio/dimple-rajnit.jpg'),
    span: 'tall',
  },
  {
    id: 9,
    title: 'Mukesh & Hima · Portraits',
    category: 'Candid',
    location: 'Rustic Villa',
    image: asset('/portfolio/mukesh-hima-3.jpg'),
    span: 'normal',
  },
  {
    id: 10,
    title: 'Archi & Brijesh · Highlight',
    category: 'Films',
    location: 'Gujarat',
    image: asset('/portfolio/archi-brijesh-film.jpg'),
    span: 'wide',
  },
  {
    id: 11,
    title: 'Mukesh & Hima · Evening',
    category: 'Pre-Wedding',
    location: 'Rustic Villa',
    image: asset('/portfolio/mukesh-hima-5.jpg'),
    span: 'normal',
  },
  {
    id: 12,
    title: 'Dimple & Rajnit · Film still',
    category: 'Films',
    location: 'Gujarat',
    image: asset('/portfolio/dimple-rajnit-film.jpg'),
    span: 'tall',
  },
]

export const featuredPortfolio = portfolioItems.slice(0, 8)
