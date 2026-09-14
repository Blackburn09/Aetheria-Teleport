"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SiteNav from "../components/SiteNav";


export default function Booking() {

  const [nodeList, setNodeList] = useState([]);

  useEffect(() => {
    fetch("https://0201243d-ed25-4b62-8a3e-c376d4eef70a.mock.pstmn.io/nodes")
      .then((res) => res.json())
      .then((data) => setNodeList(data));
  }, []);



  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mass, setMass] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [transitClass, setTransitClass] = useState("standard");
  const [insurance, setInsurance] = useState(true);
  const [stasis, setStasis] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const selectedNode = nodeList.find((n) => n.id === destination);
  const baseFare = selectedNode ? selectedNode.baseFare : 0;

  const classMultiplier = transitClass === "chronos" ? 2 : 1;
  const massFee = (Number(mass) || 0) * 10;
  const insuranceFee = insurance ? 500 : 0;
  const stasisFee = stasis ? 300 : 0;
  const totalFare = baseFare * classMultiplier + massFee + insuranceFee + stasisFee;

  function handleSubmit(e) {
    e.preventDefault();
    setBookingId(crypto.randomUUID().slice(0, 8).toUpperCase());
    setConfirmed(true);
  }

  return (
    <div>
      <SiteNav />

      <div className="booking-header">
        <h2>QUANTUM DISPATCH TERMINAL</h2>
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="status-text">DISPATCH CORE: ONLINE & STABLE</span>
        </div>
      </div>

      <div className="form-wrapper">
        {confirmed ? (
          <div className="confirmation-panel">
            <h3>BOOKING CONFIRMED</h3>
            <p>Booking ID: {bookingId}</p>
            <p>Passenger: {fullname}</p>
            <p>Destination Node: {destination}</p>
            <p>Total Fare: {totalFare} credits</p>
            <button onClick={() => setConfirmed(false)}>Book Another Jump</button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Passenger Full Name</label>
              <input
                type="text" id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="eg. Dr. Alex Vance"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Quantum Comm ID (Email)</label>
              <input
                type="email" id="email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@aetheria.grid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mass">Bio/Cargo Mass (kg)</label>
              <input
                type="number" id="mass" min="1" max="25" required
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                placeholder="Max 25kg standard"
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination Jump Node</label>
              <select
                id="destination" required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="" disabled>Select destination node...</option>
                {nodeList.map((node) => (
                  <option key={node.id} value={node.id}>
                    {node.name} ({node.distanceFromPrime} km)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="departure">Scheduled Jump Window</label>
              <input
                type="datetime-local" id="departure" required
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>

            <div className="form-group full-width">
              <label>Select Transit Class</label>
              <div className="radio-group full width">
                <label className="radio-option fullwidth">
                  <input
                    type="radio" name="transit_class" value="standard"
                    checked={transitClass === "standard"}
                    onChange={(e) => setTransitClass(e.target.value)}
                  />
                  <span>Standard Pod (Coherence 99.9%)</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio" name="transit_class" value="chronos"
                    checked={transitClass === "chronos"}
                    onChange={(e) => setTransitClass(e.target.value)}
                  />
                  <span>Chronos First Class (VIP Neural Sync)</span>
                </label>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Safety Protocols and Protection</label>
              <div className="checkbox-group">
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={insurance}
                    onChange={(e) => setInsurance(e.target.checked)}
                  />
                  <span>Molecular Entanglement Protection(+500cr)</span>
                </label>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={stasis}
                    onChange={(e) => setStasis(e.target.checked)}
                  />
                  <span>Sub-Zero Stasis Chamber During Jump</span>
                </label>
              </div>
            </div>

            <div className="fare-display">
              <h3 className="total-fare">Estimated Fare: {totalFare} credits</h3>
            </div>

            <button type="submit" className="submit-btn fullwidth">
              LOCK IN DISPATCH COORDINATES
            </button>
          </form>
        )}
      </div>
    </div>
  );
}