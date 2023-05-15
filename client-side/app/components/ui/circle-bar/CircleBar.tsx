import { FC, MutableRefObject, useEffect, useRef } from 'react'

import style from './circle-bar.module.scss'
import { ICircle } from './circle.interface'
import { drawCircle } from './draw-circle'

const CircleBar: FC<ICircle> = props => {
	const { size, color, title, percent } = props
	const ref: MutableRefObject<HTMLCanvasElement | null> = useRef(null)
	const fontSize: number = (size / 10) * 1.5
	useEffect(() => {
		if (!ref.current) return
		const canvas: HTMLCanvasElement = ref.current
		canvas.style.width = `${size}px`
		canvas.style.height = `${size}px`
		canvas.width = size * 2
		canvas.height = size * 2

		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d')
		if (!ctx) return
		drawCircle({ size, color, ctx, percent })
	}, [ref, props])
	return (
		<div
			className={style.box}
			style={{
				width: `${size}px`
			}}
		>
			<h4
				style={{
					fontSize: ` ${fontSize}px`
				}}
			>
				{title}
			</h4>
			<div>
				<canvas className={style.canvas} ref={ref}></canvas>
				<span
					style={{
						fontSize: ` ${fontSize}px`
					}}
					className={style.percent}
				>
					{percent}%
				</span>
			</div>
		</div>
	)
}

export default CircleBar
