export const SizePicker = () => {
	return (
		<fieldset className="mt-2">
			<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
				<label className="flex cursor-pointer items-center justify-center rounded-md border px-2 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
					<input
						type="radio"
						name="size-choice"
						value="XS"
						className="sr-only"
					/>
					<span id="size-choice-1-label">XS</span>
				</label>
				<label className="flex cursor-pointer items-center justify-center rounded-md border px-2 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1">
					<input
						type="radio"
						name="size-choice"
						value="S"
						className="sr-only"
					/>
					<span id="size-choice-2-label">S</span>
				</label>
			</div>
		</fieldset>
	);
};
