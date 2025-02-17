import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalComponent({ show, handleClose, title, children }) {
    return (
        <Modal show={show} onHide={handleClose} scrollable centered size="lg" className='app-modal'>
            <Modal.Header closeButton>
                <Modal.Title className='h5'>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;