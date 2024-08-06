
const Header = ({app}) => {
    return (
        <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <div>Fidget Spinner World | {app.name} </div>
        </div>
    )
}

export default Header;