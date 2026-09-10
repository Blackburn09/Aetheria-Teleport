"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Telemetry() {
  const [nodes, setNodes] = useState([
    { id: "ND-01", destination: "Neo-Tokyo Orbital", frequency: "432.8 THz", coherence: "99.99%", status: "ONLINE" },
    { id: "ND-07", destination: "Lunar Base Delta", frequency: "891.2 THz", coherence: "99.94%", status: "ONLINE" },
    { id: "ND-12", destination: "Olympus Mons Station", frequency: "120.4 THz", coherence: "98.50%", status: "CALIBRATING" },
    { id: "ND-19", destination: "Europa Sub-Ice Hub", frequency: "654.1 THz", coherence: "99.98%", status: "ONLINE" },
  ]);
  const [search, setSearch] = useState("");
  const visibleNodes = nodes.filter((node) =>
    node.destination.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = new Date().getSeconds();
      let currentStatus;
      if (seconds < 10) {
        currentStatus = "BOARDING";
      } else if (seconds < 15) {
        currentStatus = "DEPARTED";
      } else {
        currentStatus = "ONLINE";
      }

      setNodes((prevNodes) =>
        prevNodes.map((node) => ({ ...node, status: currentStatus }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="container">
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/telemetry">Terminals</Link></li>
            <li><Link href="/booking">Dispatch & Quantum Booking</Link></li>
          </ul>
        </nav>
      </div>

      <div className="section-block">
        <h2 className="section-title">LIVE TERMINAL DISPATCH</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Destination Hub.."
        />

        <div className="tablewrapper">
          <table className="telemetrytable">
            <thead>
              <tr>
                <th>NODE ID</th>
                <th>DESTINATION HUB</th>
                <th>FREQUENCY</th>
                <th>COHERENCE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {visibleNodes.map((node) => (
                <tr key={node.id}>
                  <td>{node.id}</td>
                  <td>{node.destination}</td>
                  <td>{node.frequency}</td>
                  <td>{node.coherence}</td>
                  <td>
                    <span className={node.status === "ONLINE" ? "status-ready" : "status-warn"}>
                      {node.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="section-block">
        <h2 className="section-title">QUANTUM HARDWARE & STATIONS</h2>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/047/608/540/small/futuristic-background-with-a-circle-in-the-center-photo.jpg" alt="Jump Chamber Alpha" className="image" />
            <div className="gallery-info">
              <h4>Jump Chamber Alpha</h4>
              <p>Primary dematerialization pod engineered for high-frequency, short-range tactical transit.</p>
            </div>
          </div>
          <div className="gallery-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyZWQ1ByeBNyzYqZcMZnch652tz7q-z2x45fynzEGI_CllJTij6xqyMFo&s=10" alt="Pattern Buffer Unit" className="image" />
            <div className="gallery-info">
              <h4>Pattern Buffer Matrix</h4>
              <p>High-density sub-quark storage array designed to maintain total bio-integrity during displacement.</p>
            </div>
          </div>
          <div className="gallery-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9IFx4pUF75gVun6oKIqiOk_FqsWbdIti8XYjkNw9Hw&s=10" alt="Orbital Relay Hub" className="image" />
            <div className="gallery-info">
              <h4>Orbital Relay Hub</h4>
              <p>Deep-space optic laser synchronization array facilitating interstellar telemetry and vector locking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2 className="section-title">SAFETY PROTOCOLS & FAQ</h2>
        <div className="faq-container">
          <details className="faq-item">
            <summary>Is atomic reassembly 100% guaranteed?</summary>
            <p>Yes. Our quantum entanglement buffers maintain triple redundancy down to sub-quark spin states before dematerialization begins.</p>
          </details>
          <details className="faq-item">
            <summary>What happens if a solar flare occurs mid-jump?</summary>
            <p>Our automated deflection array instantly reroutes your frequency stream to an orbital safe node within 0.0001 seconds.</p>
          </details>
          <details className="faq-item">
            <summary>Can I travel with bio-organic luggage?</summary>
            <p>Standard personal items up to 25kg are integrated into your quantum field seamlessly during pod sealing.</p>
          </details>
        </div>
      </section>
    </div>
  );
}