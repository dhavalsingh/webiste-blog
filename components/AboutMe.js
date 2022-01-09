import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right">
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Dhaval Singh, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really liked to break stuff and explore the{' '}
              <MoreInfo
                text="internal workings"
                content="Especially networking and how things are working at a deeper level."
              />
              since 2015, and from that, I explored how to code myself,
              fast-forward to today, I do programming in various languages and
              technologies, and have the privilege to work as a{' '}
              <MoreInfo
                text="Senior Software
              Developer in a B2B startup"
                content={
                  <Image src="https://i.imgur.com/nAd7vhZ.png"
                  alt="Anarock" />
                }
              />
              . I'm interested in building fast, agile and robust systems, currently focused in
              <MoreInfo
                text="Backend Development,"
                content="Building scalable backend systems using Ruby on Rails"
              />
              <MoreInfo
                text="Open Source"
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
              />
              and
              <MoreInfo
                text="Competitive Programming"
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
              />
              <br />
              <br />
              When i am not working, i can be found in the gym or playing Dota and if the weather's good, on a long walk.
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="https://i.imgur.com/VecBUiI.png"
                alt="Dhaval Singh"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
