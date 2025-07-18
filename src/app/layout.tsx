import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Techinsiders - Free Digital Tools for Content Creators",
	description:
		"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
	keywords:
		"digital tools, content creation, keyword suggestion, word count, online tools",
	robots: "index, follow",
	authors: [{ name: "Techinsiders Tools" }],
	creator: "Techinsiders Tools",
	publisher: "Techinsiders Tools",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://techinsiders.tech",
		siteName: "Techinsiders Tools",
		description:
			"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
		title: "Techinsiders Tools - Free Digital Tools for Content Creators",
	},
	twitter: {
		card: "summary_large_image",
		title: "Techinsiders Tools - Free Digital Tools for Content Creators",
		description:
			"Your ultimate collection of free digital tools including keyword suggestion and word count calculator",
		creator: "@toolboxpro",
	},
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
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}