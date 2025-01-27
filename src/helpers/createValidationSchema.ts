import * as Yup from "yup";

type StringFieldConfig = {
  type: "string";
  required?: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
  regex?: { pattern: RegExp; errorMessage: string };
};

type NumberFieldConfig = {
  type: "number";
  required?: boolean;
  minValue?: number;
  maxValue?: number;
  allowedValues?: number[];
};

type BooleanFieldConfig = {
  type: "boolean";
  required?: boolean;
};

type DateFieldConfig = {
  type: "date";
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
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
            stringValidator = stringValidator.email(
              "Por favor, introduce una dirección de correo electrónico válida."
            );
          }
          if (fieldConfig.minLength) {
            stringValidator = stringValidator.min(
              fieldConfig.minLength,
              `Este campo debe tener al menos ${fieldConfig.minLength} caracteres.`
            );
          }
          if (fieldConfig.maxLength) {
            stringValidator = stringValidator.max(
              fieldConfig.maxLength,
              `Este campo no puede exceder los ${fieldConfig.maxLength} caracteres.`
            );
          }
          if (fieldConfig.regex) {
            stringValidator = stringValidator.matches(
              fieldConfig.regex.pattern,
              fieldConfig.regex.errorMessage || "El valor no cumple con el formato requerido."
            );
          }
          if (fieldConfig.required) {
            stringValidator = stringValidator.required("Este campo es requerido.");
          }
          validator = stringValidator;
        }
        break;

      case "number":
        if ("type" in fieldConfig) {
          let numberValidator: Yup.NumberSchema = Yup.number().typeError(
            "Por favor, introduce un valor numérico válido."
          );
          if (fieldConfig.minValue) {
            numberValidator = numberValidator.min(
              fieldConfig.minValue,
              `El valor mínimo permitido es ${fieldConfig.minValue}.`
            );
          }
          if (fieldConfig.maxValue) {
            numberValidator = numberValidator.max(
              fieldConfig.maxValue,
              `El valor máximo permitido es ${fieldConfig.maxValue}.`
            );
          }
          if (fieldConfig.allowedValues) {
            numberValidator = numberValidator.oneOf(
              fieldConfig.allowedValues,
              `El valor debe ser uno de los siguientes: ${fieldConfig.allowedValues.join(", ")}.`
            );
          }
          if (fieldConfig.required) {
            numberValidator = numberValidator.required("Este campo es requerido.");
          }
          validator = numberValidator;
        }
        break;

      case "boolean":
        if ("type" in fieldConfig) {
          let booleanValidator: Yup.BooleanSchema = Yup.boolean().typeError(
            "Por favor, selecciona una opción válida."
          );
          if (fieldConfig.required) {
            booleanValidator = booleanValidator.required("Este campo es requerido.");
          }
          validator = booleanValidator;
        }
        break;

      case "date":
        if ("type" in fieldConfig) {
          let dateValidator: Yup.DateSchema = Yup.date().typeError(
            "Por favor, introduce una fecha válida."
          );
          if (fieldConfig.minDate) {
            dateValidator = dateValidator.min(
              fieldConfig.minDate,
              `La fecha debe ser posterior a ${fieldConfig.minDate.toLocaleDateString()}.`
            );
          }
          if (fieldConfig.maxDate) {
            dateValidator = dateValidator.max(
              fieldConfig.maxDate,
              `La fecha debe ser anterior a ${fieldConfig.maxDate.toLocaleDateString()}.`
            );
          }
          if (fieldConfig.required) {
            dateValidator = dateValidator.required("Este campo es requerido.");
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