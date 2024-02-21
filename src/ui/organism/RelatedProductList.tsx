import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListByCategorySlugDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { ProductList } from "@/ui/organism/ProductList";

export const RelatedProductList = async ({
	slug,
}: {
	slug: string;
}) => {
	const { category } = await executeGraphql(
		ProductsGetListByCategorySlugDocument,
		{
			slug,
		},
	);

	return (
		category && (
			<div className="mb-20 mt-10" data-testid="related-products">
				<Heading>Related products</Heading>
				<ProductList products={category.products.slice(0, 4)} />
			</div>
		)
	);
};
