import React, { Component } from 'react';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import './cart.css';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.history.location.state.name,
            price: this.props.history.location.state.price,
        };
        this.goToHomePage = this.goToHomePage.bind(this);
        this.goToCheckoutPage = this.goToCheckoutPage.bind(this);
        console.log('++++', this.props.history.location.state)
    }
    
    
    goToHomePage(ev) {
        
        this.props.history.push({
          pathname: '/',
           
       })}
       
       goToCheckoutPage(ev) {
        
        this.props.history.push({
          pathname: '/checkout',
           
       })
    }
       
    
    render () {
        return (
            <div>
            
            <Header title="opencrt">
            </Header>
            <Content>
            <div className="page-content" />
            </Content>
                        
                <div className="border_div">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKQkfelkL1tVN6y1uv09B8FmNb58_uSEZYYd0GFmr3y2TOpFU"
                          className="edit"
                          />

                        <div className="price">
                            <h4>{this.state.name}</h4> 
                            <h5> {this.state.price} </h5>
                       </div>
                        
                      <div>
                          <button className="button" onClick={this.goToHomePage}>DeletTheOrder</button>

                          <button className="button" onClick={this.goToCheckoutPage}>GoToCheckout</button>
                      </div>


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