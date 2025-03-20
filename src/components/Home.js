import Image from 'next/image';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Introduction</h3>
            <h3 className="title">Software Engineer</h3>
            <p className="desc">
              Full-stack software engineer with expertise in JavaScript, React, Next.js, Node.js, and modern web development.
              Experienced in building and deploying scalable applications using cloud platforms like AWS, Vercel, and Supabase.
              Proficient in database design with PostgreSQL and passionate about creating seamless user experiences.
              Continuously expanding my skill set to deliver innovative solutions for startups and beyond.
            </p>
            <a
              className='fn__link'
              href='https://github.com/xeviert'
              target='_blank'
              rel="noreferrer"
              style={{ marginRight: '40px' }}
            >
              <Image
                src='/img/icons/github.png'
                alt='GitHub'
                width={70}
                height={70}
              />
            </a>
            <a
              className='fn__link'
              href='https://www.linkedin.com/in/xevierturrubiartes/'
              target='_blank'
              rel="noreferrer"
            >
              <Image
                src='/img/icons/linkedin.png'
                alt='LinkedIn'
                width={70}
                height={70}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
