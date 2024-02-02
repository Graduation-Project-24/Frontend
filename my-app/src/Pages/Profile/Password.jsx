import {Link } from 'react-router-dom'; 

function Password() {
  return <>
    <div className="title">
        <h3 className="fw-bold">Password</h3>
      </div>
      <div className="form mt-4">
        <form>
          <label htmlFor="oldpassword">Old Password</label>
          <input type="password" name="oldpassword" placeholder="Old Password" />
          <label htmlFor="newpassword">New Password</label>
          <input type="password" name="newpassword" placeholder="New Password" />
          <label htmlFor="confirmpassword">Re-enter Password</label>
          <input type="password" name="confirmpassword" placeholder="Re-enter Password" />
          <p>if you forget your password <Link className='orange' to="/forgetpassword">Click me</Link></p>
          <button type="submit" className="btn primary-color mt-3 text-white float-end">
            Save Changes
          </button>
        </form>
      </div>
  </>;
}
export default Password;
