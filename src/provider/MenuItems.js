import classic from "../assets/images/menu-images/chicken-wings/classic.png";
import lemonPepper from "../assets/images/menu-images/chicken-wings/lemon-pepper.png";
import smokyBBQ from "../assets/images/menu-images/chicken-wings/smoky-bbq.png";
import blazinHot from "../assets/images/menu-images/chicken-wings/blazin-hot.png";
import teriyaki from "../assets/images/menu-images/chicken-wings/teriyaki-chicken.png";
import soyGarlic from "../assets/images/menu-images/chicken-wings/soy-garlic.png";
import bbqGlazed from "../assets/images/menu-images/chicken-wings/bbq-glazed.png";
import sweetSpicy from "../assets/images/menu-images/chicken-wings/sweet-spicy.png";
import sweetChilli from "../assets/images/menu-images/chicken-wings/sweet-chilli.png";
import yangnyeom from "../assets/images/menu-images/chicken-wings/yangnyeom.png";
import originalSandwich from "../assets/images/menu-images/chicken-sandwiches/og-chicken.png";
import kSandwich from "../assets/images/menu-images/chicken-sandwiches/k-chicken.png";
import hotSandwich from "../assets/images/menu-images/chicken-sandwiches/hot-chicken.png";
import classicEggDrop from "../assets/images/menu-images/eggdrop/classic.png";
import chickenEggDrop from "../assets/images/menu-images/eggdrop/chicken-egg.png";
import chickenHamCheeseEggDrop from "../assets/images/menu-images/eggdrop/chicken-ham-cheese.png";
import cheesyCheeseEggDrop from "../assets/images/menu-images/eggdrop/cheesy.png";
import teriyakiBBQEggDrop from "../assets/images/menu-images/eggdrop/teriyaki-bbq.png";
import beefBaconEggDrop from "../assets/images/menu-images/eggdrop/beef-bacon.png";
import chocolateCreamPuff from "../assets/images/menu-images/drinks/chocolate-cream-puff.png";
import chocolateRockSaltCheese from "../assets/images/menu-images/drinks/chocolate-rock-salt-cheese.png";
import darkChocolateRockSaltCheese from "../assets/images/menu-images/drinks/dark-chocolate-rock-salt-cheese.png";
import dulceDeLecheRockSaltCheese from "../assets/images/menu-images/drinks/dulce-de-leche-rock-salt-cheese.png";
import matchaCookieRockSaltCheese from "../assets/images/menu-images/drinks/matcha-cookie-rock-salt-cheese.png";
import strawberryCreamPuff from "../assets/images/menu-images/drinks/strawberry-cream-puff.png";
import taroRockSaltCheese from "../assets/images/menu-images/drinks/taro-rock-salt-cheese.png";
import winterMelonCreamPuff from "../assets/images/menu-images/drinks/wintermelon-cream-puff.png";

