import { Snack } from "./Models/Snack.js";
import { Credits } from "./Models/Credits.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = [];

  Snack = [
    new Snack({
      name: "Mountain Dew",
<<<<<<< HEAD
      price: (2.5).toFixed(2),
=======
      price: 2.5,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "https://static.specsonline.com/wp-content/uploads/2020/10/001200000131.jpg",
    }),
    new Snack({
      name: "Code Red",
<<<<<<< HEAD
      price: (2.75).toFixed(2),
=======
      price: 2.75,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "https://target.scene7.com/is/image/Target/GUEST_cf9867c8-20af-4309-96e6-0b9752bf3b18?wid=488&hei=488&fmt=pjpeg",
    }),
    new Snack({
      name: "Rockstar",
<<<<<<< HEAD
      price: (3.5).toFixed(2),
=======
      price: 3.5,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "https://images.albertsons-media.com/is/image/ABS/108100305?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    }),
    new Snack({
      name: "Reeses",
<<<<<<< HEAD
      price: (1.5).toFixed(2),
=======
      price: 1.5,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "http://cdn.shopify.com/s/files/1/0004/8132/9204/products/reeses_pb_cups_1_1024x1024.jpg?v=1550328137",
    }),
    new Snack({
      name: "Butterfinger",
<<<<<<< HEAD
      price: (1.75).toFixed(2),
=======
      price: 1.75,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "https://www.candywarehouse.com/item-images/132167-01_butterfinger-fun-size-candy-bars-15-piece-bag.jpg",
    }),
    new Snack({
      name: "Answer Booklet",
<<<<<<< HEAD
      price: (999.99).toFixed(2),
=======
      price: 99.99,
>>>>>>> 8b17f44cfc153774ef4e67f72284e7a64ad0e05a
      img: "https://images-na.ssl-images-amazon.com/images/I/71yzexM-cGL.jpg",
    }),
  ];

  credits = 0;
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
