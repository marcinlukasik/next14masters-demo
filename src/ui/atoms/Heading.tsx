import { type ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
	return (
		<h2 className="mb-8 text-xl font-semibold leading-6 text-gray-900">
			{children}
		</h2>
	);
};
