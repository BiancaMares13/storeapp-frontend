export class URLs {


  static BASE_URL = "http://localhost:8090/woodstories";
  static ALL_PRODUCTS = URLs.BASE_URL + "/products/findAllProducts";
  static ALL_PRODUCTS_BY_CATEGORY = URLs.BASE_URL + "/products/findByProductCategory?productCategory=";
  static ALL_CATEGORY = URLs.BASE_URL + "/products/findAllCategories";
  static ADD_PRODUCT = URLs.BASE_URL + "/products/addProduct";
  static ADD_PRODUCT_To_FAVORITES = URLs.BASE_URL + "/users/addFavorite/";
  static VIEW_ALL_FAVORITES = URLs.BASE_URL + "/users/getAllFavoritesProduts?id=";
  static REMOVE_FAVS = URLs.BASE_URL + "/users/removeFavorite/";


  static UPDATE_USER=URLs.BASE_URL+'/users/updateUser';
  static USER_By_ID=URLs.BASE_URL+'/users/findByUserId?id=';
  static LOGIN_URL = URLs.BASE_URL + "/users/login";
  static SIGN_UP = URLs.BASE_URL + "/users/addUser";



  static FRONT_LOGIN_PAGE = 'login';
  static FRONT_PRODUCTS_PAGE= 'products';
  public static VIEW_PRODUCT_PAGE = 'products/:id';





}
