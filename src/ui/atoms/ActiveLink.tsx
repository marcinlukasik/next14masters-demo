"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	inactiveClassName,
	exact,
	children,
}: {
	href: Route;
	className?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	exact?: boolean;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const parsedSearchParams = searchParams.toString();

	const isActive =
		exact || href === "/"
			? pathname === href
			: parsedSearchParams
				? pathname.startsWith(href.slice(0, href.indexOf("?")))
				: pathname.startsWith(href);
	const isAriaCurrent = isActive ? "page" : undefined;

	return (
		<Link
			href={href}
			className={clsx(
				className,
				isActive ? activeClassName : inactiveClassName,
			)}
			aria-current={isAriaCurrent}
		>
			{children}
		</Link>
	);
};
