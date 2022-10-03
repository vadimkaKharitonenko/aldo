import {BASE_URL} from '../const/api';

interface ProductServiceGetParams {
  offset: number;
  limit: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
  sale: number;
  salePrice: number;
};

class ProductService {
  async get({offset, limit}: ProductServiceGetParams) {
    const res = await fetch(
      `${BASE_URL}products?offset=${offset}&limit=${limit}`,
    );

    let json = await res.json();

    // NOTE: adding random sales
    json = json.map((product: Product) => {
      const hasSale = Math.random() > 0.5;

      return {
        ...product,
        sale: hasSale ? 50 : 0,
        salePrice: hasSale ? Math.round(product.price / 2) : 0,
      };
    });

    return json;
  }
}

export {ProductService};
