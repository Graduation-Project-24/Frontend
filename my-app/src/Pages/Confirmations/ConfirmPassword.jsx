/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Confirmations.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmPassword() {
    const [userId, setUserId] = useState(null); // State to store userId
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const urlUserId = queryParams.get('userId'); // Extract userId from URL
        console.log(urlUserId)
        if (urlUserId) {
            setUserId(urlUserId); // Store userId in state
            localStorage.setItem("userId", urlUserId); // Optionally, store userId in localStorage
        } else {
            const storedUserId = localStorage.getItem("userId");
            if (storedUserId) {
                setUserId(storedUserId);
            }
        }
    }, [location]);


    const goHome = () => {
        window.location.href = "/home";
    }

    const handleSubmit = () => {
        const sendPostRequest = async (url) => {
            try {
                const response = await axios.get(url);
                setTimeout(goHome, 3000);
                toast.info("Payment Accepted");
            } catch (error) {
                console.error('Error:', error);
                toast.error("Payment Failed");
            }
        };

        if (userId) { // Check if both token and userId are available
            try {
                const apiUrl = `https://www.smarketp.somee.com/api/Order/ConfirmOrder?userId=${userId}`;
                sendPostRequest(apiUrl);
            } catch (error) {
                toast.error("Invalid Token");
            }
        } else {
            toast.error("Token or User ID not found");
        }
    }

    return (
        <div className="confirm_password py-5 my-3 mb-2">
            <ToastContainer />
            <div className="container">
                <div className="image text-center">
                    <CiCircleCheck />
                </div>
                <div className="content text-center">
                    <h2 className="fs-1 py-5">Successfully</h2>
                    <p className="text-black-50">Click to confirm Your Payment</p>
                    <button onClick={handleSubmit} className="primary-color btn text-white my-3">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPassword;
