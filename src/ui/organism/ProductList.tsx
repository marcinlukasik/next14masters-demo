import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/ui/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<div
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem product={product} key={product.id} />
			))}
		</div>
	);
};
