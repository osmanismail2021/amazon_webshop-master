import React from 'react'
import "./Home.css";
import Product from './Product';
import Header from './Header'
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  AOS.init();
  return (
    
    <div className="home">
    
    <div className='home_container'>
    <img 
    className="home_image"
    src="https://m.media-amazon.com/images/I/81d9aX1UuJL._SX3000_.jpg"  
    alt=''
    />

    



    <div class="cards" >
    <div class="card" className='home_row'>
    <Product
        id="12321341"
        title="Aileen Violine 4/4 Anfänger Set, Geige Kinder Erwachsene mit Gebrauchsanweisung"
        price={62.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71FlGh5YwQS._AC_SL1500_.jpg"
        />

    </div>

    <div class="card" className='home_row'>
    <Product
        id="49538094"
        title="Kenwood kMix KMX750RD Küchenmaschine, 5 l Edelstahl Schüssel"
        price={230.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/716kTJI4jtL._AC_SL1500_.jpg"
        />

    </div>


    <div class="card" className='home_row'>
    <Product
        id="495380456"
        title="Echo Studio – Smarter High Fidelity-Lautsprecher mit 3D-Audio und Alexa"
        price={199.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61mAVYcG5TL._AC_SL1000_.jpg"
        />

    </div>

    
    <div class="card" className='home_row'>
    <Product
        id="56456325"
        title="Xiaomi 11 Lite 5G NE6,67 leistungsstarkes Smartphone ohne Vertrag+Kopfhörer"
        price={319.90}
        rating={5}
        image="https://m.media-amazon.com/images/I/51B9LW2wB4L._AC_SL1001_.jpg"
        />

    </div>

    
    <div class="card" className='home_row'>
    <Product
        id="25669896"
        title="Lenovo Yoga Smart Tab 25,5 cm (10,1 Zoll, 1920x1200, Full HD, WideView, Touch)"
        price={245.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/717RVaeHk6L._AC_SL1500_.jpg"
        />

    </div>

    
    <div class="card" className='home_row'>
    <Product
        id="656236589"
        title="HUAWEI MateView GT 27'' (68,58cm) Curved Gaming Monitor, Standard"
        price={279}
        rating={5}
        image="https://m.media-amazon.com/images/I/61UqFhCVDLL._AC_SL1000_.jpg"
        />

    </div>

    
    <div class="card" className='home_row'>
    <Product
        id="56456325"
        title="TOZO T6 Bluetooth Kopfhörer Kabellos In Ear Ohrhörer"
        price={25.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/71gtHnQGfQL._AC_SL1500_.jpg"
        />

    </div>

    
    <div class="card" className='home_row'>
    <Product
        id="127895456"
        title="LC-POWER LC-M49-DQHD-120-C-Q 49 Zoll (124,46 cm"
        price={1159}
        rating={4}
        image="https://m.media-amazon.com/images/I/61A2tx5C4lL._AC_SL1500_.jpg"
        />

    </div>
      
    <div class="card" className='home_row'>
    <Product
        id="12365456"
        title="Samsung Odyssey Ultra Wide Curved Gaming Monitor C49HG90"
        price={729}
        rating={4}
        image="https://m.media-amazon.com/images/I/81Z4sem5oJL._AC_SL1500_.jpg"
        />

    </div>      
        
        
    {/* Product */}
    
    </div>

   

    
    </div>
    </div>
  );
}

export default Home;