import { IProfileItem } from '../types/profile-item.interface'

type TContact = Pick<IProfileItem, 'name' | 'value'>

export const formatToHref = (contact: TContact): string => {
	if (contact.name === 'phone') return `tel:${contact.value}`
	if (contact.name === 'email')
		return `mailto:${contact.value}?subject=question`
	return `https://${contact.value}`
}

// tel:
// mailto: subject
// https://
// <a href='mailto:2laartmorozov@gmail.com?body=my 2@la.com'>2la</a>
// 			<a href='tel:+79001111111'>+7-900-111-11-11</a>
