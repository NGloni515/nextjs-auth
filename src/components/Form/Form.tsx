import { Formik, FormikConfig, FormikProps, FormikValues } from 'formik';
import { CSSProperties } from 'react';

export type FormikSubmitHandler<T> = (value: T) => void;

type FormProps<T> = {
  className?: string;
  initialValues: T;
  children: React.ReactNode;
  onSubmit: FormikSubmitHandler<T>;
  formStyles?: CSSProperties;
};

type Props<T> = FormProps<T> & FormikConfig<T>;

export const MyForm = <T extends FormikValues>({
  initialValues,
  validationSchema,
  formStyles,
  children,
  ...props
}: Props<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Submit the form values
      }}
    >
      {(props: FormikProps<T>) => (
        <form onSubmit={props.handleSubmit} noValidate style={formStyles}>
          {children}
        </form>
      )}
    </Formik>
  );
};
