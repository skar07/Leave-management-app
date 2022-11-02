import { client } from '../../app/graphql';
import { gql } from '@apollo/client';

const FILTER_QUERY = gql`
	query FilterQuery($start_date: String, $end_date: String) {
		filter(start_date: $start_date, end_date: $end_date)
		 @rest(type:"Filter", path:"/rest/v1/leaves?start_date=gt.{args.start_date}&end_date=lt.{args.end_date}&select=*"){
			id
			created_at
			start_date
			end_date
			user_id
			reason
		}
	}
`;

export const handleCurrentMonth = (): any  => {
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data)
				return response?.data?.filter
			return [{ result: "None found" }]
		})
}

export const handleLastMonth = () => {
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data)
				return response?.data?.filter
			return { result: "None found" }
		})
}

export const handleLastSixMonths = () => {
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data)
				return response?.data?.filter
			return { result: "None found" }
		})
}
export const handleLastOneYear = () => {
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data)
				return response?.data?.filter
			return { result: "None found" }
		})
}
export const handleCustomDates = () => {
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data)
				return response?.data?.filter
			return { result: "None found" }
		})
}