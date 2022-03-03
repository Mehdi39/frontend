import Header from '../components/Header'
import CoreValues from '../components/Home/CoreValues';
import ServiceComponent from '../components/Home/ServiceComponent';
import WhatWeDo from '../components/Home/WhatWeDo'
import Demo from './../components/Demo';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div>
      <Demo />
      <Header />
      <WhatWeDo/>
      {/* <ServiceComponent /> */}
      <CoreValues />
      <Footer />
    </div>
  )
}
