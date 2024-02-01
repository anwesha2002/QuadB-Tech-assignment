import {Button, Form, Modal} from "react-bootstrap";
import {MovieModel} from "../../Model/MovieModel.ts";
import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
import {CurrentuserModel} from "../../Model/currentuserModel.ts";

type BookTicketModalProps = {
    onDismiss : () => void,
    show : MovieModel,
    bookedUser : CurrentuserModel,
    setBookedUser : Dispatch<SetStateAction<CurrentuserModel>>,
    clicked : boolean
}

export function BookTicketModal({onDismiss, show, bookedUser, setBookedUser, clicked} : BookTicketModalProps){

    useEffect(() => {
        localStorage.setItem("bookedUser-detail", JSON.stringify(bookedUser))
    }, [bookedUser]);

    function handleSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault();
        try
        {
            if(bookedUser.name.trim().length === 0 || bookedUser.email.trim().length === 0 || bookedUser.numberSeats == 0) {
                alert("field is mandatory");
            }else {
                const user = {
                    name : bookedUser.name,
                    email : bookedUser.email,
                    numberSeats : bookedUser.numberSeats,
                }
                setBookedUser(user)
            }
        }catch (err){
            console.log(err)
        }
        onDismiss()
    }

    return(
        <Modal show={clicked}>
            <Modal.Header  onHide={onDismiss} closeButton>
                <Modal.Title>
                    {show.show.name}
                    <h5 className="overflow-hidden">Book Ticket</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {show.show.network?.country?.code && <button
                    className="rounded-pill px-2 py-1 border-2 border-black me-3">{show.show.network?.country?.code}</button>}
                {show.show.genres.map(genre=>(<button className="rounded-pill px-2 py-1 border-2 border-black me-3">{genre}</button>))}
                <div></div>
                <div className="my-3">
                    {show.show.schedule.days} . {show.show.schedule.time} . {show.show.language}
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required onChange={(e)=> setBookedUser({...bookedUser, name : e.target.value})} className="mb-2" type="text" placeholder="Enter your name"/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control required onChange={(e)=> setBookedUser({...bookedUser, email : e.target.value})} className="mb-2" type="email" placeholder="Enter your email"/>
                    <Form.Label>Number of seats</Form.Label>
                    <Form.Control required onChange={(e)=> setBookedUser({...bookedUser, numberSeats : parseInt(e.target.value)})} className="mb-2" type="number" placeholder="Enter number"/>
                    <Button type="submit" size="sm" className="btn btn-danger ">Book tickets</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}