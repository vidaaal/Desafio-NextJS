import { useState } from 'react';

interface IErrorState {
  field: string;
  message: string;
}

interface IError {
  field: string;
  message: string;
}

export default function useErrors() {
  const [errors, setErrors] = useState<IErrorState[]>([]);

  function setError({ field, message }: IError) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldname: string) {
    return errors.find((error) => error.field === fieldname)?.message;
  }

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}
