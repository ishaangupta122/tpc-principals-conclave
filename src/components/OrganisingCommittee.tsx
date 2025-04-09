const OrganisingCommittee = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-[#013E7D] to-[#985D9B]'>
        <div className='container mx-auto max-w-7xl py-20 text-white px-5 md:px-10'>
          <p className='playfair text-4xl'>
            <span className='italic'>Organising Committee</span>
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 items-start'>
            <div>
              <div>
                <p className='font-light mb-3'>Patron</p>
                <hr className='opacity-60 w-1/2' />
                <div className='mt-3'>
                  <p className='text-xl font-semibold'>Sh. Anil Bhargava</p>
                  <p>Chairman Managing Committee, TPC</p>
                </div>
              </div>
              <div className='mt-8 border-b md:border-b-none pb-5'>
                <p className='font-light mb-3'>Co-Patron</p>
                <hr className='opacity-60 w-1/2' />
                <div className='mt-3'>
                  <p className='text-xl font-semibold'>Dr. Gurbinder Singh</p>
                  <p>
                    Vice Chairman Managing Committee, TPC, Registrar TIET &
                    Director LMTSM
                  </p>
                </div>
                <div className='mt-5'>
                  <p className='text-xl font-semibold'>
                    Dr. Dwarika Nath Ratha
                  </p>
                  <p>Professor, Civil Engineering, TIET & Coordinator, TPC</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className='font-light mb-3'>Convenor</p>
                <hr className='opacity-60 w-1/2' />
                <div className='mt-3'>
                  <p className='text-xl font-semibold'>Dr. Ankush Kansal</p>
                  <p>Principal, TPC, Patiala</p>
                </div>
              </div>
              <div className='mt-8 border-b md:border-b-none pb-5'>
                <p className='font-light mb-3'>Co-Convenor</p>
                <hr className='opacity-60 w-1/2' />
                <div className='mt-3'>
                  <p className='text-xl font-semibold'>Mr. Vaibhav Singhi</p>
                  <p>Incharge Mechanical Engineering, TPC, Patiala, Punjab</p>
                </div>
                <div className='mt-5'>
                  <p className='text-xl font-semibold'>Ms. Aman Singla</p>
                  <p>Faculty, Computer Science & Engineering, TPC, Patiala</p>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className='h-full w-full flex justify-center items-center flex-col gap-5'>
              <p className='font-semibold'>Scan This QR Code to Register</p>
              <img
                src='./qr_code.png'
                alt='QR Code'
                className='w-full h-[50%] object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganisingCommittee;
