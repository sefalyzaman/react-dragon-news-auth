import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import qZoon1 from '../../assets/qZone1.png'
import qZoon2 from '../../assets/qZone2.png'
import qZoon3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl btn-outline w-full">Login With</h2>
                <button className="btn">
                   <FaGoogle></FaGoogle>
                 Login with Google
                </button>
                <button className="btn">
                   <FaGithub></FaGithub>
                   Login with Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4 btn-outline w-full">Find Us On</h2>
                <a className='p-4 flex border-x text-lg items-center rounded-t-lg' href="">
                    <FaFacebook className='mr-3 '></FaFacebook>
                  <span >Facebook</span>  
                </a>
                <a className='p-4 flex border text-lg items-center' href="">
                    <FaTwitter className='mr-3 '></FaTwitter>
                  <span >Twitter</span>  
                </a>
                <a className='p-4 flex border text-lg items-center rounded-b-lg' href="">
                   <FaInstagram className='mr-3 '></FaInstagram>
                  <span>Instagram</span>  
                </a>
               
            </div>
            {/* {q zoon} */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zoon</h2>
               <img src={qZoon1} alt="" />
               <img src={qZoon2} alt="" />
               <img src={qZoon3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;