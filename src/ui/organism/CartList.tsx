"use client";

import { useOptimistic } from "react";
import { type CartListItemFragmentFragment } from "@/gql/graphql";
import { CartListItem } from "@/ui/molecules/CartListItem";

export const CartList = ({
	items,
}: {
	items: CartListItemFragmentFragment[];
}) => {
	const [optimisticItems, setOptimisticItems] =
		useOptimistic<CartListItemFragmentFragment[]>(items);

	const handleRemoveItem = (productId: string) => {
		setOptimisticItems((prevItems) => {
			return prevItems.filter(
				(item) => item.product.id !== productId,
			);
		});
	};

	return (
		<ul role="list" className="-my-6 divide-y divide-gray-200">
			{optimisticItems.map((item) => (
				<CartListItem
					item={item}
					key={item.product.id}
					handleRemoveItem={handleRemoveItem}
				/>
			))}
		</ul>
	);
};
