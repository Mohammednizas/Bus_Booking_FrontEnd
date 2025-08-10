import React, { useState } from 'react';

const CancelTicket = ({ deleteBooking, popUp, setPopUp }) => {
  const [bookId, setBookId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if ( !bookId ) {
      setPopUp("Please fill all fields correctly.");
      return;
    }

    // Construct the booking object to send for cancellation


    deleteBooking(bookId);
  };

  return (
    <div className="cancel-ticket login">
      <form onSubmit={handleSubmit} className="cancel-form">
        <label style={{color:"white",fontWeight:"bold",textTransform:"capitalize"}}>First Booking ID (SNO)</label>
        <input
          style={{backgroundColor:"white",padding:"20px",border:"none",outline:"none",marginTop:"20px",borderRadius:"10px"}}
          required
          placeholder="Enter first booking ID"
          type="number"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />

        <button type="submit">Cancel Ticket</button>
      </form>

      {popUp && (
        <div className="pop">
          <div className="pop-but">
            <button onClick={() => setPopUp("")}>Close</button>
          </div>
          <p>{popUp}</p>
        </div>
      )}
    </div>
  );
};

export default CancelTicket;
