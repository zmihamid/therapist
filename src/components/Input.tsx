interface Props {
    type?: string,
    placeholder?: string,
    className?: string,
    classNameInput?: string,
    icon?: any,
    name?: string,
    value?: string,
}

export default function Input(props: Props) {
    return (
        <div className={`w-full h-10 relative ${props.className}`}>
            {
                props.icon &&
                <img alt="" src={props.icon} className='absolute left-3 top-0 bottom-0 my-auto' />
            }
            <input
                name={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                className={`border text-sm text-primary border-border w-full h-full rounded-[4px] ${props.icon ? 'pl-10' : ' px-1'} ${props.classNameInput}`}
            />
            {/* {
                props.type === 'password' &&
                <img src={EyeIcon} className='absolute right-3 top-0 bottom-0 my-auto' />
            } */}
        </div>
    )
}
