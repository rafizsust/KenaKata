const products = [
  {
    id: 1,
    name: 'Stylish Sneakers',
    condition: 'New',
    category: 'Fashion',
    image: require('./assets/product_images/sneaker-pink.jpg'),
    rating: 3.2,
    totalRatings: 9,
    discount: 55,
    previousPrice: 120,
    currentPrice: 102,
    // color:'red',
    colors: [
      { name: 'Pink', imgURL: require('./assets/product_images/sneaker-pink.jpg'), count: [4, 2, 1, 0] },
      { name: 'Blue', imgURL: require('./assets/product_images/sneaker-blue.webp'), count: [3, 1, 2, 0] },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: [
      'Comfortable fit for all-day wear',
      'High-quality imported materials',
      'Sleek and stylish design',
      'Durable construction for long-lasting use',
      'Versatile footwear for various occasions',
      'Enhanced traction for better grip',
      'Cushioned insole for added comfort',
      'Available in multiple colors and sizes',
    ],
    price: 102,
    deliveryAddress: '1234 Main Street, City, State',
    inStock: true,
    totalSold: 105,
    quantity: 10,
    return: 30,
    link:"link 1"
  },
  {
    id: 2,
    name: 'Classic T-Shirt',
    condition: 'New',
    category: 'Fashion',
    image: require('./assets/product_images/classic-t-shirt-black.webp'),
    rating: 4.7,
    totalRatings: 18,
    discount: 50,
    previousPrice: 29.99,
    currentPrice: 23.99,
    colors: [
      { name: 'Black', imgURL: require('./assets/product_images/classic-t-shirt-black.webp'), count: [12, 8, 5, 2] },
      { name: 'White', imgURL: require('./assets/product_images/classic-t-shirt-white.jpg'), count: [15, 10, 7, 3] },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: [
      'Classic and comfortable t-shirt for everyday wear',
      'Made from soft and breathable fabric',
      'Available in various colors and sizes',
      'Perfect for casual or layered outfits',
      'Machine washable for easy maintenance',
    ],
    price: 23.99,
    deliveryAddress: '5678 Elm Street, City, State',
    inStock: true,
    totalSold: 78,
    quantity: 15,
    return: 14,
    link:"link 1"
  },
  {
    id: 3,
    name: 'Smart Watch',
    condition: 'New',
    category: 'Electronics',
    image:  require('./assets/product_images/smart-watch-black.jpg'),
    rating: 3.4,
    totalRatings: 27,
    discount: 10,
    previousPrice: 99.99,
    currentPrice: 89.99,
    colors: [
      { name: 'Black', imgURL: require('./assets/product_images/smart-watch-black.jpg'), count: 8 },
      { name: 'Silver', imgURL: require('./assets/product_images/smart-watch-silver.webp'), count: 5 },
    ],
    sizes: [],
    description: [
      'Smart watch with advanced features and stylish design',
      'Connects with your smartphone for notifications and tracking',
      'Tracks your activity, heart rate, sleep patterns, and more',
      'Waterproof and durable construction',
      'Long-lasting battery life',
    ],
    price: 89.99,
    deliveryAddress: '9012 Oak Avenue, City, State',
    inStock: true,
    totalSold: 187,
    quantity: 15,
    return: 30,
    link:"link 1"
  },
  {
    id: 4,
    name: 'Sports Backpack',
    condition: 'New',
    category: 'Sports',
    image: require('./assets/product_images/sports-backpack-gray.webp'),
    rating: 4.8,
    totalRatings: 35,
    discount: 25,
    previousPrice: 49.99,
    currentPrice: 37.49,
    colors: [
      { name: 'Gray', imgURL: require('./assets/product_images/sports-backpack-gray.webp'), count: 4 },
      { name: 'Black', imgURL: require('./assets/product_images/sports-backpack-black.webp'), count: 10 },
    ],
    sizes: [],
    description: [
      'Spacious sports backpack for all your gear',
      'Durable and water-resistant material',
      'Multiple compartments for organized storage',
      'Adjustable straps for a comfortable fit',
      'Ideal for gym, travel, or outdoor activities',
    ],
    price: 37.49,
    deliveryAddress: '3456 Pine Street, City, State',
    inStock: true,
    totalSold: 92,
    quantity: 12,
    return: 20,
    link:"link 1"
  },
  {
    id: 5,
    name: 'Chocolate',
    condition: 'New',
    category: 'Food',
    image: require('./assets/product_images/dark-chocolate.webp'),
    rating: 2.5,
    totalRatings: 20,
    discount: 10,
    previousPrice: 24.99,
    currentPrice: 22.49,
    colors: [
      { name: 'Dark Chocolate', imgURL: require('./assets/product_images/dark-chocolate.webp'), count: 15 },
      { name: 'Milk Chocolate', imgURL: require('./assets/product_images/milk-chocolate.webp'), count: 4 },
    ],
    sizes: [],
    description: [
      'Premium assortment of delicious chocolates',
      'Made with high-quality ingredients',
      'Perfect for gifting or self-indulgence',
      'Includes a variety of flavors and fillings',
      'Individually wrapped for freshness',
    ],
    price: 22.49,
    deliveryAddress: '1234 Oak Street, City, State',
    inStock: true,
    totalSold: 50,
    quantity: 20,
    return: 10,
    link: "link 2"
  },
  {
    id: 6,
    name: 'Kids Bicycle',
    condition: 'New',
    category: 'Kids',
    image: require('./assets/product_images/kids-bicycle-blue.webp'),
    rating: 4.5,
    totalRatings: 20,
    discount: 15,
    previousPrice: 99.99,
    currentPrice: 84.99,
    colors: [
      { name: 'Blue', imgURL: require('./assets/product_images/kids-bicycle-blue.webp'), count: [5, 3, 2, 1] },
      { name: 'Pink', imgURL: require('./assets/product_images/kids-bicycle-pink.webp'), count: [4, 2, 1, 0] },
    ],
    sizes: ['12-inch', '16-inch', '20-inch'],
    description: [
      'Sturdy and durable kids bicycle',
      'Available in multiple sizes and colors',
      'Adjustable seat and handlebars',
      'Suitable for kids aged 3-8 years',
      'Ideal for outdoor fun and exercise',
    ],
    price: 84.99,
    deliveryAddress: '1234 Elm Street, City, State',
    inStock: true,
    totalSold: 45,
    quantity: 10,
    return: 10,
    link: 'link 1',
  },
  {
    id: 8,
    name: 'Music Player',
    condition: 'New',
    category: 'Music',
    image: require('./assets/product_images/music-player-silver.jpg'),
    rating: 5,
    totalRatings: 28,
    discount: 10,
    previousPrice: 79.99,
    currentPrice: 71.99,
    colors: [
      { name: 'Silver', imgURL: require('./assets/product_images/music-player-silver.jpg'), count: 3 },
      { name: 'Black', imgURL: require('./assets/product_images/music-player-black.webp'), count: 2 },
    ],
    sizes: [],
    description: [
      'High-quality music player with built-in speakers',
      'Supports various audio formats',
      'Large storage capacity for your favorite songs',
      'User-friendly interface and easy navigation',
      'Ideal for music enthusiasts on the go',
    ],
    price: 71.99,
    deliveryAddress: '1234 Main Street, City, State',
    inStock: true,
    totalSold: 56,
    quantity: 10,
    return: 5,
    link: 'link 1',
  },
  {
    id: 9,
    name: 'Pet Bed',
    condition: 'New',
    category: 'Pet',
    image: require('./assets/product_images/pet-bed-pink.webp'),
    rating: 4.2,
    totalRatings: 16,
    discount: 15,
    previousPrice: 39.99,
    currentPrice: 33.99,
    colors: [
      { name: 'Pink', imgURL: require('./assets/product_images/pet-bed-pink.webp'), count: [3, 1, 0, 0] },
      { name: 'Blue', imgURL: require('./assets/product_images/pet-bed-blue.avif'),count: [5, 2, 1, 0] },
    ],
    sizes: ['Small', 'Medium', 'Large'],
    description: [
      'Comfortable and cozy pet bed for dogs and cats',
      'Soft and plush fabric for a relaxing sleep',
      'Removable and washable cover for easy maintenance',
      'Available in different sizes and colors',
      'Perfect for pets of all sizes',
    ],
    price: 33.99,
    deliveryAddress: '5678 Elm Street, City, State',
    inStock: true,
    totalSold: 42,
    quantity: 8,
    return: 10,
    link: 'link 2',
  },
  {
    id: 10,
    name: 'Kitchen Blender',
    condition: 'New',
    category: 'Home and Kitchen',
    image: require('./assets/product_images/kitchen-blender.jpg'),
    rating: 4.7,
    totalRatings: 45,
    discount: 20,
    previousPrice: 89.99,
    currentPrice: 71.99,
    colors: [{ name: 'Silver', imgURL: require('./assets/product_images/kitchen-blender.jpg'), count:9}],
    sizes: [],
    description: [
      'Powerful and versatile blender for kitchen tasks',
      'Multiple speed settings and pulse function',
      'Durable stainless steel blades for efficient blending',
      'Easy to clean and maintain',
      'Ideal for making smoothies, soups, and more',
    ],
    price: 71.99,
    deliveryAddress: '9012 Oak Street, City, State',
    inStock: true,
    totalSold: 73,
    quantity: 12,
    return: 7,
    link: 'link 3',
  },
  {
    id: 11,
    name: 'Wireless Headphones',
    condition: 'New',
    category: 'Electronics',
    image: require('./assets/product_images/wireless-headphone-black.jpg'),
    rating: 4.5,
    totalRatings: 62,
    discount: 15,
    previousPrice: 79.99,
    currentPrice: 67.99,
    colors: [{ name: 'Black', imgURL: require('./assets/product_images/wireless-headphone-black.jpg'), count: 15 }],
    sizes: [],
    description: [
      'Wireless headphones with high-quality sound',
      'Bluetooth connectivity for easy pairing',
      'Comfortable over-ear design with adjustable headband',
      'Built-in microphone for hands-free calls',
      'Long battery life for extended use',
    ],
    price: 67.99,
    deliveryAddress: '3456 Pine Street, City, State',
    inStock: true,
    totalSold: 102,
    quantity: 20,
    return: 15,
    link: 'link 4',
  },
  {
    id: 12,
    name: 'Portable Power Bank',
    condition: 'New',
    category: 'Electronics',
    image: require('./assets/product_images/power-bank-black.jpg'),
    rating: 4.2,
    totalRatings: 28,
    discount: 10,
    previousPrice: 39.99,
    currentPrice: 35.99,
    colors: [
      { name: 'Black', imgURL: require('./assets/product_images/power-bank-black.jpg'), count: 12 },
    ],
    sizes: [],
    description: [
      'High-capacity portable power bank for charging devices on the go',
      'Compatible with smartphones, tablets, and other USB-powered devices',
      'Multiple charging ports for simultaneous charging',
      'Compact and lightweight design',
      'LED indicators to show remaining power',
    ],
    price: 35.99,
    deliveryAddress: '5678 Elm Street, City, State',
    inStock: true,
    totalSold: 78,
    quantity: 15,
    return: 10,
    link: 'link 5',
  },
  
];

export default products;