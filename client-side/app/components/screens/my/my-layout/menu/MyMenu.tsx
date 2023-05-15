import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { menuData } from './menu.data'
import style from './menu.module.scss'

const MenuItem: FC<{ item: string }> = ({ item }) => {
	return (
		<Link className={`a`} href={`/my/${item}`}>
			{' '}
			{item}
		</Link>
	)
}
const MyMenu: FC = () => {
	const param = usePathname()
	console.log(param)
	return (
		<div className={`profile_block my_section ${style.menu}`}>
			{menuData.map(item => (
				<MenuItem item={item} key={item} />
			))}
		</div>
	)
}

export default MyMenu
