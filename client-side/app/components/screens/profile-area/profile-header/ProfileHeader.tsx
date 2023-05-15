import { FC } from 'react'

import ProfileContacts from './contacts/ProfileContacts'
import ProfileCard from './profile-card/ProfileCard'
import style from './profile-header.module.scss'
import ProfileInfo from './profile-info/ProfileInfo'
import CircleBar from '@/app/components/ui/circle-bar/CircleBar'
import { COLORS } from '@/app/config/color.config'

const ProfileHeader: FC = () => {
	return (
		<div className={`my_section ${style.profile_header}`}>
			<div className={style.row_top}>
				<ProfileCard />
				<div className={style.second}>
					<div className={style.second_top}>
						<ProfileInfo />
						<CircleBar
							color={COLORS.green}
							size={100}
							title='Rating'
							percent={88}
						/>
						<CircleBar
							color={COLORS.orange}
							size={100}
							title='Spend'
							percent={53}
						/>
					</div>
					<ProfileContacts />
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader
