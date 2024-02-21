import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/ui/atoms/Logo";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchBar } from "@/ui/atoms/SearchBar";

export const Navbar = () => {
	const className =
		"text-sm font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500 flex h-full items-center";
	const activeClassName = "text-orange-600";

	return (
		<header className="sticky top-0 z-50 bg-white py-3 text-black shadow-sm">
			<nav className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl lg:px-8">
				<div className="flex flex-col justify-between lg:flex-row lg:items-center">
					<div className="scroll-shadows flex items-center overflow-x-scroll scroll-smooth pb-3 lg:mx-0 lg:overflow-x-auto lg:pb-0">
						<div className="flex max-w-full whitespace-nowrap">
							<Link href="/" className="ml-4 block lg:ml-0">
								<Logo />
							</Link>
							<ul className="ml-8 flex space-x-8">
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
								<li>
									<ActiveLink
										href="/categories"
										className={className}
										activeClassName={activeClassName}
									>
										Categories
									</ActiveLink>
								</li>
								{/* <li>
									<ActiveLink
										href="/categories/t-shirts"
										className={className}
										activeClassName={activeClassName}
									>
										T-shirts
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href="/categories/hoodies"
										className={className}
										activeClassName={activeClassName}
									>
										Hoodies
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href="/categories/accessories"
										className={className}
										activeClassName={activeClassName}
									>
										Accessories
									</ActiveLink>
								</li> */}
							</ul>
						</div>
					</div>
					<div className="mx-4 flex items-center justify-between lg:mx-0">
						<SearchBar />
						<button className="flex gap-x-2 py-2 pl-3 text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500">
							<ShoppingBag size={24} />
							<span className="relative -top-1 font-medium">2</span>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};
