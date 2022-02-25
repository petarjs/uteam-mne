import React, { useState, useEffect } from 'react'
import BasicInfo from '../components/Profile/BasicInfo'
import { Grid } from '@chakra-ui/react'
import { getCurrentUser } from '../api/auth'
import { getProfileData } from '../api/profile'
import PageLayout from '../components/Layout/PageLayout'
import Security from '../components/Profile/Security'

const ProfilePage = () => {
  const [profile, setProfile] = useState()
  useEffect(() => {
    try {
      ;(async () => {
        const user = await getCurrentUser()

        const userProfile = await getProfileData(user.id)
        setProfile(userProfile)
      })()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <PageLayout title="My Profile">
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }} gap="1rem">
        {profile && (
          <>
            <BasicInfo profile={profile} />
            <Security user={profile.attributes.user.data} />
          </>
        )}
      </Grid>
    </PageLayout>
  )
}

export default ProfilePage
