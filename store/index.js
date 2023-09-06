export const categories = [
  "Oranges",
  "Bananas",
  "Pineapple",
  "Apple",
  "Cherry",
];

export const Fruits = [
  {
    name: "Australian Orange",
    price: "12.30",
    stars: 4,
    desc: "Sweet and juicy",
    shad: "orange",
    image: require("../image/orange.png"),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectars",
    shad: "red",
    price: "12",
    stars: 3,
    desc: "Sweet and juicy",
    image: require("../image/apple.png"),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    stars: 4,
    desc: "Sweet and juicy",
    shad: "purple",
    image: require("../image/grapes.png"),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`,
  },

  {
    name: "Red Grapefruit",
    price: "30",
    stars: 4,
    desc: "Sweet and juicy",
    shad: "red",
    image: require("../image/redOrange.png"),
    color: (opacity) => `rgba(255, 163, 120, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    stars: 4,
    desc: "Sweet and juicy",
    shad: "green",
    image: require("../image/greenApple.png"),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`,
  },
];

export const cartItems = [
  {
    name: "Fresh Orange",
    price: "12.30",
    qty: 4,
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "orange",
    image: require("../image/orange.png"),
    color: (opacity) => `rgba(251, 216, 146, ${opacity})`,
  },
  {
    name: "Flesh Nectars",
    shadow: "red",
    price: "12",
    qty: 3,
    stars: 3,
    desc: "Sweet and juicy",
    image: require("../image/apple.png"),
    color: (opacity) => `rgba(255, 170, 157, ${opacity})`,
  },

  {
    name: "Black Grapes",
    price: "40",
    qty: 2,
    stars: 3,
    desc: "Sweet and juicy",
    shadow: "purple",
    image: require("../image/grapes.png"),
    color: (opacity) => `rgba(214, 195, 246, ${opacity})`,
  },
  {
    name: "Green Apple",
    price: "10.5",
    qty: 2,
    stars: 4,
    desc: "Sweet and juicy",
    shadow: "green",
    image: require("../image/greenApple.png"),
    color: (opacity) => `rgba(139, 243, 139, ${opacity})`,
  },
];
