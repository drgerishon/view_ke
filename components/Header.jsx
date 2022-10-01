import {
HomeIcon,
CollectionIcon,
BadgeCheckIcon,
LightningBoltIcon,
SearchIcon, 
UserIcon,
} from "@heroicons/react/outline";
import Image from 'next/image';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white-600 cursor-pointer hover:text-red-600">View 254</h1>

      <div className='flex flex-grow justify-evenly max-w-2xl' >
        <HeaderItem  title="HOME" Icon={HomeIcon}/>
        <HeaderItem  title="TRENDING" Icon={LightningBoltIcon}/>
        <HeaderItem  title="VERIFIED" Icon={BadgeCheckIcon}/>
        <HeaderItem  title="COLLECTIONS" Icon={CollectionIcon}/>
        <HeaderItem  title="SEARCH" Icon={SearchIcon}/>
        <HeaderItem  title="ACOUNT" Icon={UserIcon}/>
      </div>

      {/* <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt=""
        width={100}
        height={100}
      /> */}
    </header>
   
  );
};

export default Header;
