// imported Package
import { useContext } from 'react';

// Imported Context constant
import { userContext } from '../Context/UserContext';

/**
 *  use to update the username in Context  using custom hook
 * @param {string} nameForChange use to provide  name
 * @returns
 */
const useForNameChange = (nameForChange) => {
    // Get the Context Value using destructuring
    const useForNameChange = useContext(userContext);
    const { loginData, setLoginData } = useForNameChange;

    /**
     *
     * @returns A function to change Name
     */
    const changeName = () =>
        setLoginData({
            ...loginData,
            username: nameForChange,
        });
        // return a function
    return { changeName };
};

export default useForNameChange;
