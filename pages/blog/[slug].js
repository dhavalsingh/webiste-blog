import {
  Avatar,
  Text,
  Heading,
  Stack,
  Image,
  Tag,
  TagLabel,
  HStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import mdxPrism from 'mdx-prism'
import dateFormat from 'dateformat'
import readingTime from 'reading-time'

import Container from '../../components/Container'
import PostContainer from '../../components/PostContainer'
import MDXComponents from '../../components/MDXComponents'

export default function Post({ metadata, source, tags, views }) {
  const TagColor = (tag) => {
    // github, python, react, javascript, productivity, tutorial
    if (tag == 'career') return 'blue'
    else if (tag == 'programming') return 'teal'
    else if (tag == 'webdev') return 'purple'
    else if (tag == 'github') return 'gray'
    else if (tag == 'python') return 'yellow'
    else if (tag == 'react') return 'cyan'
    else if (tag == 'javascript') return 'yellow'
    else if (tag == 'productivity') return 'orange'
    else if (tag == 'tutorial') return 'green'
    else return 'gray'
  }
  const Tags = tags.map((item) => (
    <Tag as={item.sys.key} colorScheme={TagColor(item.sys.id)} size="md">
      <TagLabel>#{item.sys.id}</TagLabel>
    </Tag>
  ))

  return (
    <>
      <Container>
        <Head>
          <title>{metadata.title}</title>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.summary} />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://abdulrahman.id/blog/${metadata.slug}`}
          />
          <meta property="og:title" content={metadata.summary} />
          <meta property="og:description" content={metadata.summary} />
          <meta property="og:image" content={metadata.image} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={`https://abdulrahman.id/blog/${metadata.slug}`}
          />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.summary} />
          <meta property="twitter:image" content={metadata.image} />
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Heading
              fontSize={['3xl', '3xl', '5xl', '5xl']}
              color="displayColor"
            >
              {metadata.title}
            </Heading>
            <Stack isInline alignItems="center">
              {Tags}
            </Stack>
            <Stack
              py={4}
              isInline
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack isInline alignItems="center">
                <Avatar
                  name="Abdul Rahman"
                  size="xs"
                  src="https://avatars.githubusercontent.com/u/54136956?v=4"
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
                  Abdul Rahman /{' '}
                  {dateFormat(Date.parse(metadata.date), 'mmmm d yyyy')}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textSecondary">
                  {metadata.readingTime} &bull; {views} views
                </Text>
              </Stack>
            </Stack>
            <Image src={metadata.image} maxW="100%" mx="auto"></Image>
            <PostContainer>
              <MDXRemote {...source} components={MDXComponents} />
            </PostContainer>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'blogPosts',
  })
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const views = await fetch(`http://localhost:3000/api/views/${params.slug}`)
    .then((res) => res.json())
    .then((json) => json.views)

  let data = await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
  })

  const article = data.items[0].fields
  const source = article.body
  const tags = data.items[0].metadata.tags
  article.readingTime = readingTime(source).text

  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    props: {
      metadata: article,
      source: mdxSource,
      tags: tags,
      views: views,
    },
  }
}