import React from 'react';

import styles from '../../styles/table/row.module.css'

export const TableRow: React.FC<TableRowProps> = ({ data }) => {
	return (
		<>
			{

				data
					.map((data: any) => {
						return (<tr className={styles.container}>
							<td key={data.id} className={styles.startdate}>{data.start_date}</td>
							<td key={data.id} className={styles.enddate}>{data.end_date}</td>
							<td key={data.id} className={styles.leavetype}>{data.type}</td>
							<td key={data.id} className={styles.reason}>{data.reason}</td>
						</tr>)
					}
					)

			}
		</>

	)
}