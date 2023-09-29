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
      <p className='mt-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar
        vulputate sodales. Pellentesque venenatis quis odio vulputate porttitor.
        Duis pellentesque pretium est, in ultrices augue cursus eu. Integer
        facilisis dui non eros feugiat, nec euismod eros hendrerit. Morbi
        feugiat rhoncus cursus. Fusce porttitor erat massa, in malesuada nisl
        gravida non. Donec molestie tempor felis non aliquam. Etiam eleifend ex
        ac augue pharetra lobortis. Pellentesque volutpat, nibh id mollis
        vestibulum, mi justo porttitor lacus, eget luctus sem neque rhoncus
        nisi. Cras vehicula enim eget commodo porttitor. Pellentesque
        sollicitudin justo nunc, vitae dignissim ex scelerisque quis. Quisque
        volutpat mattis scelerisque. Sed condimentum et elit at aliquet. Cras
        tempor nibh ac nibh aliquam, euismod volutpat enim cursus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Quisque placerat leo
        nec leo semper, sit amet vehicula turpis tristique. Donec lacinia eget
        mauris quis tincidunt. Nam eleifend, risus eget egestas sagittis, ex
        nibh dignissim risus, non commodo turpis justo semper ligula. Sed
        tincidunt ut est et convallis. Etiam et laoreet justo. Maecenas
        sollicitudin ex arcu, eget semper risus hendrerit ac. Suspendisse
        fermentum dolor vel aliquet vehicula. Vivamus rhoncus iaculis turpis vel
        vulputate. Nullam a eros justo. Aliquam sit amet lorem ipsum. Etiam
        suscipit id sem a efficitur. Phasellus ultrices hendrerit justo,
        convallis pellentesque erat venenatis eget. Etiam interdum felis
        vehicula tortor iaculis, a dictum nisl pellentesque. Donec vitae
        scelerisque diam, non consequat ex. Duis venenatis lorem vitae ex
        malesuada, non ornare eros egestas. Phasellus efficitur auctor velit,
        sit amet tincidunt ex tempus vitae. Etiam congue sed justo vel
        fermentum. Etiam sollicitudin, orci id faucibus cursus, ipsum massa
        ullamcorper eros, nec dictum arcu libero sit amet sem. Aliquam erat
        volutpat. Pellentesque vel nulla nec nibh feugiat consectetur a eu
        justo. Nunc auctor id orci sed venenatis. In hac habitasse platea
        dictumst. Vivamus accumsan urna vitae massa dapibus maximus.
        Pellentesque ullamcorper tempus tortor, eu tincidunt orci blandit ut.
        Aliquam eros urna, dictum non facilisis a, auctor eget justo. Donec ac
        ante pharetra, finibus elit viverra, pretium tortor. Nullam lorem erat,
        egestas sed mauris maximus, eleifend vulputate nunc. Phasellus sem
        ipsum, tempor ac lorem eu, tempus interdum nibh. Proin venenatis
        pharetra porttitor. Donec vitae orci eleifend, rutrum nisi sit amet,
        hendrerit metus. Cras nec faucibus leo. Aliquam aliquam ipsum sit amet
        felis lobortis tristique.
      </p>
    </div>
  )
}

export default ModalPage
