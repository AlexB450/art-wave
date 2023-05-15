import Image from 'next/image'
import { FC } from 'react'
import { BsChatDots, BsPlusCircle, BsShop } from 'react-icons/bs'

import style from './profile-card.module.scss'

const ProfileCard: FC = () => {
	{
	}
	return (
		<div className={`profile_block ${style.card}`}>
			<div className={style.img_wrapper}>
				<Image alt='avatar' src={'/shop.jpg'} width={300} height={175} />

				<div className={style.mask}>
					<div className={style.name}>
						<BsShop />
						<h5> Art shop official </h5>
					</div>
					<div className={style.btn_section}>
						<button className={'btn'}>
							<span>Follow</span>
							<BsPlusCircle />
						</button>
						<button className={'btn'}>
							<span>Chat</span>
							<BsChatDots />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCard
