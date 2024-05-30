import LockIcon from '@mui/icons-material/Lock';
import HistoryIcon from '@mui/icons-material/History';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import './settings.scss'

const Setss = () =>{

return (


<div>
<div className='subclass'>

    Settings </div>
    <p style={{color:'rgba(208, 212, 241, 0.78)' ,marginLeft:'10px' , marginTop:'1px' , fontSize:'14px'}}>
Your settings will appear here. You can change your settings by clicking the gear icon on the top right of the page.</p>

<div className='subclass2'>
<p >SECURITY</p>
  

</div>
<div >
 <LockIcon className='icon1' variant="h2"> </LockIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Change Password</p>
<br/>
 <HistoryIcon className='icon1' variant="h2"> </HistoryIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Change Password</p>

 </div>

 <div className='subclass2'>
<p >GENERAL</p>
  

</div>
<div >
 <EditOutlinedIcon className='icon1' variant="h2"> </EditOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Edit Profile</p>
<br/>
 <FoundationOutlinedIcon className='icon1' variant="h2"> </FoundationOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Edit Organization</p> <br/>
 <PersonAddOutlinedIcon className='icon1' variant="h2"> </PersonAddOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Subscription Details
 </p>
<br/>
 <HeadsetMicOutlinedIcon className='icon1' variant="h2"> </HeadsetMicOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Contact US</p> <br/>
 <ShareOutlinedIcon className='icon1' variant="h2"> </ShareOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Share With Friends</p>
<br/>
 <DarkModeOutlinedIcon className='icon1' variant="h2"> </DarkModeOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Dark Mode</p>


 </div>
 <div className='subclass2'>
<p >PRODUCT</p>
  

</div>
<div >
 <AutoAwesomeOutlinedIcon className='icon1' variant="h2"> </AutoAwesomeOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Request a Feature</p>
<br/>
 <FeedbackOutlinedIcon className='icon1' variant="h2"> </FeedbackOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Feedback</p> <br/>
 <PestControlOutlinedIcon className='icon1' variant="h2"> </PestControlOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Report a Bug
 </p>
<br/>
 <NotificationsNoneOutlinedIcon className='icon1' variant="h2"> </NotificationsNoneOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Updates</p> <br/>
 <HeadsetMicOutlinedIcon  className='icon1' variant="h2"> </HeadsetMicOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>support</p>
</div>

<div className='subclass2'>
<p >LEGAL POLICIES</p>
  

</div>
<div >
 <TaskOutlinedIcon className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Terms and conditions</p>
<br/>
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Privacy Policies</p> <br/>
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Cookie Policy
 </p>
<br/>
 <TaskOutlinedIcon  className='icon1' variant="h2"> </TaskOutlinedIcon >
 <p style={{marginLeft :'10px', display:"inline"}}>Disclaimer</p> 
</div>
<div className='subclass2'>
<p >OTHER SETTINGS</p>
  

</div>
<div >
 <DeleteOutlinedIcon className='icon1' variant="h2"> </DeleteOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Delete Account</p>
<br/>
 <EditOutlinedIcon className='icon1' variant="h2"> </EditOutlinedIcon>
 <p style={{marginLeft :'10px', display:"inline"}}>Logout</p>

 </div>

</div>
)



}

export default Setss;