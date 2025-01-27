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

  const validateField = async (name: keyof T, value: any) => {
    if (!validationSchema) return; // No validation schema
    try {
      // Validate only the specific field
      await validationSchema.validateAt(name as string, { ...values, [name]: value });
      setErrors((prevErrors:any) => {
        const { [name]: _, ...restErrors } = prevErrors; // Remove the error for this field
        return restErrors;
      });
    } catch (error: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error.message, // Set the new error message for this field
      }));
    }
  };

  const handleChange = useCallback(
    async (e: any, nameOverride?: keyof T) => {
      const name = nameOverride || e.target?.name || e.name;
      const value = e.target?.value ?? e.value ?? e.checked;

      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Validate the field on change
      await validateField(name, value);
    },
    [values, validationSchema] // Dependencies
  );

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
