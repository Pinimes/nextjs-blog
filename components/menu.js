import React from 'react';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

function Menu() {
	return (
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<ul className={utilStyles.list}>
				<li className={utilStyles.listItem}>
					<Link href="/">Home</Link>
					<br />
				</li>
				<li className={utilStyles.listItem}>
					<Link href="/services">Services</Link>
					<br />
				</li>
				<li className={utilStyles.listItem}>
					<Link href="/contact">Contact Me</Link>
					<br />
				</li>

				<li className={utilStyles.listItem}>
					<Link href="/about">About Me</Link>
					<br />
				</li>
			</ul>
		</section>
	);
}

export default Menu;
