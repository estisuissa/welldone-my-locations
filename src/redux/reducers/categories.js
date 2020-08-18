import { getArrayFromLocalStorage } from '../../utils/Utils';

import {
    GET_ALL_CATEGORIES,
    NEW_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    SELECT_CATEGORY

} from '../actionTypes';

const initialState = {
    allCategories: getArrayFromLocalStorage('categories'),
    selectedCategory: null
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_CATEGORIES: {
            return {
                ...state,
                allCategories: payload
            };
        }
        case SELECT_CATEGORY: {
            return {
                ...state,
                selectedCategory: payload
            };
        }
        case NEW_CATEGORY: {
            return {
                ...state,
                allCategories: [...state.allCategories, payload],
                selectedCategory: null
            };
        }
        case EDIT_CATEGORY: {
            return {
                ...state,
                allCategories: payload,
                selectedCategory: null
            };
        }
        case DELETE_CATEGORY: {
            return {
                ...state,
                allCategories: state.allCategories.filter(({ id }) => id !== payload),
                selectedCategory: null

            };
        }
        default:
            return state;
    }
}
