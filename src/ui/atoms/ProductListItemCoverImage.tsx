type ProductListItemCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemCoverImage = ({ src, alt }: ProductListItemCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded bg-gray-200">
			<img
				src={src}
				alt={alt}
				width="320"
				height="480"
				className="h-full w-full object-cover object-center transition-opacity duration-200 group-hover:opacity-70"
			/>
		</div>
	);
};
