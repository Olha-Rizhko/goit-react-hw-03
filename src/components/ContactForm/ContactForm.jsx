import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = { name: "", number: "" };

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(5),
    });
    action.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(30, "Too long!")
      .required("Required")
      .trim(),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required")
      .trim(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapInput}>
          <label htmlFor={nameFieldId} className={css.formLabel}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.formInput}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.wrapInput}>
          <label htmlFor={numberFieldId} className={css.formLabel}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.formInput}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
