"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({
	href,
	className,
	activeClassName,
	exact,
	children,
}: {
	href: Route;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive =
		exact || href === "/"
			? pathname === href
			: pathname.startsWith(href);
	const isAriaCurrent = isActive ? "page" : undefined;

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isAriaCurrent}
		>
			{children}
		</Link>
	);
};
