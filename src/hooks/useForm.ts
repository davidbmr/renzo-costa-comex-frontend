import { useState, useCallback } from "react";
import * as Yup from "yup";

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validationSchema,
}: {
  initialValues: T;
  validationSchema?: Yup.ObjectSchema<any>;
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = useCallback((e: any, nameOverride?: keyof T) => {
    const name = nameOverride || e.target?.name || e.name;
    const value = e.target?.value ?? e.value ?? e.checked;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const validateForm = async () => {
    if (!validationSchema) return true;
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error: any) {
      const validationErrors: Partial<Record<keyof T, string>> = {};
      error.inner.forEach((err: any) => {
        validationErrors[err.path as keyof T] = err.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const setAllValues = useCallback((newValues: Partial<T>) => {
    setValues((prev) => ({
      ...prev,
      ...newValues,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    handleChange,
    validateForm,
    setAllValues,
    resetForm,
  };
};
