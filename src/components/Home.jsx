import React from "react";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineSearch} from 'react-icons/ai'

function Home() {
  return (
    <div>
      <div>
        <img src="/public/images/mesuem.jpg" alt="img" />
      </div>
      <nav>
        <div>
          <h1>Travel</h1>
        </div>
        <div>
          <ul className="flex space-x-5 text-sm font-bold">
            <li>Dohaa</li>
            <li>Al Warkah</li>
            <li>Al Rayyan</li>
            <li>All Khor</li>
          </ul>
          <div>
            <AiOutlineSearch/>
            <input type="text" placeholder="search"/>
          </div>
        </div>
      </nav>
      <div>
        <h2>D I S C O V E R</h2>
        <h1>Colombia</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vel alias rerum optio quibusdam, porro minus aliquam praesentium voluptatem aperiam temporibus quas fugiat. Nemo nisi unde in vel distinctio iste.</p>
      </div>
      <div>
        <button>Road map</button>
        <button>Book a Trip</button>
      </div>
      <div>
        <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillTwitterSquare/>
      </div>
    </div>
  );
}

export default Home;
