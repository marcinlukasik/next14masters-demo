import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatPrice } from "@/ui/utils";

export const ProductListItemDescription = ({
	product: { categories, name, price },
}: {
	product: ProductListItemFragmentFragment;
}) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">
					{name}
				</h3>
				{categories[0] && (
					<p className="mt-1 text-sm text-gray-500">
						{categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				{formatPrice(price)}
			</p>
		</div>
	);
};
