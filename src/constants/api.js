const IPaddress = "http://127.0.0.1:3000";

export const api = {
  signup: IPaddress + "/signup",
  login: IPaddress + "/signin/",
  loginWithGoogle: IPaddress + "/auth/google/",
  profile: IPaddress + "/user/",
  getAndCreateProduct: IPaddress + "/api/v1/product/",
  getCart: IPaddress + "/api/v1/carts/",
  getUser: IPaddress + "/api/v1/user/",
  deleteProduct: IPaddress + "/admin/product/delete/",
  createProduct: IPaddress + "/admin/product/create",
  editProduct: IPaddress + "/admin/product/update",
  getCategory: IPaddress + "/admin/category",
};
