import React, { useState } from 'react';
import { Modal, Form, Header } from 'semantic-ui-react'
import { fetchOperatorTrucks } from '../../actions'
import ReactDropzone, { useDropzone } from 'react-dropzone'
import axiosWithAuth from '../axiosWithAuth';
import { connect } from 'react-redux';

export const TruckModal = (props) => {
    const truckImgUrl = props.truck.imgUrl;
    const [truck, setTruck] = useState({...props.truck, imgUrl: truckImgUrl ? truckImgUrl : ''})
    const [open, setOpen] = useState(false)

    const handleChanges = e => {
        setTruck({...truck, [e.target.name]: e.target.value})
    }

    const handleOnDrop = files => {
        console.log(files)
        setTruck({...truck, imgUrl: files})
    }

    const close = () => {
        setOpen(false)
    }

    const submitEdit = e => {
        console.log(truck)
        e.preventDefault()
        axiosWithAuth()
            .put('/trucks', {
                ...truck,
            })
            .then(res => {
                console.log(res)
            })
            .then(() => {
                props.fetchOperatorTrucks('/trucks/owned')
            })
            .catch(err => {
                console.log(err)
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
        trigger={<p className='menu-link' onClick={() => setOpen(true)}>Edit Truck</p>}
        >
            <Header>Edit Truck</Header>
            <Modal.Content>
                    <ReactDropzone onDrop={handleOnDrop} accept={'image/*'}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div className='img-drop' {...getRootProps()}>
                                    <input className='img-input' {...getInputProps()} style={{display: 'inline-block'}} />
                                </div>
                            </section>
                        )}
                    </ReactDropzone>
            <Form size='massive'>
                    <Form.Input 
                    disabled
                    label='Truck Name' 
                    type='text' 
                    name='name' 
                    value={truck.name} 
                    onChange={handleChanges} 
                    />
                    <Form.Input
                    required
                    label='Cuisine Type'
                    type='text'
                    value={truck.cuisineType}
                    name='cuisineType'
                    onChange={handleChanges}  
                    />
                    <p className='error'>{props.error}</p>
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



export default connect(
    null,
    {fetchOperatorTrucks}
)(TruckModal)