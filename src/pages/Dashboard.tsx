import doctor from '../assets/images/doctor.webp'
import MessageIcon from '../assets/images/messages.svg'
import StarIcon from '../assets/images/star.svg'
import ChildImage from '../assets/images/children.png'
import LogoBlue from '../assets/images/logo_blue.svg'
import Button from '../components/Button'

export default function Dashboard() {
  return (
    <div className='py-4 text-sm'>
      <div className='px-6 pb-4 border-b border-border'>
        <div>
          Welcome,
        </div>

        <div className='flex justify-between mt-4 items-center'>
          <div className='flex items-center'>
            <img src={doctor} alt='' className='w-12 h-12 rounded-full object-cover border border-black' />
            <div className='text-primary text-base font-medium ml-3'>
              Dr Caroline Molly
            </div>
          </div>

          <div className='bg-secondary w-[199px] h-12 rounded-[4px] flex justify-center items-center'>
            <img src={MessageIcon} alt='' />
            <div className='text-primary font-medium ml-2'>
              3 Unread Messages
            </div>
          </div>
        </div>
      </div>

      <div className='px-6 mt-4'>
        <div className='flex justify-between gap-4'>

          <div className='flex-1 h-28 rounded-lg flex flex-col justify-center px-6 border border-border'>
            <div className='font-semibold'>
              Today’s Sessions
            </div>
            <div className='mt-4 text-2xl font-medium'>
              4
            </div>
          </div>
          <div className='flex-1 h-28 bg-primary text-white rounded-lg flex flex-col justify-center px-6'>
            <div className='font-semibold'>
              Total Sessions
            </div>
            <div className='mt-4 text-2xl font-medium'>
              210
            </div>
          </div>

          <div className='flex-1 h-28 bg-secondary text-primary rounded-lg flex flex-col justify-center px-6'>
            <div className='font-semibold'>
              Total Patients
            </div>
            <div className='mt-4 text-2xl font-medium'>
              17
            </div>
          </div>

          <div className='flex-1 h-28 bg-[#FFCB44] rounded-lg flex flex-col justify-center px-6'>
            <div className='font-semibold'>
              You have Good Reputation!
            </div>
            <div className='flex mt-4 text-white'>
              <img src={StarIcon} alt='' />
              <div className='text-2xl ml-2 font-medium'>
                4.3
              </div>
            </div>

          </div>

        </div>

        <div className='mt-6 border-b border-border pb-6'>
          <div className='font-medium'>
            Next Session
          </div>
          <div className='mt-3 w-[248px] p-4 rounded-lg border border-border'>
            <img src={ChildImage} className='w-16 h-16 object-cover rounded-xl' />
            <div className='mt-3 font-medium'>
              Adrian Tiana
            </div>
            <div className='mt-2 text-xs'>
              12 Years Old
            </div>
            <div className='mt-4 opacity-40 text-xs'>
              Session Type
            </div>
            <div className='mt-2 font-medium'>
              Video Call
            </div>
            <div className='mt-2'>
              <Button
                title='Start the Session Now'
                height={48}
                className='font-medium'
              />
            </div>
          </div>
        </div>

        <div className='mt-6 flex justify-between items-center'>
          <div className='font-medium'>
            Support Tickets
          </div>
          <div className='w-[130px]'>
            <Button
              title='Send A Ticket'
              height={32}
            />
          </div>
        </div>

        <table className='w-full'>
          <thead className='h-10 border-b border-border text-xs text-black_opacity_40'>
            <tr>
              <td>
                Auther
              </td>
              <td>
                Message
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tr className='h-14 border-b border-border text-xs'>
            <td>
              <div className='flex items-center'>
                <img src={LogoBlue} className='w-6' />
                <div className='ml-2'>
                  Support
                </div>
              </div>
            </td>
            <td className='font-medium'>
              Payment Problem Has Been Solved
            </td>
            <td className='w-16'>
              <div className='w-16'>
              <Button
              title='Reply'
              height={24}
              />
              </div>
            </td>
          </tr>
        </table>

      </div>

    </div>
  )
}
