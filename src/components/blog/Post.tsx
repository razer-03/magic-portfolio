"use client";

import { Card, Column, Media, Row, Avatar, Text, Tag } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="neutral-alpha-weak"
      background="surface"
      padding="20"
      radius="l"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="m"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Column fillWidth paddingY="8" gap="20">
        {/* Tag */}
        {post.metadata.tag && (
          <Tag 
            variant="brand" 
            size="s"
          >
            {post.metadata.tag}
          </Tag>
        )}
        
        {/* Title */}
        <Text variant="heading-strong-l" wrap="balance">
          {post.metadata.title}
        </Text>
        
        {/* Summary */}
        {post.metadata.summary && (
          <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
            {post.metadata.summary}
          </Text>
        )}
        
        {/* Author and Date */}
        <Row gap="16" vertical="center" wrap>
          <Row vertical="center" gap="12">
            <Avatar src={person.avatar} size="xs" />
            <Text variant="label-default-s" onBackground="neutral-medium">
              {person.name}
            </Text>
          </Row>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
        </Row>
      </Column>
    </Card>
  );
}
