import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid lg:grid-cols-2 h-full items-center justify-center'>

      <div className='flex items-center justify-center'>{children}</div>
      <div className="hidden lg:flex h-full justify-center items-center lg:flex-col">
        <Image src="/logo.svg" alt="Logo IVANNJ CARS" width="500" height="300" />

      </div>
      
    </div>
  )
}
