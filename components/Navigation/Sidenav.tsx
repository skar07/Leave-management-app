import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import styles from '../../styles/sidenav.module.css'

export const SideNav: React.FC<any> = () => {
	return (
		<div className={styles.container}>
			<Image
				width={300}
				height={200}
				src=''
				alt='Logo'
				className={styles.logo}
			/>
			<div className={styles.links}>
				<Link href='/app' legacyBehavior>
					<a className={styles.options}>Leave management</a>
				</Link>
				<Link href='#' legacyBehavior>
					<a className={styles.options}>Log out</a>
				</Link>
			</div>
		</div>
	)
}