import { addProductToCartAction } from "@/actions/cart";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { ColorPicker } from "@/ui/atoms/ColorPicker";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { SizePicker } from "@/ui/atoms/SizePicker";
import { formatPrice } from "@/ui/utils";

export const SingleProduct = ({
	product,
}: {
	product: ProductListItemFragmentFragment;
}) => {
	return (
		<article className="sm:grid sm:grid-cols-2 sm:gap-8">
			{product.images[0] && (
				<ProductImage
					src={product.images[0].url}
					alt={product.images[0].alt}
					width={256}
					height={256}
				/>
			)}
			<div className="mt-8 sm:mt-0">
				<div className="mb-8">
					<h1 className="text-xl font-semibold leading-6 text-gray-900">
						{product.name}
					</h1>
					{product.categories[0] && (
						<span className="text-sm text-gray-500">
							{product.categories[0].name}
						</span>
					)}
				</div>
				<p className="text-2xl font-semibold text-gray-900">
					{formatPrice(product.price)}
				</p>
				<div className="mt-5">
					<h2 className="text-sm font-medium text-gray-900">Color</h2>
					<ColorPicker />
				</div>
				<div className="mt-5">
					<h2 className="text-sm font-medium text-gray-900">Size</h2>
					<SizePicker />
				</div>
				<p className="mt-8 text-sm text-gray-900">
					{product.description}
				</p>
				<form action={addProductToCartAction}>
					<input type="hidden" name="productId" value={product.id} />
					<AddToCartButton />
				</form>
			</div>
		</article>
	);
};
