import Footer from '@components/Footer';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metaData = {
	title: 'ML Promptopia',
	description: 'Discover & Share AI Promots',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/assets/images/logo.svg" />
			</head>
			<body>
				<Provider>
					<div className="main">
						<div className="gradient"></div>
					</div>
					<main className="app">
						<Nav />
						{children}
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
