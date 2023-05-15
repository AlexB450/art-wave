import { FC } from 'react'

import AuthLayout from '../auth-layout/AuthLayout'

import Form from '@/app/components/ui/form-items/from/Form'
import Input from '@/app/components/ui/form-items/input/Input'

const SignUp: FC = () => {
	return (
		<AuthLayout>
			<Form defaultValues={{}} onSubmit={data => console.log(data)}>
				<h2>Sign In</h2>
				<Input name='name' />
				<Input name='email' />
				<Input name='password' />
				<button> Submit</button>
			</Form>
		</AuthLayout>
	)
}
export default SignUp
