import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I'm currently open to discuss and learn more about{' '}
            <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Backend Technology.
            </chakra.span>
            <br /> Let's get in touch and talk more.
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4}>
            <Link
              href="https://www.linkedin.com/in/dhaval-singh-502b79161/"
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:dhavalsingh19@gmail.com"
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/14nZMI2mFmentxbiuBopZU_cQgDeMZSu5/view?usp=sharing"
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
