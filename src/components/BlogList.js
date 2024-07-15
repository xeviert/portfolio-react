const styles = {
  blogItemLeft: {
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '100%',
    paddingTop: '40px',
    paddingLeft: '30px',
    margin: '30px',
    color: '#fff', // Adjust color if necessary
  },
  blogDate: {
    margin: '0',
    fontSize: '18px',
  },
  readMore: {
    paddingTop: '10px'
  }
};

const BlogList = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Blog</h3>
            <h3 className="title">What I Do</h3>
            <p className="desc">
              I help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers
              and growing overall sales.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              <li>
                <div className="item">
                  <div className="blog-item-left" style={styles.blogItemLeft}>
                    <p className="blog-date" style={styles.blogDate}>July 15, 2023</p>
                  </div>
                  <div className="item_left">
                    <h3>Brand Consultant</h3>
                    <p>
                      I build brands through cultural insights &amp; strategic
                      vision. Custom crafted business solutions.
                    </p>
                    <h4 style={styles.readMore}>Read More...</h4>
                  </div>
                </div>
              </li>

              <li>
                <div className="item">
                  <div className="blog-item-left" style={styles.blogItemLeft}>
                    <p className="blog-date" style={styles.blogDate}>July 15, 2023</p>
                  </div>
                  <div className="item_left">
                    <h3>Brand Consultant</h3>
                    <p>
                      I build brands through cultural insights &amp; strategic
                      vision. Custom crafted business solutions.
                    </p>
                    <h4>Read More...</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="blog-item-left" style={styles.blogItemLeft}>
                    <p className="blog-date" style={styles.blogDate}>July 15, 2023</p>
                  </div>
                  <div className="item_left">
                    <h3>Brand Consultant</h3>
                    <p>
                      I build brands through cultural insights &amp; strategic
                      vision. Custom crafted business solutions.
                    </p>
                    <h4>Read More...</h4>
                  </div>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
