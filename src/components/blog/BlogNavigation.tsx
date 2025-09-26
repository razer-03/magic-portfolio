"use client";

import { useState, useEffect } from "react";
import { Column, Row, Text, Button } from "@once-ui-system/core";
import Link from "next/link";

interface BlogTOCProps {
  content: string;
}

export function BlogTableOfContents({ content }: BlogTOCProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  
  useEffect(() => {
    // Extract headings from the MDX content
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const matches = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      
      matches.push({ id, text, level });
    }
    
    setHeadings(matches);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <Column 
      padding="20" 
      radius="m" 
      border="neutral-alpha-weak" 
      background="neutral-alpha-weak" 
      gap="16"
      marginBottom="32"
    >
      <Text variant="label-strong-s" onBackground="neutral-strong">
        📖 Table of Contents
      </Text>
      <Column gap="8">
        {headings.map((heading, index) => (
          <Button
            key={index}
            href={`#${heading.id}`}
            variant="tertiary"
            size="s"
            style={{ 
              justifyContent: 'flex-start',
              paddingLeft: `${(heading.level - 2) * 16 + 12}px`,
              fontSize: '14px',
              fontWeight: heading.level === 2 ? '600' : '400'
            }}
          >
            {heading.text}
          </Button>
        ))}
      </Column>
    </Column>
  );
}

interface BlogNavigationProps {
  allPosts: Array<{ slug: string; metadata: { title: string; tag?: string } }>;
  currentSlug: string;
}

export function BlogNavigation({ allPosts, currentSlug }: BlogNavigationProps) {
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <Column gap="24" marginTop="48" paddingTop="32" borderTop="neutral-alpha-weak">
      {/* Related Topics */}
      <Column gap="16">
        <Text variant="label-strong-s" onBackground="neutral-medium">
          🏷️ Explore Related Topics
        </Text>
        <Row gap="8" wrap>
          {Array.from(new Set(allPosts.map(post => post.metadata.tag).filter(Boolean))).map((tag) => (
            <Link key={tag} href={`/blog#${tag?.toLowerCase().replace(/\s+/g, '-')}`}>
              <Button variant="secondary" size="s">
                {tag}
              </Button>
            </Link>
          ))}
        </Row>
      </Column>

      {/* Previous/Next Navigation */}
      {(prevPost || nextPost) && (
        <Column gap="16">
          <Text variant="label-strong-s" onBackground="neutral-medium">
            📚 Continue Reading
          </Text>
          <Row gap="16" s={{ direction: "column" }}>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} style={{ flex: 1 }}>
                <Button variant="secondary" fillWidth>
                  ← {prevPost.metadata.title}
                </Button>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} style={{ flex: 1 }}>
                <Button variant="secondary" fillWidth>
                  {nextPost.metadata.title} →
                </Button>
              </Link>
            )}
          </Row>
        </Column>
      )}

      {/* Back to Blog */}
      <Row horizontal="center" marginTop="16">
        <Link href="/blog">
          <Button variant="primary" size="s">
            ← Back to All Posts
          </Button>
        </Link>
      </Row>
    </Column>
  );
}