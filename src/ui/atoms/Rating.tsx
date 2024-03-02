import clsx from "clsx";
import { Star } from "lucide-react";

export const Rating = ({
	rate,
	size = 20,
	displayNumber,
}: {
	rate: number;
	size?: number;
	displayNumber?: boolean;
}) => {
	return (
		<div className="flex items-center">
			{displayNumber && (
				<div
					data-testid="product-rating"
					className="mr-1 text-xs font-medium text-gray-900"
				>
					{rate}
				</div>
			)}
			{[1, 2, 3, 4, 5].map((no) => (
				<Star
					size={size}
					className={clsx(
						"fill-current",
						Math.ceil(rate) >= no
							? "text-yellow-400"
							: "text-gray-300",
					)}
					key={no}
				/>
			))}
		</div>
	);
};
