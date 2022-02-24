import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';

import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import '../styles/main.scss';
// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;
