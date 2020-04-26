import {User} from "./User";
import {Product} from "./Product";

export class Order {
  id: number;
  status: string;
  user: User;
  productList: Product[];
  completedOn: Date;
  total: number;
}
