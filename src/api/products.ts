import { API_URL } from "@/api/constants";
import { type ProductResponseItem } from "@/api/types";
import { type ProductItemType } from "@/ui/types";

export const getProductsList = async (
	take: number,
	offset?: number,
) => {
	const res = await fetch(
		`${API_URL}/products?take=${take}${offset ? `&offset=${offset}` : ""}`,
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	return productsResponse.map(productResponeItemToProductItemType);
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(`${API_URL}/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponeItemToProductItemType(productResponse);
};

const productResponeItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => ({
	id: product.id,
	category: product.category,
	description: product.description,
	name: product.title,
	price: product.price,
	coverImage: {
		alt: product.title,
		src: product.image,
	},
});
