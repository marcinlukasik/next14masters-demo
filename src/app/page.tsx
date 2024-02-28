import { Heading } from "@/ui/atoms/Heading";
import { ProductList } from "@/ui/organism/ProductList";
import { CollectionList } from "@/ui/organism/CollectionList";
import { CategoryList } from "@/ui/organism/CategoryList";
import {
	getCategories,
	getCollections,
	getProducts,
} from "@/api/products";

export default async function Home() {
	const products = await getProducts(4);
	const categories = await getCategories(3);
	const collections = await getCollections(3);

	return (
		<>
			<section>
				<Heading>Most popular</Heading>
				<ProductList products={products.data} />
			</section>
			<section className="mt-24">
				<Heading>Most popular categories</Heading>
				<CategoryList categories={categories} />
			</section>
			<section className="mt-24">
				<Heading>Our Collections</Heading>
				<CollectionList collections={collections} />
			</section>
		</>
	);
}
