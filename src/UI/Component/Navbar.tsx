import { Container, Form, Navbar as NavbarBS} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import brand from "../../../public/images.png"
import "../../Style/Navbar.css"

export function Navbar(){
    return(
        <NavbarBS className="position-sticky top-0 m-1">
            <Container fluid="lg" className="d-flex justify-content-around">
                <NavbarBS.Brand>
                    <img alt="brand" className="brand" src={brand}/>
                </NavbarBS.Brand>
                <Form className="w-50 d-flex align-items-center position-relative">
                    <FaSearch className="position-absolute ms-3 text-muted"/>
                    <Form.Control
                        className="px-5 text-muted"
                        type="search"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        aria-label="Search"
                    />
                </Form>
            </Container>
        </NavbarBS>
    )
}