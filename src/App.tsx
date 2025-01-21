import './App.css'
import Alert from './components/UI/Alert/Alert.tsx';
import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const modalButtons = [
    {
      type: 'primary',
      label: 'Continue',
      onClick: () => {
        setShowAlert(true);
        setShowModal(false)
      },
    },
    {
      type: 'danger',
      label: 'Close',
      onClick: () => setShowModal(false),
    },
  ];

  return (
    <>
      <button
        className="btn btn-primary mt-3 ms-3"
        onClick={() => setShowModal(true)}>
        Custom Modal
      </button>

      <button
        className="btn btn-primary mt-3 ms-3"
        onClick={() => setShowAlert(true)}>
        Custom Alert
      </button>

      <Modal show={showModal}
             title="Some kinda modal title"
             onClose={() => setShowModal(false)}
             buttons={modalButtons}
      >This is modal content
      </Modal>

      <Alert
        show={showAlert}
        type="info" onDismiss={() => setShowAlert(false)}>
        <p className="m-0">This is info type alert</p>
      </Alert>
    </>
  );
}

export default App
