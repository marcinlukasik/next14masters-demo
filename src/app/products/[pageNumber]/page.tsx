import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";

export async function generateStaticParams() {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: 0,
	});
	return products.data.map((_product) => ({ pageNumber: "1" }));
}

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const take = 10;
	const skip = (Number(params.pageNumber) - 1) * take;

	const { products } = await executeGraphql(ProductsGetListDocument, {
		take,
		skip,
	});

	const allProducts = await executeGraphql(ProductsGetListDocument, {
		take: 0,
	});

	const total = allProducts.products.data.length;

	return (
		<>
			<Heading>All products</Heading>
			<ProductList products={products.data} />
			<Pagination total={total} take={take} />
		</>
	);
}
