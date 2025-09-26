"use client";

import { useState, useMemo } from "react";
import { Column, Row, Text, Tag, Button, Grid } from "@once-ui-system/core";
import Post from "./Post";

interface BlogPost {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    images: string[];
    tag?: string;
    team: any[];
    link?: string;
  };
  slug: string;
  content: string;
}

interface BlogIndexProps {
  posts: BlogPost[];
  thumbnail?: boolean;
}

export function BlogIndex({ posts, thumbnail = false }: BlogIndexProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Sort blogs by date (newest first)
  const sortedBlogs = useMemo(() => {
    return posts.sort((a, b) => {
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });
  }, [posts]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = posts
      .map(blog => blog.metadata.tag)
      .filter((tag): tag is string => tag !== undefined && tag.trim() !== "")
      .filter((tag, index, array) => array.indexOf(tag) === index) // unique tags
      .sort();
    return tags;
  }, [posts]);

  // Filter blogs by selected tag
  const filteredBlogs = useMemo(() => {
    if (!selectedTag) return sortedBlogs;
    return sortedBlogs.filter(blog => blog.metadata.tag === selectedTag);
  }, [sortedBlogs, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <Column fillWidth gap="32">
      {/* Blog Stats */}
      <Row gap="16" wrap>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">•</Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {allTags.length} topic{allTags.length !== 1 ? 's' : ''}
        </Text>
      </Row>

      {/* Tag Filter */}
      {allTags.length > 0 && (
        <Column gap="16">
          <Text variant="label-strong-s" onBackground="neutral-medium">
            Filter by Topic
          </Text>
          <Row gap="8" wrap>
            <Button
              onClick={() => setSelectedTag(null)}
              size="s"
              variant={selectedTag === null ? "primary" : "secondary"}
              style={{ fontSize: '12px', padding: '8px 12px' }}
            >
              All Posts
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => handleTagClick(tag)}
                size="s"
                variant={selectedTag === tag ? "primary" : "secondary"}
                style={{ fontSize: '12px', padding: '8px 12px' }}
              >
                {tag}
              </Button>
            ))}
          </Row>
        </Column>
      )}

      {/* Results Counter */}
      <Row gap="8" vertical="center">
        <Text variant="body-default-s" onBackground="neutral-weak">
          Showing {filteredBlogs.length} of {posts.length} posts
          {selectedTag && (
            <>
              {' '}in{' '}
              <Text variant="label-strong-s" onBackground="brand-medium">
                {selectedTag}
              </Text>
            </>
          )}
        </Text>
      </Row>

      {/* Blog Posts Grid */}
      {filteredBlogs.length > 0 ? (
        <Grid columns="1" fillWidth gap="24">
          {filteredBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      ) : (
        <Column paddingY="40" horizontal="center" gap="16">
          <Text variant="body-default-l" onBackground="neutral-weak">
            No posts found for this topic.
          </Text>
          <Button onClick={() => setSelectedTag(null)} size="s" variant="secondary">
            View All Posts
          </Button>
        </Column>
      )}
    </Column>
  );
}