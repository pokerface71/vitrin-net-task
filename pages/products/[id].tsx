import { CustomImage, MainLayout } from 'Components';
import { GetServerSideProps, NextPage } from 'next';
import { getProductDetail } from 'Services/products/product.Service';
import {
	AiFillStar,
	AiOutlineShoppingCart,
	AiOutlineStar,
} from 'react-icons/ai';
import Rating from 'react-rating';
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const { id } = query;
	try {
		const products = id ? await getProductDetail(+id) : null;
		return {
			props: {
				productDetail: products,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
const metaDetail = [
	{
		name: 'description',
		content: 'products ....',
	},
];
interface IProductDetailProps {
	productDetail: IProduct;
}
const Products: NextPage<IProductDetailProps> = ({ productDetail }) => {
	return (
		<MainLayout
			pageTitle={`vitrin net- ${productDetail.title}`}
			metaName={metaDetail}
		>
			{/* script add schema breadcrumb */}
			{/* <Head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schemaBreadcrumb)
					}}
				/>
			</Head> */}
			<div className="container">
				<div className="card is-main-shadow is-border-radius-md p-3">
					<div className="card-body is-border-radius-md">
						<div className="row">
							<div className="col-12 col-md-4">
								<CustomImage
									src={productDetail.image}
									width={300}
									height={300}
								/>
							</div>
							<div className="col-12 col-md-8">
								<div className="row justify-content-md-between">
									<div className="col-12 col-md-6">
										<h1 className="card-title font-24 font-weight-bolder">
											{productDetail.title}
										</h1>
									</div>
									<div className="col-12 col-md-6">
										{' '}
										<div className="d-flex justify-content-md-end">
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
									</div>
								</div>
								<p className="is-gray">{productDetail.category}</p>
								<strong className="font-18 is-text">
									{productDetail.price} $
								</strong>
								<p className="font-weight-bolder mt-3">DESCRIPTION :</p>
								<p className="is-gray">{productDetail.description}</p>
								<button className="btn btn-rounded btn-main px-3 py-2 mt-3 is-main-shadow">
									<AiOutlineShoppingCart className="text-white font-24" />
									<span className="text-white"> add to Cart</span>{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Products;
