import { MainLayout } from 'Components';
import type { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
	return (
		<MainLayout pageTitle="vitrin net">
			<div className="container-fluid">
				<div className="row">
					<Link href="/products">
						<a className="text-center">test project for vitrin net</a>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
