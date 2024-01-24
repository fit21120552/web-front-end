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
  getAndCreateProduct: IPaddress + "/api/v1/product/",
  getCart: IPaddress + "/api/v1/carts/",
  resetPassword: IPaddress + "/resetpassword",
  verifyCode: IPaddress + "/verifycode",
  changePassword: IPaddress + "/user/passwordm/",

  // product api
  getAllProduct: IPaddress + "/api/v1/product",
  getAllCategory: IPaddress + "/api/v1/category",
  getRelatedProduct: IPaddress + "/api/v1/product/related-products/",
};
