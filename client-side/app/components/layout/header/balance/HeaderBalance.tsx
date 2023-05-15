import { FC } from 'react'
import { BiCoinStack } from 'react-icons/bi'

import style from './header-balance.module.scss'
import { formatToCurrency } from '@/app/utils/format-to-currency'

const HeaderBalance: FC = () => {
	return (
		<div className={style.box}>
			<BiCoinStack className={style.coin} />
			Coin: {formatToCurrency(25624)}
		</div>
	)
}

export default HeaderBalance
