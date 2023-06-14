// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="heading">Alert Notifications</h1>

    <Notification>
      <AiFillCheckCircle className="icon-size success" />
      <div className="text-con ">
        <h1 className="success">Success</h1>
        <p className="text">You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="icon-size error" />
      <div className="text-con">
        <h1 className="error">Error</h1>
        <p className="text">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="icon-size warning" />
      <div className="text-con">
        <h1 className="warning">Warning</h1>
        <p className="text">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="icon-size info" />
      <div className="text-con">
        <h1 className="info">Info</h1>
        <p className="text">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
