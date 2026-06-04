import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './styles.css';

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

const GuestTable: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [filter, setFilter] = useState<
  'all' | 'attending' | 'notAttending' | 'pending'
>('all');

  useEffect(() => {
    axios.get('https://web-production-bfb0e.up.railway.app/api/guests')
      .then(response => {
        setGuests(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDownloadExcel = () => {
    const filteredGuests = guests
      .filter(guest => {
       if (filter === 'attending')
      return guest.attendance === true;

      if (filter === 'notAttending')
      return guest.attendance === false;

      if (filter === 'pending')
      return guest.attendance === null;

      return true;
      })
      .map(guest => ({
        ...guest,
        confirmation_date: guest.confirmation_date ? new Date(guest.confirmation_date).toLocaleDateString() : 'No Response Yet',
      }));

    const worksheet = XLSX.utils.json_to_sheet(filteredGuests);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Guests');
    XLSX.writeFile(workbook, 'guest_list.xlsx');
  };

  const filteredGuests = guests.filter(guest => {
    if (filter === 'attending') return guest.attendance === true;
    if (filter === 'notAttending') return guest.attendance === false;
    if (filter === 'pending') return guest.attendance === null;
    return true;
  });

  return (
    <div className='table-container'>
      <div className='filter-container'>
        <label>
          <input
            type='radio'
            value='all'
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          All
        </label>
        <label>
          <input
            type='radio'
            value='attending'
            checked={filter === 'attending'}
            onChange={() => setFilter('attending')}
          />
          Will Attend
        </label>
        <label>
          <input
            type='radio'
            value='notAttending'
            checked={filter === 'notAttending'}
            onChange={() => setFilter('notAttending')}
          />
          Won't Attend
        </label>
        <label>
        <input
          type='radio'
          value='pending'
          checked={filter === 'pending'}
          onChange={() => setFilter('pending')}
        />
        Pending
        </label>
      </div>
      <table className='guest-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tickets</th>
            <th>Phone</th>
            <th>Attendance</th>
            <th>Confirmation Date</th> 
            <th>Dietary Restrictions</th>
            <th>Allergies</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Song for Couple</th>
            <th>Song for Daniel</th>
            <th>Song for Jasmine</th>
          </tr>
        </thead>
        <tbody>
          {filteredGuests.map((guest, index) => (
            <tr key={index}>
              <td>{guest.name}</td>
              <td>{guest.tickets}</td>
              <td>{guest.telephone}</td>
              <td>{
                guest.attendance === true
                ? 'Will Attend'
                : guest.attendance === false
                ? "Won't Attend"
                : 'Pending'
              }
              </td>
              <td>{guest.confirmation_date ? new Date(guest.confirmation_date).toLocaleDateString() : 'No Response Yet'}</td>
              <td>{guest.dietaryRestriction || 'No Response Yet'}</td>
              <td>{guest.otherAllergies || 'No Response Yet'}</td>
              <td>{guest.arrivalDate ? new Date(guest.arrivalDate).toLocaleDateString() : 'No Response Yet'}</td>
              <td>{guest.arrivalTime || 'No Response Yet'}</td>
              <td>{guest.coupleSong ||  'No Response Yet'}</td>
              <td>{guest.danielSong || 'No Response Yet'}</td>
              <td>{guest.jasmineSong || 'No Response Yet'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='download-btn' onClick={handleDownloadExcel}>Download Excel</button>
    </div>
  );
};

export default GuestTable;
