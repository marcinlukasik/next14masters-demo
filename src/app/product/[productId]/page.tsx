import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			type: "website",
			images: [
				{
					url: product.coverImage.src,
					alt: product.name,
				},
			],
		},
	};
}

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return (
		<article className="max-w-md">
			<h1 className="mb-8 text-xl font-semibold leading-6 text-gray-900">
				{product.name}
			</h1>
			<ProductListItemCoverImage {...product.coverImage} />
			<ProductListItemDescription product={product} />
			<p className="mt-4 text-sm text-gray-900">
				{product.description}
			</p>
		</article>
	);
}
