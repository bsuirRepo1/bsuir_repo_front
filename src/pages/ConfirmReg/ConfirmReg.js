import React, { useState } from "react";
import { sendRegCode } from "../../services/sendRegCode";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ConfirmReg.css"

function ConfirmReg() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        'code': ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const data = await sendRegCode();
            navigate('/profile');
        } catch (error) {
            toast.error(`${error}`);
        }
    };

    return (
        <div className='confirm-reg-container'>
            <form onSubmit={handleSubmit} className='confirm-reg-form'>
                <div className="reg-form-group">
                    <label className="reg-form-group-label">Введите код, отправленный вам на почту</label>
                    <input 
                        className="reg-form-group-input"
                        type='text'
                        id='code'
                        name='code'
                        value={formData.code}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="confirm-reg-form-submit">Отправить</button>
            </form>
        </div>
    )
}

export default ConfirmReg