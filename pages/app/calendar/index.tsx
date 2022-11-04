import React from 'react'
import Calendar from 'react-calendar';

import { Layout } from '../../../components/Layout';

export default function LeaveCalendar() {
	const [value, onChange] = React.useState(new Date());

	return (
		<Layout title='Calendar'>
			<Calendar onChange={onChange} value={value} />
		</Layout>
	)
}