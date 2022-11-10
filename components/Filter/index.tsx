import React, { ReactElement } from 'react';
import styles from '../../styles/filter.module.css'
import { UserStore } from '../../app/store';

const FilterChoiceComponents: Record<
	FilterChoice,
	JSX.Element
> = {
	currentMonth: <p>Current Month</p>,
	lastMonth: <p>Last Month</p>,
	lastSixMonths: <p>Last 6 months</p>,
	lastOneYear: <p>Last 1 year</p>,
	customDates: <p>Custom dates</p>
}

export const Filter: React.FC<FilterProps> = () => {
	const [searchChoice, setSearchChoice] = React.useState("choice");
	return (
		<div className={styles.container}>
			<select className={styles.elements}
				onChange={
					(value) => {
						setSearchChoice(value.target.value as FilterChoice)
						UserStore.update(s => {
							s.choice = searchChoice
						})
					}
				}
			>
				{
					Object
						.keys(FilterChoiceComponents)
						.map((func: any) =>
							<option value={func}>{func}</option>
						)
				}
			</select>
		</div>
	)
}