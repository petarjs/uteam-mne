import React from 'react'
import { Menu, Link, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../hooks/auth-context'
import { useProfileContext } from '../hooks/profile-context'

const ProfileMenu = ({ display }) => {
  const { isLoggedIn, logoutHandler } = useAuthContext()
  const { userProfile } = useProfileContext()

  return (
    <Menu display={display}>
      <MenuButton
        as={IconButton}
        icon={<FontAwesomeIcon icon={faUser} size="lg" />}
        bgColor="transparent"
        display={display}
      />
      <MenuList bgColor="#2f3437" border="1px solid #e8e9e9" display={display}>
        {isLoggedIn ? (
          <MenuItem _focus={{ bg: 'transparent' }}>
            <Link as={ReactLink} to="/profile">
              {userProfile?.attributes?.name}
            </Link>
          </MenuItem>
        ) : (
          <MenuItem _focus={{ bg: 'transparent' }}>
            <Link as={ReactLink} to="/login">
              Login
            </Link>
          </MenuItem>
        )}
        {isLoggedIn ? (
          <MenuItem _focus={{ bg: 'transparent' }}>
            <Link as={ReactLink} to="/login" onClick={logoutHandler}>
              Logout
            </Link>
          </MenuItem>
        ) : (
          <MenuItem _focus={{ bg: 'transparent' }}>
            <Link as={ReactLink} to="/join">
              Register
            </Link>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
