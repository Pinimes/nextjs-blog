import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import BackToHomeBtn from './back_to_home';
import Menu from './menu';

const name = 'Peniel Mesele';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
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
			<header className={styles.header}>
				{home && (
					<>
						<Image
							priority
							src="static/profile.jpg"
							className={utilStyles.borderCircle}
							height={244}
							width={244}
							alt=""
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && <BackToHomeBtn />}
		</div>
	);
}
