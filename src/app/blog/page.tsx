import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp, BlogIndex } from "@/components";
import { baseURL, blog, person, newsletter } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const allBlogs = getPosts(["src", "app", "blog", "posts"]);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column paddingX="24" gap="32">
        <Column gap="16">
          <Heading variant="heading-strong-xl">
            {blog.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {blog.description}
          </Text>
        </Column>
        
        <BlogIndex posts={allBlogs} thumbnail />
        
        {newsletter.display && (
          <Mailchimp marginTop="40" />
        )}
      </Column>
    </Column>
  );
}
