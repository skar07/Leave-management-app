import React from 'react';

import {
	handleCurrentMonth,
	handleLastMonth,
	handleLastSixMonths,
	handleLastOneYear,
	handleCustomDates
} from './filterItems';

interface ChoiceResponse {
	id: number;
	created_at: string;
	start_date: string;
	end_date: string;
	user_id: string;
	reason: string | null;
}

export type FilterProps = {
	choice?: string;
}
export type FilterChoice = 'currentMonth' | 'lastMonth' | 'lastSixMonths' | 'lastOneYear' | 'customeDates'

const FilterChoiceComponents: Record<
FilterChoice, 
( fn: () => Array<ChoiceResponse>) => any
> = {
	currentMonth: () => handleCurrentMonth(),
	lastMonth: () => handleLastMonth(),
	lastSixMonths: () => handleLastSixMonths(),
	lastOneYear: () => handleLastOneYear(),
	customeDates: () => handleCustomDates()
}

export const Filter: React.FC<FilterProps> = ({ choice = 'currentMonth' }) => {
	const [searchChoice, setSearchChoice] = React.useState(choice)
	const [searchResult, setSearchResult] = React.useState<any>()
	//Check for ComponentWillMount implementation
	React.useEffect(() => {
		switch (searchChoice.toLowerCase()) {
			case "currentmonth":
				//setSearchResult(handleCurrentMonth());
				setSearchResult(handleCurrentMonth())
				break;
			case "lastmonth":
				setSearchResult(handleLastMonth());
				break;
			case "lastsixmonths":
				setSearchResult(handleLastSixMonths());
				break;
			case "lastoneyear":
				setSearchResult(handleLastOneYear());
				break;
			default:
				setSearchResult(handleCustomDates());
				break;
		}
	}, [searchChoice])

	return (

		<div>

		</div>
	)
}