import React, { useState, useCallback } from 'react';
import { Modal, Form, Header } from 'semantic-ui-react'
import { fetchOperatorTrucks } from '../../actions'
import ReactDropzone, { useDropzone } from 'react-dropzone'
import axiosWithAuth from '../axiosWithAuth';
import { connect } from 'react-redux';
import cuid from 'cuid'
import { TruckCardImg } from '../../styled-components';

export const TruckModal = (props) => {
    const [image, setImage] = useState()
    const [truck, setTruck] = useState({...props.truck})
    const [open, setOpen] = useState(false)

    const handleChanges = e => {
        setTruck({...truck, [e.target.name]: e.target.value})
    }

    const handleOnDrop = useCallback(files => {
        // Loop through accepted files
        files.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader()
            //onload allback gets called after the reader reads the file data
            reader.onload = (e) => {
                //Add the image to the state. FileReader is asyncronous so its best to get the latest snapshot state(ie. prevState) and update it
                setImage({id: cuid(), src: e.target.result})
                setTruck({...truck, imgUrl: e.target.result})
            }
            // Read the file as Data URL
            reader.readAsDataURL(file)
            return file
        })
    }, [])

    console.log(truck)

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
                        {({getRootProps, getInputProps, isDragActive}) => (
                            <section>
                                <div className={isDragActive ? 'drag-active ' : '' + 'img-drop'} {...getRootProps()}>
                                    <input className='img-input' {...getInputProps()} style={{display: 'inline-block'}} />
                                    {image && <TruckCardImg src={image.src} />}
                                </div>
                                {isDragActive ? (
                                        <p className='drop-text'>Release the image file here</p>
                                    ) : (
                                        <p className='drop-text'>Drag 'n' drop an image here or select to upload an image</p>
                                )}
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