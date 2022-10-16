import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Adrian',
      email: 'admin@example.com',
      password: bcrypt.hashSync('adrian'),
      isAdmin: true,
    },
    {
      name: 'Adrian2',
      email: 'adrian@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 12,
      description: 'high quality pants',
    },
    {
      name: 'Nike Fit pants',
      slug: 'nike-fit-pants',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 11,
      description: 'very good quality product',
    },
    {
      name: 'Nike Hat',
      slug: 'nike-hat',
      category: 'Hats',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 2,
      description: 'high quality product',
    },
    {
      name: 'Nike Sweater',
      slug: 'adidas-fit-sweater',
      category: 'Sweater',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nike',
      rating: 2,
      numReviews: 1,
      description: 'high quality product',
    },
  ],
};
export default data;
