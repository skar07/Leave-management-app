import React from 'react';

import { handleCurrentMonth, handleLastMonth, handleLastSixMonths, handleLastOneYear, handleCustomDates } from './filterItems';

export type FilterProps = {
	choice?: string;
	toLowerCase(): any;
}

export const Filter: React.FC<FilterProps> = ({ choice = 'currentMonth' }) => {
	const [searchChoice, setSearchChoice] = React.useState(choice)
	const [searchResult, setSearchResult] = React.useState<any>()
	React.useEffect(() => {
		switch (searchChoice.toLowerCase()) {
			case "currentmonth":
				setSearchResult(handleCurrentMonth());
				console.log(searchResult)
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