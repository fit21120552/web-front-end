const IPaddress = "http://127.0.0.1:3000";

export const api = {
  config: {
    headers: { "Access-Control-Allow-Origin": "*" },
    withCredentials: true,
  },

  // user authentication
  signup: IPaddress + "/signup",
  login: IPaddress + "/signin/",
  loginWithGoogle: IPaddress + "/auth/google/",
  profile: IPaddress + "/user/",
  getCart: IPaddress + "/api/v1/carts/",
  //getUser: IPaddress + "/api/v1/user/",

  //product api
  getAndCreateProduct: IPaddress + "/api/v1/product/",
  deleteProduct: IPaddress + "/admin/product/delete/",
  createProduct: IPaddress + "/admin/product/create/",
  editProduct: IPaddress + "/admin/product/update/",
  updateImage: IPaddress + "/admin/product/update-image/",

  //category api
  getCategory: IPaddress + "/api/v1/category/",
  editCategory: IPaddress + "/admin/category/",
  createCategory: IPaddress + "/admin/category/",
  resetPassword: IPaddress + "/resetpassword/",
  verifyCode: IPaddress + "/verifycode/",
  changePassword: IPaddress + "/user/passwordm/",

  // product api
  getAllProduct: IPaddress + "/api/v1/product/",
  getAllCategory: IPaddress + "/api/v1/category/",
  getRelatedProduct: IPaddress + "/api/v1/product/related-products/",
  getTodayProducts: IPaddress + "/api/v1/product?stock[gt]=50&limit=4",
  

  //user api
  getAllUser: IPaddress + "/admin/",
  getUser: IPaddress + "/admin/user/",
  deleteUser: IPaddress + "/admin/user/",

  //order
  getOrder: IPaddress + "/admin/order/",
  createOrder: IPaddress + "/order/",
  getOrderUser: IPaddress + "/user/order/",
  //review
  createReviewOfAProduct: IPaddress + "/api/v1/reviews/",
  getReviewOfAProduct: IPaddress + "/api/v1/product/",

  // image api
  getImage: IPaddress + "/image/",

  //payment api
  checkout: "https://localhost:3003/pay/tranfer",
};
