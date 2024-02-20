import { notFound } from "next/navigation";
import { type Route } from "next";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListByCategorySlugDocument } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductList";
import { Heading } from "@/ui/atoms/Heading";

export default async function SingleCategoryPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const take = 10;
	// const skip = (Number(params.pageNumber) - 1) * take;

	const { category } = await executeGraphql(
		ProductsGetListByCategorySlugDocument,
		{
			slug: params.slug,
		},
	);

	if (!category) {
		notFound();
	}

	const total = category.products.length;

	return (
		<>
			<Heading>{category.name}</Heading>
			<ProductList products={category.products} />
			<Pagination
				total={total}
				take={take}
				route={`/categories/${params.slug}` as Route}
			/>
		</>
	);
}
