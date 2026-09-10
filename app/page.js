import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container">
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/telemetry">Terminals</Link></li>
            <li><Link href="/booking">Dispatch and Quantum Booking</Link></li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">AETHERIA // QUANTUM CORE</h1>
          <p className="hero-slogan">Distance is an Illusion. Arrive Anywhere, Instantly.</p>
          <Link href="/booking" className="cta-button">Initiate Quantum Jump</Link>
        </div>

        <div className="hero-right">
          <h3>SYSTEM OVERVIEW</h3>
          <p>
            Pioneering safe, intra-planetary molecular transport since 2088.
            Our quantum entanglement networks boast 99.99% atomic reassembly fidelity across 40+ planetary jump nodes.
          </p>
          <div className="features">
            <div className="feature-card">
              <span className="card-header">01 // HUB</span>
              <h3 className="card-data">142</h3>
              <p className="card-info">Active Nodes</p>
            </div>
            <div className="feature-card">
              <span className="card-header">02 // SYNC</span>
              <h3 className="card-data">99.9%</h3>
              <p className="card-info">Coherence</p>
            </div>
            <div className="feature-card">
              <span className="card-header">03 // SPEED</span>
              <h3 className="card-data">0.004s</h3>
              <p className="card-info">Transit Lag</p>
            </div>
            <div className="feature-card">
              <span className="card-header">04 // SAFE</span>
              <h3 className="card-data">100%</h3>
              <p className="card-info">Bio-Recall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
