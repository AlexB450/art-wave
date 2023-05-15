import { BsFacebook, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import { IProfileItem } from '@/app/types/profile-item.interface'

export const contactsData: IProfileItem[] = [
	{
		name: 'phone',
		value: '+74951234567',
		Icon: BsWhatsapp
	},
	{
		name: 'facebook',
		value: 'facebook.com',
		Icon: BsFacebook
	},
	{
		name: 'email',
		value: 'example@mail.ru',
		Icon: MdOutlineAlternateEmail
	},
	{
		name: 'youtube',
		value: 'youtube.com',
		Icon: BsYoutube
	}
]
