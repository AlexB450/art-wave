import React, { FC } from 'react'

import Link from 'next/link'
import HeaderBalance from './balance/HeaderBalance'
import HeaderButtons from './buttons/HeaderButtons'
import style from './header.module.scss'
import HeaderProfile from './profile/HeaderProfile'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<div className={style.header}>
			<div className={style.colum}>
				<Link href={'/'} className={style.logo}>
					<span>Art</span>
					<span>wave</span>
				</Link>
				<Search />
				<HeaderBalance />
			</div>
			<div className={style.colum}>
				<HeaderButtons />
				<HeaderProfile />
			</div>
		</div>
	)
}

export default React.memo(Header)
