import React from 'react';
import Head from 'next/head';

import { SideNav } from './Navigation/Sidenav';
import { TopBar } from './TopBar';
import { TopNav } from './Navigation/TopNav';

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className='flex h-screen w-screen bg-gray-100'>
				<SideNav />
				<TopNav/>
				<TopBar />
				{children}
			</div>
		</>
	)
}