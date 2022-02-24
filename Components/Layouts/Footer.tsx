import React, { FC } from 'react';

const Footer: FC = () => {
	return (
		<footer className="container-fluid">
			<div className="row">
				<div className="col-12">
					<p className="text-center">1400 @ vitrin net footer</p>
				</div>
			</div>
		</footer>
	);
};

export default React.memo(Footer);
