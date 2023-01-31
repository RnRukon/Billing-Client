import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBillingsQuery } from '../../Redux/Featurse/Billings/BillingsApi';
import {  useLogoutMutation } from '../../Redux/Featurse/Users/UserApi/userApi';
import { removeAccessTokenAndUser } from '../../Redux/Featurse/Users/UserSlice/UserSlice';
import Logo from '../Images/billing-icon-5.png'
const Navigation = () => {


    const { data: GetBillings } = useGetBillingsQuery();


    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const user = useSelector(sate => sate?.users?.user)



    const handleLogout = () => {

        logout(user.email)
            .then(res => {
              
                   if (res?.data?.result?.matchedCount) {
                    dispatch(removeAccessTokenAndUser())
                   }
           } )

    }
    return (
        <nav className=' bg-slate-500 py-5 '>
            <div className=' lg:px-24 md:px-16 sm:px-12 px-10'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <img className=' h-10' src={Logo} alt="" />
                    </div>
                    <div className=' text-slate-50 font-bold flex '>
                        <h3>Paid Total: {GetBillings?.result?.total}</h3>

                         {
                           user?.active ?
                                <button className=' ml-5' onClick={handleLogout}>Logout</button> :
                                <button className=' ml-5' >Login</button>

                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;