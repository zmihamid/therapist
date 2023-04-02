import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import SideBar from '../shared/SideBar'
import AppRoute from './AppRoute'
import { Auth } from '../enums/Enums'
import Register from './auth/Register'

export default function Main() {

    const [state, setState] = useState('loading')

    useEffect(() => {

        const paths = window.location.pathname

        if (paths === "/auth/login" || paths === '/auth/register') {
            setState("auth")
        }
        else if (!localStorage.getItem(Auth.token_name)) {
            window.location.href = "/auth/login"
        } else {
            setState('next')
        }

    }, [])

    if (state === "loading") {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (state === "auth") {
        return (
            <Routes>
                <Route path={'/auth/login'} element={<Login />} />
                <Route path={'/auth/register'} element={<Register />} />
            </Routes>
        )
    } else {
        return (
            <div className='w-full bg-[#F7F8FB] min-h-full flex'>
                <SideBar />
                <div className='fixed w-full flex items-center z-0 top-0 lg:left-56 h-[72px] bg-white border-b border-border'>
                    <div className='px-9 text-sm'>
                        Dashboard
                    </div>
                </div>
                <div className='w-full flex-1 lg:ml-[257px]  px-4 mt-[88px] '>
                    <div className='border border-border rounded-lg flex-1  bg-white'>
                        <AppRoute />
                    </div>
                    <div className='h-[100px] '></div>
                </div>

                <div className='fixed w-full flex items-center z-0 bottom-0 lg:left-56 h-[72px] bg-white border-b border-border'>
                    <div className='px-9 text-sm opacity-40'>
                        @2023
                    </div>
                </div>
            </div>
        )
        return (
            <div className='w-full bg-[#F7F8FB] min-h-full flex'>
                <SideBar />
                <div className='fixed w-full flex items-center z-0 top-0 lg:left-56 h-[72px] bg-white border-b border-border'>
                    <div className='px-9 text-sm'>
                        Dashboard
                    </div>
                </div>
                <div className='flex-1 lg:ml-[257px]  mx-4 mt-[88px] '>
                    <div className='border border-border rounded-lg flex-1  bg-white'>
                        <AppRoute />
                    </div>
                    <div className='h-[100px] '></div>
                </div>


                <div className='fixed w-full flex items-center z-0 bottom-0 lg:left-56 h-[72px] bg-white border-b border-border'>
                    <div className='px-9 text-sm opacity-40'>
                        @2023
                    </div>
                </div>
            </div>
        )
    }
}
