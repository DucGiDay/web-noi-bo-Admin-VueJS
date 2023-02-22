import RoutesCategory from "../categories/services/routes";
import RoutesProduct from "../products/services/routes";


export default [
  {
    path: "stocks",
    name: "Stocks",
    children: [
      ...RoutesCategory,
      ...RoutesProduct
    ],
  },
];
