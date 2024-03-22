export interface CardData {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  brand: string;
  thumbnail: string;
}

export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
