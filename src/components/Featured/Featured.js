import { UserCard } from 'react-ui-cards';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import sagar1 from '../../images/sagar1.jfif';
import DAGLOGO from '../../images/DAGLOGO.png';
import study from '../../images/study.jpg';
import reason from '../../images/reason.jpg';

export const Featured = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <br></br>
      <br></br>
      <div className="featured-container">
        <div className="Featuredmain">
          <div>
            <h1 className="Featuredheader"><strong>Featured Articles</strong></h1>
          </div>
          <br></br>
          <br></br>
          <div className={`Featured ${isMobile ? 'Featured-mobile' : ''}`}>
            <div>
              <Link to='/enroll-on-your-dream-course-of-mba-in-the-us-and-uk-with-direct-admission'>
                <UserCard
                  className="FeaturedCard"
                  float
                  header={sagar1}
                  name="SAGAR SRIVASTAVA AS ONE OF THE TOP 10 ICONIC LEADERS OF 2022"
                />
              </Link>
            </div>
            <div>
              <Link to='/enroll-on-your-dream-course-of-mba-in-the-us-and-uk-with-direct-admission'>
                <UserCard
                  className="FeaturedCard"
                  float
                  header={DAGLOGO}
                  name="ENROLL ON YOUR DREAM COURSE OF MBA IN THE US AND UK WITH DAG"
                />
              </Link>
            </div>
            <div>
              <Link to='/study-abroad-2021-22-direct-admission-platform-helping-students-in-pandemic'>
                <UserCard
                  className="FeaturedCard"
                  float
                  header={study}
                  name="STUDY ABROAD 21-22 DAG PLATFORM HELPING STUDENTS IN PANDEMIC"
                />
              </Link>
            </div>
            <div>
              <Link to='/enroll-on-your-dream-course-of-mba-in-the-us-and-uk-with-direct-admission'>
                <UserCard
                  className="FeaturedCard"
                  float
                  header={reason}
                  name="5 REASONS TO STUDY ABROAD"
                />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};
