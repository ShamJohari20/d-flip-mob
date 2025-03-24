import Mobile from "./components/Mobile"
import './App.css'
import Laptop from "./components/Laptop"


function App() {

  const Mob = [
    {
      src: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/f/p/phone-3a-pro-a059p-nothing-original-imah9w2hhbqu8z2e.jpeg?q=70&crop=false',
      name: 'Nothing Phone (3a) Pro (Grey, 128 GB)  (8 GB RAM)',
      f1: '8 GB RAM | 128 GB ROM',
      f2: '17.2 cm (6.77 inch) Full HD+ Display',
      f3: '50MP (Main) + 50MP (3X Periscope)+ 8MP (Ultra-Wide) | 50MP Front Camera',
      f4: '5000 mAh Battery',
      f5: '7s Gen3 Processor',
      price: '27999',
      aPrice: '32,999',
      per: '9',
      free: '16,300 '

    },

    {
      src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/f/l/-original-imagzcfj9vhf5dyq.jpeg?q=70',
      name: 'POCO C61 (Ethereal Blue, 64 GB)  (4 GB RAM)',
      f1: '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      f2: '17.04 cm (6.71 inch) HD+ Display',
      f3: '8MP Rear Camera | 5MP Front Camera',
      f4: '5000 mAh Battery',
      f5: 'Helio G36 Processor',
      price: '5,899',
      aPrice: ',8,999',
      per: '34',
      free: '16,300 '

    },

    {
      src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/s/y/-original-imah4smtchzwyhgs.jpeg?q=70',
      name: 'REDMI 13 5G (Black Diamond, 128 GB)  (8 GB RAM)',
      f1: '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
      f2: '17.25 cm (6.79 inch) Full HD+ Display',
      f3: '108MP + 2MP | 13MP Front Camera',
      f4: '5030 mAh Lithium Polymer Battery',
      f5: '4 Gen 2 AE Processor',
      price: '13,999',
      aPrice: '19,999',
      per: '30',
      free: '16,300 '

    },

    {
      src: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70',
      name: 'SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)',
      f1: '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      f2: '17.12 cm (6.74 inch) HD+ Display',
      f3: '50MP + 2MP | 8MP Front Camera',
      f4: '5000 mAh Battery',
      f5: 'Helio G85 Processor',
      price: '6,499',
      aPrice: '9,999',
      per: '35',
      free: '16,300 '

    }
  ]


  return (
    <>
      <h1 className='main-heading'>Flipkart Mobile</h1>
      <div className='main'>

        <Mobile
          src={Mob[0].src}
          name={Mob[0].name}
          price={Mob[0].price}
          f1={Mob[0].f1}
          f2={Mob[0].f2}
          f3={Mob[0].f3}
          f4={Mob[0].f4}
          f5={Mob[0].f5}
          aPrice={Mob[0].aPrice}
          per={Mob[0].per}
          free={Mob[0].free}
        />

        <Mobile
          src={Mob[1].src}
          name={Mob[1].name}
          price={Mob[1].price}
          f1={Mob[1].f1}
          f2={Mob[1].f2}
          f3={Mob[1].f3}
          f4={Mob[1].f4}
          f5={Mob[1].f5}
          aPrice={Mob[1].aPrice}
          per={Mob[1].per}
          free={Mob[1].free}
        />

        <Mobile
          src={Mob[2].src}
          name={Mob[2].name}
          price={Mob[2].price}
          f1={Mob[2].f1}
          f2={Mob[2].f2}
          f3={Mob[2].f3}
          f4={Mob[2].f4}
          f5={Mob[2].f5}
          aPrice={Mob[2].aPrice}
          per={Mob[2].per}
          free={Mob[2].free}
        />

        <Mobile
          src={Mob[3].src}
          name={Mob[3].name}
          price={Mob[3].price}
          f1={Mob[3].f1}
          f2={Mob[3].f2}
          f3={Mob[3].f3}
          f4={Mob[3].f4}
          f5={Mob[3].f5}
          aPrice={Mob[3].aPrice}
          per={Mob[3].per}
          free={Mob[3].free}
        />

        <h1 className='main-heading'>Flipkart Laptop</h1>


        <Laptop
           img = "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/a/z/anv15-41-gaming-laptop-acer-original-imagznanfgmdt8w7.jpeg?q=70"

           name = "Acer Nitro V AMD Ryzen 7 Octa Core 7735HS - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 3050) ANV15-41 Gaming Laptop  (15.6 Inch, Obsidian Black, 2.1 Kg)"

           f1 = "AMD Ryzen 7 Octa Core Processor"
           f2 = "16 GB DDR5 RAM"
           f3 = "Windows 11 Operating System"
           f4 = "512 GB SSD"
           f5 = "39.62 cm (15.6 Inch) Display"

           price = "68,990"
           aprice = "87,499"
           per = "21"
           free = "10,000 "
           
        />
        

      </div>

    </>
  )
}


export default App


