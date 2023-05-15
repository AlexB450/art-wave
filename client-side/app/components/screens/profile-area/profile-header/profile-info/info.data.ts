import { BsBagCheck, BsBell } from 'react-icons/bs'
import { MdDomainVerification } from 'react-icons/md'
import { RiCoinLine } from 'react-icons/ri'
import { SlUserFollowing } from 'react-icons/sl'

import { IProfileItem } from '@/app/types/profile-item.interface'

export const profileInfoData: IProfileItem[] = [
	{
		name: 'products',
		value: 560,
		Icon: BsBagCheck
	},
	{
		name: 'joined',
		value: '12.01.22',
		Icon: MdDomainVerification
	},
	{
		name: 'followers',
		value: 40,
		Icon: BsBell
	},
	{
		name: 'spent',
		value: '12.03$',
		Icon: RiCoinLine
	},
	{
		name: 'followings',
		value: 2,
		Icon: SlUserFollowing
	}
]
