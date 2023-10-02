import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';

function BackToHomeBtn() {
	return (
		<div className={styles.backToHome}>
			<Link href="/">← Back to home</Link>
		</div>
	);
}

export default BackToHomeBtn;
