import {jwtDecode} from 'jwt-decode';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Account() {
  const token = localStorage.getItem('userToken');
  let decoded = token ? jwtDecode(token) : {};

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    setFormData({
      firstname: decoded.given_name || '',
      lastname: decoded.family_name || '',
      phoneNumber: '',
      city: '',
      state: '',
    });
  }, [token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'https://www.smarketp.somee.com/api/Account/EditUserV2';
    const postData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      state: formData.state,
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      await axios.put(apiUrl, postData, config);
      toast.success('Account details updated successfully');
    } catch (error) {
      toast.error('Error updating account details');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="title">
        <h3 className="fw-bold">Account Details</h3>
      </div>
      <div className="form mt-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="0123456789"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {/* <label htmlFor="birthdate">Birthday</label>
          <input
            type="date"
            name="birthdate"
            placeholder="YYYY-MM-DD"
            value={formData.birthdate}
            onChange={handleChange}
          /> */}
          <button type="submit" className="btn primary-color mt-3 text-white float-end">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default Account;
