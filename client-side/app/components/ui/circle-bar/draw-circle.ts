import { ICircleExtends } from './circle.interface'
import { COLORS } from '@/app/config/color.config'

export const drawCircle = ({
	size,
	percent,
	color,
	ctx
}: ICircleExtends): void => {
	const lineWidth: number = Math.floor(size * 2 * 0.08)
	const angleEnd: number = percent / 100
	const arc: number = 2 * Math.PI

	ctx.scale(1, 1)
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.strokeStyle = COLORS.gray
	ctx.lineWidth = lineWidth

	ctx.arc(size, size, size - lineWidth, 0, arc, false)
	ctx.stroke()
	ctx.beginPath()
	ctx.strokeStyle = color
	ctx.arc(size, size, size - lineWidth, 0, arc * angleEnd, false)
	ctx.stroke()
}
