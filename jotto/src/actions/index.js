export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT GUESS'
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
