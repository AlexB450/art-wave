import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'

import style from './input.module.scss'

interface IInput {
	register?: UseFormReturn['register']
	name: string
}

const Input: FC<IInput> = ({ register, name, ...rest }) => {
	if (register)
		return (
			<input
				className={style.input}
				placeholder={`Enter ${name}`}
				{...register(name)}
				type={name}
				{...rest}
			/>
		)
	return <div>Input Error</div>
}

export default Input
// UseFormReturn['register']
