import { MainLayout, ProductCard } from 'Components';
import { NextPage, GetServerSideProps } from 'next';
import { getProductList } from 'Services/products/product.Service';
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const products = await getProductList();
		return {
			props: {
				productList: products,
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
interface IProductsListProps {
	productList: IProduct[];
}
const index: NextPage<IProductsListProps> = ({ productList }) => {
	return (
		<MainLayout metaName={metaDetail} pageTitle="vitrin net products">
			<div className="container">
				<div className="row">
					{productList &&
						productList.map((product) => (
							<ProductCard
								key={product.id}
								classList="col-6 col-md-3 mb-3"
								productDetail={product}
							/>
						))}
				</div>
			</div>
		</MainLayout>
	);
};

export default index;
