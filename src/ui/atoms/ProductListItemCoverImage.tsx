type ProductListItemCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemCoverImage = ({
	src,
	alt,
}: ProductListItemCoverImageProps) => {
	return (
		<div className="relative aspect-square overflow-hidden rounded-lg">
			<img
				src={src}
				alt={alt}
				width="320"
				height="480"
				className="h-full w-full object-cover object-center group-hover:opacity-60"
			/>
		</div>
	);
};
