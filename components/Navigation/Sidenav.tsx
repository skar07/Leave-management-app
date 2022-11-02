import React from 'react';
import Image from 'next/image'

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
			<span className={styles.options}>Leave management</span>
			<span className={styles.options}>Log out</span>
		</div>
	)
}