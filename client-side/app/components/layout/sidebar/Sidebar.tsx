import React, { FC, useState } from 'react'

import { sidebarData } from './sidebar.data'
import style from './sidebar.module.scss'

const initialState = () =>
	sidebarData.reduce(
		(prev, cur) => Object.assign(prev, { [cur.name]: true }),
		{}
	)

interface IToggles {
	[key: string]: boolean
}
const Sidebar: FC = () => {
	const [toggles, setToggles] = useState<IToggles>(initialState())
	return (
		<div className={style.sidebar}>
			{sidebarData.map(category => (
				<div key={category.name}>
					<button
						className={style.category}
						onClick={() =>
							setToggles(prev => ({
								...prev,
								[category.name]: !prev[category.name]
							}))
						}
					>
						{category.name}
					</button>
					{toggles[category.name] && (
						<ul>
							{category.types.map(item => (
								<li key={item}>
									<label>
										<input type='checkbox' /> {item}
									</label>
								</li>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	)
}

export default React.memo(Sidebar)
