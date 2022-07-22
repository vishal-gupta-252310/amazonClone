import { useContext } from 'react';
// imported Package

import { userContext } from '../Context/UserContext';
// Immported created Context Variable

/**
 *  use to update the username in Context  using custom hook
 * @param {string} nameForChange
 * @returns
 */
const useForNameChange = (nameForChange) => {
    // Get the Context Value using deestructuring
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

    return { changeName };
};

export default useForNameChange;
