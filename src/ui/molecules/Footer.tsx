import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Footer = () => {
	return (
		<footer
			className="mt-auto bg-gray-900 py-8"
			aria-labelledby="footer-heading"
		>
			<div className="mx-auto max-w-2xl px-8 md:max-w-4xl lg:max-w-7xl">
				<ul role="list" className="mt-4">
					<li>
						<ActiveLink
							href="/terms"
							className="text-sm leading-6 text-gray-300 hover:text-white"
							activeClassName="text-white"
						>
							Terms
						</ActiveLink>
					</li>
				</ul>
				<div className="mt-8 border-t border-white/10 pt-8">
					<p className="text-xs leading-5 text-gray-400">
						&copy; 2024 Store, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
