import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
export interface ILayoutProps {
	children: React.ReactElement | React.ReactElement[];
	pageTitle?: string;
	isFluid?: boolean;
	metaName?: [] | any;
	canonical?: string;
	prev?: string;
	next?: string;
}
const MainLayout = ({
	metaName,
	children,
	pageTitle,
	canonical,
	prev,
	next,
	isFluid = false,
}: ILayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				{metaName &&
					metaName.map((item: {} | any, index: number) => (
						<meta key={index} name={item.name} content={item.content} />
					))}

				{prev ? <link rel="prev" href={prev} /> : null}
				<link rel="canonical" href={canonical} />
				{next ? <link rel="next" href={next} /> : null}
			</Head>
			<div className="">
				<Header />
				<div
					className={`${
						isFluid ? 'container-fluid' : 'container'
					} main-content py-5 main-margin-top`}
				>
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
