// imported Package
import { useContext } from 'react';

// Imported Context constant
import userContext from '../Context/UserContext';

/**
    *  use to update the username in Context  using custom hook
    * @param {string}  use to provide  name
    * @returns
 */

const useForNameChange = (nameForChange) => {
  // Get the Context Value using destructuring
  const contextData = useContext(userContext);
  const { loginData, setLoginData } = contextData;

  /**
 * @returns A function to change Name
 */

  const changeName = () => setLoginData({
    ...loginData,
    username: nameForChange,
  });
  // return a function
  return { changeName };
};

export default useForNameChange;
