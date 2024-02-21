import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListBySearchDocument } from "@/gql/graphql";
import { searchCharactersLimit } from "@/ui/constants";
import { ProductList } from "@/ui/organism/ProductList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const { products } =
		searchParams.query &&
		searchParams.query.length >= searchCharactersLimit
			? await executeGraphql(ProductsGetListBySearchDocument, {
					search: searchParams.query,
				})
			: { products: { data: [] } };

	const total = products.data.length;

	return (
		<>
			<div className="mb-8 text-xl font-semibold leading-6 text-gray-900">
				Found {total} items for phrase &quot;{searchParams.query}
				&quot;
			</div>
			<ProductList products={products.data} />
		</>
	);
}
