import './ProfileSidebar.css';

const ProfileSidebar = () => {
  return (
    <div className='profile_sidebar'>
      <ul>
        <h3>Hiring resources</h3>
        <li><a href="#">Guide to Hiring devs <span>(->)</span></a></li>
        <li><a href="#">Job Template <span>(->)</span></a></li>
        <li><a href="#">Interview Questions <span>(->)</span></a></li>
        <li><a href="#">Common Mistakes <span>(->)</span></a></li>
      </ul>

      <ul>
        <h3>Need help?</h3>
        <li><a href="#">Book a meeting <span>(->)</span></a></li>
        <li><a href="#">Chat with an expert <span>(->)</span></a></li>
      </ul>
    </div>
  )
}

export default ProfileSidebar