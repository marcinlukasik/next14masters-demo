import { type CollectionListItemFragmentFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organism/ProductList";

export const SingleCollection = ({
	collection,
}: {
	collection: CollectionListItemFragmentFragment;
}) => {
	return (
		<>
			<p className="text-base font-medium leading-7 text-orange-500">
				Collection
			</p>
			<h1 className="mb-6 mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				{collection.description} {collection.name}
			</h1>
			{/* <p className="mb-12 text-lg leading-8 text-gray-600">
				{collection.description}
			</p> */}
			<ProductList products={collection.products} />
		</>
	);
};
