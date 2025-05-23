import logoCiti from '../../assets/logoCiti.png';
import codeByCiti from '../../assets/codeByCiti.png';


function Header() {
    return(
        <header style={{backgroundColor: "white", borderBottom: "1px solid #d9d9d9", width: "100%", position: "fixed", top:0}}>
            <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", padding: "1.5% 2%"}}>
                <img src={logoCiti.src} alt="Logo CITI" />
                <div style={{display: "flex", alignItems: "center", gap: "3rem", }}>
                    <p style={{color: "#242424", fontSize: "1rem"}}>Atendimento</p>
                    <p style={{color: "#242424", fontSize: "1rem"}}>Agendamento</p>
                </div>
                <img src={codeByCiti.src} alt='Made with love and code by CITi' style={{width: "13.75rem", height: "1.5rem"}} />
            </nav>
        </header>
    )
}

export default Header