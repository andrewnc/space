import React, {useState} from 'react'
import {Header} from './MainPage'
import createLaunch from '@wasp/actions/createLaunch'

const NewLaunchPage = () => {
    return (
      <div>
        <Header />
        <main>
            <h1 className="welcome">CREATE A NEW LAUNCH</h1>
            <NewLaunchForm />
        </main>
      </div>
    )

}

const NewLaunchForm = (props) => {
  const defaultName = '';
  const defaultPayloadWeight = 0;
  const [name, setName] = useState(defaultName);
  const [payloadWeight, setPayloadWeight] = useState(defaultPayloadWeight);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createLaunch({
          name: name,
          payloadWeight: parseFloat(payloadWeight)
        });
      setName(defaultName);
      setPayloadWeight(defaultPayloadWeight);
      window.location.href = "/home";
    } catch (err) {
      window.alert('Error: ' + err.message);
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Launch Name</label>
      <input
        type='text'
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    <label htmlFor="weight">Payload Weight (lbs)</label>
      <input
        type='number'
        name="weight"
        step="0.01"
        value={payloadWeight}
        onChange={e => setPayloadWeight(e.target.value)}
      />
      <input type='submit' value='Create Launch' className="btn draw-border"/>
    </form>
  );
}

export default NewLaunchPage