import "./Footer.css";
const Footer = () => {
  return (
    // <div bg="dark" variant="dark" className="footer d-flex align-items-center">
    //   <div className="container py-2">
    //     <h1 className="text-start text-light">Find Me Online :</h1>
        // <h4 className="text-light">Linked in: <a href="https://www.linkedin.com/in/abdallah--ashraf/"><i
        //     className="bi bi-linkedin"></i></a></h4>
        // <h4 className="text-light">GitHub: <a href="https://github.com/abdallahashraf22"><i className="bi bi-github"></i></a></h4>
    //   </div>
    // </div>
      <div className="container-fluid footer fixed-bottom">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1 className="text-start text-light">Find Me Online :</h1>
            <h4 className="text-light">Linked in: <a href="https://www.linkedin.com/in/abdallah--ashraf/"><i
                className="bi bi-linkedin"></i></a></h4>
            <h4 className="text-light">GitHub: <a href="https://github.com/abdallahashraf22"><i className="bi bi-github"></i></a></h4>
          </div>
        </div>
      </div>
  );
};

export default Footer;
