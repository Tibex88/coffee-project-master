/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");

describe("Event Handling Test", () => {
  // test the coffee search button
  test("Coffee Searching Button", () => {
    var searchButton = document.createElement("button")
    var searchQueryName = "Continental"
    var searchQueryRoast = "dark"
    var searchFound = false
    searchButton.addEventListener('click', () => {
      coffees.forEach(element => {
        if (element.name.toLowerCase().includes(searchQueryName.toLowerCase()))
          if (element.roast.toLowerCase() == searchQueryRoast.toLowerCase())
            searchFound = true
      })
    })

    searchButton.click()
    expect(searchFound).toBe(true)
  });

  test("Add Custom Coffee Button", () => {
    var addButton = document.createElement("button")
    var addCoffeeName = "Macchiato"
    var addCoffeeRoast = "dark"

    var newCoffee = {
      name: addCoffeeName,
      roast: addCoffeeRoast,
      id: coffees.length + 1
    }

    addButton.addEventListener("click", () => {
      coffees.push(newCoffee)
    })

    addButton.click()

    expect(coffees.includes(newCoffee)).toBe(true)
  })

  test("Coffee Remove Button", () => {
    var removeButton = document.createElement("button")
    var coffeeName = "Continental"
    var coffeeRemoved = true
    removeButton.addEventListener('click', () => {
      coffees.splice(coffees.findIndex(e => e.name === coffeeName), 1)
    })

    removeButton.click()

    for (i = 0; i < coffees.length; i++) {
      if (coffees[i].name == coffeeName) 
        coffeeRemoved = false
        break
    }

    expect(coffeeRemoved).toBe(true)
  })
});
