import { model } from "mongoose";

const data = {

    users: [
      {
        namne:'Kevin',
        email:'kevlee@test.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
      }, 

      {
        namne:'Keff',
        email:'kefflee@test.com',
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
      }
    ],

    products: [
      {
        _id: '1',
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/media.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '2',
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/media.jpg',
        price: 100,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '3',
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/media.jpg',
        price: 220,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        _id: '4',
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/media.jpg',
        price: 78,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        _id: '5',
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/media.jpg',
        price: 65,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        _id: '6',
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/media.jpg',
        price: 139,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;