import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

  return (
    <>
      <h1>AboutScreen</h1>
      <hr />

      <pre>
          { JSON.stringify(user, null, 4) }
      </pre>

      <button className='btn btn-secondary'
      onClick={ handleClick }>
          Logout
      </button>
    </>
  );
}
