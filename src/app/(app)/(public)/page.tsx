export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
};

import Hero from '@/components/hero-home';
import BusinessCategories from '@/components/business-categories';
import FeaturesPlanet from '@/components/features-planet';
import LargeTestimonial from '@/components/large-testimonial';
import Cta from '@/components/cta';
import { TableCompare } from '@/components/table-compare';

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <TableCompare />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
