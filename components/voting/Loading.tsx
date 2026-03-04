import React from 'react';
import Image from 'next/image'

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Image
        src="/images/flame-dreaming-of-unicorns.gif"
        alt="Loading animation"
        className="w-[280px]"
      />
      <h3 className="title-bold">Loading...</h3>
    </div>
  );
}

export default Loading;
