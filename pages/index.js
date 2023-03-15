import { Inter } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <div className='flex flex-row w-full justify-center items-center mx-auto h-screen'>
        <div className="flex flex-col gap-3 border mt-5 mb-5 border-gray-300 w-1/3 p-5 rounded-lg">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hankook_Tire_logo.svg"
            width={200}
            height={150}>
          </Image>
          <h1 className='mt-5 font-bold text-3xl'>Rework Monitoring</h1>
          <p className='mt-5 text-sm font-bold text-gray-500'>Sign in to your account</p>
          <label htmlFor="Name" className='text-sm'>Username</label>
          <input type="text" className='rounded-lg'/>
          <label htmlFor="Name" className='text-sm'>Password</label>
          <input type="password" className='rounded-lg'/>
          <button className='mt-5 p-3 bg-blue-600 w-1/3 rounded-lg hover:bg-blue-500 text-white'>Sign In</button>
          <Link href="#">
            <p className='text-sm mt-10 underline hover:text-blue-600'>Sign up here if you dont have and account.</p>
          </Link>
        </div>
      </div>

    </>
  )
}
