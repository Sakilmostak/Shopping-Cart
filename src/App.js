import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
      super();
      this.state= {
          products: [
              {
                  price: 1599,
                  title: 'Watch',
                  qty: 2,
                  img: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                  id: 1
              },
              {
                  price: 3999,
                  title: 'Phone',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
                  id: 2
              },
              {
                  price: 995,
                  title: 'Keyboard',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
                  id: 3
              }
          ]
      }
  }

  handleIncreaseQuantity = (product)=> {
      const {products}= this.state; //getting the array
      const index= products.indexOf(product); //getting the index where the product is

      products[index].qty+=1; //incrementing value

      //updating the render
      this.setState({
          products: products
      })
  }

  handleDecreaseQuantity = (product)=> {
      const {products}= this.state; //getting the array
      const index= products.indexOf(product); //getting the index where the product is
      
      if(products[index].qty>0){
          products[index].qty-=1;

          this.setState({
              products: products
          })
      }
      else{
        const items = products.filter((item)=> item.id!==product.id);

        this.setState({
            products: items
        })
      }
  }

  handleDeleteProduct =(id)=> {
      const {products} = this.state;

      const items = products.filter((item)=> item.id!==id);

      this.setState({
          products: items
      })
  }

  getCartCount =()=>{
    const {products} = this.state;

    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getCartTotal =()=> {
    const {products} = this.state;

    let cartTotal=0;

    products.forEach((product)=> {
      cartTotal= cartTotal+ product.qty*product.price
    })

    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount} />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: Rs.{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
