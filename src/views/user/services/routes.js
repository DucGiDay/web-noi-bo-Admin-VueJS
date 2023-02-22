// import RoutesAuth from "../auth/services/routes";
import RoutesAccount from "../account/services/routes";


export default [
  {
    path: "user",
    name: "User",
    children: [
      // ...RoutesAuth,
      ...RoutesAccount
    ],
  },
];
