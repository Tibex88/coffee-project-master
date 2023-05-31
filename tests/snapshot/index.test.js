/**
 * @jest-environment jsdom
 */

const {
  renderCoffee,
  renderCoffees,
} = require("../../main");

const mockDocument = {
  querySelector: jest.fn(),
};

test("renderCoffee renders correctly", () => {
  const coffee = { id: 2, name: "Light City", roast: "light" };

  let html = renderCoffee(coffee);

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