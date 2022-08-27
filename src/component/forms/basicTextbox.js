import React, { useState } from 'react';

const BasicTextbox = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [show, setShow] = useState(false);

  const showData = (e) => {
    e.preventDefault();
    setShow(true);
    console.log('========', userName, userNumber);
  };

  return (
    <>
      <form action="">
        <div className="container small-container">
          <h1 className="my-3"> Simple Form</h1>

          <div className="mb-3">
            <label htmlFor="username">username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              id="username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userNumber">Number</label>
            <input
              type="text"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              name="userNumber"
              id="userNumber"
            />
          </div>

          <button className="button" onClick={showData}>
            Run button
          </button>
        </div>
      </form>
      <br></br>
      <div className="container small-container">
        {show ? (
          <div>
            <p>{userName}</p>
            <p>{userNumber}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BasicTextbox;
