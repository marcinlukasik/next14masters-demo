export default function NotFound() {
	return (
		<div className="grid min-h-full place-items-center bg-white py-24">
			<div className="text-center">
				<p className="text-xl font-semibold text-orange-600">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					Page not found
				</h1>
				<p className="mt-6 text-base leading-7 text-gray-500">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
			</div>
		</div>
	);
}
