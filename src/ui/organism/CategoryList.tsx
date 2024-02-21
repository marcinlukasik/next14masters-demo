import { type CategoryListItemFragmentFragment } from "@/gql/graphql";
import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

export const CategoryList = ({
	categories,
}: {
	categories: CategoryListItemFragmentFragment[];
}) => {
	return (
		<ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
			{categories.map((category) => (
				<CategoryListItem category={category} key={category.id} />
			))}
		</ul>
	);
};
