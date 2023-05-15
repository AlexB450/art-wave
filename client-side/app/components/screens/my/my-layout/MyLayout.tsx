import { FC, PropsWithChildren } from 'react'

import MyMenu from './menu/MyMenu'
import style from './my-layout.module.scss'
import Layout from '@/app/components/layout/Layout'

const MyLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout locale='en_ES' title='my' isSidebar={false}>
			<div className={`my_section ${style.my_layout}`}>
				<h1 className='profile_block'>Welcome Art shop official</h1>
				{children}
				<MyMenu />
			</div>
		</Layout>
	)
}

export default MyLayout
