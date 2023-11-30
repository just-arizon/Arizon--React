import React from "react";
import "./Dashboard.css";
import "./Scroller.css";
import { Icon } from '@iconify/react';
import { useTour } from '@reactour/tour'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Dashboard() {
  const { setIsOpen } = useTour()
  return (
    <div className="dashboard__component ">
      <div className="dash__timeline">
        <div className="dash__profile--img" onClick={() => setIsOpen(true)}>
        
        <div className="indicator">
            <div className="arrow"></div>
            </div>
          <div class="image__circle" data-aos="flip-right"
          data-aos-delay="2000">
            
            </div>
            <div className="svg">
  
            </div>
        </div>
        <div className="dash__profile first-step"data-aos="fade-up"
     data-aos-duration="2000">
          <div className="dash__profile--text">
            <p><span>Hello</span>, I’m Arinze 
            <br/>
 A Front-End Developer with the following stacks
</p>
<div className="scroller"  data-speed="fast">
  <ul class="tag-list scrooler__inner">
    <li className="iconify toolkits">
    <Icon icon="material-symbols:javascript-rounded" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ion:logo-sass" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="tabler:brand-bootstrap" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="cib:react" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ic:outline-css" />
    </li>
    <li className="iconify toolkits">
    <Icon icon="ph:file-html-fill" />
    </li>
    {/* <li className="iconify toolkits">
    <Icon icon="cib:react" />
    </li> */}
  </ul>
</div>
          </div>
        </div>
      </div>
  
        
    </div>
  );
}

export default Dashboard;
