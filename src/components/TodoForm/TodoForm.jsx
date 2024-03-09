import { FiSearch } from 'react-icons/fi';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './TodoForm.module.css';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, 'Todo text must be at least 3 characters!')
    .max(50, 'Todo text  must be less than 50 characters!')
    .required('Todo text  is required!'),
});
export const TodoForm = ({ onSubmit }) => {
  const handleFormSubmit = (formData, formActions) => {
    onSubmit(formData);
    formActions.resetForm();
    formActions.setErrors({});
  };

  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={style.form}>
        <div>
          <Field
            className={style.input}
            type="text"
            name="text"
            placeholder="What do you want to write?"
          />
          <ErrorMessage name="text" component="span" />
        </div>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </Form>
    </Formik>
  );
};
