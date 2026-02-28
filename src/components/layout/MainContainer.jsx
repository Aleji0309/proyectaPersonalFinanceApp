import React from 'react'
import { HeaderContainer } from '../HeaderContainer'

export const MainContainer = ({children}) => {
  return (
    <section className="bg-(--bg-white) p-8 min-h-screen overflow-y-auto">
      
      {children}
    </section>
  )
}
