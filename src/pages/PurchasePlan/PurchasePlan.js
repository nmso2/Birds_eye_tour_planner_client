import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import usePlan from '../../hooks/usePlan';

const PurchasePlan = () => {
    const { ID } = useParams();
    const [plan] = usePlan(ID);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        fetch('https://birds-eye-tour.herokuapp.com/purchasePlan', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully!');
                    reset();
                }
            })
    }

    return (
        <div className="bg-gray-100 pt-1 lg:flex items-center">
            <div className="shadow-2xl bg-white m-12 p-8 lg:inline-block">
                <div>
                    <img className="mx-auto" src={plan?.img} alt="" />
                    <p className="text-3xl p-5">{plan?.name}</p>
                    <p className="max-w-2xl text-lg">{plan?.details}</p>
                </div>

            </div>
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-gray-800 font-medium">Customer information</p>
                    <div className="">
                        <label className="block text-sm text-gray-00" for="cus_name">Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" for="cus_email">Email</label>
                        <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("street", { required: true })} placeholder="Street" />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("city", { required: true })} placeholder="City" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="address" {...register("district", { required: true })} placeholder="District" />
                    </div>

                    <div className="">
                        <label className="block text-sm text-gray-600" for="cus_name">Phone</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="tel" {...register("phone", { required: true })} placeholder="Phone" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default PurchasePlan;