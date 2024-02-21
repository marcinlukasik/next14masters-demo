import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetListDocument } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { CategoryList } from "@/ui/organism/CategoryList";

export default async function CategoriesPage() {
	const { categories } = await executeGraphql(
		CategoriesGetListDocument,
		{},
	);

	return (
		<>
			<Heading>Categories</Heading>
			<CategoryList categories={categories.data} />
		</>
	);
}
