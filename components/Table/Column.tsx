import React from 'react';
import { Columns } from '../../data/table';

export const TableColumn: React.FC<TableColumnProps> = () => {
	return (
		<tr>
			
				{
					Columns
						.map((data) => (
							<th key={data.id}>{data.name}</th>
						))
				}
		</tr>
	)
}