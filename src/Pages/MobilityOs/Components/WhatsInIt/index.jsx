import React from 'react'
import "./index.css"
import { BsCheck } from 'react-icons/bs'

const WhatsInIt = () => {

    const whistleList = [
        {
            icon: "https://www.whistledrive.com/assets/images/Page%203/Forma-1-1.png",
            text: 'Employees',
            insideText: [
                'Smart Mobile Application',
                'Live Tracking',
                'Advanced Safety & Security',
                'Ad-hoc Request feature',
            ]
        },
        {
            icon: "https://www.whistledrive.com/assets/images/Page%203/Shape-1-1.png",
            text: 'Client Admin Team',
            insideText: [
                'Eagle Eye View',
                'Detailed Report & Billing',
                'Cab Driver & Compliance',
                'Ad-hoc Request feature',
            ]
        },
        {
            icon: "https://www.whistledrive.com/assets/images/Page%203/Group-1.png",
            text: 'Vendors',
            insideText: [
                'Mobile & Web Application',
                ' Ease of Fleet Management',
                'Customized Reports & Billing'
            ]
        },
        {
            icon: "https://www.whistledrive.com/assets/images/Page%203/Shape-1.png",
            text: 'Supervisor',
            insideText: [
                'Mobile & Web Application',
                'Ad-hoc Flow',
                ' Ease of Management',
                'Ad-hoc Request feature',
            ]
        },
        {
            icon: "https://www.whistledrive.com/assets/images/Page%203/Group-2.png",
            text: 'Drivers',
            insideText: [
                ' Easy to use Application',
                ' Transparent Trip Data',
                '24/7 Support & Safety',
                'Automated Alert on Trips & Document Expiry',
            ]
        },
    ]




    return (
        <div className='main-root-class'>
            <div className="inside-container-class">

                <div className='whatsinit-heading'>
                    Whistle Tech – What’s in it for you?
                </div>
                <div className="whatsinit-container">
                    {
                        whistleList.map((el,i) => (
                            <div className='whistle-tech-text' key={i}>
                                <img src={el.icon} alt="" height='44px' width='40px' />
                                <span className='tech-type-name'>{el.text}</span>

                                {
                                    el.insideText.map((el) => (
                                        <li key={el}>
                                            <span>
                                                <BsCheck style={{
                                                    color: '#0096d5',
                                                    backgroundColor: '#CCEFFF', position: 'relative', top: '4px', borderRadius: '50%'
                                                }} size='20px' />
                                            </span>
                                            <span>
                                                {
                                                    el
                                                }
                                            </span>
                                        </li>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatsInIt