interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'bloodnighttw', // Site author
	title: "bloodnighttw's blog", // Site title.
	description: 'Welcome here! Nice to meet you!', // Description to display in the meta tags
	lang: 'zh-TW',
	ogLocale: 'zh-TW',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
