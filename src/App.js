import React, {useState} from 'react';
import Header from './Component/Header/Header';
import './App.css';
import Slide from './Component/Slide/Slide';
import FoodList from './Component/FoodList/FoodList';
import Footer from './Component/Footer/Footer';
// import YourCart from './Component/YourCart/YourCart';
function App() {
  
   let Food = [
      {
         id: 'a1',
         title: "Apple",
         prize: 10,
         dec: "This is Fresh and without chemical",
         amount: 0,
      },
      {
         id: 'a2',
         title: "Orange",
         prize: 14,
         dec: "This is Fresh and without chemical",
         amount: 0,
      },
      {
         id: 'a3',
         title: "Banana",
         prize: 5,
         dec: "This is Fresh and without chemical",
         amount: 0,
      },
      {
         id: 'a4',
         title: "Rice",
         prize: 20,
         dec: "This is Fresh and without chemical",
         amount: 0,
      },
      {
         id: 'a5',
         title: "Cake",
         prize: 18,
         dec: "This is Fresh and without chemical",
         amount: 0,
      },

   ];

   let [addedFoodItems, setAddedFoodItems] = useState([]);

   const getCartItems = (value) =>{

         // get items value....
         // console.log(value);
         let flag = 0;
         addedFoodItems.map((element)=>{
            if(element.title === value.title){
               flag = 1;
            }
         })
         
         if(flag === 0){
            setAddedFoodItems( [value, ...addedFoodItems]);
         }
        
         // console.log(addedFoodItems.length);
         

   }

   function updateCartListHandler(value){
      console.log("Mehedi Update");
      addedFoodItems.map((element)=>{
         if(value === element.title)
         {
            addedFoodItems.splice(element,1);
         }
      })
      setAddedFoodItems([...addedFoodItems]);
   }

   return (
      <React.Fragment>
         <Header arrFoodItems={addedFoodItems} onCartListUpdate = { updateCartListHandler } />
         <main>
            <Slide />
            <FoodList arrFood = {Food} onCartItems={getCartItems} />
         </main>
         <footer>
            <Footer />
         </footer>

         {/* <YourCart AddCartItems = {addedFoodItems} /> */}

      </React.Fragment>

   );

};

export default App;