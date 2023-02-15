export default [
    {
      path: "categories",
      name: "CategoryList",
      component: () => import("../CategoryList.vue"),
    },
    {
      path: "categories/create",
      name: "CategoryCreate",
      component: () => import("../CategoryList.vue"),
    },
  ];
  