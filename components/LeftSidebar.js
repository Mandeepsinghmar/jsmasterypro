import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LeftSidebar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="w-[80px] xl:w-[240px] overflow-auto bg-pro-black-2 text-white flex items-center justify-between flex-col fixed h-screen">

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
          <Link href="/" className={`flex gap-3 rounded-lg justify-center xl:justify-start xl:px-5 py-3 items-center  ${router.pathname === '/' && 'bg-pro-blue-400'}`}>
            <svg className="text-blue-400" width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0231 1.24012C9.42125 0.772011 8.5785 0.772011 7.97667 1.24012L0.99018 6.67404C0.363213 7.16168 0.70808 8.16667 1.50231 8.16667H2.33321V14.8333C2.33321 15.7538 3.0794 16.5 3.99988 16.5H7.33317V11.5C7.33317 10.5795 8.07934 9.83334 8.99984 9.83334C9.92034 9.83334 10.6665 10.5795 10.6665 11.5V16.5H13.9999C14.9203 16.5 15.6666 15.7538 15.6666 14.8333V8.16667H16.4974C17.2908 8.16667 17.6372 7.16219 17.0096 6.67404L10.0231 1.24012Z" fill={router.pathname === '/' ? 'white' : '#A3B3BC'} />
            </svg>
            <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/' ? 'text-white' : 'text-pro-white-800'}`}>Home</p>
          </Link>
          <Link href="/profile" className={`flex gap-3 justify-center xl:justify-start xl:px-5 rounded-lg items-center py-3 ${router.pathname === '/profile' && 'bg-pro-blue-400'}`}>
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8905 2.76404 10.3804 6 10.3804ZM6 0.5C8.20433 0.5 9.97049 2.26552 9.97049 4.46829C9.97049 6.67106 8.20433 8.43733 6 8.43733C3.79642 8.43733 2.02951 6.67106 2.02951 4.46829C2.02951 2.26552 3.79642 0.5 6 0.5Z" fill={router.pathname === '/profile' ? 'white' : '#A3B3BC'} />
            </svg>
            <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/profile' ? 'text-white' : 'text-pro-white-800'}`}>Profile</p>

          </Link>
          <Link href="/orders" className={`flex justify-center xl:justify-between items-center rounded-lg  ${router.pathname === '/orders' && 'bg-pro-blue-400'}`}>
            <div className="flex gap-3 px-5 py-3 items-center text-white">
              <div className="relative">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.8335 1.50002V2.33335C2.8335 3.25383 3.57969 4.00002 4.50016 4.00002H9.50016C10.4207 4.00002 11.1668 3.25383 11.1668 2.33335V1.50002H12.0002C12.9207 1.50002 13.6668 2.24621 13.6668 3.16669V12.3334C13.6668 15.0948 11.4282 17.3334 8.66683 17.3334H2.00016C1.07969 17.3334 0.333496 16.5872 0.333496 15.6667V3.16669C0.333496 2.24621 1.07969 1.50002 2.00016 1.50002H2.8335ZM7.00016 10.6667H4.50016C4.03993 10.6667 3.66683 11.0398 3.66683 11.5C3.66683 11.9603 4.03993 12.3334 4.50016 12.3334H7.00016C7.46041 12.3334 7.8335 11.9603 7.8335 11.5C7.8335 11.0398 7.46041 10.6667 7.00016 10.6667ZM9.50016 7.33335H4.50016C4.03993 7.33335 3.66683
               7.70644 3.66683 8.16669C3.66683 8.59406 3.98853 8.94628 4.40298 8.99441L4.50016 9.00002H9.50016C9.96041 9.00002 10.3335 8.62694 10.3335 8.16669C10.3335 7.70644 9.96041 7.33335 9.50016 7.33335ZM8.66683 0.666687C9.12708 0.666687 9.50016 1.03979 9.50016 1.50002C9.50016 1.92738 9.17847 2.27961 8.76402 2.32775L8.66683 2.33335H5.3335C4.87326 2.33335 4.50016 1.96025 4.50016 1.50002C4.50016 1.07266 4.82187 0.720431 5.23631 0.672293L5.3335 0.666687H8.66683Z" fill={router.pathname === '/orders' ? 'white' : '#A3B3BC'}
                  />
                </svg>
                <div className="bg-pro-red absolute -right-1 top-2 rounded-full h-[6px] w-[6px]" />
              </div>

              <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/orders' ? 'text-white' : 'text-pro-white-800'}`}>Orders</p>

            </div>
            <p className="text-xs hidden xl:block rounded-full py-1 px-2 bg-pro-black-400 mr-4 opacity-30">5</p>
          </Link>
          <Link href="/schedules" className={`flex gap-3 rounded-lg items-center justify-center xl:justify-start xl:px-5 py-3 ${router.pathname === '/schedules' && 'bg-pro-blue-400'}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3333 0.5C11.7936 0.5 12.1667 0.8731 12.1667 1.33333V2.16667H13.8333C14.712 2.16667 15.4318 2.84656 15.4954 3.70895L15.5 3.83333V13.8333C15.5 14.712 14.8201 15.4318 13.9577 15.4954L13.8333 15.5H2.16667C1.28803 15.5 0.568196 14.8201 0.504571 13.9577L0.5 13.8333V3.83333C0.5 2.9547 1.1799 2.23486 2.04228 2.17124L2.16667 2.16667H3.83333V1.33333C3.83333 0.8731 4.20643 0.5 4.66667 0.5C5.1269 0.5 5.5 0.8731 5.5 1.33333V2.16667H10.5V1.33333C10.5 0.8731 10.8731 0.5 11.3333 0.5ZM10.3534 5.81565L6.81792 9.35117L5.63939 8.17267C5.31396 7.84725 4.78632 7.84725 4.46088 8.17267C4.13544 8.49808 4.13544 9.02575 4.46088 9.35117L6.22276 11.1131C6.55142 11.4417 7.08433 11.4417 7.41308 11.1131L11.5319 6.99417C11.8574 6.66875 11.8574 6.14109 11.5319 5.81565C11.2065 5.49022 10.6788 5.49022 10.3534 5.81565Z" fill={router.pathname === '/schedules' ? 'white' : '#A3B3BC'} />
            </svg>

            <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/schedules' ? 'text-white' : 'text-pro-white-800'}`}>Schedules</p>

          </Link>
          <Link href="/messages" className={`flex justify-center xl:justify-between items-center rounded-lg  ${router.pathname === '/messages' && 'bg-pro-blue-400'}`}>

            <div className="flex gap-3 px-5 py-3 items-center text-white">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.666992 3C0.666992 1.61929 1.78628 0.5 3.16699 0.5H14.8337C16.2144 0.5 17.3337 1.61929 17.3337 3V11.3333C17.3337 12.7141 16.2144 13.8333 14.8337 13.8333H5.11143L2.33366 15.9167C1.64696 16.4317 0.666992 15.9417 0.666992 15.0833V3ZM4.83366 5.5C4.83366 5.03977 5.20676 4.66667 5.66699 4.66667H12.3337C12.7939 4.66667 13.167 5.03977 13.167 5.5C13.167 5.96023 12.7939 6.33333 12.3337 6.33333H5.66699C5.20676 6.33333 4.83366 5.96023 4.83366 5.5ZM5.66699 8C5.20676 8 4.83366 8.37308 4.83366 8.83333C4.83366 9.29358 5.20676 9.66667 5.66699 9.66667H8.16699C8.62724 9.66667 9.00033 9.29358 9.00033 8.83333C9.00033 8.37308 8.62724 8 8.16699 8H5.66699Z" fill={router.pathname === '/messages' ? 'white' : '#A3B3BC'} />
              </svg>

              <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/messages' ? 'text-white' : 'text-pro-white-800'}`}>Messages</p>

            </div>
            <p className="text-xs hidden xl:block rounded-full py-1 px-2 bg-pro-black-400 opacity-30 mr-4">3</p>
          </Link>

          <Link href="/inbox" className={`flex gap-3 rounded-lg items-center justify-center xl:justify-start xl:px-5 py-3 ${router.pathname === '/inbox' && 'bg-pro-blue-400'}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H13C14.3807 0.5 15.5 1.61929 15.5 3V13C15.5 14.3807 14.3807 15.5 13 15.5H3C1.61929 15.5 0.5 14.3807 0.5 13V3ZM9.66667 9.66667C9.66667 9.20642 10.0398 8.83333 10.5 8.83333H13.8333V3C13.8333 2.53977 13.4602 2.16667 13 2.16667H3C2.53977 2.16667 2.16667 2.53977 2.16667 3V8.83333H5.5C5.96023 8.83333 6.33333 9.20642 6.33333 9.66667C6.33333 10.5872 7.0795 11.3333 8 11.3333C8.9205 11.3333 9.66667 10.5872 9.66667 9.66667Z" fill={router.pathname === '/inbox' ? 'white' : '#A3B3BC'} />
            </svg>
            <p className={`font-medium text-sm hidden xl:block ${router.pathname === '/inbox' ? 'text-white' : 'text-pro-white-800'}`}>Inbox</p>
          </Link>
          <Link href="/analytics" className={`flex gap-3 rounded-lg items-center justify-center xl:justify-start xl:px-5 py-3 ${router.pathname === '/analytics' && 'bg-pro-blue-400'}`}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.83366 0.5C10.7123 0.5 11.4321 1.1799 11.4958 2.04228L11.5003 2.16667V15.5H6.50033V2.16667C6.50033 1.28803 7.18022 0.568196 8.04261 0.504571L8.16699 0.5H9.83366ZM15.667 4.66667C16.5875 4.66667 17.3337 5.41286 17.3337 6.33333V13.8333C17.3337 14.7538 16.5875 15.5 15.667 15.5H13.167V4.66667H15.667ZM4.83366 7.16667V15.5H2.33366C1.41318 15.5 0.666992 14.7538 0.666992 13.8333V8.83333C0.666992 7.91283 1.41318 7.16667 2.33366 7.16667H4.83366Z" fill={router.pathname === '/analytics' ? 'white' : '#A3B3BC'} />
            </svg>
            <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/analytics' ? 'text-white' : 'text-pro-white-800'}`}>Analytics</p>
          </Link>

        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full px-4  space-y-2">
          <div className="border-t-[1px] border-pro-black-400">
            <Link href="/news" className={`flex mt-3 gap-3 rounded-lg items-center justify-center xl:justify-start xl:px-5 py-3 ${router.pathname === '/news' && 'bg-pro-blue-400'}`}>

              <div className="relative">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3333 0.5C12.212 0.5 12.9318 1.1799 12.9954 2.04228L13 2.16667V6.33333H14.25C14.8997 6.33333 15.4337 6.82909 15.4943 7.46295L15.5 7.58333V13.8333C15.5 15.1648 14.4593 16.2531 13.1469 16.3291L13 16.3333H2.16667C1.28803 16.3333 0.568196 15.6535 0.504571 14.7911L0.5 14.6667V2.16667C0.5 1.28803 1.1799 0.568196 2.04228 0.504571L2.16667 0.5H11.3333ZM13.8333 8H13V14.6667C13.4602 14.6667 13.8333 14.2936 13.8333 13.8333V8ZM7.16667 8.83333H4.66667C4.20643 8.83333 3.83333 9.20642 3.83333 9.66667C3.83333 10.094 4.15504 10.4463 4.56948 10.4944L4.66667 10.5H7.16667C7.62692 10.5 8 10.1269 8 9.66667C8 9.23929 7.67831 8.88708 7.26385 8.83894L7.16667 8.83333ZM8.83333 4.66667H4.66667C4.20643 4.66667 3.83333 5.03977 3.83333 5.5C3.83333 5.96023 4.20643 6.33333 4.66667 6.33333H8.83333C9.29358 6.33333 9.66667 5.96023 9.66667 5.5C9.66667 5.03977 9.29358 4.66667 8.83333 4.66667Z" fill={router.pathname === '/news' ? 'white' : '#A3B3BC'} />
                </svg>
                <div className="bg-pro-red absolute -right-1 top-2 rounded-full h-[6px] w-[6px]" />
              </div>
              <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/news' ? 'text-white' : 'text-pro-white-800'}`}>News</p>
            </Link>
          </div>

          <Link href="/settings" className={`flex gap-3 rounded-lg items-center justify-center xl:justify-start xl:px-5 py-3 ${router.pathname === '/settings' && 'bg-pro-blue-400'}`}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.30382 0.340678C6.99641 0.119403 6.56282 0.0159193 6.1364 0.171944C5.222 0.506503 4.3832 0.996328 3.65175 1.609C3.30419 1.90013 3.17707 2.3267 3.21479 2.70326C3.27761 3.33059 3.16689 3.9363 2.86545 4.45839C2.56388 4.98074 2.09437 5.37963 1.51929 5.63887C1.17366 5.79468 0.867121 6.11894 0.789429 6.56675C0.708562 7.033 0.666504 7.51192 0.666504 8.00009C0.666504 8.48817 0.708562 8.96717 0.789437 9.43334C0.867129 9.88117 1.17367 10.2054 1.5193 10.3613C2.09437 10.6205 2.56388 11.0194 2.86545 11.5418C3.16688 12.0638 3.2776
             12.6695 3.21479 13.2968C3.17708 13.6734 3.3042 14.1 3.65175 14.3911C4.38319 15.0038 5.22196 15.4936 6.13632 15.8281C6.56277
             15.9842 6.99638 15.8807 7.30379 15.6593C7.816 15.2907 8.39642 15.0833 8.99984 15.0833C9.60325 15.0833 10.1837 15.2907 10.6959 15.6593C11.0033 15.8807 11.4369 15.9842 11.8633 15.8281C12.7777 15.4936 13.6164 15.0038 14.3478 14.3912C14.6954 14.1 14.8225 13.6734 14.7848 13.2968C14.722 12.6695 14.8327 12.0638 15.1341 11.5418C15.4357 11.0194 15.9053 10.6205 16.4803 10.3613C16.826 10.2054 17.1326 9.88117
              17.2103 9.43334C17.2911 8.96717 17.3332 8.48817 17.3332 8.00009C17.3332 7.512 17.2911 7.03309 17.2103 6.56692C17.1326 6.11907 16.826 5.79479 16.4803 5.63899C15.9053 5.37974 15.4357 4.98085 15.1341 4.4585C14.8327 3.93639 14.722 3.33064 14.7848 2.70327C14.8226 2.32669 14.6954 1.90009 14.3478 1.60894C13.6164 0.996303 12.7777 0.506494 11.8633 0.171944C11.4368 0.0159277 11.0033 0.119403 10.6958 0.340678C10.1837 0.709361 9.60325 0.916694 8.99984 0.916694C8.39642 0.916694 7.816 0.709361 7.30382 0.340678ZM6.49984 8C6.49984 6.61925 7.61909 5.5 8.99984 5.5C10.3806 5.5 11.4998 6.61925 11.4998 8C11.4998 9.38075 10.3806 10.5 8.99984 10.5C7.61909 10.5 6.49984 9.38075 6.49984 8Z" fill={router.pathname === '/settings' ? 'white' : '#A3B3BC'}
              />
            </svg>
            <p className={`font-medium hidden xl:block text-sm ${router.pathname === '/settings' ? 'text-white' : 'text-pro-white-800'}`}>Settings</p>
          </Link>
        </div>
        <div className="flex w-full mt-12 gap-2 items-center bg-pro-black-400 py-5 px-3 shadow-pro-black-400 ">
          <Link href="/profile">
            <img src="/assets/demo-user.png" className="h-12 w-12 rounded-full" />

          </Link>
          <Link href="/profile" className="hidden xl:block">
            <p className="text-sm font-medium">Santiago Laight</p>
            <p className="text-xs text-pro-white-800">snlaight10@gmail.com</p>
          </Link>
          <div className="ml-2 hidden xl:block">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M7.00016 0.5C7.46041 0.5 7.8335 0.8731 7.8335 1.33333C7.8335 1.76069 7.51181 2.11292 7.09735 2.16106L7.00016 2.16667H2.8335C2.40614 2.16667 2.05391 2.48837 2.00577 2.90282L2.00016 3V13C2.00016 13.4274 2.32187 13.7796 2.73631 13.8277L2.8335 13.8333H6.5835C7.04375 13.8333 7.41683 14.2064 7.41683 14.6667C7.41683 15.094 7.09514 15.4463 6.68068 15.4944L6.5835 15.5H2.8335C1.5021 15.5 0.413779 14.4593 0.33774 13.1469L0.333496 13V3C0.333496 1.6686 1.37427 0.580283 2.6866 0.504244L2.8335 0.5H7.00016ZM11.756 5.05372L14.1131 7.41075C14.4385 7.73617 14.4385 8.26383 14.1131 8.58925L11.756 10.9462C11.4306 11.2717 10.903 11.2717 10.5775 10.9462C10.2521 10.6208 10.2521 10.0932 10.5775 9.76775L11.512 8.83333H7.00016C6.53991 8.83333 6.16683 8.46025 6.16683 8C6.16683 7.53975 6.53991 7.16667 7.00016 7.16667H11.512L10.5775 6.23223C10.2521 5.9068 10.2521 5.37916 10.5775 5.05372C10.903 4.72828 11.4306 4.72828 11.756 5.05372Z" fill={router.pathname === '/profile' ? 'white' : '#A3B3BC'} />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
