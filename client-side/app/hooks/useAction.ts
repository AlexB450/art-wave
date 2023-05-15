import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

// import { favoritesActions } from '@/store/favorites/favorites.slice'
// import { productActions } from '@/store/product/product.slice'

// import * as fetchUserById from '../store/user/user.actions'
import { AppDispatch } from '../store/store'

const rootActions = {

}

export const useAction = () => {
	const dispatch: AppDispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
