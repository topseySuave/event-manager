import expect from 'expect';
import centerReducer from '../../reducers/centerReducer';
import { FETCH_CENTERS } from '../../actions';

describe('Center reducers', () => {
    describe('FETCH_CENTERS', () => {
        let initialState = {};
        it('Should return an empty state object', () => {
            let action = {};
            const result = centerReducer(initialState, action);
            expect(result).toEqual({});
        });
    });
});