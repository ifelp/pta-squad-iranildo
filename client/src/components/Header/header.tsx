import logoCiti from '../../assets/logoCiti.png';


function Header() {
    return(
        <div style={{backgroundColor: "#d9d9d9"}}>
            <nav style={{display: "flex", flexDirection: "row", gap: "2rem"}}>
                <img src={logoCiti} alt="Logo CITI" />
                <p style={{color: "#242424", fontSize: "1rem"}}>Atendimento</p>
                <p style={{color: "#242424"}}>Agendamento</p>
            </nav>
        </div>
    )
}

export default Header