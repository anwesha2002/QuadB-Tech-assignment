import {useApi} from "../Context/ApiDataProvider.tsx";
import {Show} from "./Show.tsx";
import {Col, Row} from "react-bootstrap";

export function Movies(){
    const {data} = useApi()

    return(
        <div className="d-flex flex-column justify-content-around ">
            <h3 className="overflow-hidden">Recommended Movies</h3>
            <Row md={2} lg={3} xs={1} className="g-3 my-3 d-flex justify-content-around align-self-center">
                {data.map(item=> (
                    (item.show.image) &&
                    <Col key={item.show.id}><Show {...item}/></Col>
                ))}
            </Row>
        </div>
    )
}