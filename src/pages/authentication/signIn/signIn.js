import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../config/config';
import require from "../../../config/request";
import {toast} from "react-toastify";


function SignIn() {
    const fullName = useRef();
    const Email = useRef();
    const Pass = useRef();
    const navigate = useNavigate();

    async function Submit(){
        try {
            await signIn(Email.current.value, Pass.current.value, fullName.current.value);
            SaveUserData();
            navigate('/cabinet')
        }catch {
            toast.warning("Bu nomdagi foydalanuvchi avval ro'yhatdan o'tgan.")
        }
    }

    function SaveUserData() {
        const data = {
            fullName: fullName.current.value,
            email: Email.current.value,
            password: Pass.current.value,
            role: 'user',
            group: '',
        }
        console.log(data);
        require.save('users', data).then(res => {
            toast.success("Ro'yhatdan o'tish muvaffaqiyatli amalga oshirildi");
        }).catch(err => {
            toast.error("Ro'yhatdan o'tish amalga oshirilmadi. Internet sozlamalini tekshirib ko'ring");
        })
    }

    return (
        <div className={'login'}>
            <div className="forms">
                <h3> Ro'yhatdan o'tish </h3>
                <input ref={fullName} type="text" placeholder={'Ism Familiya'}/>
                <input ref={Email} type="text" placeholder={'email'}/>
                <input ref={Pass} type="password" placeholder={'parol'}/>
                <button onClick={Submit}> Tasdiqlash </button>
            </div>
        </div>
    );
}

export default SignIn;