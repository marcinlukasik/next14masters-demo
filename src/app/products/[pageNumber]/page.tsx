import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";

const takeParam = 4;

export async function generateStaticParams() {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: 0,
	});

	const numberOfStaticPages = 3;
	const total = products.data.length;

	if (total <= 0) {
		return [];
	}

	const numberOfAllPages = Math.ceil(total / takeParam);

	const loopCount = Math.min(numberOfStaticPages, numberOfAllPages);

	return Array.from({ length: loopCount }, (_value, index) => {
		return {
			pageNumber: (index + 1).toString(),
		};
	});
}

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const skip = (Number(params.pageNumber) - 1) * takeParam;

	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: takeParam,
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
			<Pagination total={total} take={takeParam} route="/products" />
		</>
	);
}
