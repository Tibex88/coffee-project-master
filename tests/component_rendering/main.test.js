/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee, renderCoffees, init } = require("../../main");
const { templateToHtml } = require("../util");

describe("Component Rendering Test", () => {
  test("Render Coffee Card", () => {
    const coffeeCard = renderCoffee(coffees[0]);
    //     <div class="coffee"><p class="roast">dark</p></div>
    expect(templateToHtml(coffeeCard).querySelector(".coffee")).toBeDefined();

    expect(templateToHtml(coffeeCard).querySelector(".d-none")).not.toBeNull();

    //  <div class="d-none">1</div>;
    expect(
      templateToHtml(coffeeCard).querySelector(".d-none").textContent
    ).toBe(coffees[0].id.toString());

    expect(templateToHtml(coffeeCard).querySelector(".name")).toBeDefined();

    // <div class="name"><p>test</p></div>
    expect(
      templateToHtml(coffeeCard).getElementsByTagName("p")[0].textContent
    ).toBe(coffees[0].name);

    expect(templateToHtml(coffeeCard).querySelector(".roast")).toBeDefined();

    expect(
      templateToHtml(coffeeCard)
        .querySelector(".name")
        .getElementsByTagName("p")[0].textContent
    ).toBe(coffees[0].name);
  });

  // test("Render Coffee List", () => {
  //   const coffeeList = renderCoffees(coffees);
  //   const div = document.createElement("div");
  //   div.appendChild(templateToHtml(coffeeList));
  //   // console.log(coffeeList);
  //   console.log(div.querySelectorAll(".d-none").length);
  //   expect(div.querySelectorAll(".coffee").length).toEqual(coffees.length);
  //   // expect(templateToHtml(coffeeList).querySelector(".d-none")).not.toBeNull();
  //   // expect(
  //   //   templateToHtml(coffeeList)
  //   //     .querySelector(".name")
  //   //     .getElementsByTagName("p").textContent
  //   // ).toBe(coffees[0].name);
  //   // console.log(templateToHtml(coffeeCard).querySelector(".coffee"));
  //   // // expect(container.querySelector(".my-component__title").textContent).toBe(
  //   // //   "Hello, World!"
  //   // // );
  //   // expect(coffeeCard).toContain(
  //   //   `<div class="coffee"> <div class="d-none">${coffees[0].id}</div> <div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
  //   // );
  // });

  // test("Select Component", () => {
  //   let select = document.createElement("select");
  //   // selectbutton coffee-selectors
  //   let option = ["light", "dark", "medium", "all"];
  //   for (i in option.length) {
  //     let o = document.createElement("option");
  //     o.value = option[i];
  //     o.text = option[i];
  //     select.append(o);
  //   }

  //   document.body.appendChild(select);

  //   // expect(select.attributes);

  //   // expect(coffeeCard).toContain(
  //   //   `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
  //   // );
  // });

  // test("Input Component", () => {
  //   const coffeeCard = renderCoffees(coffees);
  //   expect(coffeeCard).toContain(
  //     `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
  //   );
  // });

  // test("Button Component", () => {
  //   const coffeeCard = renderCoffees(coffees);
  //   expect(coffeeCard).toContain(
  //     `<div class="coffee"><div class="d-none">${coffees[0].id}</div><div class="name"><p>${coffees[0].name}</p></div><p class="roast">${coffees[0].roast}</p></div>`
  //   );
  // });

  // test("Coffee card component", async () => {
  //   const coffeeCard = document.createElement("div");
  //   coffeeCard.setAttribute("class", "coffee");

  //   const coffeeID = document.createElement("div");
  //   coffeeID.setAttribute("class", "d-none");
  //   coffeeID.textContent = 1;

  //   const coffeeName = document.createElement("div");
  //   coffeeName.setAttribute("class", "name");
  //   const p = document.createElement("p");
  //   p.textContent = "Name";

  //   const roast = document.createElement("p");
  //   roast.textContent = "Name";

  //   coffeeCard.appendChild(coffeeID);
  //   coffeeCard.appendChild(coffeeName);
  //   coffeeCard.appendChild(roast);

  //   expect(element.textContent).toBe("Hello, Jest!");
  // });

  //  expect(a).toHaveProperty([])
});
