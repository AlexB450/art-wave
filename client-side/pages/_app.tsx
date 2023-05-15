import { AppProps } from 'next/app'

import '@/app/assets/styles/globals.scss'
import { store } from '@/app/store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store} >
			<Component {...pageProps} />
		</Provider>
	)
	
}
