import { AiFillHeart } from 'react-icons/ai'
import { FaBell } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi'

import { IButton } from './button.interface'

export const buttonsData: IButton[] = [
	{
		name: 'cart',
		icon: HiShoppingBag
	},
	{
		name: 'likes',
		icon: AiFillHeart
	},
	{
		name: 'notify',
		icon: FaBell
	}
]
