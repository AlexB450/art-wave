import { createSlice } from '@reduxjs/toolkit';
import { productInitial } from './product.initial';

export const productSlice =createSlice(
	{
		name:'products',
		initialState: productInitial,
		reducers:{},
		
	}
)