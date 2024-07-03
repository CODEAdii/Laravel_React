import React from 'react';

function Footer() {
  return (
    <footer className="footer">
        <div className="containerBox">
          <div className="footerColumn">
            <h2>ILRMS</h2>
            <ul>
              <li>
                <a href="javascript:;"><i className="bi bi-chevron-double-right"></i>About ILRMS</a>
              </li>
              <li>
                <a href="javascript:;"><i className="bi bi-chevron-double-right"></i>FAQS</a>
              </li>
              <li>
                <a href="javascript:;"><i className="bi bi-chevron-double-right"></i>Term & Condition</a>
              </li>
              <li>
                <a href="javascript:;"><i className="bi bi-chevron-double-right"></i>Disclaimer</a>
              </li>
              <li>
                <a href="javascript:;"><i className="bi bi-chevron-double-right"></i>Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h2>Website Links</h2>
            <ul>
              <li>
                <a href="https://landrevenue.assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Revenue & Disaster Management</a>
              </li>
              <li>
                <a href="https://dlrs.assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Directorate of Land Records</a>
              </li>
              <li>
                <a href="https://arundhati.nic.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Arundhati Gold Scheme</a>
              </li>
              <li>
                <a href="https://igr.assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Inspector General of Registration</a>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <a href="https://cm.assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Assam CM Portal</a>
              </li>
              <li>
                <a href="https://assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Assam State Portal</a>
              </li>
              <li>
                <a href="https://kamrup.assam.gov.in/" target="_blank"><i className="bi bi-chevron-double-right"></i>Integrated District Office</a>
              </li>
            </ul>
          </div>
          <div className="footerColumn">
            <img src="images/nic-logo.png" alt=""/>
            <ul>
              <li>
                <i className="bi bi-chevron-double-right"></i>Designed & Developed by : <br/>
                <a href="https://assam.nic.in/" target="_blank">National Informatics Centre, Assam</a>
              </li>
              <li>
                <i className="bi bi-chevron-double-right"></i><a href="https://landrevenue.assam.gov.in/" target="_blank">Content maintained by : Revenue and Disaster Management, Govt. of Assam</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy;Copyright 2024, ILRMS already reserved</p>
        </div>
      
    </footer>
  );
}

export default Footer;