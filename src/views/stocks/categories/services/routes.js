export default [
    {
      path: "categories",
      name: "CategoryList",
      component: () => import("../CategoryList.vue"),
    },
    {
      path: "category/create",
      name: "CategoryCreate",
      component: () => import("../CategoryList.vue"),
    },
  ];
  