interface Props {
    title: string
    isLoading?: boolean,
    onClick?: () => void,
    bg?: string,
    icon?: any,
    height?: number,
    textColor?: string,
    fontSize?: number,
    isLoadingSize?: number,
    className?: string,
}

export default function Button(props: Props) {
    return (
        <button disabled={props.isLoading} style={{ background: props.bg, height: props.height, color: props.textColor, fontSize: props.fontSize }} className={`h-10 bg-primary rounded-lg w-full text-white text-sm flex justify-center items-center active:opacity-80 ${props.className}`} onClick={props.onClick}>
            {
                props.isLoading ?
                    null
                    :
                    <>
                        {
                            props.icon && props.icon
                        }
                        {props.title}
                    </>
            }
        </button>
    )
}
