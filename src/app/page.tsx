import { ProductList } from "@/ui/organism/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "T-Shirt",
		name: "Yoyo T-Shirt",
		price: 4500,
		coverImage: {
			alt: "Yoyo T-Shirt 1",
			src: "/product_1.jpg",
		},
	},
	{
		id: "2",
		category: "Pants",
		name: "Brown Pants",
		price: 20000,
		coverImage: {
			alt: "Brown Pants",
			src: "/product_3.jpg",
		},
	},
	{
		id: "3",
		category: "T-Shirt",
		name: "Awesome T-Shirt",
		price: 7500,
		coverImage: {
			alt: "Awesome T-Shirt",
			src: "/product_2.jpg",
		},
	},
	{
		id: "4",
		category: "Pants",
		name: "Elegant Pants",
		price: 40000,
		coverImage: {
			alt: "Elegant Pants",
			src: "/product_4.jpg",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-2xl px-8 py-12 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
