import { getCategories } from "@/api/products";
import { Heading } from "@/ui/atoms/Heading";
import { CategoryList } from "@/ui/organism/CategoryList";

export default async function CategoriesPage() {
	const categories = await getCategories(0);

	return (
		<>
			<Heading>Categories</Heading>
			<CategoryList categories={categories} />
		</>
	);
}
