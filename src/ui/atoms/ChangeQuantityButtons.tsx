"use client";

import { Minus, Plus } from "lucide-react";
import { useOptimistic } from "react";
import { changeProductQuantityAction } from "@/actions/cart";

export const ChangeQuantityButtons = ({
	quantity,
	productId,
}: {
	quantity: number;
	productId: string;
}) => {
	const className =
		"rounded-md border border-gray-300 p-0.5 text-slate-700 transition-colors duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-200";

	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);

	return (
		<form>
			<div className="flex items-center">
				<button
					data-testid="decrement"
					className={className}
					disabled={optimisticQuantity === 1}
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeProductQuantityAction(
							productId,
							optimisticQuantity - 1,
						);
					}}
				>
					<Minus size="18" />
				</button>
				<p className="px-3 text-gray-700" data-testid="quantity">
					{optimisticQuantity}
				</p>
				<button
					data-testid="increment"
					className={className}
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeProductQuantityAction(
							productId,
							optimisticQuantity + 1,
						);
					}}
				>
					<Plus size="18" />
				</button>
			</div>
		</form>
	);
};
