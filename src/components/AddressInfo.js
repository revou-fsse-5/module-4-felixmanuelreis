import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      street: Yup.string().required('Street Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().required('Zip Code is required'),
    }),
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="street"
          {...formik.getFieldProps('street')}
        />
        {formik.touched.street && formik.errors.street ? (
          <div className="text-red-600">{formik.errors.street}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="city"
          {...formik.getFieldProps('city')}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-600">{formik.errors.city}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="state"
          {...formik.getFieldProps('state')}
        />
        {formik.touched.state && formik.errors.state ? (
          <div className="text-red-600">{formik.errors.state}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Zip Code</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded"
          type="text"
          name="zip"
          {...formik.getFieldProps('zip')}
        />
        {formik.touched.zip && formik.errors.zip ? (
          <div className="text-red-600">{formik.errors.zip}</div>
        ) : null}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">Back</button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Next</button>
      </div>
    </form>
  );
};

export default AddressInfo;
