const cartData = [
  {
    user_id: 1,
    userName: 'John Doe',
    cart: [
      { productId: 1, count: 2 },
      { productId: 2, count: 1 },
      { productId: 3, count: 2 },
    ],
    orders: [
      { orderId: 1, count: 2 },
      { orderId: 2, count: 1 },
    ],
  },
  {
    user_id: 2,
    userName: 'Jane Smith',
    cart: [
      { productId: 2, count: 3 },
      { productId: 4, count: 1 },
    ],
    orders: [
      { orderId: 3, count: 1 },
      { orderId: 4, count: 2 },
    ],
  },
  {
    user_id: 3,
    userName: 'Alice Johnson',
    cart: [
      { productId: 1, count: 1 },
      { productId: 3, count: 3 },
      { productId: 4, count: 2 },
    ],
    orders: [
      { orderId: 5, count: 3 },
    ],
  },
];

export default cartData;
