import React, { Component } from 'react';

import './App.css';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import { Grid , Cell} from 'react-mdl';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU',
          name: 'Product-1',
          type: 'type',
          price: '50JoD',
          desc: 'this is a description'
        },
        {
          id: 2,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU',
          name: 'Product-2',
          type: 'type',
          price: '50JoD',
          desc: 'this is a description'
        },
        {
          id: 3,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU',
          name: 'Product-3',
          type: 'type',
          price: '50JoD',
          desc: 'this is a description'
        },
        {
          id: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU',
          name: 'Product-4',
          type: 'type',
          price: '50JoD',
          desc: 'this is a description'
        }
      ]
    };

    this.goToProductPage = this.goToProductPage.bind(this);
  }

  goToProductPage(ev) {
    this.props.history.push({
      pathname: `/product/${ev.target.dataset.id}`,
      state: {
        name: ev.target.dataset.name,
        price: ev.target.dataset.price,
      }
      
    })
  }
  render() {
    return (
       <div className="demo-big-content">
    
          <Header title="opencrt">
         </Header>
         <Content>
           <div className="page-content" />
         </Content>
         
          

           
            <div className="products-wrapper">
            {this.state.products.map(e => (
              <div key={e.id} className="product">
              <img data-id={e.id} data-name={e.name} data-price={e.price} onClick={this.goToProductPage} src={e.img} alt="avatar" className="product-img"/>
              <div className="product-info">
                <div className="product-name">{e.name}</div>
                <div className="product-price">{e.price}</div>
                <div className="add-to-cart-btn">Add to cart</div>
              </div>
            </div>
            ))}
            </div>
            
            
           <br></br><br></br><br></br>

           <footer className="footer" >
             <a href="#" className="a1">Contact us</a>
             <a href="#" className="a2">Help</a>
             <a href="#" className="a3">Terns</a>
             </footer>

           <br></br>
           
        </div>
    );
  }
}

export default Home;
