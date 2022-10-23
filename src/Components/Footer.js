import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Event</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Project</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Member</a></li>
            </ul>
        </footer>
        </div>
    </div>
  )
}
