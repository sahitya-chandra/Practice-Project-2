import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserAtom } from '../atom/atom';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return updateUser ;
};