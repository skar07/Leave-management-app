import { client } from '../../app/graphql';
import { gql } from '@apollo/client';
import React from 'react';
import { TypeInfo } from 'graphql';

type Handlefunctype<T> = T extends Array<infer ArrayType> ? ArrayType : T;

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
var date = new Date();
var curr_date = date.getDate();
var curr_month = date.getMonth(); //Months are zero based
var curr_year = date.getFullYear();
export const handleCurrentMonth = ():any => {
	var firstDay = curr_year + "-" + curr_month + "-" + 1;
	var lastDay = curr_year + "-" + (curr_month + 1) + "-" + 1;
	client
		.query({
			query: FILTER_QUERY,
			variables: {
				start_date: "2022-10-01",
				end_date: "2022-11-20"
			}
		})
		.then(response => {
			if (response?.data){
				console.log(response?.data?.filter)
				return response?.data?.filter
			}
			return [{ result: "None found" }]
		})
	
}

export const handleLastMonth = (): any => {
	var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
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

export const handleLastSixMonths = (): any => {
	var firstDay = new Date(date.getFullYear(), date.getMonth() - 6, 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
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
export const handleLastOneYear = (): any => {
	var firstDay = new Date(date.getFullYear() - 1, date.getMonth(), 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
export const handleCustomDates = (): any => {
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