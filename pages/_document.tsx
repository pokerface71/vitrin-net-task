import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="theme-color" content="#0c4dad" />
					<meta name="author" content="esmaeiljafari1992@gmail.com" />
					<meta name="apple-mobile-web-app-title" content="vitrin net" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="msapplication-TileColor" content="#da532c" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
		};
	}
}

export default MyDocument;
