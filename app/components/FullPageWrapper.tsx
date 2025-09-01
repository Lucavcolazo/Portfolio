'use client'

import ReactFullpage from '@fullpage/react-fullpage'
import { ReactNode } from 'react'

interface FullPageWrapperProps {
  children: ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      showActiveTooltip={true}
      anchors={['home', 'technologies', 'projects']}
      sectionsColor={['#000000', '#000000', '#000000']}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {children}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
