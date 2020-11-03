import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});
test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
test("clicking on button increments counter display", () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  //click the button
  button.simulate("click");

  //find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("clicking on button decrements counter display", () => {
  const wrapper = setup();

  const incButton = findByTestAttr(wrapper, "increment-button");

  //Increment the count
  incButton.simulate("click");

  const decButton = findByTestAttr(wrapper, "decrement-button");

  //Decrement the count
  decButton.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("error does not show when not needed", () => {
  const wrapper = setup();
  const errorDiv = findByTestAttr(wrapper, "error-message");
  expect(errorDiv.hasClass("hidden")).toBe(true);
});

describe("counter is 0 and decrement is clicked", () => {
  // using a describe here so I can use a "beforeEach" for shared setup

  // scoping wrapper to the describe, so it can be used in beforeEach and the tests
  let wrapper;
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button")
    button.simulate("click")
  })
  test('error shows', () => {
    const errorDiv = findByTestAttr(wrapper, "error-message")
    expect(errorDiv.hasClass("hidden")).toBe(false)
  })
  test('expect count to still be 0', () => {
    const count = findByTestAttr(wrapper, "count").text()
    expect(count).toBe("0")
  })
  test("clicking increment clears the error", () => {
    const button = findByTestAttr(wrapper, "increment-button")
    button.simulate("click")
    const errorDiv = findByTestAttr(wrapper, "error-message")
    expect(errorDiv.hasClass("hidden")).toBe(true)
  })
});
