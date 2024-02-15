import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductList";

export default async function Home() {
	const products = await getProductsList(4);
	return (
		<>
			<h3 className="mb-8 text-xl font-semibold leading-6 text-gray-900">
				Most popular
			</h3>
			<ProductList products={products} />
		</>
	);
}
