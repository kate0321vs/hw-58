import './App.css'
import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';


const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

return (
  <>
    <button
      className="btn btn-primary mt-3 ms-3"
      onClick={() => setShowModal(!showModal)}>
      Custom Modal
    </button>

    <Modal show={showModal} title="Some kinda modal title" onClose={() => setShowModal(false)}
    >This is modal content</Modal>
  </>
);
}

export default App
