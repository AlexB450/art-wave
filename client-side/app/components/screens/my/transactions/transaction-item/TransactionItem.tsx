import { FC } from 'react'
import { CiCalendarDate } from 'react-icons/ci'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbCircleArrowRight } from 'react-icons/tb'

import style from './item.module.scss'
import { COLORS } from '@/app/config/color.config'
import { ITransaction } from '@/app/types/transaction.interface'
import { formatToCurrency } from '@/app/utils/format-to-currency'

interface ITransactionItem extends ITransaction {}

const TransactionItem: FC<ITransactionItem> = ({
	amount,
	isIncreased,
	date
}) => {
	return (
		<div className={style.item}>
			<div className={style.col_first}>
				<span
					style={{
						backgroundColor: isIncreased ? COLORS.green : COLORS.blue
					}}
				>
					{isIncreased ? <FaRegMoneyBillAlt /> : <TbCircleArrowRight />}
				</span>
				<div>{isIncreased ? ' expense' : 'income'}</div>
			</div>
			<div className={style.col_second}>
				<span>
					<CiCalendarDate />
				</span>
				<div>{date}</div>
			</div>
			<div>{formatToCurrency(amount)}</div>
		</div>
	)
}

export default TransactionItem
