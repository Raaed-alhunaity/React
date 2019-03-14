import React, { Component} from 'react';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import './checkout.css';
import fire from './config';


export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myOrder: []
        }
        this.renderProdects = this.renderProdects.bind(this);

        console.log('555')
        let raw = [];
        let productsRef = fire.database().ref('products')
        productsRef.once('value').then((snapshot) => {
            snapshot.forEach(snapshot => {
                raw.push({key: snapshot.key,val:snapshot.val()})
            });
            this.setState({myOrder: raw})
        })
        
       console. log(this.state.myOrder)
        }
    
        renderProdects () {
            return this.state.myOrder.map(({key, val}) => (
                <div  key={key}>
                 <div className="center">
                 <p> ALL Product : </p>
                 <p >{ val.name +'               ' + val.price} </p>
                </div>
                </div>
                ))
        }

    render () {
        console.log(this.state.myOrder, '++++')
        return (
            <div>
            
            <Header title="opencrt">
            </Header>
            <Content>
            <div className="page-content" />
            </Content>

              
             <div className="form">
             <h4>DETAILS</h4>  
             <form >
             <label>
              <p className="td">Full Name :</p>  
              <input type="text" name="fullName" placeholder="Add Your Name" size="40" /><br></br>
              <p className="td">Email :</p>  
              <input type="text" name="email" placeholder="Add Email" size="40" /><br></br>
              <p className="td">Phone  :</p>  
              <input type="text" name="phone" placeholder="Add Phone Number" size="40" /> <br></br>
              <p className="td">Addres :</p>  
              <input type="text" name="addres" placeholder="Add Addres" size="40" /> <br></br>
              </label>
              </form>
              </div>
              <br></br><br></br><br></br>
              <div className="order">
              
              {this.renderProdects()}
              </div> 

              <div>
              <button className="button1" >PLACE ORDER</button>
              </div>
                        
               
                  
  
                  <footer className="footer" >
                     <a href="#" className="a1">Contact us</a>
                     <a href="#" className="a2">Help</a>
                     <a href="#" className="a3">Terns</a>
                  </footer>
  
  
              </div>
          )
    }
}