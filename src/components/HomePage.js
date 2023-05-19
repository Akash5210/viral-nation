import React, { useState } from 'react'

export default function HomePage() {
  const [themeMode, setThemeMode] = useState(false);
  return (
    <div className='homepage'>
      <nav className="navbar bg-body-tertiary py-0">
        <div className="container-fluid">
          <a className="navbar-brand position-relative" href="#">
            V<span className='position-absolute'>iral Nation</span>
          </a>

          <div className='d-flex'>
            <i className="fa fa-sun pt-1 me-2"></i>
            <div className="form-switch"><input className="form-check-input me-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                  onChange={()=> setThemeMode(!themeMode)}
                  checked={themeMode} />
              </div>
            <i className="fa fa-moon pt-1"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}
