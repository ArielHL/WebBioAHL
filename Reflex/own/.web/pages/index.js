import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack alignItems={`center`} sx={{"position": "sticky", "bg": "#171F26", "width": "100%", "paddingX": "2em", "paddingY": "1em", "zIndex": "100", "top": "0px", "display": "flex"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWight": "400", "fontSize": "1.5em", "color": "#14A1F0"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Ariel`}
</Text>
  <Text as={`span`} sx={{"color": "#0D98FA"}}>
  {`Limes`}
</Text>
</Box>
  <Spacer/>
  <Input placeholder={`Search...`} sx={{"width": "300px", "padding": "0.5em", "borderRadius": "0.8em", "backgroundColor": "white", "border": "1px solid ligtblue"}} type={`text`}/>
  <Spacer/>
  <Menu sx={{"fontFamily": "Comfortaa", "fontWight": "400", "fontSize": "1.5em", "color": "#14A1F0"}}>
  <MenuButton sx={{"fontFamily": "Comfortaa", "fontWight": "400", "fontSize": "1.5em", "color": "#14A1F0"}}>
  {`Menu`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`User Settings`}
</MenuItem>
  <MenuDivider/>
  <MenuItem>
  {`Explore`}
</MenuItem>
  <MenuItem>
  {`Log Out`}
</MenuItem>
</MenuList>
</Menu>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`1.5em`}>
  <HStack spacing={`0.8em`}>
  <Avatar name={`Ariel Limes`} size={`xl`} src={`ahl_avatar.jpeg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px solid", "borderColor": "#14A1F0"}}/>
  <Flex direction={`column`} sx={{"alingItems": "start"}}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "400"}}>
  {`Ariel Limes`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@arielimes`}
</Text>
  <HStack spacing={`1.5em`} sx={{"marginTop": "0.5em"}}>
  <Link as={NextLink} href={`https://github.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Github`} src={`icons/github.svg`} sx={{"width": "0.8em"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Twitter`} src={`icons/x.svg`} sx={{"width": "0.8em"}}/>
</Link>
  <Link as={NextLink} href={`https://instagram.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Instagram`} src={`icons/instagram.svg`} sx={{"width": "0.8em"}}/>
</Link>
  <Link as={NextLink} href={`https://tiktok.com/@mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Tiktok`} src={`icons/tiktok.svg`} sx={{"width": "0.8em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/show/4iKXt5k2zCbAQOrMePh7qh`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Spotify`} src={`icons/spotify.svg`} sx={{"width": "0.8em"}}/>
</Link>
  <Link as={NextLink} href={`https://linkedin.com/in/braismoure/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Linkedin`} src={`icons/linkedin.svg`} sx={{"width": "0.8em"}}/>
</Link>
</HStack>
</Flex>
</HStack>
  <Flex sx={{"width": "100%", "paddingX": "1.5em"}}>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`14+`}
</Text>
  {` Años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`15+`}
</Text>
  {` Paginas Web`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`25+`}
</Text>
  {` Projectos`}
</Box>
</Flex>
  <Text sx={{"color": "#C3C7CB", "fontSize": "1em", "padding": "2px"}}>
  {`
                            Soy un professional en Ciencia de Datos con experiencia de  14 años. 
                            Actualmente trabajo como freelance full-stack developer en ReactJS, Node.JS, Django y Reflex. 
                            Además creo contenido formativo sobre programación y tecnología en redes. 
                            Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!
                            `}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "400"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Twitch`} src={`icons/twitch.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Transmisiones sobre programación de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`YouTube`} src={`icons/youtube.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Tutoriales sobre desarrollo de software semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Discord`} src={`icons/discord.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`El chat y los grupos de estudio de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://retosdeprogramacion.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Retos de programación`} src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Retos de programación`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Ejercicios semanales para practicar lógica de programación`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://youtube.com/@mouredevtv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`YouTube (canal secundario)`} src={`icons/youtube.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`YouTube (canal secundario)`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Emisiones en directo destacadas`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "400"}}>
  {`Recursos y más`}
</Heading>
  <Link as={NextLink} href={`https://mouredev.com/libro-git`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Git y GitHub desde cero`} src={`icons/git.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Git y GitHub desde cero`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Aquí puedes comprar mi libro en formato físico y eBook`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://amazon.es/shop/mouredev/list/2ZIHJJFJ9AVZ3`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Libros recomendados`} src={`icons/book.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Libros recomendados`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Mi listado de libros sobre programación, ciencia y tecnología`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com/setup`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Mi setup`} src={`icons/setup.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Mi setup`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Listado con todos los elementos que uso en mi trabjao`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`MoureDev`} src={`icons/logo.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`MoureDev`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Mi sitio web`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://buymeacoffee.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Invítame a un café`} src={`icons/coffee.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Invítame a un café`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`¿Quieres ayudarme a que siga creando contenido?`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "400"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`https://mypublicinbox.com/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`MyPublicInbox`} src={`icons/checkemail.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`MyPublicInbox`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`Respuesta rápida y con preferencia`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`mailto:braismoure@mouredev.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "left", "_hover": {"backgroundColor": "#0D98FA"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.2em", "margin": "0px !important", "paddingRigth": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "400", "fontSize": "1.5em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontFamily": "Poppins", "fontWight": "300", "fontSize": "1em", "color": "#C3C7CB"}}>
  {`braismoure@mouredev.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "400"}}>
  {`Colaboran`}
</Heading>
  <Flex direction={["column", "row"]} sx={{"spacing": "0.8em", "width": "100%", "alignItems": "center", "justifyContent": "space-evenly"}}>
  <Link as={NextLink} href={`https://e.lga.to/MoureDev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Elgato`} src={`elgato.png`} sx={{"height": "4em", "width": "auto"}}/>
</Link>
  <Link as={NextLink} href={`https://mvp.microsoft.com/es-es/PublicProfile/5004970`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de MVP`} src={`mvp.png`} sx={{"height": "4em", "width": "auto"}}/>
</Link>
</Flex>
</VStack>
</VStack>
</Center>
  <Box>
  <Flex direction={["column", "row"]} sx={{"justifyContent": "center", "alignItems": "center", "marginY": "2em", "color": "#A3ABB2", "width": "100%"}}>
  <Image alt={`Logotipo de Ariel Limes`} src={`logo.png`} sx={{"height": "4em", "weight": "4em"}}/>
  <VStack sx={{"padding": "0.8em"}}>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"fontSize": "1em", "color": "#C3C7CB", "textDecoration": "none", "_hover": {}}}>
  {`© 2014-2023 DEEPBLUE BY Ariel Limes V3.`}
</Link>
  <Text sx={{"fontSize": "1em", "marginTop": "0px !important", "color": "#C3C7CB"}}>
  {`Building Software with ♥ from Madrid to the World.`}
</Text>
</VStack>
</Flex>
</Box>
</Box>
  <NextHead>
  <title>
  {`Ariel Limes`}
</title>
  <meta content={`Que puedo hacer por ti`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
