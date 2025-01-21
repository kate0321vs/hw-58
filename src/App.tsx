import './App.css'
import Alert from './components/UI/Alert/Alert.tsx';
import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';


const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

return (
  <>
    <button
      className="btn btn-primary mt-3 ms-3"
      onClick={() => setShowModal(!showModal)}>
      Custom Modal
    </button>

    <button
      className="btn btn-primary mt-3 ms-3"
      onClick={() => setShowAlert(true)}>
      Custom Alert
    </button>

    <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}
    >This is modal content</Modal>

    <Alert show={showAlert} type="warning" onDismiss={() => setShowAlert(false)}><p className="m-0">This is warning type
      alert</p></Alert>
  </>

);
}

export default App
