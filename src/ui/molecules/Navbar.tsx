import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/ui/atoms/Logo";
import { SectionWrapper } from "@/ui/atoms/SectionWrapper";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navbar = () => {
	const className =
		"text-sm font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500";
	const activeClassName = "text-orange-600";

	return (
		<nav className="sticky top-0 z-50 bg-white py-3 text-black shadow-sm">
			<SectionWrapper>
				<div className="flex items-center justify-between gap-4">
					<Link href="/">
						<Logo />
					</Link>
					<ul className="flex space-x-8">
						<li>
							<ActiveLink
								href="/"
								activeClassName={activeClassName}
								className={className}
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/products"
								className={className}
								activeClassName={activeClassName}
							>
								All
							</ActiveLink>
						</li>
					</ul>
					<div>
						<button className="flex gap-2 p-2 text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500">
							<ShoppingBag size={24} />
							<span className="relative -top-1 font-medium">2</span>
						</button>
					</div>
				</div>
			</SectionWrapper>
		</nav>
	);
};
