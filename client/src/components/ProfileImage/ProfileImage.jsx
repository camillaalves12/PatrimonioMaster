import React, { createContext, useState, useContext } from 'react';

const ProfileImageContext = createContext();

export const useProfileImage = () => useContext(ProfileImageContext);

export const ProfileImage = ({ children }) => {
  const [profileImageUri, setProfileImageUri] = useState(null);

  const updateProfileImage = (newUri) => {
    setProfileImageUri(newUri);
  };

  return (
    <ProfileImageContext.Provider value={{ profileImageUri, updateProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
