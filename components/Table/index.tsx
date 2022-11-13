import React, { useEffect } from 'react';
import { TableColumn } from './Column';
import { TableRow } from './Row';

import styles from '../../styles/table/table.module.css'
import { UserStore } from '../../app/store';
import {
	handleCurrentMonth,
	handleLastMonth,
	handleLastSixMonths,
	handleLastOneYear,
	handleCustomDates
} from './../Filter/filterItems';

const TableResultComponents: Record<
	FilterChoice,
	() => ReturnType<typeof handleCurrentMonth>
> = {
	currentMonth: handleCurrentMonth,
	lastMonth: handleCurrentMonth ,
	lastSixMonths: handleCurrentMonth,
	lastOneYear: handleCurrentMonth,
	customDates: handleCurrentMonth
}

export const Table = () => {
	const isChoice = UserStore.useState(s => s.choice);
	useEffect(() => {
		console.log(isChoice)
	}, [isChoice])
	return <table className={styles.container}>
		<div className={styles.elements}>
			<TableColumn />
			{
				Object
					.keys(TableResultComponents)
					.filter(key => {
						if (isChoice === key) {
							const result = handleCurrentMonth()
							console.log(result)
							return <TableRow data={result} />
						}
					})
			}
		</div>

	</table>
}

