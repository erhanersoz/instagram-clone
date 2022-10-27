import { createContext } from 'react';

const authContext = createContext({
  signIn: () => {},
  isSignedIn: false,
});

export default authContext;
