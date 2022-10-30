import React from 'react'
import Calendar from 'react-calendar';

export default function LeaveCalendar() {
	const [value, onChange] = React.useState(new Date());

	return(
		<div>
			<Calendar onChange={onChange} value={value} />		
		</div>
	)
}