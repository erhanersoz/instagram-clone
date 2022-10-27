import React, { FC, ReactNode, useMemo, useState, useCallback } from 'react';
import AuthContext from '@contexts/authContext';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const signIn = useCallback(() => setIsSignedIn(true), []);

  const memoizedValue = useMemo(
    () => ({
      signIn,
      isSignedIn,
    }),
    [isSignedIn, signIn],
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
