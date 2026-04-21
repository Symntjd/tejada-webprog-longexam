import leathermanImg from './img/products/leatherman.jpg';
import tentImg from './img/products/tent.jpg';
import hikingShoesImg from './img/products/hiking-shoes.jpg';
import cookSetImg from './img/products/cook-set.jpg';
import sleepingBagImg from './img/products/sleeping-bag.jpg';
import backpackImg from './img/products/backpack.jpg';
import lanternImg from './img/products/lantern.jpg';
import foldingChairImg from './img/products/folding-chair.jpg';

const products = [
  {
    name: 'leatherman-multi-tool',
    title: 'Leatherman Trail Multi-Tool',
    category: 'Tools',
    price: 'PHP 3,499',
    stock: 'In stock',
    image: leathermanImg,
    content: [
      'A rugged multi-tool designed for outdoor survival, campsite setup, and quick repairs.',
      'Built with durable steel components including pliers, knife, screwdrivers, and more.',
      'Ideal for campers who want a compact all-in-one tool for any situation outdoors.',
    ],
  },
  {
    name: 'four-person-dome-tent',
    title: 'NorthFern 4-Person Dome Tent',
    category: 'Shelter',
    price: 'PHP 4,899',
    stock: 'In stock',
    image: tentImg,
    content: [
      'A weather-resistant dome tent built for comfortable overnight camping.',
      'Lightweight and easy to assemble, perfect for weekend outdoor trips.',
      'Provides spacious interior for small groups or family camping.',
    ],
  },
  {
    name: 'waterproof-hiking-shoes',
    title: 'NorthFern TrailGrip Hiking Shoes',
    category: 'Footwear',
    price: 'PHP 2,799',
    stock: 'In stock',
    image: hikingShoesImg,
    content: [
      'Durable hiking shoes built for traction, comfort, and stability.',
      'Waterproof design keeps your feet dry on wet and muddy trails.',
      'Perfect for both beginner hikers and experienced trekkers.',
    ],
  },
  {
    name: 'camp-cook-set',
    title: 'NorthFern Camp Cook Set',
    category: 'Cooking',
    price: 'PHP 1,699',
    stock: 'Low stock',
    image: cookSetImg,
    content: [
      'A lightweight cooking set designed for easy outdoor meal preparation.',
      'Includes essential pots and utensils for campsite cooking.',
      'Compact and travel-friendly for efficient packing.',
    ],
  },
  {
    name: 'insulated-sleeping-bag',
    title: 'NorthFern Insulated Sleeping Bag',
    category: 'Sleeping Gear',
    price: 'PHP 2,299',
    stock: 'In stock',
    image: sleepingBagImg,
    content: [
      'Provides warmth and comfort during cold outdoor nights.',
      'Soft interior padding retains body heat effectively.',
      'Ideal for camping in cooler climates or high-altitude areas.',
    ],
  },
  {
    name: 'trekking-backpack-45l',
    title: 'NorthFern Explorer 45L Backpack',
    category: 'Bags',
    price: 'PHP 3,199',
    stock: 'In stock',
    image: backpackImg,
    content: [
      'Spacious backpack designed for long hikes and overnight trips.',
      'Multiple compartments for organized storage.',
      'Comfortable straps and back support for extended use.',
    ],
  },
  {
    name: 'rechargeable-camping-lantern',
    title: 'NorthFern Rechargeable Lantern',
    category: 'Lighting',
    price: 'PHP 1,249',
    stock: 'In stock',
    image: lanternImg,
    content: [
      'Bright and energy-efficient lantern for campsite lighting.',
      'Rechargeable battery for long-lasting use.',
      'Perfect for night activities and outdoor safety.',
    ],
  },
  {
    name: 'portable-folding-chair',
    title: 'NorthFern Folding Camp Chair',
    category: 'Camp Furniture',
    price: 'PHP 899',
    stock: 'In stock',
    image: foldingChairImg,
    content: [
      'Lightweight folding chair for outdoor comfort.',
      'Easy to carry and quick to set up.',
      'Perfect for resting by the campfire or lakeside.',
    ],
  },
];

export default products;