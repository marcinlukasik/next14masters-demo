import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SingleProduct } from "@/ui/organism/SingleProduct";
import { RelatedProductList } from "@/ui/organism/RelatedProductList";
import { getProductById } from "@/api/products";
import { Heading } from "@/ui/atoms/Heading";
import { Reviews } from "@/ui/organism/Reviews";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

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
		},
	};
}

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

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
			<Suspense>
				<Reviews productId={params.productId} />
			</Suspense>
		</>
	);
}
