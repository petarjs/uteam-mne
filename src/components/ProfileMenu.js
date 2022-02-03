import React from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import {
   Menu,
   Link,
   MenuButton,
   IconButton,
   MenuList,
   MenuItem,
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const ProfileMenu = (props) => {
   return (
      <Menu>
         <MenuButton
            as={IconButton}
            icon={<MdOutlineAccountCircle />}
         ></MenuButton>
         <MenuList>
            <MenuItem>
               <Link as={ReactLink} to='login' width='100%'>
                  Login
               </Link>
            </MenuItem>
            <MenuItem>
               <Link as={ReactLink} to='join' width='100%'>
                  Register
               </Link>
            </MenuItem>
         </MenuList>
      </Menu>
   )
}

export default ProfileMenu
