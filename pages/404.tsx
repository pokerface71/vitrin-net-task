import { MainLayout } from 'Components';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
	return (
		<MainLayout>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<p className="text-center">4 0 4 - not found your search</p>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default NotFound;
