import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { newCategory, editCategory } from '../../redux/actions/categories'

import './EditCategory.css'

function EditCategory(props) {
    const { category = {} } = props.location.state || {}
    const isNew = !category.name
    const history = useHistory();
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [error, setError] = useState(null);
    const handleNameChange = (e) => {
        setNewName(e.target.value)
        setError(null)
    }
    const handleSave = () => {
        if (newName === '') {
            setError('Please enter a value.')
        } else {
            try {
                const action = isNew ? newCategory(newName) : editCategory(category.id, newName)
                dispatch(action);
                history.push("/categories");
            }
            catch (e) {
                setError(e.message)
            }

        }
    }
    const handleCancle = () => {
        history.push("/categories");
    }

    return (
        <div className='edit-form' >
            <TextField required id="outlined-basic" error={!!error} label="Category Name" helperText={error || ''} variant="outlined" defaultValue={category.name} onChange={handleNameChange} />
            <div className='edit-buttons'>
                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                <Button variant="contained" onClick={handleCancle}>Cancle</Button>
            </div>

        </div>

    );
}

export default EditCategory;
