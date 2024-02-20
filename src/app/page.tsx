import { executeGraphql } from "@/api/graphqlApi";
import {
	CollectionsGetListDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { ProductList } from "@/ui/organism/ProductList";
import { CollectionList } from "@/ui/organism/CollectionList";

export default async function Home() {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: 4,
	});

	const { collections } = await executeGraphql(
		CollectionsGetListDocument,
		{
			take: 3,
		},
	);
	return (
		<>
			<section>
				<Heading>Most popular</Heading>
				<ProductList products={products.data} />
			</section>
			{collections.data.length > 0 && (
				<section className="mt-24">
					<Heading>Our Collections</Heading>
					<CollectionList collections={collections.data} />
				</section>
			)}
		</>
	);
}
