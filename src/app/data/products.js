const products = [
  {
    id: 1,
    name: "Popped Pearl Millet - Dahi Crunchy Masala",
    image: "/images/Popped Pearl Millet - Dahi Puri.png",
    description: "Masala flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped Pearl Millet is a nutritious and delightful snack, offering a unique combination of a light, airy texture with a mildly sweet and earthy flavour. Made from whole pearl millet grains, known for their rich nutrients profile, these grains are carefully heated until they pop. This process not only enhances their natural flavour but also preserves their high fiber, protein, and antioxidant content. Popped pearl millet is an excellent choice for those seeking a wholesome snack that’s both gluten free and packed with health benefits, making it a perfect fit for a modern, health conscious lifestyle.",
    nutritionalInfo: {
      protein: "8.82g",
      carbs: "67.1g",
      fats: "16.5g",
      calories: "451kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533-puri",
  },
  {
    id: 2,
    name: "Popped Pearl Millet - Salt & Pepper",
    image: "/images/Popped Pearl Millet - Salt & Pepper.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped Pearl Millet is a nutritious and delightful snack, offering a unique combination of a light, airy texture with a mildly sweet and earthy flavour. Made from whole pearl millet grains, known for their rich nutrients profile, these grains are carefully heated until they pop. This process not only enhances their natural flavour but also preserves their high fiber, protein, and antioxidant content. Popped pearl millet is an excellent choice for those seeking a wholesome snack that’s both gluten free and packed with health benefits, making it a perfect fit for a modern, health conscious lifestyle.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "25.2g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533-pepper",
  },
  {
    id: 3,
    name: "Popped Pearl Millet - Peri Peri",
    image: "/images/Popped_Pearl_Millet-Peri_Peri.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped Pearl Millet is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole pearl millet grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },

  {
    id: 4,
    name: "Popped Wheat - Dahi Crunchy Masala",
    image: "/images/Popped Wheat - Dahi Puri.png",
    description: "Masala flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped wheat is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole wheat grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It's an ideal choice for those seeking a wholesome, satisfying treat that's both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "62.4g",
      fats: "15.5g",
      calories: "447kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 5,
    name: "Popped Wheat - Salt & Pepper",
    image: "/images/Popped Wheat - Salt & Pepper.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped wheat is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole wheat grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 6,
    name: "Popped Wheat - Peri Peri",
    image: "/images/Popped_Wheat-Peri_Peri.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Popped wheat is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole wheat grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },

  {
    id: 7,
    name: "Pearl Millet Puff - Chilli Garlic",
    image: "/images/Pearl_Millet_Puff_Chilli_Garlic.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Pearl millet puffs are a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from pearl millet grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 8,
    name: "Pearl Millet Bites - Crunchy Bites",
    image: "/images/Pearl_Millet_Bites.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Pearl Millet Bites is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from pearl millet grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 9,
    name: "Multi Millet Puff - Lemon & Pepper",
    image: "/images/Multi_Millet_Puff_Lemon&Pepper.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Multi Millet Puff is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from multi millet grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },

  {
    id: 10,
    name: "Jowar Puff - Sizzling Jalapeno",
    image: "/images/Jowar_Puff_Sizzling_Jalapeno.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Jowar Puff is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from jowar grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 11,
    name: "Jowar Bites - Crunchy Bites",
    image: "/images/Jowar_Bites-Crunchy_Bites.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Jowar Bites is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from jowar grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 12,
    name: "Ragi Bites - Crunchy Bites",
    image: "/images/Ragi_Bites-Crunchy_Bites.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Ragi Bites is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from ragi grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 13,
    name: "Ragi Puff - Sour Cream Onion",
    image: "/images/Ragi_Puff_Sour_Cream_Onion.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Ragi Puff is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from ragi grains that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 14,
    name: "Salted Caramel Popcorn - Caramel Salted Flavour",
    image: "/images/Salted_Caramel_Popcorn.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Salted Caramel Popcorn is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole grain popcorn that is gently heated until it pops, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
  {
    id: 15,
    name: "Crunchy Coconut Balls - Caramel Flavour",
    image: "/images/Crunchy_Coconut_Balls.png",
    description: "Classic flavored healthy snack",
    price: "₹50.00",
    longDescription:
      "Crunchy Coconut Balls is a delightful snack that combines a light, crunchy texture with a rich, nutty flavor. Made from whole coconut that are gently heated until they pop, this snack is not only delicious but also packed with fiber and essential nutrients. It’s an ideal choice for those seeking a wholesome, satisfying treat that’s both nutritious and flavour.",
    nutritionalInfo: {
      protein: "14.4g",
      carbs: "79g",
      fats: "1.13g",
      calories: "384kcal",
    },
    url: "https://mobite.dotpe.in/store/1/delivery#6095533",
  },
];

export { products };
