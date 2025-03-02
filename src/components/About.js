import { useState } from 'react';

const About = () => {
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
  ]

  return (
    <section id='about'>
      <div className='container'>
        <div className='roww'>
          {/* Main Title */}
          <div className='resumo_fn_main_title'>
            <h3 className='subtitle'>About Me</h3>
            <h3 className='title'>Biography</h3>
            <p className='desc'>
              {`As a versatile Software Developer, I bring experience in both 
              front-end and back-end development, primarily using JavaScript and React along 
              with its various frameworks like Redux, Express, and Typescript. My expertise 
              extends to working with PostgreSQL and Knex as a JS query builder, 
              demonstrating my ability to handle diverse technologies. Throughout my career, 
              I’ve had the opportunity to explore and adapt to different technologies across 
              various roles, continually expanding my skill set. I’m always eager to take on 
              new challenges and contribute to innovative solutions.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className='resumo_fn_about_info'>
            <div className='about_left'>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Xevier Turrubiartes</th>
                  </tr>
                  {/* <tr>
                    <th>Birthday</th>
                    <th>4th April 1990</th>
                  </tr> 
                  <tr>
                    <th>Age</th>
                    <th>31 years</th>
                  </tr>*/}
                  <tr>
                    <th>Address</th>
                    <th>Austin, TX</th>
                  </tr>
                  {/* <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+38) 469 2344 2364</a>
                    </th>
                  </tr> */}
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href='mailto:xevier.dev@gmail.com'>
                        xeviert.dev@gmail.com
                      </a>
                    </th>
                  </tr>
                  {/* <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:brucewilson.90">brucewilson.90</a>
                    </th>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className='about_right'>
              {/* Download CV Button */}
              <div className='resumo_fn_cv_btn'>
                <a
                  href='img/Xevier-Turrubiartes-Resume.pdf'
                  download='Xevier Turrubiartes Resume'
                >
                  <span className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      version='1.1'
                      x='0px'
                      y='0px'
                      viewBox='0 0 449.306 449.306'
                      style={{ enableBackground: 'new 0 0 449.306 449.306' }}
                      xmlSpace='preserve'
                      className='fn__svg replaced-svg'
                    >
                      <path d='M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z' />
                    </svg>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      version='1.1'
                      x='0px'
                      y='0px'
                      viewBox='0 0 449.306 449.306'
                      style={{ enableBackground: 'new 0 0 449.306 449.306' }}
                      xmlSpace='preserve'
                      className='fn__svg arrow replaced-svg'
                    >
                      <path d='M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z' />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className='resumo_fn_tabs'>
            {/* Tab: Header */}
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
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className='tab_content'>
              {/* #1 tab content */}
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
                        <p>
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
                        </p>
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
                        <p>
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
                        </p>
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
                        <p>
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>DevWorks</h5>
                          <span>( 3/2021 — 12/2021 )</span>
                        </div>
                        <h3>Web Developer</h3>
                        <p>
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
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Siska Financial Services</h5>
                          <span>( 3/2015 — 10/2019 )</span>
                        </div>
                        <h3>Financial Advisor</h3>
                        <p>
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
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
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
                  {skills.map(skill => (
                    <div className='progress_item open' data-value={100}>
                      <div className='item_in'>
                        <h3 className='progress_title'>{skill}</h3>
                        <span
                          className='progress_percent'
                          style={{ right: '0%' }}
                        >
                        </span>
                        <div className='bg_wrap'>
                          <div className='progress_bg' style={{ width: '0%' }} />
                        </div>
                      </div>
                    </div>
                  ))}
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
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
