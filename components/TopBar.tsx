import React from 'react';

import styles from '../styles/topbar.module.css'

export const TopBar: React.FC<any> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bodycontainer}>
				<div className={styles.leavestaken}>
					<span className={styles.totalnumber}>10</span>
					Leaves taken
				</div>
				<div className={styles.upcoming}>
					<span className={styles.upcomingnumber}>10</span>
					Upcoming leaves
				</div>
				<div className={styles.pastleaves}>
					<span className={styles.pastnumber}>10</span>
					Past leaves
				</div>
			</div>
		</div>
	)
}