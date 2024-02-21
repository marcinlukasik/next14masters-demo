"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { debounce } from "@/ui/utils";
import { searchCharactersLimit } from "@/ui/constants";

export const SearchBar = () => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleInput = () => {
		const query = (inputRef.current as HTMLInputElement).value;

		if (query.length >= searchCharactersLimit) {
			router.push(`/search?query=${query}`);
		}
	};

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchIcon className="h-5 w-5 text-gray-400" />
				</div>
				<input
					ref={inputRef}
					onInput={debounce(handleInput, 500)}
					id="search"
					name="search"
					className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
					placeholder="Search"
					type="search"
				/>
			</div>
		</div>
	);
};
