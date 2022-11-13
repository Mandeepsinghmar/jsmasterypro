import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LeftSidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const router = useRouter();

  return (
    <div className={` ${isSidebarOpen ? 'w-[240px]' : 'w-[80px]'} overflow-auto overflow-x-hidden bg-pro-black-2 text-white flex items-center justify-between flex-col fixed h-screen`}>

      <div className="flex flex-col  items-center w-full">
        <img className="mt-10 " src="/assets/logo.png" />
        <div className="mt-14 block cursor-pointer xl:hidden p-3 rounded-lg bg-black">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75033 0.666748C3.83831 0.666748 0.666992 3.83806 0.666992 7.75008C0.666992 11.6621 3.83831 14.8334 7.75033 14.8334C9.40608 14.8334 10.9291 14.2653 12.1352 13.3134L15.1788 16.3571C15.5042 16.6826 16.0319 16.6826 16.3573 16.3571C16.6827 16.0317 16.6827 15.504 16.3573 15.1786L13.3137 12.1349C14.2656 10.9288 14.8337 9.40583 14.8337 7.75008C14.8337 3.83806 11.6623 0.666748 7.75033 0.666748Z" fill="#D0DFFF" />
          </svg>

        </div>
        <div className="mt-14 xl:px-4 hidden xl:block  relative">

          <svg className="absolute top-[11px] ml-3 cursor-pointer" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.74984 0.666565C3.83782 0.666565 0.666504 3.83788 0.666504 7.7499C0.666504 11.6619 3.83782 14.8332 7.74984 14.8332C9.40559 14.8332 10.9287 14.2651 12.1348 13.3132L15.1783 16.3568C15.5038 16.6822 16.0314 16.6822 16.3568 16.3568C16.6823 16.0314 16.6823 15.5037 16.3568 15.1783L13.3133 12.1347C14.2651 10.9286 14.8332 9.40557 14.8332 7.7499C14.8332 3.83788 11.6618 0.666565 7.74984 0.666565ZM2.33317 7.7499C2.33317 4.75836 4.7583 2.33323 7.74984 2.33323C10.7414 2.33323 13.1665 4.75836 13.1665 7.7499C13.1665 10.7415 10.7414 13.1666 7.74984 13.1666C4.7583 13.1666 2.33317 10.7415 2.33317 7.7499Z" fill="#A3B3BC" />
          </svg>
          <input placeholder="Search" className="bg-pro-black-400 hidden xl:block w-full pl-10 placeholder:font-medium font-medium  text-sm p-2 focus:outline-none rounded-lg" />

        </div>
        <div className="w-full px-4 mt-5 space-y-4">
          <Link href="/" className={`flex gap-3 rounded-lg ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 items-center  ${router.pathname === '/' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/') ? <img src="/assets/home_white.svg" alt="home" /> : <img src="/assets/home_gray.svg" alt="home" />
            }
            <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/' ? 'text-white' : 'text-pro-white-800'}`}>Home</p>
          </Link>
          <Link href="/profile" className={`flex gap-3 ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} rounded-lg items-center py-3 ${router.pathname === '/profile' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/profile') ? <img src="/assets/profile_white.svg" alt="profile" /> : <img src="/assets/profile_gray.svg" alt="orders" />
            }
            <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'}  text-sm ${router.pathname === '/profile' ? 'text-white' : 'text-pro-white-800'}`}>Profile</p>

          </Link>
          <Link href="/orders" className={`flex justify-center xl:justify-between items-center rounded-lg  ${router.pathname === '/orders' && 'bg-pro-blue-400'}`}>
            <div className={`flex gap-3 ${isSidebarOpen ? 'px-5' : 'px-4 justify-center'} py-3 items-center text-white`}>
              <div className="relative">
                {
            (router.pathname === '/orders') ? <img src="/assets/orders_white.svg" alt="orders" /> : <img src="/assets/orders_gray.svg" alt="orders" />
            }
                <div className="bg-pro-red absolute -right-1 top-2 rounded-full h-[6px] w-[6px]" />
              </div>

              <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/orders' ? 'text-white' : 'text-pro-white-800'}`}>Orders</p>

            </div>
            <p className={`text-xs ${isSidebarOpen ? 'block' : 'hidden'} rounded-full py-1 px-2 bg-pro-black-400 mr-4 opacity-30`}>5</p>
          </Link>
          <Link href="/schedules" className={`flex gap-3 rounded-lg items-center ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 ${router.pathname === '/schedules' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/schedules') ? <img src="/assets/schedules_white.svg" alt="schedules" /> : <img src="/assets/schedules_gray.svg" alt="schedules" />
            }

            <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/schedules' ? 'text-white' : 'text-pro-white-800'}`}>Schedules</p>

          </Link>
          <Link href="/messages" className={`flex justify-center xl:justify-between items-center rounded-lg  ${router.pathname === '/messages' && 'bg-pro-blue-400'}`}>

            <div className={`flex gap-3 ${isSidebarOpen ? 'px-5' : 'px-4 justify-center'} py-3 items-center text-white`}>

              {
            (router.pathname === '/messages') ? <img src="/assets/messages_white.svg" alt="messages" /> : <img src="/assets/messages_gray.svg" alt="messages" />
            }
              <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/messages' ? 'text-white' : 'text-pro-white-800'}`}>Messages</p>

            </div>
            <p className={`text-xs ${isSidebarOpen ? 'block' : 'hidden'} rounded-full py-1 px-2 bg-pro-black-400 opacity-30 mr-4`}>3</p>
          </Link>

          <Link href="/inbox" className={`flex gap-3 rounded-lg items-center ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 ${router.pathname === '/inbox' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/inbox') ? <img src="/assets/inbox_white.svg" alt="inbox" /> : <img src="/assets/inbox_gray.svg" alt="inbox" />
            }
            <p className={`font-medium text-sm ${isSidebarOpen ? 'block' : 'hidden'} ${router.pathname === '/inbox' ? 'text-white' : 'text-pro-white-800'}`}>Inbox</p>
          </Link>
          <Link href="/analytics" className={`flex gap-3 rounded-lg items-center ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 ${router.pathname === '/analytics' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/analytics') ? <img src="/assets/analytics_white.svg" alt="analytics" /> : <img src="/assets/analytics_gray.svg" alt="analytics" />
            }
            <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/analytics' ? 'text-white' : 'text-pro-white-800'}`}>Analytics</p>
          </Link>

        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full px-4  space-y-2">
          <div className="border-t-[1px] border-pro-black-400">
            <Link href="/news" className={`flex mt-3 gap-3 rounded-lg items-center ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 ${router.pathname === '/news' && 'bg-pro-blue-400'}`}>

              <div className="relative">
                {
            (router.pathname === '/news') ? <img src="/assets/news_white.svg" alt="news" /> : <img src="/assets/news_gray.svg" alt="news" />
            }
                <div className="bg-pro-red absolute -right-1 top-2 rounded-full h-[6px] w-[6px]" />
              </div>
              <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/news' ? 'text-white' : 'text-pro-white-800'}`}>News</p>
            </Link>
          </div>

          <Link href="/settings" className={`flex gap-3 rounded-lg items-center ${isSidebarOpen ? 'justify-start px-5' : 'justify-center'} py-3 ${router.pathname === '/settings' && 'bg-pro-blue-400'}`}>
            {
            (router.pathname === '/settings') ? <img src="/assets/settings_white.svg" alt="settings" /> : <img src="/assets/settings_gray.svg" alt="settings" />
            }
            <p className={`font-medium ${isSidebarOpen ? 'block' : 'hidden'} text-sm ${router.pathname === '/settings' ? 'text-white' : 'text-pro-white-800'}`}>Settings</p>
          </Link>
        </div>
        <div className="flex w-full mt-12 gap-2 items-center bg-pro-black-400 py-5 px-3 shadow-pro-black-400 ">
          <Link href="/profile">
            <img src="/assets/demo-user.png" className="h-12 w-12 rounded-full" />

          </Link>
          <Link href="/profile" className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
            <p className="text-sm font-medium">Santiago Laight</p>
            <p className="text-xs text-pro-white-800">snlaight10@gmail.com</p>
          </Link>
          <div className={`${isSidebarOpen ? 'block' : 'hidden'} ml-2`}>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M7.00016 0.5C7.46041 0.5 7.8335 0.8731 7.8335 1.33333C7.8335 1.76069 7.51181 2.11292 7.09735 2.16106L7.00016 2.16667H2.8335C2.40614 2.16667 2.05391 2.48837 2.00577 2.90282L2.00016 3V13C2.00016 13.4274 2.32187 13.7796 2.73631 13.8277L2.8335 13.8333H6.5835C7.04375 13.8333 7.41683 14.2064 7.41683 14.6667C7.41683 15.094 7.09514 15.4463 6.68068 15.4944L6.5835 15.5H2.8335C1.5021 15.5 0.413779 14.4593 0.33774 13.1469L0.333496 13V3C0.333496 1.6686 1.37427 0.580283 2.6866 0.504244L2.8335 0.5H7.00016ZM11.756 5.05372L14.1131 7.41075C14.4385 7.73617 14.4385 8.26383 14.1131 8.58925L11.756 10.9462C11.4306 11.2717 10.903 11.2717 10.5775 10.9462C10.2521 10.6208 10.2521 10.0932 10.5775 9.76775L11.512 8.83333H7.00016C6.53991 8.83333 6.16683 8.46025 6.16683 8C6.16683 7.53975 6.53991 7.16667 7.00016 7.16667H11.512L10.5775 6.23223C10.2521 5.9068 10.2521 5.37916 10.5775 5.05372C10.903 4.72828 11.4306 4.72828 11.756 5.05372Z" fill={router.pathname === '/profile' ? 'white' : '#A3B3BC'} />
            </svg>
          </div>

        </div>
      </div>
      <div className={`hidden xl:block absolute cursor-pointer -right-[7px] p-2 rounded-full top-[44%] bg-pro-black-400  ${!isSidebarOpen && 'rotate-180'}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>

      </div>
    </div>

  );
};

export default LeftSidebar;
