import { emailRegexp, phoneRegexp, cyrillicPattern } from '../utils/regExps';

const useValidate = () => {
  const passwordValidate = (value) => {
    if (value.length < 1) {
      return 'Обязательное поле';
    }

    if (value.length < 5) {
      return 'Минимальная длина 5 символов';
    }

    if (value.length > 30) {
      return 'Максимальная длина 30 символов';
    }
    return '';
  };

  const emailValidate = (value) => {
    if (value.length < 1) {
      return 'Обязательное поле';
    }

    if (!emailRegexp.test(value)) {
      return 'Некорректный email';
    }
    return '';
  };

  const phoneValidate = (value) => {
    if (value.length < 1) {
      return 'Обязательное поле';
    }

    if (value.length < 11) {
      return 'Неверный номер';
    }

    if (!phoneRegexp.test(value)) {
      return 'Неверный номер';
    }

    return '';
  };

  const nameValidate = (value) => {
    if (value.length < 1) {
      return 'Обязательное поле';
    }

    if (value.length > 24) {
      return 'Слишком большое значение';
    }

    if (!cyrillicPattern.test(value)) {
      return 'Только латинские буквы';
    }
    return '';
  };

  const basicValidate = (value) => {
    if (value.length < 1) {
      return 'Обязательное поле';
    }

    if (value.length > 24) {
      return 'Слишком большое значение';
    }

    return '';
  };

  const allValidate = async (funcs, values) => {
    let err = true;
    let res = {};

    for (let func in funcs) {
      let el = funcs[func];
      let val = values[func];
      if (el(val) !== '') {
        err = false;
        res = {
          ...res,
          [func]: el(val),
        };
      } else {
        res = {
          ...res,
          [func]: el(val),
        };
      }
    }
    return { res, err };
  };

  return {
    emailValidate,
    phoneValidate,
    nameValidate,
    basicValidate,
    allValidate,
    passwordValidate,
  };
};

export default useValidate;
