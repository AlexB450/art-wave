export interface IProduct {
	id: number
	name: string
	description: string
	images: string[]
	rating: number
	price: number
	author: string[]
	seller: string
	likes: boolean
	createdAt: Date | undefined
	slugs: string[]
	reviews: []
}
export interface IProductMedia {
	name: string
	description: string
	image: string
	rating: number
	price: number
}
