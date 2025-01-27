import * as Yup from "yup";

type StringFieldConfig = {
  type: "string";
  required?: boolean;
  isEmail?: boolean; // Validar si es un correo electrónico
  minLength?: number; // Mínimo de caracteres
  maxLength?: number; // Máximo de caracteres
  regex?: { pattern: RegExp; errorMessage: string }; // Validar con expresión regular
};

type NumberFieldConfig = {
  type: "number";
  required?: boolean;
  minValue?: number; // Valor mínimo permitido
  maxValue?: number; // Valor máximo permitido
  allowedValues?: number[]; // Lista de valores permitidos
};

type BooleanFieldConfig = {
  type: "boolean";
  required?: boolean;
};

type DateFieldConfig = {
  type: "date";
  required?: boolean;
  minDate?: Date; // Fecha mínima
  maxDate?: Date; // Fecha máxima
};

type FieldConfig =
  | StringFieldConfig
  | NumberFieldConfig
  | BooleanFieldConfig
  | DateFieldConfig;

export type SchemaConfig = Record<string, FieldConfig>;

export const createValidationSchema = (config: SchemaConfig): Yup.ObjectSchema<any> => {
  const schemaFields: Record<string, any> = {};

  Object.entries(config).forEach(([fieldName, fieldConfig]) => {
    let validator: Yup.AnySchema;

    switch (fieldConfig.type) {
      case "string":
        if ("type" in fieldConfig) {
          let stringValidator: Yup.StringSchema = Yup.string();
          if (fieldConfig.isEmail) {
            stringValidator = stringValidator.email("Debe ser un correo electrónico válido");
          }
          if (fieldConfig.minLength) {
            stringValidator = stringValidator.min(
              fieldConfig.minLength,
              `Debe tener al menos ${fieldConfig.minLength} caracteres`
            );
          }
          if (fieldConfig.maxLength) {
            stringValidator = stringValidator.max(
              fieldConfig.maxLength,
              `Debe tener como máximo ${fieldConfig.maxLength} caracteres`
            );
          }
          if (fieldConfig.regex) {
            stringValidator = stringValidator.matches(
              fieldConfig.regex.pattern,
              fieldConfig.regex.errorMessage
            );
          }
          if (fieldConfig.required) {
            stringValidator = stringValidator.required("Este campo es obligatorio");
          }
          validator = stringValidator;
        }
        break;

      case "number":
        if ("type" in fieldConfig) {
          let numberValidator: Yup.NumberSchema = Yup.number();
          if (fieldConfig.minValue) {
            numberValidator = numberValidator.min(
              fieldConfig.minValue,
              `Debe ser mayor o igual a ${fieldConfig.minValue}`
            );
          }
          if (fieldConfig.maxValue) {
            numberValidator = numberValidator.max(
              fieldConfig.maxValue,
              `Debe ser menor o igual a ${fieldConfig.maxValue}`
            );
          }
          if (fieldConfig.allowedValues) {
            numberValidator = numberValidator.oneOf(
              fieldConfig.allowedValues,
              `El valor debe ser uno de: ${fieldConfig.allowedValues.join(", ")}`
            );
          }
          if (fieldConfig.required) {
            numberValidator = numberValidator.required("Este campo es obligatorio");
          }
          validator = numberValidator;
        }
        break;

      case "boolean":
        if ("type" in fieldConfig) {
          let booleanValidator: Yup.BooleanSchema = Yup.boolean();
          if (fieldConfig.required) {
            booleanValidator = booleanValidator.required("Este campo es obligatorio");
          }
          validator = booleanValidator;
        }
        break;

      case "date":
        if ("type" in fieldConfig) {
          let dateValidator: Yup.DateSchema = Yup.date();
          if (fieldConfig.minDate) {
            dateValidator = dateValidator.min(
              fieldConfig.minDate,
              `La fecha debe ser posterior a ${fieldConfig.minDate.toLocaleDateString()}`
            );
          }
          if (fieldConfig.maxDate) {
            dateValidator = dateValidator.max(
              fieldConfig.maxDate,
              `La fecha debe ser anterior a ${fieldConfig.maxDate.toLocaleDateString()}`
            );
          }
          if (fieldConfig.required) {
            dateValidator = dateValidator.required("Este campo es obligatorio");
          }
          validator = dateValidator;
        }
        break;

      default:
        throw new Error(`Tipo de campo no soportado: ${(fieldConfig as FieldConfig).type}`);
    }

    schemaFields[fieldName] = validator;
  });

  return Yup.object().shape(schemaFields);
};
