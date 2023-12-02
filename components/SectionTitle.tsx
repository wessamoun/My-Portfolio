import React, { Children } from 'react'

interface sectionTitleProps {
  children: React.ReactNode
}

const SectionTitle:React.FC<sectionTitleProps> = ({children}) => {
  return (
    <h2 className='text-3xl font-semibold mt-32 mb-12 dark:text-gray-50'>
      {children}
      </h2>
  )
}

export default SectionTitle