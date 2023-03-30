import Logo from '../../assets/images/logo.svg'
import EmailIcon from '../../assets/images/email.svg'
import LockIcon from '../../assets/images/lock.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Auth } from '../../enums/Enums'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email()
                .required(),
            password: Yup.string()
                .required(),
        }),
        onSubmit: (values) => {
            localStorage.setItem(Auth.token_name, '1')
            window.location.href ='/'
        }
    })

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
                    Welcome
                </div>

                <div className='mt-16 w-[358px] mx-auto'>
                    <Input
                        placeholder='Email'
                        icon={EmailIcon}
                        name='email'
                        onChange={formik.handleChange}
                        error_text={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                    />
                    <Input
                        placeholder='Password'
                        icon={LockIcon}
                        className='mt-4'
                        type='password'
                        onChange={formik.handleChange}
                        name='password'
                        error_text={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                    />

                    <div className='mt-4 text-right text-sm text-primary'>
                        Forgot password?
                    </div>

                    <div className='mt-8'>
                        <Button
                            title='Log in'
                            onClick={formik.handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
