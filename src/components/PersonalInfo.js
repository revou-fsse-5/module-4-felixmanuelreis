import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      dateOfBirth: Yup.date().required('Date of Birth is required'),
    }),
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="fullName"
          {...formik.getFieldProps('fullName')}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="text-red-600">{formik.errors.fullName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="date"
          name="dateOfBirth"
          {...formik.getFieldProps('dateOfBirth')}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div className="text-red-600">{formik.errors.dateOfBirth}</div>
        ) : null}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Next</button>
    </form>
  );
};

export default PersonalInfo;
