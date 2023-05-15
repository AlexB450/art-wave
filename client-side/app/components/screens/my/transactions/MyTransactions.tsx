import { FC } from 'react'

import MyLayout from '../my-layout/MyLayout'

import TransactionItem from './transaction-item/TransactionItem'

const MyTransactions: FC = () => {
	return (
		<MyLayout>
			<h2>My Transactions</h2>
			<div>
				<TransactionItem
					amount={123.5}
					date='May 12 2023'
					isIncreased={false}
				/>
				<TransactionItem
					amount={560.54}
					date='December 20 2022'
					isIncreased={true}
				/>
			</div>
		</MyLayout>
	)
}

export default MyTransactions
