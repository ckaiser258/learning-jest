import { ShallowWrapper } from "enzyme"

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findyByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test=${val}]`)
}