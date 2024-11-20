import Cookies from 'js-cookie'
import { ApplicationItem } from '@/interface/applicationsInterface'

export default async function updateApplication(id: number): Promise<ApplicationItem | null> {
  try {
    const token = Cookies.get('access_token')
    const backendUrl = process.env.PUBLIC_BACKEND_URL
    const data = {
        "isApproved": true,
        "isCanceled": false
    }

    if (!backendUrl || !token) {
      throw new Error('Environment variables are not set correctly')
    }

    const response = await fetch(`${backendUrl}/api/v1/applications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to update semester: ${errorText}`)
    }

    return await response.json()
  } catch (err) {
    console.error('Error updating semester:', err)
    return null
  }
}
