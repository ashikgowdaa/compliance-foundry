import Flex from '@/utitly-css/Flex'
import Wrapper from '@/utitly-css/Wrapper'
import Link from 'next/link'
import React from 'react'

interface FooterData {
  title: string;
  links: string[];
}

const Footer = ({footerData}: { footerData: FooterData[] }) => {



  return (
    <>
   <Wrapper className='bg-primary'>
    <Flex className="bg-neutral-900 text-white px-10 py-16" justify="between" >
      {footerData.map((section, index) => (
        <Flex direction="col" key={index} className="space-y-3 min-w-[150px]">
          <span className="footer-category-header ">{section.title}</span>
          {section.links.map((link, i) => (
            <Link
              key={i}
              href="/"
              className="footer-category-link "
            >
              {link}
            </Link>
          ))}
        </Flex>
      ))}
    </Flex>
   </Wrapper>

    </>
  )
}

export default Footer