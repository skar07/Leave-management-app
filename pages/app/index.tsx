import React from 'react';

import { Layout } from '../../components/Layout';
import { Filter } from '../../components/Filter';
import { Table } from '../../components/Table';
import styles from '../../styles/table/structure.module.css'

export default function ListingPage() {
	return (
		<Layout title={'Your leaves'}>
			<Filter/>
			<Table />
		</Layout>
	)
}