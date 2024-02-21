import { executeGraphql } from "@/api/graphqlApi";
import {
	CategoriesGetListDocument,
	CollectionsGetListDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { ProductList } from "@/ui/organism/ProductList";
import { CollectionList } from "@/ui/organism/CollectionList";
import { CategoryList } from "@/ui/organism/CategoryList";

export default async function Home() {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		take: 4,
	});

	const { categories } = await executeGraphql(
		CategoriesGetListDocument,
		{
			take: 3,
		},
	);

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
			<section className="mt-24">
				<Heading>Most popular categories</Heading>
				<CategoryList categories={categories.data} />
			</section>
			<section className="mt-24">
				<Heading>Our Collections</Heading>
				<CollectionList collections={collections.data} />
			</section>
		</>
	);
}
