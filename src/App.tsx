import './App.css'
import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';


const App = () => {

  const [showModal, setShowModal] = useState<boolean>(true);

return (
  <>
    <Modal show={showModal} title="custtttoooom title" onClose={() => setShowModal(true)}
    >Hello</Modal>
  </>
);
}

export default App
