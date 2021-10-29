import React from 'react';
import { Link } from 'react-router-dom';

const Plans = (props) => {
    const { name, img, details, _id } = props.plan;
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-md lg:min-h-full hover:shadow-2xl duration-500">

                <img alt="Placeholder" className="block h-auto w-full" src={img} />

                <header className="leading-tight p-2 md:p-4">
                    <h1 className="text-3xl">{name}</h1>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="ml-2 text-lg">{details}</p>
                </footer>

                <Link to={`/tourPlans/${_id}`}><button type="button" className="mb-10 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg">Book Now</button>
                </Link>

            </article>

        </div>
    );
};

export default Plans;