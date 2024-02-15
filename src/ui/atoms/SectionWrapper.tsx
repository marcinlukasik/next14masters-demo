import { type ReactNode } from "react";
import clsx from "clsx";

export const SectionWrapper = ({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) => {
	return (
		<section className={clsx("mx-auto max-w-2xl px-8 md:max-w-4xl lg:max-w-7xl ", className)}>
			{children}
		</section>
	);
};
