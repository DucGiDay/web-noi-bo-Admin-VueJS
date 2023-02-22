export default [
  {
    path: "products",
    name: "ProductList",
    component: () => import("../ProductList.vue"),
  },
  {
    path: "products/create",
    name: "ProductCreate",
    component: () => import("../ProductList.vue"),
  },
];
  