import { Link } from "react-router";

const LandingNav = () => {
  return (
    <div className='grid grid-cols-2 mx-10 my-2 items-center'>
      <div className='flex justify-evenly items-center'>
        <p className="font-bold text-2xl text-indigo-500">SkillSwap</p>
        <a className="font-semibold text-gray-500 hover:text-black" href="#home">Home</a>
        <a className="font-semibold text-gray-500 hover:text-black" href="#working">How it works</a>
        <a className="font-semibold text-gray-500 hover:text-black" href="#footer">About</a>
      </div>
      <div className="flex gap-5 pr-10 justify-end items-center">
        <Link to='/signin' className="font-semibold text-gray-500 hover:text-black">Sign In</Link>
        <Link to='/signup' className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg">Get Started</Link>
      </div>
    </div>
  )
}

export default LandingNav
