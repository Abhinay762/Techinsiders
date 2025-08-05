import React from "react";

export const metadata = {
  title: "About Us - Techinsiders",
  description:
    "Learn more about Techinsiders — your trusted source for free digital tools for content creators and bloggers.",
};

export default function AboutPage() {
  return (
    <div>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>Techinsiders Tool</strong> — your go-to destination for a curated
          collection of powerful, free digital tools made specifically for content
          creators, bloggers, digital marketers, and SEO professionals.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At Techinsiders, we believe great content deserves great support tools.
          Our mission is to empower digital creators with intuitive, ad-free, and
          reliable utilities that simplify your workflow — whether you are optimizing
          your blog posts, finding the right keywords, or calculating content metrics.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Free Keyword Suggestion Tools</li>
          <li>Word & Character Count Calculator</li>
          <li>Online Content Optimization Utilities</li>
          <li>And many more helpful resources for digital creators</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Why Choose Us?</h2>
        <p className="text-gray-700 mb-4">
          Unlike bloated platforms filled with ads and upsells, Techinsiders is
          designed to be fast, focused, and free. We are built by creators, for creators
          — because we know what it feels like to need simple, trustworthy tools
          without the hassle.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">Contact Us</h2>
        <p className="text-gray-700">
          Got suggestions, ideas, or want to collaborate? Reach out at{" "}
          <a
            href="mailto:techinsiderstech@gmail.com"
            className="text-blue-600 underline"
          >
            techinsiderstech@gmail.com
          </a>{" "}
          — we&apos;d love to hear from you!
        </p>

      </main>
    </div>
  );
}
