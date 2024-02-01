import {MovieModel} from "../../Model/MovieModel.ts";
import {Card} from "react-bootstrap";
import {FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

export function Show({show}: MovieModel){

        return(
            <Link to={`/${show.id}`} style={{textDecoration:"none"}}>
                <Card className="h-100" >
                <div className="position-relative">
                    <Card.Img
                        variant="top"
                        height="500px"
                        width="300px"
                        style={{objectFit:"cover", aspectRatio : "1:1"}} src={show.image?.original}

                    />
                    {show.rating.average && <div className="position-absolute bottom-0 w-100 p-2 d-flex align-items-center"
                          style={{backgroundColor: "black", color: "white"}}>
                        <FaStar className="me-2 text-danger"/>
                        {show.rating.average}/10
                    </div>}
                </div>
                <Card.Body >
                    <Card.Title className="overflow-hidden">
                        {show.name}
                    </Card.Title>
                    <div className="d-flex flex-row ">
                        {show.genres.map(genre=><h6 key={genre} className="overflow-hidden text-muted">{genre}{show.genres.indexOf(`${genre}`) != show.genres.length-1 && "/"}</h6>)}
                    </div>
                </Card.Body>
                </Card>
            </Link>
        )
}