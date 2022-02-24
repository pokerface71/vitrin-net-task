import { CustomImage } from 'Components';
import Link from 'next/link';
import { FC } from 'react';
import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface IProductCardProps {
	productDetail: IProduct;
	classList: string;
}
const ProductCard: FC<IProductCardProps> = ({ productDetail, classList }) => {
	return (
		<div className={`${classList}`}>
			<div className="card product-card">
				<div className="card-body product-card--parent">
					<Link href={`/products/${productDetail.id}`}>
						<a className="product-card--parent--link">
							<div className="product-card--image">
								<CustomImage
									alt={productDetail.title}
									src={productDetail.image}
									width="250"
									height="250"
									layout="responsive"
								/>
							</div>
							<div className="product-card--text-wrapper">
								<h3 className="product-card--parent--title">
									{productDetail.title}
								</h3>
								<strong>
									Price : {productDetail.price} <span>$</span>
								</strong>

								<div>
									{' '}
									<Rating
										readonly
										initialRating={productDetail.rating.rate}
										emptySymbol={
											<AiOutlineStar className="is-color-red-Light font-24" />
										}
										placeholderSymbol={
											<AiFillStar className="is-color-red-Light font-24" />
										}
										fullSymbol={
											<AiFillStar className="is-color-red-Light font-24" />
										}
									/>
								</div>
								<div className="is-text font-12">
									category : {productDetail.category}
								</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
