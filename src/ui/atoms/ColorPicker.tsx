export const ColorPicker = () => {
	return (
		<fieldset className="mt-2">
			<div className="flex items-center space-x-3">
				<label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
					<input
						type="radio"
						name="color-choice"
						value="Black"
						className="sr-only"
						aria-labelledby="color-choice-0-label"
					/>
					<span
						aria-hidden="true"
						className="h-6 w-6 rounded-full border border-black border-opacity-10 bg-gray-900"
					></span>
				</label>
				<label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
					<input
						type="radio"
						name="color-choice"
						value="Heather Grey"
						className="sr-only"
						aria-labelledby="color-choice-1-label"
					/>
					<span
						aria-hidden="true"
						className="h-6 w-6 rounded-full border border-black border-opacity-10 bg-gray-400"
					></span>
				</label>
			</div>
		</fieldset>
	);
};
