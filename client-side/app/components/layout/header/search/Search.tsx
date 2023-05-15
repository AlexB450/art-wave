import { FC } from 'react'
import { BsSliders } from 'react-icons/bs'
import { RiSearch2Line } from 'react-icons/ri'

import style from './search.module.scss'

const Search: FC = () => {
	return (
		<div className={style.box}>
			<input type='text' placeholder='search...' className={style.input} />
			<button className={style.btn_search}>
				<RiSearch2Line />
			</button>
			<button className={style.btn_slider}>
				<BsSliders />
			</button>
		</div>
	)
}

export default Search
