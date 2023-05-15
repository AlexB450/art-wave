import { FC, PropsWithChildren } from 'react'

import Layout from '@/app/components/layout/Layout'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Layout
			description='description'
			locale='en_ES'
			isSidebar={false}
			title='auth'
		>
			{children}
		</Layout>
	)
}

export default AuthLayout
