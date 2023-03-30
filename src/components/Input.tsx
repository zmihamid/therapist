interface Props {
    type?: string,
    placeholder?: string,
    className?: string,
    classNameInput?: string,
    icon?: any,
    name?: string,
    value?: string,
    error_text?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function Input(props: Props) {
    return (
        <div className={`w-full  ${props.className}`}>
            <div className='h-10 relative'>
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
                    onChange={props.onChange}
                />
            </div>
            {/* {
                props.type === 'password' &&
                <img src={EyeIcon} className='absolute right-3 top-0 bottom-0 my-auto' />
            } */}

            {
                props.error_text && props.error_text != '' ?
                    <div className='text-xs text-red-600 mt-2 mr-2'>
                        {props.error_text}
                    </div>
                    : null
            }
        </div>
    )
}
