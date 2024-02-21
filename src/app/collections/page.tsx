import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { CollectionList } from "@/ui/organism/CollectionList";

export default async function CollectionsPage() {
	const { collections } = await executeGraphql(
		CollectionsGetListDocument,
		{},
	);
	return (
		<>
			<Heading>Collections</Heading>
			<CollectionList collections={collections.data} />
		</>
	);
}
