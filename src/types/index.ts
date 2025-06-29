export interface GroceryItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  lowStockThreshold: number;
  addedDate: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}