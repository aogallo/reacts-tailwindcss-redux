import Button from '../components/Button'
import { GoBell, GoBug, GoDatabase, GoDownload } from 'react-icons/go'

function ButtonPage() {
  return (
    <>
      <div>
        <Button className='mb-5' primary onClick={() => console.log('hola')}>
          <GoBell />
          Click me!!
        </Button>
        <Button secondary>
          <GoDownload />
          Buy now!
        </Button>
        <Button success>
          <GoDatabase />
          Hide Ads!
        </Button>
        <Button warning>
          <GoBug />
          See Deal!
        </Button>
        <Button warning outline>
          Something
        </Button>
        <Button rounded danger>
          Rounded
        </Button>
        <Button rounded danger>
          Rounded Danger
        </Button>
        <Button primary outline>
          Outline
        </Button>
        <Button outline success>
          Outline
        </Button>
      </div>
    </>
  )
}

export default ButtonPage
