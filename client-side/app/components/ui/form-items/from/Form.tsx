import React, { FC, PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import style from './form.module.scss'

interface IEd {
	defaultValues: object
	onSubmit: (data: object) => void
}

const Form: FC<PropsWithChildren<IEd>> = ({
	defaultValues,
	children,
	onSubmit
}) => {
	const { register, handleSubmit } = useForm({ defaultValues })

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.form}>
			{Array.isArray(children)
				? children.map(child => {
						return child.props.name
							? React.createElement(child.type, {
									...{
										...child.props,
										register,
										key: child.props.name
									}
							  })
							: child
				  })
				: children}
		</form>
	)
}

export default Form
