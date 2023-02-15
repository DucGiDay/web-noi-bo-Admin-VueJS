import RoutesCategory from "../categories/services/routes";
import RoutesProduct from "../products/services/routes";


export default [
  {
    path: "pages",
    name: "Pages",
    children: [
      ...RoutesCategory,
      ...RoutesProduct
    ],
  },
];
