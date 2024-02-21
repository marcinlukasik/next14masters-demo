import Link from "next/link";
import { type CollectionListItemFragmentFragment } from "@/gql/graphql";

export const CollectionListItem = ({
	collection,
}: {
	collection: CollectionListItemFragmentFragment;
}) => {
	return (
		<li className="py-8 transition-colors duration-200 hover:bg-slate-50 lg:w-1/3 lg:flex-none">
			<Link
				href={`/collections/${collection.slug}`}
				className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8"
			>
				<article className="ml-4 flex flex-auto flex-col-reverse">
					<p className="font-medium text-gray-700">
						{collection.description}
					</p>
					<h3 className="text-base text-orange-500">
						{collection.name}
					</h3>
				</article>
			</Link>
		</li>
	);
};
