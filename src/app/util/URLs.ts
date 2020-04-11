export class URLs {
  static BASE_URL = "http://localhost:8090/woodstories";
  static ALL_PRODUCTS = URLs.BASE_URL + "/products/findAllProducts";
  static ALL_PRODUCTS_BY_CATEGORY = URLs.BASE_URL + "/products/findByProductCategory?productCategory=";
  static ALL_CATEGORY = URLs.BASE_URL + "/products/findAllCategories";


  static LOGIN_URL = URLs.BASE_URL + "/users/login";
  static SIGN_UP = URLs.BASE_URL + "/users/addUser";
  static FRONT_LOGIN_PAGE = 'login';
  static FRONT_PRODUCTS_PAGE= 'products';




}
