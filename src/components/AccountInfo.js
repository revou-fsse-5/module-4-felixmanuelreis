import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AccountInfo = ({ formData, setFormData, prevStep, submitForm }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      setFormData(values);
      submitForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="username"
          {...formik.getFieldProps('username')}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-600">{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="password"
          name="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">Back</button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </div>
    </form>
  );
};

export default AccountInfo;
