import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



interface Guest {
  name: string;
  tickets: number;
  telephone: string;
  attendance: boolean | null;
  confirmation_date: Date | null;

  dietaryRestriction: string;
  otherAllergies: string;

  arrivalDate: Date | null;
  arrivalTime: string;

  coupleSong?: string;
  danielSong?: string;
  jasmineSong?: string;


}

const GuestForm: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");
  const [tickets, setTickets] = useState<number>(0);
  const [telephone, setTelephone] = useState<string>("");
  const [attendance, setAttendance] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filteredGuests, setFilteredGuests] = useState<Guest[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [maxTickets, setMaxTickets] = useState<number>(0);
  const [telephoneError, setTelephoneError] = useState<string | null>(null);
  const [attendanceError, setAttendanceError] = useState<string | null>(null);
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null);
  const [arrivalError, setArrivalError] = useState('');
  const [coupleSong, setCoupleSong] = useState<string>("");
  const [danielSong, setDanielSong] = useState<string>("");
  const [jasmineSong, setJasmineSong] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [dietaryRestriction, setDietaryRestriction] = useState<string>("");
  const [otherAllergies, setOtherAllergies] = useState<string>("");
  useEffect(() => {
    axios
      .get("https://web-production-82204.up.railway.app/api/guests")
      .then((response) => {
        setGuests(response.data);
        if (selectedName) {
          const guest = response.data.find(
            (g: Guest) => g.name === selectedName,
          );
          if (guest) {
            setTickets(guest.tickets);
            setTelephone(guest.telephone);
            setAttendance(guest.attendance);
            setIsSubmitted(guest.confirmation_date !== null);
            setMaxTickets(guest.tickets);
            setNotFoundMessage(null); // Clear not found message
          } else {
            setNotFoundMessage("Guest not found");
          }
        }
      })
      .catch((err) => console.error(err));
  }, [selectedName]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedName(value);

    if (value.length >= 3) {
      const filtered = guests.filter((g) =>
        g.name.toLowerCase().startsWith(value.toLowerCase()),
      );
      setFilteredGuests(filtered);
      setNotFoundMessage(filtered.length === 0 ? "Guest not found" : null);
    } else {
      setFilteredGuests([]);
      setNotFoundMessage(null);
    }
  };

  const handleNameSelect = (name: string) => {
    setSelectedName(name);
    const guest = guests.find((g) => g.name === name);
    if (guest) {
      if (guest.confirmation_date !== null) {
        alert(
          "This guest has already confirmed their attendance. It cannot be modified.",
        );
        setSelectedName("");
        setFilteredGuests([]);
        setError(null);
        setNotFoundMessage(null);
      } else {
        setTickets(guest.tickets);
        setTelephone(guest.telephone);
        setAttendance(guest.attendance);
        setIsSubmitted(false);
        setMaxTickets(guest.tickets);
        setFilteredGuests([]); // Limpiar opciones de nombres
        setNotFoundMessage(null);
      }
    } else {
      setNotFoundMessage("Guest not found");
    }
  };
  
  
  

  const handleTicketChange = (delta: number) => {
    setTickets((prevTickets) => {
      const newTickets = prevTickets + delta;
      if (newTickets < 0) return 0;
      if (newTickets > maxTickets) return maxTickets;
      return newTickets;
    });
  };

  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir solo números
    if (/^\d*$/.test(value)) {
      setTelephone(value);
    }
  };
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  let hasError = false;

  // Validación de campos requeridos
  if (!telephone) {
    setTelephoneError("Phone number required");
    hasError = true;
  } else {
    setTelephoneError(null);
  }

  if (attendance === null) {
    setAttendanceError("Attendance required");
    hasError = true;
  } else {
    setAttendanceError(null);
  }

  if (!arrivalDate || !arrivalTime) {
    setArrivalError("Arrival date and time required");
    hasError = true;
  } else {
    setArrivalError('');
  }

  if (hasError) return;

  if (isSubmitted) {
    setError(
      "This guest has already confirmed their attendance. It cannot be modified.",
    );
    return;
  }

    axios
      .post("https://web-production-82204.up.railway.app/api/update-guest", {
        name: selectedName,
        tickets,
        telephone,
        attendance,
        arrivalDate,
        arrivalTime,
        dietaryRestriction,
        otherAllergies,
        coupleSong,
        danielSong,
        jasmineSong,
      })
      .then(() => {
        alert("Form submitted successfully");
        setIsSubmitted(true);
        // Clear inputs
        setSelectedName("");
        setTickets(0);
        setTelephone("");
        setAttendance(null);
        setError(null);
        setFilteredGuests([]); // Limpiar opciones después del envío
        setNotFoundMessage(null); // Limpiar mensaje de invitado no encontrado
        setCoupleSong("");
        setDanielSong("");
        setJasmineSong("");
        setArrivalDate(null);
        setArrivalTime("");
        setDietaryRestriction("");
        setOtherAllergies("");
      })
      .catch((err) => {
        setError(
          "Something went wrong: " +
            (err.response?.data?.message || "Unknown error"),
        );
      });
  };
  const rsvpDeadline = new Date('2026-07-30T23:59:59');

  const isRsvpClosed = new Date() > rsvpDeadline;

  return (
    <div className="form-container">
      {isRsvpClosed ? (<p className="error-message">RSVP submissions have now closed. Thank you for your love and support.</p>) : (  <form onSubmit={handleSubmit}>
    
  </form>
)}
      <form onSubmit={handleSubmit}>
        <div className="name-container inputs-container">
          <input
            type="text"
            value={selectedName}
            onChange={handleNameChange}
            placeholder="Full Name"
            disabled={isRsvpClosed}
          />
          {filteredGuests.length > 0 && (
            <div className="guest-list-container">
              <ul className="guests-list">
                {filteredGuests.map((guest) => (
                  <li
                    key={guest.name}
                    onClick={() => handleNameSelect(guest.name)}
                  >
                    {guest.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {notFoundMessage && (
            <p className="error-message">{notFoundMessage}</p>
          )}
        </div>

        <div className="ticket-control inputs-container">
          <button
            className="ticket-btn minus"
            type="button"
            onClick={() => handleTicketChange(-1)}
          >
            -
          </button>
          <span>{tickets}</span>
          <button
            className="ticket-btn plus"
            type="button"
            onClick={() => handleTicketChange(1)}
          >
            +
          </button>
        </div>
        <div className="tel-container inputs-container form-group">
          <input
            type="tel"
            value={telephone}
            onChange={handleTelephoneChange}
            placeholder="Phone Number"
            className={telephoneError ? "error" : ""}
            disabled={isRsvpClosed}
          />
          {telephoneError && <p className="error-message">{telephoneError}</p>}
        </div>
        <div className="attendance-container inputs-container">
          <h5>Attendance Confirmation</h5>
          {attendanceError && (
            <p className="error-message">{attendanceError}</p>
          )}
          <div className="attendace-label-container">
            <label className="attendance-label">
              <input
                className="attendance-option"
                type="radio"
                value="true"
                checked={attendance === true}
                onChange={() => setAttendance(true)}
                disabled={isRsvpClosed}
              />
              Will attend
            </label>
            <label className="attendance-label">
              <input
                className="attendance-option"
                type="radio"
                value="false"
                checked={attendance === false}
                onChange={() => setAttendance(false)}
                disabled={isRsvpClosed}
              />
              Won't attend
            </label>
          </div>
        </div>
        
        <div className="dietary-container inputs-container">
            <div className="dietary-row">
              <select
            value={dietaryRestriction}
            onChange={(e) => setDietaryRestriction(e.target.value)}
            disabled={isRsvpClosed}
          >
            <option value="" disabled>
             Dietary Restrictions
            </option>

            <option value="Nut Allergy">Nut Allergy</option>

            <option value="Gluten Free / Coeliac">
              Gluten Free / Coeliac
            </option>

            <option value="Vegetarian">Vegetarian</option>

            <option value="Vegan">Vegan</option>

            <option value="Dairy Free / Lactose Intolerant">
              Dairy Free / Lactose Intolerant
            </option>

            <option value="No Shellfish">No Shellfish</option>

            <option value="No Pork">No Pork</option>

            <option value="No Dietary Restrictions">
              No Dietary Restrictions
            </option>
              </select>
            </div>
        </div>
        <div className="dietary-container inputs-container">
            <input
            type="text"
            value={otherAllergies}
            onChange={(e) => setOtherAllergies(e.target.value)}
            placeholder="Please specify any allergies"
            disabled={isRsvpClosed}
          />
  
        </div>
        <div className="inputs-container">

          <DatePicker
              selected={arrivalDate}
              onChange={(date: Date | null) => setArrivalDate(date)}
              placeholderText="Arrival Date"
              dateFormat="MMMM d, yyyy"
              openToDate={new Date(2026, 8, 1)}
              disabled={isRsvpClosed}
          />
              {arrivalError && ( <p className="error-message">{arrivalError}</p>)}
        </div>

        <div className="inputs-container">
          <input
            type="text"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            placeholder="Arrival Time"
            disabled={isRsvpClosed}
          />
          {arrivalError && ( <p className="error-message">{arrivalError}</p>)}
        </div>

        <div className="button-container inputs-container songs-container">
          <h5>Songs for Us</h5>
          <p className="songs-description">
            Drop a song that reminds you of us as a couple, plus one song for
            each of us individually. Be creative with your picks. 🤍
          </p>

          <div className="songs-inputs">
            <input
              type="text"
              placeholder="A song that reminds you of us"
              value={coupleSong}
              onChange={(e) => setCoupleSong(e.target.value)}
              disabled={isRsvpClosed}
            />

            <input
              type="text"
              placeholder="A song for Jasmine"
              value={jasmineSong}
              onChange={(e) => setJasmineSong(e.target.value)}
              disabled={isRsvpClosed}
            />
            <input
              type="text"
              placeholder="A song for Daniel"
              value={danielSong}
              onChange={(e) => setDanielSong(e.target.value)}
              disabled={isRsvpClosed}
            />
          </div>
        </div>
        <div className="button-container inputs-container">
          <button className="button-send" type="submit" disabled={isRsvpClosed}>
            SEND
          </button>
          {error && <p className="error-message">{error}</p>}
          <p className="ad-message">
            ANY MODIFICATION MUST CONTACT THE EVENT ORGANIZER*
          </p>
        </div>
      </form>
    </div>
  );
};

export default GuestForm;
