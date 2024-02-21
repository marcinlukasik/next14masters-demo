export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price / 100);
};

export const debounce = (callback: () => void, delay: number) => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function () {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(callback, delay);
	};
};
