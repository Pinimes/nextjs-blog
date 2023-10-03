import Head from 'next/head';
import styles from './layout.module.css';
import BackToHomeBtn from './back_to_home';
import Menu from './menu';

export const siteTitle = 'Peniel mesele';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="my personal website" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<script
					src="https://kit.fontawesome.com/fbadad80a0.js"
					crossOrigin="anonymous"
				></script>
			</Head>
			<Menu />
			<main>{children}</main>
			{!home && <BackToHomeBtn />}
		</div>
	);
}
