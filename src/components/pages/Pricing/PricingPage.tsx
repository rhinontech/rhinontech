import React from 'react'
import PricingComponent from './PricingTable/PricingComponent'
import FAQSection from './Faq/faq'
import ContactSales from '@/components/Common/blocks/contact-sales'

export default function PricingPage() {
  return (
	<div>
		<div className='pt-20'>
		<PricingComponent/>
		</div>
		<ContactSales/>
		<FAQSection/>
	</div>
  )
}
