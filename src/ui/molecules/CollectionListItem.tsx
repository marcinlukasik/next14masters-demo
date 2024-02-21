import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { type CollectionListItemFragmentFragment } from "@/gql/graphql";

export const CollectionListItem = ({
	collection,
}: {
	collection: CollectionListItemFragmentFragment;
}) => {
	return (
		<li className="py-8 transition-colors duration-200 hover:bg-slate-50 lg:w-1/3 lg:flex-none">
			<div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
				<article className="ml-4 flex flex-auto flex-col">
					<Link
						href={`/collections/${collection.slug}`}
						className="group"
					>
						<h3 className="flex text-base text-orange-500">
							{collection.name}
							<ChevronsRight className="translate-x-1 transition-transform duration-200 group-hover:translate-x-2" />
						</h3>
					</Link>
					<p className="font-medium text-gray-700">
						{collection.description}
					</p>
				</article>
			</div>
		</li>
	);
};
