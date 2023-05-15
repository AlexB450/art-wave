import { FC } from 'react'

import ButtonItem from './btn-item/ButtonItem'
import { buttonsData } from './buttons.data'
import style from './header-buttons.module.scss'

const HeaderButtons: FC = () => {
	return (
		<div className={style.box}>
			{buttonsData.map(btn => (
				<ButtonItem Icon={btn.icon} key={btn.name} />
			))}
		</div>
	)
}

export default HeaderButtons
