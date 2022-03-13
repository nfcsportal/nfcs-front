import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MODALS, TModalVariantsSuccess } from '../Constants/modals';
import { ROUTES } from '../Constants/Routes';
import { getModal } from '../Store/Selectors/modal';
import { setModal } from '../Store/Slices/modal';

export const useCurrentButtonActions = () => {
  const modal: TModalVariantsSuccess | '' = useSelector(getModal);

  const [action, setAction] = useState<any>();
  useEffect(() => {
    switch (modal) {
      case 'change-password':
        setAction(() => () => (window.location.pathname = ROUTES.SIGN_IN));
        break;
      case 'forgot-password-success':
        setAction(() => () => (window.location.pathname = ROUTES.HOME));
        break;
      default:
        setAction(null);
    }
  }, [modal]);
  return {
    action,
  };
};
export const useModal = () => {
  const modal: TModalVariantsSuccess | '' = useSelector(getModal);
  const dispatch = useDispatch();
  const isOpen = useMemo(() => {
    return !!modal;
  }, [modal]);

  const closeModal = () => {
    if (currentModal && currentModal.outsideClose) {
      dispatch(setModal(''));
    }
  };

  const currentModal = useMemo(() => {
    if (modal) {
      return MODALS[modal];
    }
  }, [modal]);

  return {
    isOpen,
    closeModal,
    currentModal,
  };
};
