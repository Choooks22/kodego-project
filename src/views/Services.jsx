import './Services.scss';

export default function IntroductionPage() {
  return (
    <>
      <h1>Services Offered</h1>
      <div className="servicebody">
        <div className="card">
          <div className="imagecontainer">
            <img src="https://images.idgesg.net/images/article/2019/05/team_manipulates_coding_elements_programming_interface_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056786_2400x1600-100795794-large.jpg?auto=webp&quality=85,70" alt="Programming picture" width="400px" />
          </div>
          <div className="cardbody">
            <h3>Software Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi nostrum aperiam reprehenderit ea suscipit optio odit? Veritatis, veniam eligendi?
            </p>
          </div>
          <div className="btn">
            <a target="_blank" href="https://www.youtube.com/watch?v=2iHoeHVmw0Q" rel="noreferrer">
              <button>View more</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imagecontainer">
            <img src="https://4.imimg.com/data4/OR/AJ/MY-32248659/all-kind-of-computer-hardware-services-500x500.jpg" alt="Hardware picture" width="400px" />
          </div>
          <div className="cardbody">
            <h3>Hardware Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi nostrum aperiam reprehenderit ea suscipit optio odit? Veritatis, veniam eligendi?
            </p>
          </div>
          <div className="btn">
            <a target="_blank" href="https://www.youtube.com/watch?v=2iHoeHVmw0Q" rel="noreferrer">
              <button>View more</button>
            </a>
          </div>
        </div>
      </div>

      {/* Content here */}
    </>
  );
}
