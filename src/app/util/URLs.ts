export class URLs {


  static BASE_URL = "http://localhost:8090/woodstories";
  static ALL_PRODUCTS = URLs.BASE_URL + "/products/findAllProducts";
  static ALL_PRODUCTS_BY_CATEGORY = URLs.BASE_URL + "/products/findByProductCategory?productCategory=";
  static ALL_CATEGORY = URLs.BASE_URL + "/products/findAllCategories";
  static ADD_PRODUCT = URLs.BASE_URL + "/products/addProduct";
  static UPDATE_PRODUCT = URLs.BASE_URL + "/products/updateProduct";
  static DELETE_PRODUCT = URLs.BASE_URL + "/products/";


  static ADD_PRODUCT_To_FAVORITES = URLs.BASE_URL + "/users/addFavorite/";
  static VIEW_ALL_FAVORITES = URLs.BASE_URL + "/users/getAllFavoritesProduts?id=";
  static REMOVE_FAVS = URLs.BASE_URL + "/users/removeFavorite/";


  static UPDATE_USER=URLs.BASE_URL+'/users/updateUser';
  static USER_By_ID=URLs.BASE_URL+'/users/findByUserId?id=';
  static LOGIN_URL = URLs.BASE_URL + "/users/login";
  static SIGN_UP = URLs.BASE_URL + "/users/addUser";
  static DELETE_USER=URLs.BASE_URL+'/users/';

  static ALL_ORDERS= URLs.BASE_URL + "/orders/";

  static ADD_PRODUCT_TO_CART=URLs.ALL_ORDERS+'addProductToOrder/';
  static REMOVE_PRODUCT_FROM_CART=URLs.ALL_ORDERS+'removeProductfromOrder/';
  static SHOPPING_CART=URLs.ALL_ORDERS+'getShoppingCart/';




  static FRONT_LOGIN_PAGE = 'login';
  static FRONT_PRODUCTS_PAGE= 'products';
  public static VIEW_PRODUCT_PAGE = 'products/:id';
  public static FRONT_SHOPPING_CART = 'cart';







}
