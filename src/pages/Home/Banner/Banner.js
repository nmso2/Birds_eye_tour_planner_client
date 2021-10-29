import React from 'react';
import './Banner.css'

const Banner = () => {
//     <style>
//         .bannerFondo{
//             height: 400px;
// }
//     </style>
    return (
        <div>
            <div>
                <div className="bannerFondo bg-gray-300	bg-left-top bg-auto bg-repeat-x">
                </div>

                <div className="-mt-80">
                    <div className="w-full text-center mb-12">
                        <h1 className="font-bold text-5xl"><span className=" text-yellow-500">BIRDS EYE</span> TOUR PLANNER
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">

                        <div className="p-2 sm:p-10 text-center cursor-pointer">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                                <div className="space-y-10">
                                    <i className="fa fa-spa"></i>

                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Spa</div>
                                            <p className="text-gray-700 text-base">
                                                Todo tipo de masajes y técnicas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 sm:p-10 text-center cursor-pointer text-white">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-yellow-600 hover:bg-yellow-700 transition duration-500">
                                <div className="space-y-10">
                                    <i className="fa fa-head-side-mask"></i>
                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Bioseguridad</div>
                                            <p className="text-base">
                                                Altos estandares de bioseguridad
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                                <div className="space-y-10">
                                    <i className="fa fa-swimmer"></i>

                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Piscina</div>
                                            <p className="text-gray-700 text-base">
                                                Piscina temperada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;