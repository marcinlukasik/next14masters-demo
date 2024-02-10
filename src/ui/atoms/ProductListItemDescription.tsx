import { type ProductItemType } from "@/ui/types";
import { formatPrice } from "@/ui/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="mt-1 text-sm text-gray-500">{category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatPrice(price)}</p>
		</div>
	);
};
