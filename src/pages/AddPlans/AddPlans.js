import React from 'react';
import { useForm } from 'react-hook-form';
const AddPlans = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://birds-eye-tour.herokuapp.com/tourPlans', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Plan Added Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-gray-800 font-medium">Add Plans</p>
                    
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="address">Plan Name</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("name", { required: true })} placeholder="Plan Name" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="address">Image Url</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("img", { required: true })} placeholder="Url" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="address">Details</label>
                        <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("details", { required: true })} placeholder="Details" />
                    </div>
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="address">Duration</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" {...register("duration", { required: true })} placeholder="3 Nights 2 Days" />
                    </div>
                    <div className="inline-block mt-2 w-1/2 pr-1">
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" {...register("cost", { required: true })} placeholder="Cost" />
                    </div>
                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" {...register("rating", { required: true })} placeholder="Rating" />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Add Plan</button>
                    </div>
                </form>
            </div>
    );
};

export default AddPlans;