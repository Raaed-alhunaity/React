import React, { Component } from 'react';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import './product.css';

import fire from './config';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.goToCartPage = this.goToCartPage.bind(this);
        this.add=this.add.bind(this);

        
        let productsRef = fire.database().ref('products').orderByKey().limitToLast(100)
            productsRef.on('child_added', snapshot => {
                let product = {
                    name: snapshot.name,
                    price: snapshot.price,
                }

            });
       }


    add(ev){
        var userInfo = {
            name: ev.name,
            price: ev.price,
          }; 
          console.log(userInfo)
        
        fire.database().ref('products').push(userInfo);
    }    

    goToCartPage(ev) {
        
          this.props.history.push({
            pathname: `/cart/${this.props.history.location.state.name}`,
             state: {
               name: this.props.history.location.state.name,
               price: this.props.history.location.state.price,
               
            }
        
         })
        //  console.log(ev.target.dataset.name)
         this.add ({name: this.props.history.location.state.name, price: this.props.history.location.state.price} )
      } 
      
    render () {
        console.log(this.props)
        return (
            <div>
            
          <Header title="opencrt">
          </Header>
          <Content>
          <div className="page-content" />
          </Content>
                      
                      <div className="div">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU"
                          className="img"
                          />
                          <div className="text">
                              <h3 >Flora</h3>
                              <h4 className="h4">{this.props.history.location.state.price}</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing</p>
                          </div>

                          <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU"
                          className="img1"
                          />
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU"
                          className="img2"
                          />
                          
                          </div>
                          <button className="button1" onClick={this.goToCartPage}>ADD TO CART</button>
                      </div>

                <div className="inform">
                {this.props.history.location.state.name}
                <br></br>
                {this.props.history.location.state.price}
                </div>
                <br></br><br></br><br></br>

                <footer className="footer" >
                   <a href="#" className="a1">Contact us</a>
                   <a href="#" className="a2">Help</a>
                   <a href="#" className="a3">Terns</a>
                </footer>


            </div>
        )
    }
}