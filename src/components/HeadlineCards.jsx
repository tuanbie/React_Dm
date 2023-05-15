import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* <h1 className='text-orange-600 font-bold text-4xl text-center justify-between'>
        MORE & more
      </h1> */}
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New & Hot</p>
          {/* <p className='px-2'>Through 8/26</p> */}
          {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Chill here</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full rounded-xl'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QNqKtBsgpNdyfHKaQdTYGWtpTj7fB1Fkzg&usqp=CAU'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Top 50</p>
          {/* <p className='px-2'>Added Daily</p> */}
          {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Chill here</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full  rounded-xl'
          src='data:image/jpeg;base64,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'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>More of what you like</p>
          {/* <p className='px-2'>Tasty Treats</p> */}
          {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Chill here</button> */}
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1y7nOaM2v31WbFxI_qO5w9rrqdpshQn5jsubN-Ub-ejZ4a4vZu4eIN6DgPDuyyz-_YjE&usqp=CAU'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
