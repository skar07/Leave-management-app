import React from 'react';
import { Columns } from '../../data/table';

import styles from '../../styles/table/column.module.css'

export const TableColumn: React.FC<TableColumnProps> = () => {
	return (
		<tr>
			
				{
					Columns
						.map((data) => (
							<th key={data.id} className={styles.container}>{data.name}</th>
						))
				}
		</tr>
	)
}