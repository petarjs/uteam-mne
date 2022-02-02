import React from 'react'
import {
   Drawer as ChakraDrawer,
   useDisclosure,
   IconButton,
   DrawerOverlay,
   DrawerCloseButton,
   DrawerContent,
   DrawerHeader,
   DrawerBody,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Drawer = (props) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
   return (
      <>
         <IconButton
            ref={btnRef}
            colorScheme='gray'
            onClick={onOpen}
            icon={<GiHamburgerMenu />}
         />
         <ChakraDrawer
            size='xs'
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
         >
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader>{props.title}</DrawerHeader>
               <DrawerBody
                  display='flex'
                  alignItems='flex-start'
                  flexDirection='column'
               >
                  {props.children}
               </DrawerBody>
            </DrawerContent>
         </ChakraDrawer>
      </>
   )
}

export default Drawer
