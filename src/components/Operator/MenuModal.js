import React, { useState } from 'react';
import { MenuButton } from '../../styled-components'
import { Modal, Form, Header } from 'semantic-ui-react'
import axiosWithAuth from '../axiosWithAuth';

export const MenuModal = ({ id, name, setMenu }) => {
    const [menuItem, setMenuItem] = useState({itemName: '', itemDescription: '', customerRatingAvg: '', itemPrice: ''})
    const [open, setOpen] = useState(false)

    const handleChanges = e => {
        setMenuItem({...menuItem, [e.target.name]: e.target.value})
    }

    const close = () => {
        setOpen(false)
    }

    const submitEdit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/trucks/:id/menu', {
                ...menuItem,
                truck_id: id
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            
        axiosWithAuth()
            .post('/api/trucks/:id/menu', {
                name
            })
            .then(res => {
                setMenu(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
            close();
    }

    return(
        <Modal 
        size='large' 
        open={open} 
        onClose={close}  
        closeOnDimmerClick={false} 
        closeIcon
        trigger={<MenuButton onClick={() => setOpen(true)}>Add Menu Item</MenuButton>}
        >
            <Header>Add Menu Item</Header>
            <Modal.Content>
            <Form size='massive'>
                    <Form.Input 
                    label='Item Name' 
                    type='text' 
                    name='itemName' 
                    value={menuItem.itemName} 
                    onChange={handleChanges} 
                    />
                    <Form.Input
                    required
                    label='Item Description'
                    type='text'
                    value={menuItem.itemDescription}
                    name='itemDescription'
                    onChange={handleChanges}  
                    />
                    <Form.Input
                    required
                    label='Item Price'
                    type='text'
                    value={menuItem.itemPrice}
                    name='itemPrice'
                    onChange={handleChanges}  
                    />
                    <Form.Input
                    required
                    label='Customer Rating'
                    type='text'
                    value={menuItem.customerRatingAvg}
                    name='customerRatingAvg'
                    placeholder='1-10'
                    onChange={handleChanges}  
                    />
                    <p className='error'></p>
                     <Form.Group inline>
                         <Modal.Actions>
                            <Form.Button size='large' onClick={submitEdit}>Submit</Form.Button>
                        </Modal.Actions>
                    </Form.Group>
            </Form>
            </Modal.Content>
        </Modal>
    )
}



export default MenuModal