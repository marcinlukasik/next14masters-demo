import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CartList } from "@/ui/organism/CartList";
import { getCardById } from "@/api/cart";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	console.log(cartId);

	const cart = await getCardById(cartId);

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<h1 className="text-lg font-medium text-gray-900">
				Order #{cart.id} summary
			</h1>
			<div className="mt-8 flow-root max-w-lg">
				<CartList items={cart.items} />
			</div>
		</>
	);
}
