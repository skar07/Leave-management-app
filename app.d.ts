/** Store types/interfaces */
interface UserStore {
	isAuthenticated: boolean;
	id?: string;
	name?: string;
	email?: string;
	refresh_token?: string;
	expires_in?: number;
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
	Rows?: Array<RowObject>
}