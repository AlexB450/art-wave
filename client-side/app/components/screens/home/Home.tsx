import { FC } from 'react'

import Layout from '../../layout/Layout'
import CardProduct from '../../ui/card-product/CardProduct'

import style from './home.module.scss'
style
const Home: FC = () => {

	return (
		<Layout title='home' locale='es_ES' description='home description'>
			<CardProduct
				image='/i.webp'
				name='Best Picture'
				description='When using these modifiers, Tailwind will automatically add content:  have to specify it'
				price={12.36}
				rating={4.8}
			/>
		
		</Layout>
	)
}

export default Home
