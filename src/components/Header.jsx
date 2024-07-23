import logo from '/logo-name.svg'


export default function Header() {
    const time = new Date()

    return (
        <header>
            {/* <h3>Courses</h3> */}
            <img src={logo} alt="" />
            <span>Время сейчас: {time.toLocaleTimeString()}</span>
        </header>

    )
}