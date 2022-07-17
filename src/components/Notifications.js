import { Store } from 'react-notifications-component';

export const defaultSuccess = (text) => {
  Store.addNotification({
    title: text || 'Успешно',
    message: '',
    type: 'success',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const defaultError = (text) => {
  Store.addNotification({
    title: text || 'Ошибка',
    message: '',
    type: 'danger',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const warningError = (text) => {
  Store.addNotification({
    title: text || 'Ошибка',
    message: '',
    type: 'warning',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const connectionError = () => {
  Store.addNotification({
    title: 'Ошибка подкючения',
    message: '',
    type: 'danger',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const failAuthNotification = (info) => {
  Store.addNotification({
    title: info,
    message: '',
    type: 'danger',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const successCreateAddressNotification = (name) => {
  Store.addNotification({
    title: `Адрес ${name} создан`,
    message: ``,
    type: 'success',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const successEditProfileNotification = () => {
  Store.addNotification({
    title: 'Успешно',
    message: `Данные изменены`,
    type: 'default',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const unvalidUserEmail = (email) => {
  Store.addNotification({
    title: 'Error',
    message: `User ${email} does not exist`,
    type: 'danger',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const failSignup = (message) => {
  Store.addNotification({
    title: 'Error',
    message: message,
    type: 'danger',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const successAddToBasket = () => {
  Store.addNotification({
    title: 'Товар добавлен в корзину',
    message: '',
    type: 'default',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};
