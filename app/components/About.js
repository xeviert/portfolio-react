import AboutTabs from './aboutTabs';
import GitHubCalendar from 'react-github-calendar'

const About = () => {
  const customTheme = {
    dark: [
      "#1a1a1a",
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ],
    light: [
      "#1a1a1a",
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ],
  };

  return (
    <section id='about'>
      <div className='container'>
        <div className='roww'>
          <div className='resumo_fn_main_title'>
            <h3 className='subtitle'>About Me</h3>
            <h3 className='title'>Biography</h3>
            <p className='desc'>
              I'm a full-stack software engineer who started with the PERN stack (PostgreSQL, Express, React, Node.js) and have since expanded into
              building modern web applications with Next.js, cloud platforms like AWS and Vercel, and tools like Supabase. I love creating seamless,
              scalable solutions for startups and tackling challenges across the entire stack.</p>
            <br />
            <br />
            <p className='desc'>
              When I’m not coding, you’ll find me exploring new tech, tinkering with side projects, hitting the gym, or brewing beer.
              I'm always eager to collaborate on ideas and excited to pick up new skills.
            </p>
          </div>
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
            </div>
          </div>

          <div style={{ marginBottom: 64 }}>
            <GitHubCalendar username="xeviert" theme={customTheme} />
          </div>
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default About;
