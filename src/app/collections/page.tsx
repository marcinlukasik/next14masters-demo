import { getCollections } from "@/api/products";
import { Heading } from "@/ui/atoms/Heading";
import { CollectionList } from "@/ui/organism/CollectionList";

export default async function CollectionsPage() {
	const collections = await getCollections(0);

	return (
		<>
			<Heading>Collections</Heading>
			<CollectionList collections={collections} />
		</>
	);
}
