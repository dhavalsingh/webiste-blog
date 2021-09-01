import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there!, I'm-
            </Text>
          </Box>
          <Heading
            color="textPrimary"
            fontSize="display"
            lineHeight={'95%'}
            fontSize="display"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Dhaval Singh.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              Software Engineer.
            </Box>{' '}
            A self-taught developer{' '}
            {isLargerThan800
              ? 'with an\ninterest in Computer Science.'
              : 'with an interest in Computer Science.'}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            🚀 Building and maintaining robust and scalable software using Ruby on Rails.
            <br />
            <Stack isInline spacing={1}>
              <Box>🎓</Box>
              <Box>
                Studied at Bits Pilani Goa Campus.
              </Box>
            </Stack>
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/dhavalsingh" isExternal>
              <Button
                leftIcon={<FaGithub color="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_github')}
              >
                Github
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/dhaval-singh-502b79161/" isExternal>
              <Button
                leftIcon={<FaLinkedin color="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_linkedin')}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:dhavalsingh19@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_email')}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
