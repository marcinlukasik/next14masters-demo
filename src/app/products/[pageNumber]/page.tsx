import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList(0);
	return products.map((_product) => ({ pageNumber: "1" }));
}

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const take = 20;
	const offset = (Number(params.pageNumber) - 1) * take;
	const allProducts = await getProductsList(0);
	const products = await getProductsList(take, offset);
	const total = allProducts.length;

	return (
		<>
			<ProductList products={products} />
			<Pagination total={total} take={take} />
		</>
	);
}
