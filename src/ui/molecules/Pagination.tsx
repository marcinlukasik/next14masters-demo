import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({
	total,
	take,
	route,
}: {
	take: number;
	total: number;
	route: Route;
}) => {
	return (
		take > 0 && (
			<nav
				className="my-16 border-t border-slate-100 pt-8"
				aria-label="pagination"
			>
				<ul className="flex items-center justify-center gap-x-4">
					{Array.from(
						{ length: Math.ceil(total / take) },
						(value, _index) => value,
					).map((_, index) => {
						return (
							<li key={index}>
								<ActiveLink
									href={`${route}/${index + 1}` as Route}
									className={
										"text-md p-2 font-medium text-gray-700 transition-colors duration-300 ease-in-out hover:text-orange-500"
									}
									activeClassName="text-orange-500"
								>
									{index + 1}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
			</nav>
		)
	);
};
