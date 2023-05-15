/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	async redirects() {
		return [
			{
				source: '/my',
				destination: '/my/main',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
