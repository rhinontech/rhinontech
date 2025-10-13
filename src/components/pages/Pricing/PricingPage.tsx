import React from 'react'
import PricingComponent from './PricingTable/PricingComponent'
import FAQSection from './Faq/faq'

export default function PricingPage() {
  return (
	<div>
		<div className='pt-20'>
		<PricingComponent/>
		</div>
		<FAQSection/>
	</div>
  )
}
