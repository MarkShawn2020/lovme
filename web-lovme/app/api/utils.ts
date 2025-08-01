import type { NextRequest } from 'next/server'
import { API_PREFIX } from '@/config'

export async function getServerSideUserInfo(req: NextRequest) {
  try {
    // Get access token from cookies
    const accessToken = req.cookies.get('access_token')?.value
                       || req.headers.get('authorization')?.replace('Bearer ', '')

    if (!accessToken)
      return null

    // Verify token and get user info
    const response = await fetch(`${API_PREFIX}/workspaces/current/members/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!response.ok)
      return null

    const userInfo = await response.json()

    return {
      ...userInfo,
      accessToken,
    }
  }
 catch (error) {
    console.error('Failed to get user info:', error)
    return null
  }
}
