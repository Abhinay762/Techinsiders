"use client";

import { useState } from "react";
import { Search, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import KeywordToolContent from "./content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KeywordSuggestion {
  word: string;
  score?: number;
}

export default function KeywordSuggestionPage() {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Fetch keyword suggestions using Datamuse API
  const fetchSuggestions = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.datamuse.com/words?ml=${encodeURIComponent(keyword)}&max=50`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  // Copy a suggestion keyword to clipboard with feedback
  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Keyword Suggestion Tool</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover related keywords and long-tail suggestions powered by Datamuse API
          </p>
        </div>
        <Card className="mb-8 border-0 shadow-xl bg-white/95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              Start Typing Below
            </CardTitle>
            <CardDescription>
              Discover keyword suggestions based on meaning and context
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="e.g., digital marketing, productivity, app development..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchSuggestions()}
                className="flex-1"
              />
              <Button
                onClick={fetchSuggestions}
                disabled={loading || !keyword.trim()}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="ml-2">Searching...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span className="ml-2">Search</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* === Suggestions Results === */}
        {suggestions.length > 0 && (
          <Card className="border-0 shadow-xl bg-white/90 mb-8">
            <CardHeader>
              <CardTitle>
                Keyword Suggestions ({suggestions.length})
              </CardTitle>
              <CardDescription>Click any word to copy to clipboard</CardDescription>
              <CardDescription className="text-sm text-gray-500 mt-2">
                <strong>Note:</strong> The <strong>“Score”</strong> shown is a relative relevance score provided by the Datamuse API.
                It does not represent actual search volume, CPC, or SEO difficulty. Use it only as a general indicator for relatedness.&nbsp;
                <Link
                  href="/blogs/what-is-score"
                  className="text-blue-600 hover:underline"
                >
                  What is Score?
                </Link>
              </CardDescription>

            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 cursor-pointer group transition"
                    onClick={() => copyToClipboard(suggestion.word, index)}
                    title="Click to copy"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") copyToClipboard(suggestion.word, index);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-xs">
                        {index + 1}
                      </Badge>
                      <span className="text-gray-800 font-medium">
                        {suggestion.word}
                      </span>
                      {suggestion.score !== undefined && (
                        <Badge variant="outline" className="text-xs">
                          Score: {suggestion.score}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-shrink-0"
                      aria-label="Copy keyword"
                    >

                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* === No Results Found === */}
        {!loading && suggestions.length === 0 && keyword && (
          <Card className="border-0 shadow-xl bg-white/80 mb-8">
            <CardContent className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                No suggestions found
              </h3>
              <p className="text-gray-500">
                Try a different keyword or check your spelling.
              </p>
            </CardContent>
          </Card>
        )}
        <KeywordToolContent />
      </div>
    </div>
  );
}
