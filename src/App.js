import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero';
import Banner from './component/Banner';
import Menu from './component/menu';
import WhyUs from './component/WhyUs'
import CoffeeBanner from './component/CoffeBanner'
import Customer from './component/customer'
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Banner/>
      <Menu/>
      <WhyUs/>
      <CoffeeBanner/>
      <Customer/>
    </div>
  );
}

export default App;