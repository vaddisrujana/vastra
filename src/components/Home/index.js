import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import kids from '../../assets/kids-banner.jpg'
import men from '../../assets/men-banner.jpg'
import women from '../../assets/women-banner.jpg'
import WomenFrame from '../../assets/women-frame.jpg'
import menFrame from '../../assets/men-frame.jpg'
import girlFrame from '../../assets/girl-frame.jpg'
import boyFrame from '../../assets/boy-frame.jpg'
import infantFrame from '../../assets/infant-frame.jpg'

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel data-bs-theme="dark"> 
      <Carousel.Item>
        <img
          className="w-100 banner"
          src={kids}
          alt="First slide"
        />
        <Carousel.Caption className="custom-caption">
          <div className='d-flex flex-column justify-content-end test'>
            <h5 className='custom-head'>Kids</h5>
            <p>Discover Fun & Fashion for Your Little Ones!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner w-100"
          src={women}
          alt="Second slide"
        />
        <Carousel.Caption className="custom-caption">
          <h5 className='custom-head'>Women</h5>
          <p>Embrace the Latest Trends – Shop Women's Fashion Now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="banner w-100"
          src={men}
          alt="Third slide"
        />
        <Carousel.Caption className="custom-caption">
          <h5 className='custom-head'>Men</h5>
          <p>Elevate Your Everyday – Men's Fashion Just Got Better!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 className='head-category'>Shop by Category</h1>
    <div className='d-flex justify-content-between'>
      <div className='frame'>
        <img src={WomenFrame} alt='women' className="women-frame"/>
        <h3 className='category-heading'>Women</h3>
      </div>
      <div className='frame'>
        <img src={menFrame} alt='men' className="women-frame"/>
        <h3 className='category-heading'>Men</h3>
      </div>
      <div className='frame'>
        <img src={girlFrame} alt='girl' className="women-frame"/>
        <h3 className='category-heading'>Girls</h3>
      </div>
      <div className='frame'>
        <img src={boyFrame} alt='boy' className="women-frame"/>
        <h3 className='category-heading'>Boys</h3>
      </div>
      <div className='frame'>
      <img src={infantFrame} alt='Infants' className="women-frame"/>
        <h3 className='category-heading'>Infants</h3>
      </div>
    </div>

            </div>
        )
    }
}
export default Home