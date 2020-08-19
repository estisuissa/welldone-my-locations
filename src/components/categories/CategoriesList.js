import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../redux/actions/categories';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmptyList from './EmptyList'


function CategoriesList() {

    const categories = useSelector(state => state.categories.allCategories)
    const selectedCategory = useSelector(state => state.categories.selectedCategory);
    const dispatch = useDispatch();

    const handleSelectItem = (category) => {
        dispatch(selectCategory(category))
    };

    const renderEmpty = () => {
        return (<EmptyList />)
    }

    const renderList = () => {
        return (
            <List component="nav">
                {
                    categories.map(({ id, name }) =>
                        <ListItem
                            key={id}
                            button
                            selected={selectedCategory && selectedCategory.id === id}
                            onClick={(event) => handleSelectItem({ id, name })}
                        >
                            <ListItemText primary={name} />
                        </ListItem>
                    )
                }
            </List>
        )
    }

    return categories.length > 0 ? renderList() : renderEmpty()
}

export default CategoriesList;
