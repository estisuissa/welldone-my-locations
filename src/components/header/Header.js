import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Title from './Title'
import Actions from './Actions'

import { deleteCategory } from '../../redux/actions/categories';

function Header() {

    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();


    const handleDeleteClick = () => dispatch(deleteCategory(selectedCategory.id));

    const hanleEditClick = () => {
        history.push('/categories/edit', { category: selectedCategory })
    }

    const getActions = () => {
        const path = location.pathname.split('/').pop();
        const newAction = { name: 'New', fn: () => history.push('/categories/new') };
        const editAction = { name: 'Edit', fn: hanleEditClick }
        const deleteAction = { name: 'Delete', fn: handleDeleteClick };

        if (path === 'new' || path === 'edit')
            return []
        if (selectedCategory)
            return [newAction, editAction, deleteAction]

        return [newAction]
    }

    const getTitle = () => {
        const path = location.pathname.split('/').pop();
        if (path === 'new')
            return 'New Category'
        if (path === 'edit')
            return 'Edit Category'

        return 'Categories'
    }

    return (
        <AppBar position="static" color='secondary'>
            <Toolbar>
                <Title title={getTitle()} />
                <Actions actions={getActions()} />
            </Toolbar>
        </AppBar>

    )
}

export default Header