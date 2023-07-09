import products from './data.js';

const orderData = [
  {
    user_id: 1,
    orders: [
      {
        id: 1,
        orderNumber: 'ORD123456',
        date: '2023-06-18',
        status: 'Delivered',
        items: [
          {
            id: 1,
            ...getProductById(1),
            quantity: 2,
          },
          {
            id: 2,
            ...getProductById(2),
            quantity: 1,
          },
        ],
        totalAmount: calculateTotalAmount([
          { id: 1, quantity: 2 },
          { id: 2, quantity: 1 },
        ]),
      },
      {
        id: 2,
        orderNumber: 'ORD654321',
        date: '2023-06-15',
        status: 'In Progress',
        items: [
          {
            id: 3,
            ...getProductById(3),
            quantity: 3,
          },
        ],
        totalAmount: calculateTotalAmount([{ id: 3, quantity: 3 }]),
      },
    ],
  },
  {
    user_id: 2,
    orders: [
      {
        id: 3,
        orderNumber: 'ORD789012',
        date: '2023-07-01',
        status: 'In Progress',
        items: [
          {
            id: 4,
            ...getProductById(4),
            quantity: 2,
          },
        ],
        totalAmount: calculateTotalAmount([{ id: 4, quantity: 2 }]),
      },
      {
        id: 4,
        orderNumber: 'ORD345678',
        date: '2023-06-29',
        status: 'Delivered',
        items: [
          {
            id: 2,
            ...getProductById(2),
            quantity: 1,
          },
          {
            id: 3,
            ...getProductById(3),
            quantity: 2,
          },
        ],
        totalAmount: calculateTotalAmount([
          { id: 2, quantity: 1 },
          { id: 3, quantity: 2 },
        ]),
      },
    ],
  },
  {
    user_id: 3,
    orders: [
      {
        id: 5,
        orderNumber: 'ORD987654',
        date: '2023-07-05',
        status: 'In Progress',
        items: [
          {
            id: 1,
            ...getProductById(1),
            quantity: 1,
          },
          {
            id: 4,
            ...getProductById(4),
            quantity: 3,
          },
        ],
        totalAmount: calculateTotalAmount([
          { id: 1, quantity: 1 },
          { id: 4, quantity: 3 },
        ]),
      },
      {
        id: 6,
        orderNumber: 'ORD321654',
        date: '2023-07-02',
        status: 'Delivered',
        items: [
          {
            id: 3,
            ...getProductById(3),
            quantity: 2,
          },
          {
            id: 4,
            ...getProductById(4),
            quantity: 1,
          },
        ],
        totalAmount: calculateTotalAmount([
          { id: 3, quantity: 2 },
          { id: 4, quantity: 1 },
        ]),
      },
    ],
  },
];

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function calculateTotalAmount(items) {
  let total = 0;
  for (const item of items) {
    const product = getProductById(item.id);
    total += product.currentPrice * item.quantity;
  }
  return Math.floor(total);
}

export default orderData;
