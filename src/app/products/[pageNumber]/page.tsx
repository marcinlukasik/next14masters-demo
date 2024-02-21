import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { paginationItemsPerPage } from "@/ui/constants";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";

export async function generateStaticParams() {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: 0,
	});

	const numberOfStaticPages = 3;
	const total = products.data.length;

	if (total <= 0) {
		return [];
	}

	const numberOfAllPages = Math.ceil(total / paginationItemsPerPage);

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
	const skip =
		(Number(params.pageNumber) - 1) * paginationItemsPerPage;

	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: paginationItemsPerPage,
		skip,
	});

	return (
		<>
			<Heading>All products</Heading>
			<ProductList products={products.data} />
			<Pagination
				total={products.meta.total}
				itemsPerPage={paginationItemsPerPage}
				route="/products"
			/>
		</>
	);
}
