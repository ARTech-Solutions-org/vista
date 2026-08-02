import logo from '@/public/vista-logo.svg';
import Image from 'next/image';

const DesktopLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Vista Egypt logo"
        className="w-9 h-9 hidden sm:block"
      />
      <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 via-lime-400 to-amber-300 text-transparent bg-clip-text hidden sm:block">
        VISTA EGYPT
      </h1>
      <Image
        src={logo}
        alt="Vista Egypt logo"
        className="w-9 h-9 block sm:hidden"
      />
    </div>
  );
};

export default DesktopLogo;
