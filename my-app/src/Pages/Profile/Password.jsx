import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Password() {
  const token = localStorage.getItem('userToken');

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }

    const sendPostRequest = async (url, data, token) => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        };
        await axios.post(url, data, config);
        toast.success('Password changed successfully');
      } catch (error) {
        toast.error('Error changing password');
        console.error('Error:', error);
      }
    };

    const apiUrl = 'https://www.smarketp.somee.com/api/Account/ChangePassword';
    const postData = {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    };

    sendPostRequest(apiUrl, postData, token);
  };

  return (
    <>
      <div className="title">
        <h3 className="fw-bold">Password</h3>
      </div>
      <div className="form mt-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="currentPassword">Old Password</label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Old Password"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn primary-color mt-3 text-white float-end"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default Password;
