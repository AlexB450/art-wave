import { FC } from 'react'

import { contactsData } from './contacts.data'
import style from './contacts.module.scss'
import { IProfileItem } from '@/app/types/profile-item.interface'
import { formatToHref } from '@/app/utils/format-to-href'

const ContactsItem: FC<IProfileItem> = ({ Icon, name, value }) => {
	return (
		<div className={style.item}>
			<span>
				<Icon />
			</span>
			<a
				target='_blank'
				className={style.short_text}
				href={formatToHref({ name, value })}
			>
				{value}
			</a>
		</div>
	)
}
const ProfileContacts: FC = () => {
	return (
		<div className={`profile_block max-sm:pb-1`}>
			<div className={style.contacts}>
				{contactsData.map(item => (
					<ContactsItem {...item} key={item.name} />
				))}
			</div>
		</div>
	)
}

export default ProfileContacts
