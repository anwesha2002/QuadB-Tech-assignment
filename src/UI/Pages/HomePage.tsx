import {Navbar} from "../Component/Navbar.tsx";
import {Container} from "react-bootstrap";
import {Movies} from "../Component/Movies.tsx";

export function HomePage(){
    return(
        <>
            <Navbar/>
            <Container >
                <Movies/>
            </Container>
        </>
    )
}