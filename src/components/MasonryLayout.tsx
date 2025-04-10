const MasonryGallery = () => {
  return (
    <div className='container mx-auto max-w-7xl py-16 px-5 md:px-10 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
        {/* Top Image - Full Width */}
        <div className='col-span-3'>
          <img
            src='./img2.jpg'
            alt='Top Image'
            className='w-full h-80 object-cover'
          />
        </div>
        <div className='col-span-3'>
          <img
            src='./6th.png'
            alt='Group Image'
            className='w-full aspect-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
