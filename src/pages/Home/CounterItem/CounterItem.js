import { CalendarIcon, UserGroupIcon, UsersIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import React from 'react';

import { CountUp } from 'use-count-up'



const CounterItem = () => {
    return (
        <div>
            <div className="min-w-screen min-h-full bg-gray-100 flex items-center justify-center bg-gray-100 p-10">
                <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                    <p className="">SOME STATISTICS</p>
                    <h3 className="pb-16 text-4xl"><span className=" text-yellow-500">BIRDS EYE</span> IN NUMBERS</h3>
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">

                                        <UserGroupIcon />

                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className=" text-6xl text-blue-400"><CountUp isCounting end={30} duration={5} />+</div>
                                        <div className="text-lg text-blue-400">Family Tours a Year</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-red-400">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-red-400 text-white rounded-full mr-3">
                                        <UsersIcon />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className=" text-6xl text-red-400 "><CountUp isCounting end={50} duration={5} />+</div>
                                        <div className="text-lg text-red-400">Couple Tours a Year</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                                        <CalendarIcon />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className=" text-6xl text-yellow-400 "><CountUp isCounting end={20} duration={5} />+</div>
                                        <div className="text-lg text-yellow-400">Tour Plans a Year</div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                                <div className="flex items-center">
                                    <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">

                                        <EmojiHappyIcon />

                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className=" text-6xl text-green-400 "><CountUp isCounting end={500} duration={5} />+</div>
                                        <div className="text-lg text-green-400">Happy smiles</div>
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

export default CounterItem;