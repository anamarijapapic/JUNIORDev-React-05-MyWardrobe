export interface Item {
  id: string;
  name: string;
  categoryId: string;
  sizeId: string;
  color: string;
  purchaseDate: string | Date;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Size {
  id: string;
  name: string;
}
