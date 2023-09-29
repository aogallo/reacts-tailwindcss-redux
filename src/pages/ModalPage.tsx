import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        {' '}
        I accept
      </Button>
    </div>
  )

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <p>here is an important agreement for you to accpet</p>
        </Modal>
      )}
    </div>
  )
}

export default ModalPage
