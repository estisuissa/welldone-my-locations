import { getArrayFromLocalStorage, saveArrayToLocalStorage } from '../../utils/Utils';

import {
    GET_ALL_CATEGORIES,
    NEW_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    SELECT_CATEGORY
} from '../actionTypes';


export const getAllCategories = () => {
    const categories = getArrayFromLocalStorage('categories')
    return {
        type: GET_ALL_CATEGORIES,
        payload: categories
    };
}

export const newCategory = (name) => {
    const categories = getArrayFromLocalStorage('categories')
    if (categories.find(c => c.name === name)) {
        throw new Error('The category name is already exists.')
    }
    const id = new Date().getTime()
    categories.push({ id, name });
    saveArrayToLocalStorage('categories', categories)

    return {
        type: NEW_CATEGORY,
        payload: { id, name }
    };
}

export const editCategory = (categoryId, newName) => {
    const categories = getArrayFromLocalStorage('categories')
    const index = categories.map(({ id }) => id).indexOf(categoryId);
    categories[index] = { id: categoryId, name: newName }

    saveArrayToLocalStorage('categories', categories)

    return {
        type: EDIT_CATEGORY,
        payload: categories
    };
}

export const deleteCategory = (categoryId) => {
    const categories = getArrayFromLocalStorage('categories')
    const filteredCategories = categories.filter(({ id }) => id !== categoryId)
    saveArrayToLocalStorage('categories', filteredCategories);

    return {
        type: DELETE_CATEGORY,
        payload: categoryId
    };
}

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        payload: category
    };
}
