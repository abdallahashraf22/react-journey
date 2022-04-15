import myImg from "../../assets/images/Me.jpg";

const Home = () => {
    const style = {
        borderRadius:'50%'
    }
  return (
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="desc text-start col-12 col-md-7 text-light">
              <h4 >
                Hello Abdallah Asharf here, I’m an aspiring full-stack engineer,
              </h4>
                <h4>
                    I create fun,
                    innovative, accessible, and fast websites. I try to leave every bit of
                    code I touch more readable, modular, performant and accessible than I
                    found it.
                </h4>
            </div>
          <div className="col-12 col-md-5">
            <img style={style} className="w-100" src={myImg} alt="profile" />
          </div>
        </div>
    </div>
  );
};

export default Home;
