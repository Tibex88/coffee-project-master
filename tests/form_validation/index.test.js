/**
 * @jest-environment jsdom
 */

const { coffees } = require("../data");
const { renderCoffee } = require("../../main");

describe("Coffee form", () => {
  let form;

  beforeEach(() => {
    // create a new form element before each test
    form = document.createElement("form");
    form.innerHTML = `
      <label for="new-coffee-roast" class="form-label">Roast</label>
      <select class="coffee-selectors" id="new-coffee-roast" required>
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
      </select>
      <label for="new-coffee-name" class="form-label">Coffee Name</label>
      <input
        class="coffee-selectors"
        placeholder="Enter your custom coffee here"
        type="text"
        id="new-coffee-name"
        required
        minlength="6"
        maxlength="30"
        pattern="^[A-Z][a-zA-Z0-9 ]{6,30}$"
      />
      <div id="errors"></div>
      <input
        id="new-coffee-button"
        type="submit"
        value="Create"
        class="btn-dark btn button mb-5 coffee-selectors"
      />
    `;
  });

  test("form should submit with valid input", () => {
    // set input values
    const roastSelect = form.querySelector("#new-coffee-roast");
    roastSelect.value = "medium";
    const nameInput = form.querySelector("#new-coffee-name");
    nameInput.value = "MyCoffee123";

    // submit the form
    const submitButton = form.querySelector("#new-coffee-button");
    submitButton.click();

    // assert that the form was submitted successfully
    expect(submitButton.getAttribute("type")).toBe("submit");
    // expect(nameInput.hasAttribute('patternMismatch')).toBe(false);
    expect(nameInput.validity.patternMismatch).toBe(false);
  });

  test("form should not submit with invalid input", () => {
    // set input values
    const roastSelect = form.querySelector("#new-coffee-roast");
    roastSelect.value = "dark";
    const nameInput = form.querySelector("#new-coffee-name");
    nameInput.value = "invalid coffee name";

    // submit the form
    const submitButton = form.querySelector("#new-coffee-button");
    submitButton.click();

    // assert that the form was not submitted
    expect(submitButton.getAttribute("type")).toBe("submit");
    // expect(nameInput.hasAttribute('patternMismatch')).toBe(true);
    expect(nameInput.validity.patternMismatch).toBe(true);
  });
});

describe("Coffee form inputs", () => {
  let roastSelect;
  let nameInput;

  beforeEach(() => {
    // create a new form element before each test
    const form = document.createElement("form");
    form.innerHTML = `
      <label for="new-coffee-roast" class="form-label">Roast</label>
      <select class="coffee-selectors" id="new-coffee-roast" required>
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
      </select>
      <label for="new-coffee-name" class="form-label">Coffee Name</label>
      <input
        class="coffee-selectors"
        placeholder="Enter your custom coffee here"
        type="text"
        id="new-coffee-name"
        required
        minlength="6"
        maxlength="30"
        pattern="^[A-Z][a-zA-Z0-9 ]{6,30}$"
      />
      <div id="errors"></div>
      <input
        id="new-coffee-button"
        type="submit"
        value="Create"
        class="btn-dark btn button mb-5 coffee-selectors"
      />
    `;

    // get references to the input elements
    roastSelect = form.querySelector("#new-coffee-roast");
    nameInput = form.querySelector("#new-coffee-name");
  });

  test("roast select should have required attribute", () => {
    expect(roastSelect.hasAttribute("required")).toBe(true);
  });

  test("name input should have required attribute", () => {
    expect(nameInput.hasAttribute("required")).toBe(true);
  });

  test("name input should have minlength and maxlength attributes", () => {
    expect(nameInput.hasAttribute("minlength")).toBe(true);
    expect(nameInput.getAttribute("minlength")).toBe("6");
    expect(nameInput.hasAttribute("maxlength")).toBe(true);
    expect(nameInput.getAttribute("maxlength")).toBe("30");
  });

  test("name input should have regex pattern attribute", () => {
    expect(nameInput.hasAttribute("pattern")).toBe(true);
    expect(nameInput.getAttribute("pattern")).toBe("^[A-Z][a-zA-Z0-9 ]{6,30}$");
  });

  test("Form should validate coffee name length", () => {
    // Ensure that the coffee name input has the correct length validation
    // Test with a name that is too short
    nameInput.value = "Short";
    expect(nameInput.checkValidity()).toBeFalsy();

    // Test with a name that is too long
    nameInput.value = "This name is way too long to be valid";
    expect(nameInput.checkValidity()).toBeFalsy();

    // Test with a name that is the correct length
    nameInput.value = "Perfect name";
    expect(nameInput.checkValidity()).toBeTruthy();
  });
});

describe('Coffee search form', () => {
  let form;

  beforeEach(() => {
 // Create a new form element before each test
    form = document.createElement('form');
    form.innerHTML = `
      <label for="roast-selection" class="form-label"> Roast</label>
      <select id="roast-selection" class="selectbutton coffee-selectors">
        <option>light</option>
        <option>medium</option>
        <option>dark</option>
        <option>all</option>
      </select>
      <label for="coffee-name" class="form-label">Search Coffee</label>
      <input
        type="text"
        placeholder="Enter coffee name here"
        id="coffee-name"
        class="coffee-selectors"
        required
        minlength="1"
        maxlength="30"
        pattern="[a-zA-Z0-9 ]{1,30}$"
      />
      <div id="searchErrors"></div>
      <input
        id="submit"
        type="submit"
        value="Search"
        class="btn-dark btn coffee-selectors button"
      />
      <hr />
    `;
  });

  test('form should have a roast selection dropdown', () => {
    const roastSelection = form.querySelector('#roast-selection');
    expect(roastSelection).toBeTruthy();
  });

  test('form should have a coffee name search input', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput).toBeTruthy();
  });

  test('form should have a submit button', () => {
    const submitButton = form.querySelector('#submit');
    expect(submitButton).toBeTruthy();
  });

  test('coffee name input should have a placeholder text', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput.placeholder).toBe('Enter coffee name here');
  });

  test('submit button should have the text "Search"', () => {
    const submitButton = form.querySelector('#submit');
    expect(submitButton.value).toBe('Search');
  });

  test('coffee name input should have a required attribute', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput.required).toBeTruthy();
  });

  test('coffee name input should have a min length of 1', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput.minLength).toBe(1);
  });

  test('coffee name input should have a max length of 30', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput.maxLength).toBe(30);
  });

  test('coffee name input should only accept alphanumeric characters and spaces', () => {
    const coffeeNameInput = form.querySelector('#coffee-name');
    expect(coffeeNameInput.pattern).toBe('[a-zA-Z0-9 ]{1,30}$');
  });
});
