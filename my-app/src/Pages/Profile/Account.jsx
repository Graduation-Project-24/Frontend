import React from "react";

 function Account() {
  return (
    <>
      <div className="title">
        <h3 className="fw-bold">Account Details</h3>
      </div>
      <div className="form mt-4">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" placeholder="Omar" />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder="EL-Nahas" />
          <label htmlFor="email"> Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="omarelnahas1141@gmail.com"
          />
          <label htmlFor="state">State</label>
          <input type="text" name="state" placeholder="State" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" placeholder="City" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="lastname" placeholder="Phone" />
          <label htmlFor="birthday">Birthday</label>
          <input type="date" name="birthday" placeholder="Birthday" />
          <button type="submit" className="btn primary-color mt-3 text-white float-end">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
export default Account