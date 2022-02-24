import Image from 'next/image';
interface ILoaderImage {
	src: string;
	width: string | number;
	quality?: number;
}
const myLoader = ({ src, width, quality }: ILoaderImage) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};
const CustomImage = ({
	parenClass,
	alt,
	isSkeleton = true,
	src,
	...props
}: any) => {
	// const [imageLoad, setImageLoad] = useState<boolean>(false)
	return (
		<>
			<div className={`custom-image ${parenClass && parenClass}`}>
				<div className="mx-auto">
					<Image
						loader={myLoader}
						src={src || '/images/default.jpg'}
						{...props}
						placeholder="blur"
						blurDataURL="/images/default.jpg"
						alt={alt}
					/>
				</div>
			</div>
		</>
	);
};

export default CustomImage;
