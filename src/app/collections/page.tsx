import { getCollections } from "@/api/products";
import { Heading } from "@/ui/atoms/Heading";
import { CollectionList } from "@/ui/organism/CollectionList";

export default async function CollectionsPage() {
	const collections = await getCollections();

	return (
		<>
			<Heading>Collections</Heading>
			<CollectionList collections={collections} />
		</>
	);
}
