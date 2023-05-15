import { FC } from 'react'
import { IconType } from 'react-icons/lib'

import style from '../header-buttons.module.scss'

const ButtonItem: FC<{ Icon: IconType }> = ({ Icon }) => {
	return (
		<button className={style.item}>
			<Icon size={16} />
			<span></span>
		</button>
	)
}

export default ButtonItem
