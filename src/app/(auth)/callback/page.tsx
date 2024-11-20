'use client'

import dynamic from 'next/dynamic'

// Dynamically import the Callback component with SSR disabled
const Callback = dynamic(() => import('./Callback'), { ssr: false })

export default function Page() {
  return <Callback />
}
