import Link from 'next/link'
import { FC } from 'react'
import { TbLayoutGrid } from 'react-icons/tb'

import style from './header-profile.module.scss'

const HeaderProfile: FC = () => {
	return (
		<div className={style.box}>
			<TbLayoutGrid size={30} />
			<Link href='/my/main'>
				<div className={style.avatar}></div>
			</Link>
		</div>
	)
}

export default HeaderProfile
