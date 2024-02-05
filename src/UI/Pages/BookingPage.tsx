import {Button, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useApi} from "../Context/ApiDataProvider.tsx";
import {MovieModel} from "../../Model/MovieModel.ts";
import "../../Style/movieDetail.css"
import {Navbar} from "../Component/Navbar.tsx";
import {FaStar} from "react-icons/fa";
import {BookTicketModal} from "../Component/BookTicketModal.tsx";
import {CurrentuserModel} from "../../Model/currentuserModel.ts";

export function BookingPage(){
    const id = useParams();
    const {data } = useApi()
    const [detail, setDetail] = useState<MovieModel[]>([])
    const [clicked , setClicked] = useState<boolean>(false)

    const [bookedUser, setBookedUser] = useState<CurrentuserModel >(() :
    {
        name : "",
        email : "",
        numberSeats : 0
    }   => {
        const currentUsers = localStorage.getItem("bookedUser-detail");
        if(currentUsers == null) return {
            name : "",
            email : "",
            numberSeats : 0
        }
        return JSON.parse(currentUsers)

    })


    useEffect(() => {
        setDetail(data.filter(newItem => newItem.show.id == id.id))
    }, [id.id]);


    return(
        <>
            <Navbar/>
            {detail.map(item => (
                <div key={item.show.id}>
                    <div className="d-flex flex-row align-items-center flex-grow position-relative">
                        <img className="w-100  movieDetail" src={item.show.image?.original}/>
                        <div className="d-flex flex-row position-absolute ms-5 mt-2 flex-wrap ">
                            <Card className="mt-xs-5">
                                <Card.Img
                                    variant="top"
                                    height="400px"
                                    width="300px"
                                    style={{objectFit:"cover", aspectRatio : "1:1"}}
                                    src={item.show.image?.original}
                                />
                            </Card>
                            <div className="d-flex flex-column justify-content-around text-white ms-lg-5 g-3 ms-md-3  ">
                                <h3 style={{fontSize:"80px"}} className="overflow-hidden">{item.show.name}</h3>
                                {item.show.rating.average && <div className="d-flex align-items-center " style={{fontSize: "50px"}}>
                                    <FaStar className="me-3 text-danger"/>
                                    {item.show.rating.average}/10
                                </div>}
                                <button className="d-flex align-self-start my-md-2 py-1 px-3">{item.show.language}</button>
                                <div className="overflow-hidden d-flex flex-row mb-4 flex-wrap flex-lg-nowrap">
                                    {item.show.runtime && <h6 className="overflow-hidden me-2 fs-4">{item.show.runtime} m .</h6>}
                                    {item.show.genres.map(genre=><h6 key={genre} className="overflow-hidden fs-4">{genre}{item.show.genres.indexOf(`${genre}`) != item.show.genres.length-1 && "/"}</h6>)}
                                    {item.show.network?.country?.code &&  <h6
                                        className="overflow-hidden mx-2 fs-4"> . {item.show.network?.country?.code} . </h6>}
                                    {item.show.schedule.days && <h6 className="overflow-hidden fs-4 me-2">{item.show.schedule.days} . </h6>}
                                    {item.show.schedule.time && <h6 className="overflow-hidden fs-4">{item.show.schedule.time}</h6>}
                                </div>
                            </div>
                            <Button onClick={() => setClicked(true)} size="lg" style={{fontSize: "30px"}}
                                    className="btn btn-danger text-white align-items-end d-flex align-self-center mt-md-3">Book
                                tickets
                            </Button>
                        </div>
                    </div>
                    <div className="m-5 ">
                        <h5 className="overflow-hidden">About the movie</h5>
                        <p dangerouslySetInnerHTML={{__html: item.show.summary}}/>
                    </div>
                    {
                        clicked &&
                        <BookTicketModal
                            clicked={clicked}
                            bookedUser={bookedUser}
                            setBookedUser={setBookedUser}
                            show={item} onDismiss={()=>setClicked(false)}
                        />
                    }
                </div>
            ))}
        </>
    )
}