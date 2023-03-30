import LogoBlue from '../assets/images/logo_blue.svg'
import DashboardIcon from '../assets/images/dashboard.svg'
import ArrowRightIcon from '../assets/images/arrow_right.svg'
import UserIcon from '../assets/images/user.svg'
import PatientsIcon from '../assets/images/patients.svg'
import ArchiveIcon from '../assets/images/archive.svg'
import TasksIcon from '../assets/images/tasks.svg'
import ReportsIcon from '../assets/images/reports.svg'
import AccountingIcon from '../assets/images/accounting.svg'
import TimingIcon from '../assets/images/timing.svg'
import MessagesIcon from '../assets/images/messagesSide.svg'
import SettingIcon from '../assets/images/setting.svg'
import LogoutIcon from '../assets/images/logout.svg'

export default function SideBar() {
  return (
    <div className='w-[240px] max-h-full overflow-y-auto min-h-full text-sm fixed z-10 bg-white border-r border-border px-5 pt-5'>
      <div className='flex mt-2'>
        <img src={LogoBlue} alt='' />
        <div className='text-primary font-medium ml-2'>
          Autism Platform
        </div>
      </div>

      <div className='mt-8 flex items-center text-primary'>
        <img className={`active_side`} src={DashboardIcon} alt='' />
        <div className='ml-3'>
          Dashboard
        </div>
      </div>

      <div>
        <div className='mt-7 opacity-40'>
          Patients
        </div>
        <div className='mt-3 flex  py-2 px-2 rounded-lg w-full items-center '> {/* bg-[#F0F4FC] text-primary*/}
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2 ' src={UserIcon} alt='' /> {/* active_side */}
          <div className='ml-2'>
            Upcoming Sessions
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={PatientsIcon} alt='' />
          <div className='ml-2'>
            Patients List
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={ArchiveIcon} alt='' />
          <div className='ml-2'>
            Session Archive
          </div>
        </div>

        <div className='mt-7 opacity-40'>
          Assignments
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={TasksIcon} alt='' />
          <div className='ml-2'>
            Tasks
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={ReportsIcon} alt='' />
          <div className='ml-2'>
            Reports
          </div>
        </div>

        <div className='mt-7 opacity-40'>
          Account
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={AccountingIcon} alt='' />
          <div className='ml-2'>
            Accounting
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={TimingIcon} alt='' />
          <div className='ml-2'>
            Manage Timing
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={MessagesIcon} alt='' />
          <div className='ml-2'>
            Messages
          </div>
        </div>

        <div className='mt-2 flex py-2 px-2 rounded-lg w-full items-center'>
          <img src={ArrowRightIcon} alt='' />
          <img className='ml-2' src={SettingIcon} alt='' />
          <div className='ml-2'>
            Settings
          </div>
        </div>

      </div>

      <div className='mt-8 flex items-center '>
        <img src={LogoutIcon} alt='' />
        <div className='ml-3'>
          Log Out
        </div>
      </div>

    </div>
  )
}
