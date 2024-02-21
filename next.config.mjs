/** @type {import('next').NextConfig} */
const nextConfig = {
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
	async redirects() {
		return [
			{
				source: "/categories",
				destination: "/categories/t-shirts/1",
				permanent: true,
			},
			...["t-shirts", "hoodies", "accessories"].map((category) => ({
				source: `/categories/${category}`,
				destination: `/categories/${category}/1`,
				permanent: false,
			})),
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
