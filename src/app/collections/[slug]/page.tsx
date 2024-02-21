import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListByCollectionSlugDocument } from "@/gql/graphql";
import { SingleCollection } from "@/ui/organism/SingleCollection";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { collection } = await executeGraphql(
		ProductsGetListByCollectionSlugDocument,
		{
			slug: params.slug,
		},
	);

	if (!collection) {
		return {};
	}

	return {
		title: collection.name,
	};
}

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
