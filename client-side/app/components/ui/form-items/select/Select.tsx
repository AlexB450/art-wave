import { FC } from 'react'

const Select: FC<any> = ({ register, options, name, ...rest }) => {
	return (
		<select {...register(name)} {...rest}>
			{options.map(value => (
				<option key={value} value={value}>
					{value}
				</option>
			))}
		</select>
	)
}

export default Select
