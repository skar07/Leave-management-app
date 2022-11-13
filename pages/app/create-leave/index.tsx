import React from 'react';
import { Layout } from '../../../components/Layout';
import styles from '../../../styles/createleave.module.css'
import 'remixicon/fonts/remixicon.css'

export default function createLeave() {
	return (
		<Layout title={'Your leaves'}>
			<div className={styles.container}>
				<div className={styles.leaveinput}>
					<span className={styles.heading}>
						<i className='ri-file-list-3-fill ml-5 mr-3' />
						<h3>Leave Application</h3>
					</span>
					<label className={styles.options}>
						<p className={styles.labels}>From</p>
						<select><option>16</option></select>
						<select><option>Oct</option></select>
						<select><option>2022</option></select>
					</label>
					<label className={styles.options}>
						<p className={styles.labels}>To</p>
						<select><option>16</option></select>
						<select><option>Oct</option></select>
						<select><option>2022</option></select>
					</label>
					<label>
						<p className={styles.labels}>No of Days</p>
						<select><option>3</option></select>
					</label>
					<label>
						<p className={styles.labels}>Leave Type</p>
						<select><option>Sick leave</option></select>
					</label>
					<textarea placeholder='Type Reason here...' />
				</div>
			</div>
		</Layout>
	)
}