import Link from "next/link";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemType } from "@/ui/types";

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
	return (
		<ul
			className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>
						<ProductListItem product={product} />
					</Link>
				</li>
			))}
		</ul>
	);
};
