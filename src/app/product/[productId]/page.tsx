import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

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
		<div className="max-w-md">
			<h1 className="mb-5 text-lg font-medium text-gray-900">
				{product.name}
			</h1>
			<ProductListItem product={product} />
		</div>
	);
}
