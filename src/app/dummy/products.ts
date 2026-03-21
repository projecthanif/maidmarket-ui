import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-001",
    title: "Wireless Bluetooth Headphones",
    description:
      "High-quality over-ear headphones with noise cancellation and 20-hour battery life.",
    price: 59.99,
    images: [
      {
        url: "https://example.com/images/headphones-1.jpg",
        alt: "Black wireless headphones",
      },
      {
        url: "https://example.com/images/headphones-2.jpg",
        alt: "Headphones side view",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/headphones-demo.mp4",
        alt: "Headphones demo video",
      },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-002",
    title: "Smart Watch Series 7",
    description:
      "Track your fitness, monitor heart rate, and stay connected with this sleek smartwatch.",
    price: 129.99,
    images: [
      {
        url: "https://example.com/images/smartwatch-1.jpg",
        alt: "Smartwatch front view",
      },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-003",
    title: "Men's Casual Sneakers",
    description: "Comfortable and stylish sneakers suitable for everyday wear.",
    price: 39.5,
    images: [
      {
        url: "https://example.com/images/sneakers-1.jpg",
        alt: "White casual sneakers",
      },
      {
        url: "https://example.com/images/sneakers-2.jpg",
        alt: "Sneakers top view",
      },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-004",
    title: "Office Ergonomic Chair",
    description:
      "Adjustable ergonomic chair with lumbar support for long working hours.",
    price: 89.0,
    images: [
      {
        url: "https://example.com/images/chair-1.jpg",
        alt: "Ergonomic office chair",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/chair-setup.mp4",
        alt: "Chair setup guide",
      },
    ],
    category: {
      id: "cat-003",
      name: "Furniture",
      description: "Home and office furniture",
    },
  },
  {
    id: "prod-005",
    title: "Stainless Steel Water Bottle",
    description:
      "Insulated water bottle that keeps drinks cold for 24 hours and hot for 12 hours.",
    price: 15.75,
    images: [
      {
        url: "https://example.com/images/bottle-1.jpg",
        alt: "Silver water bottle",
      },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-006",
    title: "Portable Power Bank 20000mAh",
    description: "High-capacity power bank with fast charging support.",
    price: 25.99,
    images: [
      { url: "https://example.com/images/powerbank.jpg", alt: "Power bank" },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-007",
    title: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches.",
    price: 45.0,
    images: [
      {
        url: "https://example.com/images/keyboard.jpg",
        alt: "Mechanical keyboard",
      },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-008",
    title: "4K Ultra HD Smart TV 55-inch",
    description: "Crisp visuals with built-in streaming apps.",
    price: 399.99,
    images: [{ url: "https://example.com/images/tv.jpg", alt: "Smart TV" }],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-009",
    title: "Leather Handbag",
    description: "Premium leather handbag with spacious compartments.",
    price: 60.0,
    images: [
      { url: "https://example.com/images/handbag.jpg", alt: "Leather handbag" },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-010",
    title: "Men's Denim Jacket",
    description: "Classic denim jacket with modern fit.",
    price: 35.5,
    images: [
      { url: "https://example.com/images/jacket.jpg", alt: "Denim jacket" },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-011",
    title: "Running Sports Shoes",
    description: "Lightweight running shoes designed for comfort.",
    price: 50.0,
    images: [
      {
        url: "https://example.com/images/runningshoes.jpg",
        alt: "Running shoes",
      },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-012",
    title: "Wooden Coffee Table",
    description: "Elegant wooden table perfect for living rooms.",
    price: 120.0,
    images: [
      {
        url: "https://example.com/images/coffeetable.jpg",
        alt: "Coffee table",
      },
    ],
    category: {
      id: "cat-003",
      name: "Furniture",
      description: "Home and office furniture",
    },
  },
  {
    id: "prod-013",
    title: "LED Desk Lamp",
    description: "Energy-efficient desk lamp with adjustable brightness.",
    price: 18.75,
    images: [
      { url: "https://example.com/images/desklamp.jpg", alt: "Desk lamp" },
    ],
    category: {
      id: "cat-003",
      name: "Furniture",
      description: "Home and office furniture",
    },
  },
  {
    id: "prod-014",
    title: "Bookshelf Organizer",
    description: "Multi-layer bookshelf for home or office use.",
    price: 70.0,
    images: [
      { url: "https://example.com/images/bookshelf.jpg", alt: "Bookshelf" },
    ],
    category: {
      id: "cat-003",
      name: "Furniture",
      description: "Home and office furniture",
    },
  },
  {
    id: "prod-015",
    title: "Electric Kettle",
    description: "Fast boiling electric kettle with auto shut-off.",
    price: 22.0,
    images: [
      { url: "https://example.com/images/kettle.jpg", alt: "Electric kettle" },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-016",
    title: "Non-stick Cooking Pan",
    description: "Durable non-stick pan for everyday cooking.",
    price: 19.99,
    images: [{ url: "https://example.com/images/pan.jpg", alt: "Cooking pan" }],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-017",
    title: "Vacuum Cleaner",
    description: "Compact vacuum cleaner with powerful suction.",
    price: 85.0,
    images: [
      { url: "https://example.com/images/vacuum.jpg", alt: "Vacuum cleaner" },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-018",
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 30.0,
    images: [
      {
        url: "https://example.com/images/speaker.jpg",
        alt: "Bluetooth speaker",
      },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-019",
    title: "Fitness Yoga Mat",
    description: "Comfortable non-slip yoga mat for workouts.",
    price: 14.5,
    images: [
      { url: "https://example.com/images/yogamat.jpg", alt: "Yoga mat" },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-020",
    title: "Digital Alarm Clock",
    description: "LED display clock with snooze function.",
    price: 12.99,
    images: [
      { url: "https://example.com/images/alarmclock.jpg", alt: "Alarm clock" },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
  {
    id: "prod-021",
    title: "Men's Wrist Watch",
    description: "Elegant wrist watch with leather strap.",
    price: 27.5,
    images: [
      { url: "https://example.com/images/watch.jpg", alt: "Wrist watch" },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-022",
    title: "Office Backpack",
    description: "Durable backpack with laptop compartment.",
    price: 33.0,
    images: [
      { url: "https://example.com/images/backpack.jpg", alt: "Backpack" },
    ],
    category: {
      id: "cat-002",
      name: "Fashion",
      description: "Clothing and accessories",
    },
  },
  {
    id: "prod-023",
    title: "Air Fryer",
    description: "Healthy cooking with little to no oil.",
    price: 95.0,
    images: [
      { url: "https://example.com/images/airfryer.jpg", alt: "Air fryer" },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-024",
    title: "Standing Fan",
    description: "Powerful cooling fan with adjustable height.",
    price: 40.0,
    images: [
      { url: "https://example.com/images/fan.jpg", alt: "Standing fan" },
    ],
    category: {
      id: "cat-004",
      name: "Lifestyle",
      description: "Everyday essentials",
    },
  },
  {
    id: "prod-025",
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life.",
    price: 10.99,
    images: [
      { url: "https://example.com/images/mouse.jpg", alt: "Wireless mouse" },
    ],
    category: {
      id: "cat-001",
      name: "Electronics",
      description: "Devices and gadgets",
    },
  },
];
