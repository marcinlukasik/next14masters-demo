import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";
import { formatPrice } from "@/ui/utils";

export const ProductListItemDescription = ({
	product: { categories, name, price, rating },
}: {
	product: ProductListItemFragmentFragment;
}) => {
	return (
		<div className="mt-2">
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-semibold text-gray-700">
					{name}
				</h3>
				<p
					className="text-sm font-medium text-gray-900"
					data-testid="product-price"
				>
					{formatPrice(price)}
				</p>
			</div>
			<div className="mt-1 flex items-center justify-between">
				{categories[0] && (
					<p className="text-sm text-gray-500">
						{categories[0].name}
					</p>
				)}
				{rating && (
					<Rating
						rate={Number(rating.toFixed(2))}
						size={16}
						displayNumber={true}
					/>
				)}
			</div>
		</div>
	);
};
