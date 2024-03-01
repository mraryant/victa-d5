import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './terms.css'

const pp = () => {
  return (
    <>
     <div className="term-main">
     <Navbar />
        <div className="terms container">
            <h4 className='termtitle'  id='top'>WELCOME TO VICTA CAPITAL</h4>
            <h1 className='termtitle'>Privacy Policy</h1> 
            <br /><br />
            <p className="termdesc">
            <span className="termspan">1. Information We Collect: We may collect the following types of personal information:</span>  

<br />

Contact Information: Name, email address, wallet address.
Transaction Information: Details of Victa Capital transactions.
Technical Information: IP address, browser type, device identifiers, usage patterns.
<br /><br />
<span className="termspan">2. Use of Information:</span> 
 We use collected information for the following purposes:<br />

Providing Services: Managing Victa Capital transactions and associated services.
Communication: Sending important updates, notifications, and support-related messages.
Analytics: Analyzing usage patterns to improve our services and user experience.<br /><br />

<span className="termspan">3. Data Sharing and Disclosure:</span> 
 We may share your information with:<br />

Third-party providers who assist us in delivering services.
Legal Requirements: When required by law or to protect our rights and users' safety.<br /><br />

<span className="termspan">4. Data Security:</span> 
<br /> We employ security measures to protect personal information. However, please note that no method of data transmission over the internet is entirely secure.
<br /><br />

<span className="termspan"></span> 
5. Data Retention:<br /> We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required by law.
<br /><br />

<span className="termspan">6. Cookies and Tracking Technologies:</span> 
<br /> We use cookies and similar technologies to enhance user experience and collect information about usage patterns. You can manage cookies through your browser settings.
<br /><br />

<span className="termspan">7. Your Rights:</span> 
<br /> You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a style={{textDecoration:"none", border:"none"}} href="mailto:support@victacapitals.com">support@victacapitals.com</a>. Please note that some data may be retained for legal or legitimate purposes.
<br /><br />

<span className="termspan">8. Children's Privacy:</span> 
<br /> Victa Capital and services are not intended for individuals under the age of [18]. We do not knowingly collect personal information from minors.
<br /><br />

<span className="termspan">9. Changes to this Privacy Policy:</span> 
<br /> We may update this Privacy Policy from time to time. We will notify users of any material changes and obtain consent if required by law.
<br /><br />

<span className="termspan">10. Contact Us:</span> 
<br /> For any questions or concerns regarding this Privacy Policy or your personal information, please contact us at <a style={{textDecoration:"none", border:"none"}} href="mailto:support@victacapitals.com">support@victacapitals.com</a>
       
    </p> </div>
        <Footer />
     </div>
    </>
  )
}

export default pp