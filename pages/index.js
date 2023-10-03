import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

const NAME = 'Peniel Mesele';

export default function Home() {
	return (
		<Layout>
			<header className={styles.header}>
				<>
					<Image
						priority
						src="static/profile.jpg"
						className={utilStyles.borderCircle}
						height={244}
						width={244}
						alt=""
					/>
					<h1 className={utilStyles.heading2Xl}>{NAME}</h1>
				</>
			</header>
		</Layout>
	);
}
