import expect from 'expect';
import centerReducer from '../../reducers/centerReducer';
import { FETCH_CENTERS } from '../../actions';

describe('Center reducers', () => {
<<<<<<< HEAD
    describe('FETCH_CENTERS', () => {
        let initialState = {};
        it('Should return an empty state object', () => {
            let action = {};
            const result = centerReducer(initialState, action);
            expect(result).toEqual({});
        });
    });
});
=======
  let initialState = {

  };
  describe('Return Initial state when empty', () => {
    it('Should return an empty state object', () => {
      let action = {};
      const result = centerReducer(initialState, action);
      expect(result).toEqual({});
    });
  });

  describe('FETCH_CENTERS', () => {
    it('Should contain an array of centers', () => {
      let action = {};
      const result = centerReducer(initialState, action);
      expect(result).toEqual({});
    });
  });
});
>>>>>>> 597a7345fdb2a12fa3b1da8b1c0e6a64c406be07
