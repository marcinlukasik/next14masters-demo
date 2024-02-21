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
		domains: [
			"static-ourstore.hyperfunctor.com",
			"images.unsplash.com",
		],
	},
	async redirects() {
		return [
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
