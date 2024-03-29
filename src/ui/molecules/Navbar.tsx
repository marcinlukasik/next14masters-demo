import Link from "next/link";
import { type Route } from "next";
import { Logo } from "@/ui/atoms/Logo";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchBar } from "@/ui/atoms/SearchBar";
import { ShoppingCart } from "@/ui/atoms/ShoppingCart";

export const Navbar = () => {
	const className =
		"text-sm font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500 flex h-full items-center";
	const inactiveClassName =
		"border-b-2 border-t-2 border-transparent";
	const activeClassName =
		"text-orange-600 border-b-2 border-t-2 border-orange-500";

	return (
		<header className="sticky top-0 z-50 bg-white py-3 text-black shadow-sm">
			<div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl lg:px-8">
				<div className="flex flex-col justify-between lg:flex-row lg:items-center">
					<div className="scroll-shadows flex items-center overflow-x-scroll scroll-smooth pb-3 lg:mx-0 lg:overflow-x-auto lg:pb-0">
						<nav className="flex max-w-full whitespace-nowrap">
							<Link href="/" className="ml-4 block lg:ml-0">
								<Logo />
							</Link>
							<ul className="ml-8 flex space-x-8">
								<li>
									<ActiveLink
										href="/"
										inactiveClassName={inactiveClassName}
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
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										All
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href="/collections"
										className={className}
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										Collections
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href="/categories"
										className={className}
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										Categories
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href={"/categories/t-shirts" as Route}
										className={className}
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										T-shirts
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href={"/categories/hoodies" as Route}
										className={className}
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										Hoodies
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										href={"/categories/accessories" as Route}
										className={className}
										inactiveClassName={inactiveClassName}
										activeClassName={activeClassName}
									>
										Accessories
									</ActiveLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className="mx-4 flex items-center justify-between lg:mx-0">
						<SearchBar />
						<ShoppingCart />
					</div>
				</div>
			</div>
		</header>
	);
};
