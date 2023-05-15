import { FC } from 'react'

import ProfileArea from '../../profile-area/ProfileArea'
import MyLayout from '../my-layout/MyLayout'

const MyMain: FC = () => {
	return (
		<MyLayout>
			<ProfileArea />
		</MyLayout>
	)
}

export default MyMain
