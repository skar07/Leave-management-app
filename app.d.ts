/** Store types/interfaces */
interface UserStore {
	isAuthenticated: boolean;
	refresh_token?: string;
	expires_in?: number;
	choice?: string;
};
interface TableStore {
	isChoice: string;
	result: Array<object>
};

/** Layout component types/interfaces */
interface LayoutProps {
	title: string;
	children: React.ReactComponentElement;
}

/** Table component types/interfaces */
type ColumnObject = {
	name: string,
	id: number
};

type TableColumnProps = {
	Columns?: Array<ColumnObject>
};

type RowObject = {
	id: number;
	start_date: string;
	end_date: string;
	type: string;
	reason: string;
}

type TableRowProps = {
	map?: any;
	data: Array<RowObject> | Object[];
}

/** Filter component types/interfaces */
interface ChoiceResponse {
	id: number;
	created_at: string;
	start_date: string;
	end_date: string;
	user_id: string;
	reason: string | null;
}

type FilterProps = {
	choice?: string;
}

type FilterChoice = 'currentMonth' | 'lastMonth' | 'lastSixMonths' | 'lastOneYear' | 'customDates';