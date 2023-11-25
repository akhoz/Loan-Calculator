function Button(props) {
    return (
    <button
        type="button"
        className="h-10 w-10 flex items-center justify-center font-extrabold text-white
                text-2xl bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2
                focus:ring-indigo-600 focus:ring-opacity-50"
        onClick={props.handleClick}
    >-</button>
    )
}

export default Button