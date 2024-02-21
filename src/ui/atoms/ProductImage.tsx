import NextImage from "next/image";

export const ProductImage = ({
	src,
	alt,
	width = 320,
	height = 480,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	return (
		<div className="relative aspect-square overflow-hidden rounded-lg">
			<NextImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="h-full w-full object-cover object-center transition-opacity duration-200 group-hover:opacity-60"
			/>
		</div>
	);
};
