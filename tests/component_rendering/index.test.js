/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee, renderCoffees, init } = require("../../main");
const { templateToHtml } = require("./../util");

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

  });
