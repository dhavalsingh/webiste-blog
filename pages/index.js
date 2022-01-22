import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Dhaval SIngh - Software Engineer</title>
          <meta name="title" content="Dhaval Singh - Software Engineer" />
          <meta name="keywords" content="Dhaval singh, Dhaval singh website" />
          <meta
            name="description"
            content="Software Engineer based in India"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://webiste-blog.vercel.app/" />
          <meta
            property="og:title"
            content="Dhaval SIngh - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in India"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Dhaval Singh - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in India"
          />
          <script dangerouslySetInnerHTML={{ __html: ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "aasghfg62l");`}} />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  })
  let data2 = await client.getEntries({
    content_type: 'blogPosts',
    order: 'sys.createdAt',
    limit: 10,
  })
  return {
    props: {
      projects: data.items,
      articles: data2.items.reverse(),
    },
  }
}
