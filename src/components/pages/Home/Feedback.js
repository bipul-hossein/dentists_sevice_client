import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';


const Feedback = () => {
    return (
        <div className='w-11/12 m-auto pt-5 pb-8 bg-neutral-200 rounded-lg'>


            <div className="flex flex-col items-center">
                <h1 className='text-3xl mb-2'>Some patient Feedback</h1>

            </div>

            <div className="grid grid-cols-2">
                <div className="p-3 w-full">
                    <div className="border rounded">
                        <div className="p-3 my-3">
                            <div className="flex justify-between my-2">
                                <FaQuoteLeft className='text-orange-500 text-3xl'></FaQuoteLeft>

                            </div>
                            <div>
                                <p>Hilton Jenkins is an excellent and very conscientious practitioner. When he is operating he is totally focussed on what he is doing. I went for a routine checkup yesterday which on this occasion included a scale and polish. During the procedure he discovered a filling had come adrift which he refilled during my “checkup” session. </p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <div className='w-7 h-5'>
                                    <img className=' rounded-full' src="https://skydentalcentre.ca/wp-content/uploads/2019/09/skydentalcentre-friends-helping-friends.jpg" alt="" />
                                </div>
                                <div>
                                    <span>bipul Hossain</span><br />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="p-3 w-full mb-4">
                    <div className="border rounded">
                        <div className="p-3 my-3">
                            <div className="flex justify-between my-2">
                                <FaQuoteLeft className='text-orange-500 text-3xl'></FaQuoteLeft>


                            </div>
                            <div>
                                <p>First time I have been to dentist in over 30 years .was a nervous wreck. But as soon as I walked in the receptionists put me at ease.
                                    Then was called . She explained all she was doing and was very gentle .only thing I felt was the needle in my roof of mouth. Not as bad as I thought . </p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <div className='w-7 h-5 rounded-full'>
                                    <img src="https://skydentalcentre.ca/wp-content/uploads/2019/09/skydentalcentre-friends-helping-friends.jpg" alt="" />
                                </div>
                                <div>
                                    <span>Samim Akter</span><br />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Feedback;