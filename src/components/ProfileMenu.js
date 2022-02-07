import React from 'react'
import {
   Menu,
   Link,
   MenuButton,
   IconButton,
   MenuList,
   MenuItem,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ProfileMenu = (props) => {
   return (
      <Menu>
         <MenuButton
            as={IconButton}
            icon={<FontAwesomeIcon icon={faUser} size='lg' />}
            bgColor='transparent'
         ></MenuButton>
         <MenuList bgColor='#2f3437' border='1px solid #e8e9e9'>
            <MenuItem _focus={{ bg: 'transparent' }}>
               <Link as={ReactLink} to='login' width='100%'>
                  Login
               </Link>
            </MenuItem>
            <MenuItem _focus={{ bg: 'transparent' }}>
               <Link as={ReactLink} to='join' width='100%'>
                  Register
               </Link>
            </MenuItem>
         </MenuList>
      </Menu>
   )
}

export default ProfileMenu
