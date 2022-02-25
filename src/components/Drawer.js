import React from 'react'
import {
  Drawer as ChakraDrawer,
  useDisclosure,
  IconButton,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Drawer = ({ title, children, display }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={<FontAwesomeIcon icon={faBars} size="lg" />}
        bgColor="transparent"
        display={display}
      />
      <ChakraDrawer
        display={display}
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay display={display} />
        <DrawerContent bgColor="#2f3437" display={display}>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerBody display="flex" alignItems="flex-start" flexDirection="column">
            {children}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}

export default Drawer
