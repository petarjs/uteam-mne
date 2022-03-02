import React, { useState } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import CompanyInfo from '../components/Company/CompanyInfo'
import { useEffect } from 'react'

import { useProfileContext } from '../hooks/profile-context'

const CompanyPage = () => {
  const [company, setCompany] = useState()
  const { userProfile } = useProfileContext()

  useEffect(() => {
    if (userProfile) {
      setCompany(userProfile.attributes.company.data)
    }
  }, [userProfile])

  return (
    <PageLayout title="Company Info">{company && <CompanyInfo company={company} />}</PageLayout>
  )
}

export default CompanyPage
