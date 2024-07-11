'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'

export const LogoutPage: React.FC<{
  settings: Settings
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setSuccess('Vous êtes bien déconnecté.')
      } catch (_) {
        setError('Vous êtes deja déconnecté')
      }
    }

    performLogout()
  }, [logout])

  return (
    <Fragment>
      {(error || success) && (
        <div>
          <h1>{error || success}</h1>
          <p>
            {'Que voulez vous faire?'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>Cliquer ici</Link>
                {` pour acheter.`}
              </Fragment>
            )}
            {` Pour vous reconnecter, `}
            <Link href="/login">Cliquer ici</Link>
            {'.'}
          </p>
        </div>
      )}
    </Fragment>
  )
}
