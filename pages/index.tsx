import Head from 'next/head'
import { Inter } from 'next/font/google'
import { phonestore } from '@/Components/phone'
import { useState } from 'react'
import Modal from 'react-modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const addingData = () => {
    setData(phonestore);
    console.log(phonestore);
  }

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={() => setIsOpen(true)}>Add User</button>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
          {/* <input>Add Phone Name</input>
        <input>Description of the phone</input> */}
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
          <form>
            <label for="phone_name">Phone name</label>
            <input type="text" />
            <label for="description">Description</label>
            <input type="text" />
          </form>

        </Modal>

        <button onClick={() => addingData()}>Click Me</button>

        {
          data && data.phones.map((b, index) => {
            // if(b.category.toLowerCase() == "java") {
            return (
              <div key={index}>
                <h1>{b.title}</h1>
                <p>{b.description}</p>


                <button>Delete</button>
              </div>
            )
            // }
          })
        }

      </main>
    </>
  )
}
