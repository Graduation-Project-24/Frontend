import { jwtDecode } from "jwt-decode";

function Account() {

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);

  return (
    <>
      <div className="title">
        <h3 className="fw-bold">Account Details</h3>
      </div>
      <div className="form mt-4">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" placeholder={decoded.family_name} />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder={decoded.given_name} />
          <label htmlFor="email"> Your Email</label>
          <input
            type="email"
            name="email"
            placeholder={decoded.email} 
            
          />
          <label htmlFor="state">State</label>
          <input type="text" name="state" placeholder="State" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" placeholder="City" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="lastname" placeholder={decoded.mobilephone}  />
          <label htmlFor="birthday">Birthday</label>
          <input type="date" name="birthday" placeholder={decoded.birthdate}  />
          <button type="submit" className="btn primary-color mt-3 text-white float-end">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
export default Account