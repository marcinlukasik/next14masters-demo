import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetItemDocument } from "@/gql/graphql";
import { SingleProduct } from "@/ui/organism/SingleProduct";
import { RelatedProductList } from "@/ui/organism/RelatedProductList";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const { product } = await executeGraphql(ProductsGetItemDocument, {
		id: params.productId,
	});

	if (!product) {
		return {};
	}

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			type: "website",
			images: product.images.map((image) => ({
				url: image.url,
				alt: image.alt,
			})),
		},
	};
}

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const { product } = await executeGraphql(ProductsGetItemDocument, {
		id: params.productId,
	});

	if (!product) {
		notFound();
	}

	return (
		<>
			<SingleProduct product={product} />
			<Suspense>
				<RelatedProductList
					slug={
						product.categories[0] ? product.categories[0].slug : ""
					}
				/>
			</Suspense>
		</>
	);
}
