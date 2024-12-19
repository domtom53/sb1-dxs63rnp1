export interface MenuItemType {
  id: number;
  name: string;
  price: number;
}

export interface OrderItem extends MenuItemType {
  quantity: number;
  total: number;
}