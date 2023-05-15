import Image from 'next/image'
import { FC } from 'react'

import style from './card-product.module.scss'
import { IProductMedia } from '@/app/types/product.interface'
import { formatToCurrency } from '@/app/utils/format-to-currency'

const formatStrLength = (str: string, length: number) =>
	str.length > length ? (
		<div>
			{str.slice(0, length)} <button> Read more...</button>
		</div>
	) : (
		str
	)

const CardProduct: FC<IProductMedia> = ({
	name,
	description,
	image,
	price,
	rating
}) => {
	return (
		<div className={style.box}>
			<div className={style.header}>
				<Image src={image} alt={name} width={300} height={150} />
				<span className={style.rating}>4.8*</span>
			</div>
			<div className={style.footer}>
				<div>
					<h5 className={style.name}>{name}</h5>
					<div className={style.description}>
						{formatStrLength(description, 45)}
					</div>
				</div>
				<div>
					<div className='price'>{formatToCurrency(price)}</div>
					<button className='btn'>Buy</button>
				</div>
			</div>
		</div>
	)
}

export default CardProduct
