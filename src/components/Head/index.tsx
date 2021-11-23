import { ReactChild, ReactNode } from 'react'

import NextHead from 'next/head'

interface IHead {
	title?: string
	description?: string
	keywords: Array<string> | string
	url: string
	children?: ReactNode | ReactChild
}

export default function Head({ title, description, keywords, url }: IHead) {
	const metaTitle = title || 'LEON'
	const metaDescription = description || 'Mantenha-se Saudável'
	const metaKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords

	return (
		<NextHead>
			<meta charSet='UTF-8' />
			<title>{metaTitle}</title>
			<meta name='title' content={metaTitle} />
			<meta name='keywords' content={metaKeywords} />
			<meta name='description' content={metaDescription} />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
				key='viewport'
			/>

			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} key='og:url' />
			<meta property='og:title' content={metaTitle} />
			<meta
				property='og:description'
				content={metaDescription}
				key='og:description'
			/>
		</NextHead>
	)
}
