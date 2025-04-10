const HomeBanner = () => {
    return (
        <>
            <div
                className='max-h-[500px] h-[80vh] w-full flex flex-col justify-center items-center relative'
                style={{
                    backgroundImage: "url('./pattern-bg.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: 'top',
                }}>
                <div
                    className='absolute bottom-0 right-0 h-full w-full bg-no-repeat bg-cover bg-top z-0 block md:hidden'
                    style={{
                        backgroundImage: "url('./spiral.png')",
                    }}></div>
                <div className='h-full w-full flex flex-col sm:flex-row items-center justify-between relative'>
                    <div
                        className='absolute bottom-0 right-0 h-full w-1/2 bg-no-repeat bg-cover bg-top z-0 hidden md:block'
                        style={{
                            backgroundImage: "url('./spiral.png')",
                        }}
                    />
                    <div className='flex justify-start h-full w-full items-center mx-auto max-w-7xl px-3 md:px-10 z-10 relative'>
                        <div>
                            <p className='gradient-text logo-title flex flex-col justify-center items-start  text-5xl sm:text-6xl leading-14 font-bold mb-10 uppercase'>
                                <span className=''>Principals'</span>
                                <span className=''>Conclave - 2025</span>
                            </p>

                            <p className='logo-title flex flex-col justify-center items-start text-2xl md:text-3xl italic font-bold text-black'>
                                <span className=''>Educational Leadership Redefined:</span>
                                <span className=''>A Conclave for Future Readiness</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeBanner;