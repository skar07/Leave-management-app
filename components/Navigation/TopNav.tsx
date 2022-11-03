import React from 'react';
import Link from 'next/link';

import styles from '../../styles/topnav.module.css'

export const TopNav: React.FC<any> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<input type='text' placeholder='Search' className={styles.input} />
			</div>
			<div className={styles.subnav}>
				<div className={styles.links}>
					<Link href='/app' legacyBehavior>
						<a className={styles.linkeffect}>Your leaves</a>
					</Link>
					<Link href='/app/calendar' legacyBehavior>
						<a className={styles.linkeffect}>Calendar</a>
					</Link>
					<Link href='/app/create' legacyBehavior>
						<a className={styles.linkeffect}>Create a leave</a>
					</Link>
				</div>

			</div>
		</div>
	)
}