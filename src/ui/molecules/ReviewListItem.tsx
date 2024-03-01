import clsx from "clsx";
import { Star } from "lucide-react";
import { type ReviewListItemFragmentFragment } from "@/gql/graphql";

export const ReviewListItem = ({
	review,
}: {
	review: ReviewListItemFragmentFragment;
}) => {
	return (
		<div className="py-12">
			<div className="flex items-center">
				<div>
					<h4 className="text-sm font-bold text-gray-900">
						{review.author}
					</h4>
					<div className="mt-2 flex items-center">
						{[1, 2, 3, 4, 5].map((rating) => (
							<Star
								size={20}
								className={clsx(
									"fill-current",
									review.rating >= rating
										? "text-yellow-400"
										: "text-gray-300",
								)}
								key={rating}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="mt-4 space-y-6 text-base font-bold italic text-gray-600">
				<p>{review.title}</p>
			</div>

			<div className="mt-4 space-y-6 text-base italic text-gray-600">
				<p>{review.description}</p>
			</div>
		</div>
	);
};
