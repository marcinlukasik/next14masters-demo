import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListByCollectionSlugDocument } from "@/gql/graphql";
import { SingleCollection } from "@/ui/organism/SingleCollection";

export default async function SingleCollectionPage({
	params,
}: {
	params: { slug: string };
}) {
	const { collection } = await executeGraphql(
		ProductsGetListByCollectionSlugDocument,
		{
			slug: params.slug,
		},
	);

	if (!collection) {
		notFound();
	}

	return <SingleCollection collection={collection} />;
}
