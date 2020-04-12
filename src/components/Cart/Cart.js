import React, {Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart'; 
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Navbar from '../Navbar';
class Cart extends Component{
  render(){
  return (
    <div>
    <Navbar/>
  	<section>
  		<ProductConsumer>
  			{value =>{
  				const {cart} = value;
  				if(cart.length>0){
  					return(
  						<React.Fragment>
  							<Title name="your" title=" cart"/>
  							<CartColumns/>
  							<CartList value={value}/>
                <CartTotals value={value}/>
  						</React.Fragment>
  					);
  				} else{
  					return <EmptyCart />;
  				}
  			}}
  		</ProductConsumer>
  	</section>
    </div>
  );
}
}

export default Cart;