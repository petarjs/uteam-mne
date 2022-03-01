import React, { useState } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import CompanyInfo from '../components/Company/CompanyInfo'
import { useEffect } from 'react'
import { getCurrentUser } from '../api/auth'
import { getProfileData } from '../api/profile'

const CompanyPage = () => {
  const [company, setCompany] = useState()

  useEffect(() => {
    ;(async () => {
      const user = await getCurrentUser()
      const profileData = await getProfileData(user.id)
      setCompany(profileData.attributes.company.data)
    })()
  }, [])

  return (
    <PageLayout title="Company Info">{company && <CompanyInfo company={company} />}</PageLayout>
  )
}

export default CompanyPage
