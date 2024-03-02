import { getReviewsByProductId } from "@/api/reviews";
import { Heading } from "@/ui/atoms/Heading";
import { ReviewList } from "@/ui/organism/ReviewList";

export const Reviews = async ({
	productId,
}: {
	productId: string;
}) => {
	const reviews = await getReviewsByProductId(productId);

	return (
		<div>
			<Heading>Reviews</Heading>
			<ReviewList productId={productId} reviews={reviews} />
		</div>
	);
};
