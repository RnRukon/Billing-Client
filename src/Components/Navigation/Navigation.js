import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBillingsQuery } from '../../Redux/Featurse/Billings/BillingsApi';
import { useGetMeQuery, useLogoutMutation } from '../../Redux/Featurse/Users/UserApi/userApi';
import { removeAccessTokenAndUser } from '../../Redux/Featurse/Users/UserSlice/UserSlice';
import Logo from '../Images/billing-icon-5.png'
const Navigation = () => {

    const user = useSelector(sate => sate?.users?.user)

    const { data: GetBillings } = useGetBillingsQuery();
    const { data, isLoading } = useGetMeQuery(user?.email);

    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();




    const handleLogout = () => {

        logout(user.email)
            .then(res => {

                if (res?.data?.result?.matchedCount) {
                    dispatch(removeAccessTokenAndUser())
                }
            })

    }
    const totalPaid = GetBillings?.result?.billing;

    const totalReducer = (previous, totalPaid) => previous + totalPaid?.paidAmount;
    const total = totalPaid?.reduce(totalReducer, 0);


    return (
        <nav className=' bg-slate-500 py-5 '>
            <div className=' lg:px-24 md:px-16 sm:px-12 px-10'>
                <div className=' flex justify-between items-center'>
                    <div>
                        <img className=' h-10' src={Logo} alt="" />
                    </div>
                    <div className=' text-slate-50 font-bold flex '>
                        <h3>Paid Total: {total}</h3>
                        {
                            isLoading && <button className=' ml-5' >Loading...</button>
                        }
                        {
                            data?.result?.email ?
                                <button className=' ml-5'
                                    onClick={handleLogout}>Logout</button> :
                                <button className=' ml-5' >Login</button>

                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;