const menuItems = [
  {
    id: 1,
    name: "Classic",
    description:
      "Kids choice! 4 cuts of yummy chicken wings or boneless. No glaze, salt & pepper only.",
    price: 175,
    category: "flavourful glazed chicken",
    img: classic,
  },
  {
    id: 2,
    name: "Lemon Pepper",
    description:
      "Flavorful citrus zing! 4 cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: lemonPepper,
  },
  {
    id: 3,
    name: "Smoky BBQ",
    description: "4 cuts of yummy smokey bbq glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: smokyBBQ,
  },
  {
    id: 4,
    name: "Blazin Hot",
    description:
      "Large, meaty and perfectly seasoned crispy chicken tossed in a blazin' spicy with tinge of sweetness! 4 cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: blazinHot,
  },
  {
    id: 5,
    name: "Teriyaki",
    description: "4 cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: teriyaki,
  },
  {
    id: 6,
    name: "Soy Garlic",
    description:
      "With an Asian twist, seasoned with sweet, a little salty, and garlicky soy sauce. 4 cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: soyGarlic,
  },
  {
    id: 7,
    name: "BBQ Glazed",
    description: "4 cuts of yummy BBQ glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: bbqGlazed,
  },
  {
    id: 8,
    name: "Sweet And Spicy",
    description:
      "Slightly sweet, slightly spicy, totally delicious. 4 Cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: sweetSpicy,
  },
  {
    id: 9,
    name: "Sweet Chili",
    description: "4 cuts of yummy glazed chicken wings or boneless.",
    price: 175,
    category: "flavourful glazed chicken",
    img: sweetChilli,
  },
  {
    id: 10,
    name: "Yangnyeom",
    description:
      "New flavor alert! Best tasting Korean sweet and spicy chicken. 4 Cuts of yummy glazed chicken wings or boneless",
    price: 175,
    category: "flavourful glazed chicken",
    img: yangnyeom,
  },
  {
    id: 11,
    name: "OG Chicken Sandwich",
    description:
      "Crispy boneless fried chicken sandwich with sliced cabbage, pickles and creamy signature sauce",
    price: 215,
    category: "chicken sandwiches",
    img: originalSandwich,
  },
  {
    id: 12,
    name: "K-Chicken Sandwich",
    description:
      "Crispy boneless fried chicken sandwich glazed with our signature yangnyeom sauce, sliced cabbage and creamy signature sauce",
    price: 215,
    category: "chicken sandwiches",
    img: kSandwich,
  },
  {
    id: 13,
    name: "Hot Chicken Sandwich",
    description:
      "Crispy and spicy boneless fried chicken sandwich with sliced cabbage and creamy signature sauce",
    price: 215,
    category: "chicken sandwiches",
    img: hotSandwich,
  },
  {
    id: 14,
    name: "Classic Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with fluffy scrambled eggs and signature sauce",
    price: 139,
    category: "egg drop toastie",
    img: classicEggDrop,
  },
  {
    id: 15,
    name: "Chicken Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with fluffy scrambled eggs, fried boneless chicken and signature sauce",
    price: 199,
    category: "egg drop toastie",
    img: chickenEggDrop,
  },
  {
    id: 16,
    name: "Chicken Ham & Cheese Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with fluffy scrambled eggs, sliced chicken ham, sliced cheese and signature sauce",
    price: 209,
    category: "egg drop toastie",
    img: chickenHamCheeseEggDrop,
  },
  {
    id: 17,
    name: "Cheesy Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with fluffy scrambled eggs, sliced cheese and signature sauce",
    price: 155,
    category: "egg drop toastie",
    img: cheesyCheeseEggDrop,
  },
  {
    id: 18,
    name: "Teriyaki BBQ Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with sliced boiled egg, teriyaki BBQ sauce and signature sauce",
    price: 199,
    category: "egg drop toastie",
    img: teriyakiBBQEggDrop,
  },
  {
    id: 19,
    name: "Beef Bacon Egg Drop Toastie",
    description:
      "Korean egg drop sandwich with fluffy scrambled eggs, pan fried beef bacon & signature sauce",
    price: 219,
    category: "egg drop toastie",
    img: beefBaconEggDrop,
  },
  {
    id: 20,
    name: "Chocolate Cream Puff",
    description: "Free sinkers",
    price: 130,
    category: "drinks",
    img: chocolateCreamPuff,
  },
  {
    id: 21,
    name: "Chocolate Rock Salt Cheese",
    description: "Free sinkers",
    price: 150,
    category: "drinks",
    img: chocolateRockSaltCheese,
  },
  {
    id: 22,
    name: "Dark Chocolate Rock Salt Cheese",
    description: "Free sinkers",
    price: 155,
    category: "drinks",
    img: darkChocolateRockSaltCheese,
  },
  {
    id: 23,
    name: "Dulce De Leche Rock Salt Cheese",
    description: "Free sinkers",
    price: 175,
    category: "drinks",
    img: dulceDeLecheRockSaltCheese,
  },
  {
    id: 24,
    name: "Matcha Cookie Rock Salt Cheese",
    description: "Free sinkers",
    price: 155,
    category: "drinks",
    img: matchaCookieRockSaltCheese,
  },
  {
    id: 25,
    name: "Strawbery Cream Puff",
    description: "Free sinkers",
    price: 125,
    category: "drinks",
    img: strawberryCreamPuff,
  },
  {
    id: 26,
    name: "Taro Rock Salt Cheese",
    description: "Free sinkers",
    price: 125,
    category: "drinks",
    img: taroRockSaltCheese,
  },
  {
    id: 27,
    name: "Wintermelon Cream Puff",
    description: "Free sinkers",
    price: 125,
    category: "drinks",
    img: winterMelonCreamPuff,
  },
];

export default menuItems;
