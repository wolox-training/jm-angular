export interface IBook {
  author: string;
  created_at: string;
  editor: string;
  genre: string;
  id: number;
  image_url: string;
  title: string;
  updated_at: string;
  year: string;
}

export interface IBookDetail {
  author: string;
  current_rent?: boolean;
  editor: string;
  genre: string;
  id: number;
  image_url: string;
  title: string;
  year: string;
}

export interface IBookShoppingCart {
  author: string;
  id: number;
  title: string;
}
