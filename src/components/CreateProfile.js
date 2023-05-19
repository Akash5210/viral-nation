import React, { useState } from 'react'

export default function CreateProfile() {
  const [newProfile, setNewProfile] = useState({
    imgLInk: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    varification: false
  });
  
  const handleCancel = ()=> {
    
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(newProfile);
  }
  return (
    <div className='create-profile'>
        <heading>
            <h1 className='position-relative'>Create Profile <button type="button" className="cancel-form btn-close position-absolute end-0 mt-2" aria-label="Close"></button></h1>
            
        </heading>
        <hr />
        <form className='form' onSubmit={handleSubmit}>
            <div className='profile-image mb-4'>
                <div className='mb-1'>
                    <label for="profileImg">Image Link</label>
                </div>
                <div>
                    <input type='text' id='profileImg' value={newProfile.imgLink}
                    className='form-control' onChange={(e)=> setNewProfile({...newProfile, imgLInk :e.target.value}) } />
                </div>
            </div>

            <div className='profile-name row mb-4 ms-0 me-0'>
                <div className='col-6 ps-0'>
                    <div className='mb-1'>
                        <label for="firstName">First name</label>
                    </div>
                    <div>
                        <input type='text' id='firstName' value={newProfile.firstName} 
                        className='form-control' onChange={(e)=> setNewProfile({...newProfile, firstName :e.target.value}) } />
                    </div>
                </div>
                <div className='col-6 pe-0'>
                    <div className='mb-1'>
                        <label for="lastName">Last name</label>
                    </div>
                    <div>
                        <input type='text' id='lastName' value={newProfile.lastName} 
                        className='form-control' onChange={(e)=> setNewProfile({...newProfile, lastName :e.target.value}) } />
                    </div>
                </div>
            </div>

            <div className='profile-email mb-4'>
                <div className='mb-1'>
                    <label for="email">Email</label>
                </div>
                <div>
                    <input type='email' id='email' value={newProfile.email} 
                    className='form-control' onChange={(e)=> setNewProfile({...newProfile, email :e.target.value}) } />
                </div>
            </div>

            <div className='profile-description mb-4'>
                <div className='mb-1'>
                    <label for="description">Description</label>
                </div>
                <div>
                    <textarea id='description' value={newProfile.description} rows="4" cols="40" 
                    className='form-control' onChange={(e)=> setNewProfile({...newProfile, description :e.target.value}) }
                    placeholder='Write a description for the talent' />
                </div>
            </div>

            <div className='profile-verification'>
                <p>Verification</p>
                <div className="form-check form-switch form-check-reverse d-flex justify-content-between p-3 rounded-1 bg-body-secondary">
                    <label className="form-check-label fw-medium" for="flexSwitchCheckChecked">Talent is verified</label>
                    <input className="form-check-input me-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                    onChange={()=> setNewProfile({...newProfile, varification: !(newProfile.varification)})}
                    checked={newProfile.varification} />
                </div>
            </div>
            <hr className='footer-line' />
            <button type='submit' className='btn btn-primary float-end rounded-1'>Create Profile</button>
        </form>
    </div>
  )
}


                    {/* <input type='textarea' id='description' value={newProfile.description}
                    onChange={(e)=> setNewProfile({...newProfile, description :e.target.description}) }
                    placeholder='Write a description for the talent' /> */}