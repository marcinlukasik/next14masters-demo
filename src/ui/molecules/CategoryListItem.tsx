import Link from "next/link";
import { type CategoryListItemFragmentFragment } from "@/gql/graphql";
import { ProductImage } from "@/ui/atoms/ProductImage";

export const CategoryListItem = ({
	category,
}: {
	category: CategoryListItemFragmentFragment;
}) => {
	return (
		<li className="group relative">
			<Link href={`/categories/${category.slug}`}>
				<article>
					<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 transition-opacity duration-200 group-hover:opacity-75">
						<ProductImage
							src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt={category.name}
							width={380}
							height={580}
						/>
					</div>
					<p className="transition-color mb-1 mt-6 block text-sm font-medium text-gray-900 duration-200 group-hover:text-orange-500">
						{category.name}
					</p>
					<p className="text-sm text-gray-500">
						{category.description}
					</p>
				</article>
			</Link>
		</li>
	);
};
