
// import React from 'react';
// import { useStateContext } from '../context/ContextProvider';

// function Profile() {
//     const { user } = useStateContext();

//     return (
//         <div className='card'>
//             <h2><i>User Details</i></h2>
//             <div className='profile-details'>
//                 <h2>Name: {user.name}</h2>
//                 <h3>Email: <i>{user.email}</i></h3>
//                 <h3>Role: {user.role}</h3>
//                 <h3>Phone: {user.phone}</h3>
//                 <h3>Address: {user.address}</h3>
//             </div>
//             {/* Add more user details as needed */}` ` 
//         </div>
//     );
// }

// export default Profile;*//

import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import './ProfileStyle.css';


function Profile() {
  const { user } = useStateContext();

  return (
    <div className="warpper">
      <header>
        <div className="headerTop">
     
        </div>
        <div className="ilrms">
          <div className="headerSkew"></div>
          <div className="containerBox">
            <div className="logo"><img src="images/india-logo.png" alt=""/> ILRMS</div>
            <div className="cleanIndia">
              <img src="images/digital-india.png" alt=""/>
              <img src="images/clean-india.png" alt=""/>
            </div>
          </div>
        </div>
      </header>

      <div className="middle">
        <div className="containerBox">
          <div className="sideBar">
            <div className="sideBarData">
              <div className="sdata">
                <img src="images/user.jpg" alt=""/>
                <ul>
                  <li>
                    <i className="bi bi-person"></i>
                    <p><strong>Applicant Name</strong> : {user.name}</p>
                  </li>
                  <li>
                    <i className="bi bi-phone"></i>
                    <p><strong>User Contact</strong> : {user.phone}</p>
                  </li>
                  <li>
                    <p>
                      <i className="bi bi-telephone-forward"></i>
                      <strong>Alternate Contact</strong> : {user.alternatePhone}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="bi bi-envelope-at"></i>
                      <strong>Email Id</strong> : {user.email}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="bi bi-person-vcard"></i>
                      <strong>Aadhar Number</strong> : {user.aadharNumber}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="bi bi-credit-card-2-front"></i>
                      <strong>PAN Number</strong> : {user.panNumber}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="bi bi-geo-alt"></i> <strong>Address</strong> : {user.address}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tableData">
            <div className="detailBox">
              <p><i className="bi bi-person-lines-fill"></i> Land Lord Details</p>
            </div>
            <div className="usertable">
              <table>
                <tr>
                  <th colSpan="4"><i className="bi bi-person-fill"></i> Applicant Details</th>
                </tr>
                <tr>
                  <td style={{ color: 'red' }}>Name in Aadhar Card</td>
                  <td>{user.aadharName}</td>
                  <td style={{ color: '#02b77a' }}>Aadhar Varified</td>
                  <td>
                    {user.aadharVerified ? (
                      <span style={{ color: '#02b77a' }}><i className="bi bi-check-circle-fill"></i></span>
                    ) : (
                      <span style={{ color: 'red' }}><i className="bi bi-x-circle-fill"></i></span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={{ color: '#003ed4' }}>Occupation of Applicant</td>
                  <td>{user.occupation}</td>
                  <td style={{ color: '#d400c7' }}>Period of Possession</td>
                  <td>{user.possessionPeriod}</td>
                </tr>
                <tr>
                  <td style={{ color: 'goldenrod' }}>Cast</td>
                  <td>{user.cast}</td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ color: '#d14d1f' }}>
                    Wheather the Proposed land fall under Tribal Belt/Block
                  </td>
                  <td>{user.tribalBelt ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ color: '#10adf9' }}>
                    Total Application applied by this applicant
                  </td>
                  <td>
                    <button>View<i className="bi bi-chevron-double-right"></i></button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="usertable">
            <table>
                <tr>
                <th colSpan="4"><i className="bi bi-pin-map-fill"></i> Land Area Details</th>
                </tr>
                <tr>
                <td style={{ color: 'red' }}>District</td>
                <td style={{ color: 'rgb(0 90 255)' }}>Circle</td>
                <td style={{ color: 'green' }}>Village</td>
                <td style={{ color: 'rgb(208, 0, 255)' }}>Area</td>
                </tr>
                {user.landAreas && user.landAreas.map((area, index) => (
                <tr key={index}>
                    <td>{area.district}</td>
                    <td>{area.circle}</td>
                    <td>{area.village}</td>
                    <td>{area.area}</td>
                </tr>
                ))}
            </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;