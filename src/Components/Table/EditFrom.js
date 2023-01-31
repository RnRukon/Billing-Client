import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateBillingsMutation } from '../../Redux/Featurse/Billings/BillingsApi';
import { Alert } from '../Alert/Alert';

const EditFrom = ({ SingleBillingsQuery, isErrorSingleBillingsQuery, isLoadingSingleBillingsQuery }) => {



    const { register, handleSubmit, reset } = useForm();



    const [update, { isError, isLoading, isSuccess }] = useUpdateBillingsMutation();



    const handleUpdateBilling = (data) => {
        data.id = SingleBillingsQuery?.result?._id
        update(data)
    }

  

    useEffect(() => {

        
        if (isError) {
            Alert({ title: 'Server Error', type: 'error' })
        }
        if (isSuccess) {
            Alert({ title: 'Updated Successfully', type: 'success' })
            reset()

        }

    }, [isError, isSuccess, isErrorSingleBillingsQuery, reset]);

    return (
        <div>
            {!isLoadingSingleBillingsQuery &&
                <form onSubmit={handleSubmit(handleUpdateBilling)}>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                        <input type="name" id="name"
                            defaultValue={SingleBillingsQuery?.result?.fullName}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Full Name" required
                            {...register("fullName")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" id="email"
                            defaultValue={SingleBillingsQuery?.result?.email}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required
                            {...register("email")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                        <input type="phone" id="phone"
                            defaultValue={SingleBillingsQuery?.result?.phone}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone" required
                            {...register("phone")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Paid Amount</label>
                        <input type="number" id="number"
                            defaultValue={SingleBillingsQuery?.result?.paidAmount}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Paid Amount" required
                            {...register("paidAmount")}
                        />
                    </div>

                    <div className=' flex justify-end'>
                        {
                            isLoading ?
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  w-52">Loading...</button> :
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  w-52">Submit</button>

                        }
                    </div>
                </form>}
        </div>
    );
};

export default EditFrom;