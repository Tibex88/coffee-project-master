/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee } = require("../../main");
const { renderCoffees } = require("../../main");
const  { createCoffee }= require("../../main");
const {updateCoffees}= require("../../main");


  test("check if rendercoffee renders coffee", () => {
    document.body.innerHTML=`
    <div class="col-lg-6 col-m-6 coffee-div">
    
    </div>`

    const c={
      id:1,
      name:'coffees',
      roast:'light'
    }

    

    

    expect(renderCoffee(c)).toBe(`<div class=\"coffee\"><div class=flex><div class=\"d-none\">1</div><div class=\"name\"><p>coffees</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div>`)
  

  });

  test("check if rendercoffees renders coffee", () => {
    document.body.innerHTML=`
    <div class="col-lg-6 col-m-6 coffee-div">
    
    </div>`

  

    

    

    expect(renderCoffees(coffees)).toBe(`<div class="coffee"><div class=flex><div class="d-none">1</div><div class="name"><p>Light City</p></div><p class="roast">light</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">2</div><div class="name"><p>Half City</p></div><p class="roast">light</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">3</div><div class="name"><p>Cinnamon</p></div><p class="roast">light</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">4</div><div class="name"><p>City</p></div><p class="roast">medium</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">5</div><div class="name"><p>American</p></div><p class="roast">medium</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">6</div><div class="name"><p>Breakfast</p></div><p class="roast">medium</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">7</div><div class="name"><p>High</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">8</div><div class="name"><p>Continental</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">9</div><div class="name"><p>New Orleans</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">10</div><div class="name"><p>European</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">11</div><div class="name"><p>Espresso</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">12</div><div class="name"><p>Viennese</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">13</div><div class="name"><p>Italian</p></div><p class="roast">dark</p></div><div class="del">X</div></div><div class="coffee"><div class=flex><div class="d-none">14</div><div class="name"><p>French</p></div><p class="roast">dark</p></div><div class="del">X</div></div>`)
  

  });


  test('check if updates coffee updates coffee', ()=>{

    require('../../main')

    document.body.innerHTML=`
   
          <div id="coffees" class="d-flex flex-wrap">
            <div></div>
            <p></p>
          </div>
        `


  
   
  var coffeeList = document.querySelector("#coffees")

  var submitButton = document.createElement("button")
  
  var roastSelection =document.createElement("input");
 
  var coffeeSearch = document.createElement("input");
  
       

    
    

      coffeeSearch.value='half city';
      roastSelection.value='light';

      const updateCoffees = (e) => {
        
        if (e !== undefined) {
          e.preventDefault();
        } 
        var searchCoffee = coffeeSearch.value; 
        var selectedRoast = roastSelection.value; 
        var filteredCoffees = [];

        coffees.forEach(function (coffee) {
          
          if (
            coffee.name.toLowerCase().includes(searchCoffee.toLowerCase()) &&
            coffee.roast === selectedRoast
          ) {
            
            filteredCoffees.push(coffee);
          }
         
          else if (
            coffee.name.toLowerCase().includes(searchCoffee.toLowerCase()) &&
            selectedRoast === "all"
          ) {
        
            filteredCoffees.push(coffee);
          }
        });
        
       coffeeList.innerHTML = renderCoffees(filteredCoffees);

      
       
      };


     updateCoffees(submitButton.click())
     
     
    
   

    
   
  
   

  
    
    

    

     expect(coffeeList.innerHTML).toBe('<div class=\"coffee\"><div class=\"flex\"><div class=\"d-none\">2</div><div class=\"name\"><p>Half City</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div>')





  })


  test('check if Createcoffee updates creates coffee', ()=>{

   

    document.body.innerHTML=`
    </form>
    <!--ADD COFFEE SECTION-->
    <h2 class="addCoffee text-center">
      <i class="fa-solid fa-mug-hot"></i> Add Custom Coffee
    </h2>
    <form class="d-flex flex-column">
      <!--                        SELECT NEW COFFEE ROAST-->
      <label for="new-coffee-roast" class="form-label">Roast</label>
      <select class="coffee-selectors" id="new-coffee-roast">
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
      </select>
      <!--                        ADD NEW COFFEE NAME BY USER INPUT-->
      <label for="new-coffee-name" class="form-label">Coffee Name</label>
      <input
        class="coffee-selectors"
        placeholder="Enter your custom coffee here"
        type="text"
        id="new-coffee-name"
      />
      <input
        id="new-coffee-button"
        type="submit"
        value="Create"
        class="btn-dark btn button mb-5 coffee-selectors"
      />
    </form>
        `


  
   
  

  var createButton = document.createElement("button")
  
  const {init}=require('../../main')
  
  var coffeeName=document.querySelector("#new-coffee-name").value;
  var coffeeRoast=document.querySelector("#new-coffee-roast").value;
  
    coffeeName='abebe'
    coffeeRoast='light'

  const createCoffee = (e) => {
    
    // RETRIEVES NEW COFFEE NAME FROM USER INPUT:
    const newCoffeeName = coffeeName;
    //RETRIEVES ROAST TYPE FROM DROPDOWN SELECTOR REGARDING NEW COFFEE NAME:
    const newCoffeeRoast = coffeeRoast;
    //CREATES NEW OBJECT TO BE PUSHED TO ARRAY OF COFFEE OBJECTS:
    var newCoffee = {
      id: coffees.length + 1,
      name: newCoffeeName,
      roast: newCoffeeRoast,
    };
    //PUSHES NEW COFFEE TO ARRAY:
    coffees.push(newCoffee);
    init();
  };
    

     
     createCoffee(createButton.click())
     
    
   

    expect(renderCoffees(coffees)).toBe(`<div class=\"coffee\"><div class=flex><div class=\"d-none\">1</div><div class=\"name\"><p>Light City</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">2</div><div class=\"name\"><p>Half City</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">3</div><div class=\"name\"><p>Cinnamon</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">4</div><div class=\"name\"><p>City</p></div><p class=\"roast\">medium</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">5</div><div class=\"name\"><p>American</p></div><p class=\"roast\">medium</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">6</div><div class=\"name\"><p>Breakfast</p></div><p class=\"roast\">medium</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">7</div><div class=\"name\"><p>High</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">8</div><div class=\"name\"><p>Continental</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">9</div><div class=\"name\"><p>New Orleans</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">10</div><div class=\"name\"><p>European</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">11</div><div class=\"name\"><p>Espresso</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">12</div><div class=\"name\"><p>Viennese</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">13</div><div class=\"name\"><p>Italian</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">14</div><div class=\"name\"><p>French</p></div><p class=\"roast\">dark</p></div><div class=\"del\">X</div></div><div class=\"coffee\"><div class=flex><div class=\"d-none\">15</div><div class=\"name\"><p>abebe</p></div><p class=\"roast\">light</p></div><div class=\"del\">X</div></div>`)





  })

  
  test('check if Removecoffee removes coffee coffee', ()=>{

  // document.body.innerHTML=`<div class=\"coffee\"><div class=\"flex\">
  //                    <div class=\"d-none\">2</div><div class=\"name\"><p>Half City</p></div><p class=\"roast\">light</p>
  //                    </div><div class=\"del\">X</div></div>`


  //                const {init} =require('../../main')   
  //                    removeCoffee = (e) => {
  //                     let id = parseInt(
  //                       e.target.parentElement.getElementsByClassName("d-none")[0].outerText
  //                     );
  //                     coffees = coffees.filter((e) => {
  //                       return e.id != id;
  //                     });
  //                     init();
  //                   };

  //                   var delBtns = document.querySelectorAll(".del");

  //                    window.addEventListener("load", function () {
                      
  //                     var delBtns = document.querySelectorAll(".del");
  //                     delBtns.forEach((e) => {
  //                       e.addEventListener("click", removeCoffee);
  //                     });
  //                   });


  //                       delBtns.click();




       // expect(document.body.innerHtml).toBe()









})

