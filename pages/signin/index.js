import Link from 'next/link';
import Image from 'next/image';

export default function Signin() {
  return (
    <>
      <div className='flex flex-row w-full justify-center items-center mx-auto h-screen'>
        <div className="flex flex-col gap-5 py-16 border items-center border-gray-300 w-1/4 p-5 rounded-lg">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hankook_Tire_logo.svg"
            width={200}
            height={150}>
          </Image>

          <h1 className='mt-5 font-bold text-3xl'>Rework Monitoring</h1>
          <p className='mt-5 text-sm font-bold text-gray-500'>Sign in to your account</p>
          <div className='flex flex-col w-full gap-5'>
          <input type="text" className='rounded-lg' placeholder='Username'/>
          <input type="password" className='rounded-lg' placeholder='Password'/>
          </div>
          <button className='mt-5 p-3 bg-blue-600 w-1/3 rounded-lg hover:bg-blue-500 text-white'>Sign In</button>
          <Link href="/signup">
            <p className='text-sm mt-10 underline hover:text-blue-600'>Don't have account? <span className='font-bold'>Sign up</span> here.</p>
          </Link>
        </div>
      </div>

    </>
  )
}
