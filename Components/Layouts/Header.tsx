import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
	return (
		<header className="container">
			<div className="row">
				<div className="col-12">
					<ul className="header-menu">
						<li>
							<Link href="/">
								<a className="is-text"> Home</a>
							</Link>
						</li>
						<li>
							<Link href="/products">
								<a className="is-text">Products</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default React.memo(Header);
