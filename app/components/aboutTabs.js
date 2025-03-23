"use client"
import { useState } from 'react';

const AboutTabs = () => {
  const [toggleList, setToggleList] = useState('tab1');
  const activeList = (value) => (value === toggleList ? 'active' : '');

  const skills = [
    'Next',
    'Supabase',
    'Javascript',
    'React',
    'Redux',
    'Express',
    'PostgreSQL',
    'Cypress',
    'Heroku & Vercel',
    'Git',
    'Github',
  ];

  const renderSkill = (skill, index) => (
    <div key={index} className="progress_item open" data-value={100}>
      <div className="item_in">
        <h3 className="progress_title">{skill}</h3>
        <span
          className="progress_percent"
          style={{ right: "0%" }}
        ></span>
        <div className="bg_wrap">
          <div className="progress_bg" style={{ width: "0%" }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='resumo_fn_tabs'>
      <div className='tab_header'>
        <ul>
          <li className={activeList('tab1')}>
            <a href='#' onClick={() => setToggleList('tab1')}>
              Experience
            </a>
          </li>
          <li className={activeList('tab2')}>
            <a href='#' onClick={() => setToggleList('tab2')}>
              Education
            </a>
          </li>
          <li className={activeList('tab3')}>
            <a href='#' onClick={() => setToggleList('tab3')}>
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className='tab_content'>
        <div id='tab1' className={`tab_item ${activeList('tab1')}`}>
          {/* Boxed List */}
          <div className='resumo_fn_boxed_list'>
            <ul>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>Sonicbids/Advance Music Technologies</h5>
                    <span>( 09/2024 — Present )</span>
                  </div>
                  <h3>
                    Lead Software Engineer
                  </h3>
                  <div>
                    <ul className='experience-list'>
                      <li>
                        Spearheaded the end-to-end development of a full-stack web application using React, Redux, TypeScript, Node.js,
                        Express, and PostgreSQL, achieving MVP status single-handedly.
                      </li>
                      <li>
                        Designed anddeveloped RESTful APIs for seamless client-server communication, reducing API response times by 25%.
                      </li>
                      <li>
                        Architected robust state management solutions with Redux and Redux Toolkit, including custom middleware and
                        asynchronous thunks, enhancing application performance by 30%.
                      </li>
                      <li>
                        Optimized frontend performance through code-splitting, lazy loading, and memoization, resulting in a smoother user
                        interface.
                      </li>
                      <li>
                        Implemented user authentication and authorization mechanisms, including secure login, registration, and role-based
                        access control, ensuring data privacy.
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </li>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>Artificial Compute</h5>
                    <span>( 06/2023 — 06/2024 )</span>
                  </div>
                  <h3>
                    Consulting Software Engineer
                  </h3>
                  <div>
                    <ul className='experience-list'>
                      <li>
                        Led the development of dynamic web applications using React and Redux as the sole front-end engineer, resulting in highly
                        interactive and state-managed user interfaces.
                      </li>
                      <li>
                        Implemented Microsoft Clarity, providing valuable user data to UX researchers and informing the product design process.
                      </li>
                      <li>
                        Installed and customized the Intercom chatbot, tailoring its responses to the signed-in user for enhanced assistance and user
                        experience.
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </li>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>Rodeo Logistics</h5>
                    <span>( 12/2021 — 02/2023 )</span>
                  </div>
                  <h3>
                    Junior Software Engineer/Quality Assurance Engineer
                  </h3>
                  <div>
                    <ul className='experience-list'>
                      <li>
                        Contributed significantly in a cross-functional team, helping to
                        define features and build powerful, user-friendly products and
                        customer-facing workflow tools.
                      </li>
                      <li>
                        Developed comprehensive test scripts using Cypress, enhancing the
                        efficiency of automated software testing rounds.
                      </li>
                      <li>
                        Managed full lifecycle software development, from initial planning
                        stages to deployment and ongoing maintenance, ensuring seamless product
                        rollouts.
                      </li>
                      <li>
                        Identified and documented bugs through rigorous regression testing,
                        creating detailed tickets to facilitate bug reproduction and resolution.
                      </li>
                      <li>
                        Maintained comprehensive technical documentation, including specifications
                        and testing methods, to support future project reference and continuity.
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </li>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>DevWorks</h5>
                    <span>( 3/2021 — 12/2021 )</span>
                  </div>
                  <h3>Web Developer</h3>
                  <div>
                    <ul className='experience-list'>
                      <li>
                        Revamped mission-critical web applications using Javascript,
                        React, and Node, enhancing usability and performance.
                      </li>
                      <li>
                        Designed and developed robust APIs using Node, Express
                        middleware routing, and Knex, improving data accessibility
                        and integration.
                      </li>
                      <li>
                        Optimized performance of both frontend and backend
                        code through debugging, DevTools, console logs, and
                        bug reproduction, ensuring smooth and efficient operation.
                      </li>
                      <li>
                        Write unit, integration, and end-to-end test using
                        Jest and Puppeteer.
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </li>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>Siska Financial Services</h5>
                    <span>( 3/2015 — 10/2019 )</span>
                  </div>
                  <h3>Financial Advisor</h3>
                  <div>
                    <ul className='experience-list'>
                      <li>
                        Serviced accounts for more than 100 clients with
                        over $22 million in investment assets.
                      </li>
                      <li>
                        Counseled clients on financial matters and
                        provided recommendations on investment
                        opportunities, products and services based on
                        client needs and asset availability.
                      </li>
                    </ul>{' '}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Boxed List */}
        </div>
        <div id='tab2' className={`tab_item ${activeList('tab2')}`}>
          {/* Boxed List */}
          <div className='resumo_fn_boxed_list'>
            <ul>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>Thinkful</h5>
                    <span>( 10/2020 — 3/2021 )</span>
                  </div>
                  <h3>Engineering Immersion</h3>
                  <p> </p>
                </div>
              </li>
              <li>
                <div className='item'>
                  <div className='item_top'>
                    <h5>University of Houston-Downtown</h5>
                    <span>( 2018 )</span>
                  </div>
                  <h3>Bachelor of Business Administration</h3>
                  <p> </p>
                </div>
              </li>
            </ul>
          </div>
          {/* /Boxed List */}
        </div>
        {/* /#2 tab content */}
        {/* #3 tab content */}
        <div id='tab3' className={`tab_item ${activeList('tab3')}`}>
          {/* Progress Bar */}
          <div className='resumo_fn_progress_bar'>
            {skills.map(renderSkill)}
          </div>

          {/* /Progress Bar */}
          {/* Description */}
          {/* <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
                </div> */}
        </div>
        {/* /#2 tab content */}
      </div>
    </div>
  )
};

export default AboutTabs;
