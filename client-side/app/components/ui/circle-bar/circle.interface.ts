export interface ICircle {
	size: number
	color: string
	title: string
	percent: number
}
export type CircleOmit = Omit<ICircle, 'title'>
export interface ICircleExtends extends CircleOmit {
	ctx: CanvasRenderingContext2D
}
