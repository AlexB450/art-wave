import { FC } from 'react'

import { profileInfoData } from './info.data'
import style from './profile-info.module.scss'
import { IProfileItem } from '@/app/types/profile-item.interface'

const ProfileInfoItem: FC<IProfileItem> = ({ Icon, name, value }) => {
	return (
		<div className={style.item}>
			<span className={style.icon_wrapper}>
				<Icon />
			</span>
			<span>
				{name} {':'}
			</span>
			<span> {value}</span>
		</div>
	)
}

const ProfileInfo: FC = () => {
	return (
		<div className={`profile_block ${style.profile_info}`}>
			{profileInfoData.map(item => (
				<ProfileInfoItem {...item} key={item.name} />
			))}
		</div>
	)
}

export default ProfileInfo
