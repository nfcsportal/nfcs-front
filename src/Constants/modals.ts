type TModals = {
  type: 'error' | 'success';
  title: string;
  subtitle: string;
  buttonText: string;
  id: string;
  outsideClose?: boolean;
};

export type TModalVariantsSuccess =
  | 'change-password'
  | 'forgot-password-success'
  | 'forgot-password-error';

export const MODALS: Record<TModalVariantsSuccess, TModals> = {
  ['change-password']: {
    id: 'change-password',
    type: 'success',
    title: 'modals.success.changePassword.title',
    subtitle: 'modals.success.changePassword.subTitle',
    buttonText: 'modals.success.changePassword.button',
  },
  ['forgot-password-success']: {
    id: 'forgot-password-success',
    type: 'success',
    title: 'modals.success.forgotPassword.title',
    subtitle: 'modals.success.forgotPassword.subTitle',
    buttonText: 'modals.success.forgotPassword.button',
    outsideClose: true,
  },
  ['forgot-password-error']: {
    id: 'forgot-password-error',
    type: 'error',
    title: 'modals.success.forgotPassword.title',
    subtitle: 'modals.success.forgotPassword.subTitle',
    buttonText: 'modals.success.forgotPassword.button',
    outsideClose: true,
  },
};
