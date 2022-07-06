import pretoBg1 from '../img/preto-bg-1.jpg'
import pretoBg2 from '../img/preto-bg-2.jpg'
import pretoBg3 from '../img/preto-bg-3.jpg'
import pretoBg4 from '../img/preto-bg-4.jpg'
import pretoBg5 from '../img/preto-bg-5.jpg'
import LeftCurve from './LeftCurve';
import RightCurve from './RightCurve';

const HomeBackground = () => {
    return ( 
        <div className='fixed w-full -z-10'>
            <div className=" flex flex-col relative">
                <img src={pretoBg1} alt="" />
                <h1 className="uppercase absolute top-1/3 left-1/2 -translate-x-1/2 text-center text-9xl font-bold text-white title">Brazilian <br /> <span className='title text-[108px]'>Steakhouse</span></h1>
                <LeftCurve color="#0FB5C2" pos="0 -100 1150 400" /> {/* Blue */}
                <LeftCurve color="#EB7673" pos="120 -200 1150 400" /> {/* Red */}
                <RightCurve color="#EFC167" pos="-820 -300 1050 900" /> {/* Yellow */}
                <RightCurve color="#B1BC74" pos="-630 -390 1050 900" /> {/* Green */}
                <div className='absolute mt-28 top-1/2 left-1/2 -translate-x-1/2 text-center text-3xl flex flex-row space-x-10'>
                    <button className='uppercase font-bold text-white bg-[#E8923B] px-6 py-3 rounded-lg'>Our Menus</button>
                    <button className='uppercase font-bold text-white bg-[#0FB5C2] px-6 py-3 rounded-lg'>Book a Table</button>
                </div>
            </div>
        </div>
     );
}

export default HomeBackground;