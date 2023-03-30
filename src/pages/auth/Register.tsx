import Logo from '../../assets/images/logo.svg'
import EmailIcon from '../../assets/images/email.svg'
import LockIcon from '../../assets/images/lock.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Colors } from '../../enums/Enums'

export default function Login() {
  return (
    <div className="flex w-full min-h-full">
      <div className="flex-1 bg-red-300 back_left_side bg-cover relative">
        <div className="absolute bottom-7 left-9 flex items-center font-medium">
          <img alt='' src={Logo} />
          <div className='ml-3 text-white'>
            Autism Platform
          </div>
        </div>
      </div>
      <div className="flex-1 w-[600px] flex h-screen flex-col justify-center">
        <div className='text-2xl text-[#343434] text-center font-medium'>
          Register
        </div>

        <div className='mt-16 w-[358px] mx-auto'>
          <Input
            placeholder='Username'
            icon={EmailIcon}
          />
          <Input
            placeholder='Email'
            icon={EmailIcon}
            className='mt-4'
          />

          <Input
            placeholder='Password'
            icon={LockIcon}
            className='mt-4'
            type='password'
          />

          <Input
            placeholder='Password'
            icon={LockIcon}
            className='mt-4'
            type='Confirm Password'
          />

          <div className='mt-8'>
            <Button
              title='Register'
            />
          </div>

          <div className='mt-6 text-[#828282] text-sm text-center'>
            Have an Account?
          </div>

          <div className='mt-8'>
            <Button
              title='Log In'
              className='bg-white text-primary border border-primary'
              bg='white'
              textColor={Colors.PRIMARY}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
