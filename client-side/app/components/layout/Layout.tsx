import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import style from './layout.module.scss'
import Meta from './seo/Meta'
import { IMeta } from './seo/meta.interface'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	locale,
	children,
	isSidebar = true
}) => {
	return (
		<Meta title={title} description={description} locale={locale}>
			<div className={style.layout}>
				<Header />
				{isSidebar && <Sidebar />}
				<section className={isSidebar ? style.section_bar : ''}>
					{children}
				</section>
			</div>
		</Meta>
	)
}

export default Layout
