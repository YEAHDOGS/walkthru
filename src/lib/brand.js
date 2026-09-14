// ============================================================
// Walkthru — brand config
// Rename the product by editing PRODUCT_NAME here. Single edit.
// ============================================================

export const PRODUCT_NAME = 'Walkthru by DOGS';

export const CONTACT_EMAIL = 'hello@dogs.red';

export const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'I want a video for my space'
)}`;

export const TIERS = [
  {
    name: 'The Teaser',
    price: 99,
    tag: '30-second AI video',
    points: [
      '30-second video from your listing photos',
      'Music and motion, listing-ready',
      'Delivered in 48 hours',
    ],
  },
  {
    name: 'The Walkthrough',
    price: 299,
    tag: '60-second cinematic video',
    points: [
      '60-second cinematic tour',
      'Vertical cuts for TikTok, Reels & Shorts',
      'Everything in The Teaser',
      'Delivered in 72 hours',
    ],
  },
  {
    name: 'The 3D Tour',
    price: 599,
    tag: 'Video + interactive 3D',
    points: [
      'Interactive, walkable 3D model of your space',
      'Embedded on your listing',
      'Everything in The Walkthrough',
    ],
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Send your photos',
    body: 'Listing photos you already have. That is the whole shoot.',
  },
  {
    n: '02',
    title: 'We build your video',
    body: 'Motion, music, and story — cut for every feed.',
  },
  {
    n: '03',
    title: 'Watch the bookings come in',
    body: 'Drop it on your listing. Count the clicks.',
  },
];
