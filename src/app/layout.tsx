import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Techinsiders - Free Keyword Suggestion Tool for Bloggers & SEO",
		template: "%s | Techinsiders",
	},
	description:
		"Boost your blog SEO with our free keyword suggestion tool, blog idea generator, and long-tail keyword finder. Designed for bloggers, marketers, and writers.",
	keywords: [
		"digital tools",
		"content creation",
		"keyword suggestion",
		"word count",
		"online tools",
		"SEO tools",
		"blogging tools",
		"writing tools",
		"free writing tools",
		"online keyword generator",
		"AI writing tools",
		"content writing",
		"content optimization tools",
		"read time calculator",
		"character count tool",
		"free productivity tools",
		"long tail keyword finder",
		"blog idea generator",
		"text analysis tools",
		"copywriting tools",
		"digital marketing tools",
		"on-page SEO tools"
	],
	robots: "index, follow",
	authors: [{ name: "Techinsiders Tools" }],
	creator: "Techinsiders Tools",
	publisher: "Techinsiders Tools",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://techinsiders.tech",
		siteName: "Techinsiders",
		title: "Free Keyword Suggestion Tool for Bloggers & SEO | Techinsiders",
		description: "Generate blog topics, find long-tail keywords, and optimize your content for free. No sign-up. Just effective SEO tools.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Keyword Suggestion Tool for Bloggers & SEO | Techinsiders",
		description: "Generate blog topics, find long-tail keywords, and optimize your content for free. No sign-up. Just effective SEO tools.",
		creator: "@toolboxpro",
	}
	,
	verification: {
		google: "4Ic8ui-Mse5xeMn_8861eGbxxdAJA4bOyk4kFWGM86U",
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Google Search Console */}
				<meta
					name='google-site-verification'
					content='4Ic8ui-Mse5xeMn_8861eGbxxdAJA4bOyk4kFWGM86U'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-LZ13CCVLXR'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-LZ13CCVLXR');
					`,
					}}
				/>
				{/* Google AdSense */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1262401891130967"
					crossOrigin="anonymous"
				></script>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}