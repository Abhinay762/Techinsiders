import React from "react";
import Link from "next/link";

export default function WordCountToolContent() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Instantly See How Long Your Writing Really Is
                    </h1>
                    <p className="text-lg mb-6">
                        Let&apos;s face it—sometimes you finish writing something, but you have no clue how long it’ll take someone to actually read it. Whether it’s a blog post, a social caption, or a business email, this tool gives you word count and reading time in seconds. Need help finding what to write in the first place? Try our <Link href="/tools/keyword-suggestion" className="text-indigo-600 underline">Keyword Suggestion Tool</Link> to get started.
                    </p>
                </div>

                {/* Why Bother Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Are You Face Problems or Wasting Your Precious Time on Checking Word Count or Reading Time?</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <p>Here is the solution of your problem and following are the benefits you can get using our Word Count & Read Time Calculator tool:</p>
                        <li><strong className="text-indigo-600">Set Expectations:</strong> Let your readers know what they’re getting into. A 2,000-word report means 7–10 minutes of reading time.
                        </li>
                        <li><strong className="text-indigo-600">Polish Your Content:</strong> Editors and students have word limits. No more guessing or counting manually.
                        </li>
                        <li><strong className="text-indigo-600">Optimize for SEO & Engagement:</strong> Find the right balance for your audience and rank better in search.
                        </li>
                        <li><strong className="text-indigo-600">Time Your Delivery:</strong> Know whether your piece fits a quick read or a deep dive.
                        </li>
                    </ul>
                </div>

                {/* Who Benefits Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Who Can Get Benefits From This Tool?</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong className="text-indigo-600">Writers & Bloggers:</strong> Get clarity on what you’re about to publish.
                        </li>
                        <li><strong className="text-indigo-600">Students:</strong> Stay within assignment guidelines.
                        </li>
                        <li><strong className="text-indigo-600">Content Marketers & SEO Pros:</strong> Use every word strategically.
                        </li>
                        <li><strong className="text-indigo-600">Business Professionals:</strong> Make sure your message lands, not lingers.
                        </li>
                    </ul>
                </div>

                {/* How it works section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">How to Use Word Count & Read Time Calculator?</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>Paste or type your text into the box.</li>
                        <li>Instantly see word, character, sentence, and paragraph counts—plus a reading time estimate.</li>
                        <li>Tweak your text and see the numbers update in real time.</li>
                    </ol>

                    <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Example:</h3>
                        <p className="text-gray-700">
                            Say you paste an article with 1,200 words. The calculator shows:
                            <br />Words: 1,200
                            <br />Reading Time: 6 min (based on 200 words per minute)
                            <br />Characters, Sentences, Paragraphs: All included
                            <br />Perfect for planning and editing.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">How is reading time calculated?</h3>
                            <p className="text-gray-600">We use an average of 200 words per minute. For technical writing, assume slightly longer.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">Why does character or sentence count matter?</h3>
                            <p className="text-gray-600">It helps with platform limits, clarity, and overall readability of your content.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">Is this calculator free?</h3>
                            <p className="text-gray-600">Absolutely. No sign-ups. No limits. Use it as often as you like.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-1">Any tips for making content more readable?</h3>
                            <p className="text-gray-600">Use short sentences, break up paragraphs, and always check your word count before publishing!</p>
                        </div>
                    </div>
                </div>

                {/* Pro Tip Section */}
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-md">
                    <h2 className="text-xl font-semibold text-indigo-800 mb-2">One Last Tip:</h2>
                    <p>
                        Want to get more done in less time? Save this tool and check your content before you send it out. Your readers—and your deadlines—will thank you! Also, don’t forget to check out our <Link href="/" className="text-indigo-600 underline">Homepage</Link> for more free tools and resources.
                    </p>
                </div>
            </div>
        </section>
    );
}
