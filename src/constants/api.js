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
  getUser: IPaddress + "/api/v1/user/",

  //product api
  getAndCreateProduct: IPaddress + "/api/v1/product/",
  deleteProduct: IPaddress + "/admin/product/delete/",
  createProduct: IPaddress + "/admin/product/create/",
  editProduct: IPaddress + "/admin/product/update/",

  //category api
  getCategory: IPaddress + "/api/v1/category/",
  editCategory: IPaddress + "/admin/category/",
  resetPassword: IPaddress + "/resetpassword/",
  verifyCode: IPaddress + "/verifycode/",
  changePassword: IPaddress + "/user/passwordm/",

  // product api
  getAllProduct: IPaddress + "/api/v1/product/",
  getAllCategory: IPaddress + "/api/v1/category/",
};
