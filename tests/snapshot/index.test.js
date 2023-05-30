/**
 * @jest-environment jsdom
 */

const { renderCoffee, renderCoffees } = require("../../main");

const mockDocument = {
  querySelector: jest.fn(),
};

test("renderCoffee renders correctly", () => {
  const coffee = { id: 1, name: "Light City", roast: "light" };

  const html = renderCoffee(coffee);

  expect(html).toMatchSnapshot();
});

test("renderCoffees renders correctly", () => {
  const coffees = [
    { id: 1, name: "Light City", roast: "light" },
    { id: 2, name: "Half City", roast: "light" },
    { id: 2, name: "Half City", roast: "medium" },
  ];

  const html = renderCoffees(coffees);

  expect(html).toMatchSnapshot();
});

// test("updateCoffees renders correctly", () => {
//   const filteredCoffees = [
//     { id: 1, name: "Light City", roast: "light" },
//     { id: 2, name: "Half City", roast: "light" },
//   ];

//   const html = updateCoffees(filteredCoffees);

//   expect(html).toMatchSnapshot();
// });

// test("createCoffee renders correctly", () => {
//   const e = { preventDefault: jest.fn() };

//   const html = createCoffee(e);

//   expect(html).toMatchSnapshot();
// });
