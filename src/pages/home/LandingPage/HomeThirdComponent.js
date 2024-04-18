/* eslint-disable global-require */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import './index.css';

const HomeThirdComponent = () => {
  return (
    // <div className="HomeThirdComp">
    //   <Container>
    //     <Row className="text-white py-md-5">
    //       <Col
    //         lg={{ span: 5, offset: 0 }}
    //         md={12}
    //         sm={12}
    //         xs={11}
    //         className="mt-5 ms-3"
    //       >
    //         <h3
    //           className="mt-3"
    //           style={{ color: '#c6ac83'}}
    //         >
    //          
    //         </h3>
    //         <hr className="HomeThirdHR" />
    //         <h6 className="HomeThirdH1">
          
    //         </h6>
    //         <Col lg={12} sm={12} xs={11} md={12}>
    //           <p
    //             className="mt-3"
    //             style={{ fontSize: '16px', color: '#c6ac83' }}
    //           >
      
    //           </p>
    //         </Col>
           
    //       </Col>
    //       <Col
    //         lg={{ span: 6, offset: 0 }}
    //         md={{ span: 11 }}
    //         sm={12}
    //         xs={12}
    //         id="HomeThirdImg"
    //         className="mt-5 ms-md-5"
    //       >
    //         <Image
    //           className="h-100 w-100 ms-3"
    //           src={require('../../../assets/img/IndB7.jpeg')}
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>


    <div >
      <Container
        className="col-lg-10 col-xxl-9 col-11 mx-auto "
        style={{ paddingTop: '20px', paddingBottom: '20px' }}
        fluid
      >
        <Row className="my-2 col-12 d-flex justify-content-center mx-auto">
  
          <Col
            className="col-lg-6 col-xxl-6 float-end d-flex align-items-center col-12"
            id="HomeSecRightMain"
          >
            <Col>
              <h3
                style={{ color: 'black', fontWeight: '500' }}
                className="HomeSecH1 text-center mt-3"
              >
                 WHY CHOOSE US
              </h3>
              <hr className="text-black " />
              <br />
              <h2 className="HomeSecH2 text-center mt-2 text-black">
              WE ALWAYS WANT OUR CUSTOMERS TO BE SATISFIED
              </h2>
              <p style={{ color: 'black', fontSize: '16px' }}>
              The restaurant has a luxurious and elegant space, ensuring that
                utensils, tables and chairs and other items are always clean.
                Customers will feel secure and comfortable at home when dining
                at our restaurant. Donec ullamcorper justo ac dolor sagittis
                mattis.
              </p>
              <br />
              <p style={{ color: 'black', fontSize: '16px' }}>
              {/* <Row className="mt-5">
              <Col lg={{ span: 7, offset: 0 }} sm={12} md={6} xs={10}>
                <ul>
                  <li>MUSIC AND SPACE</li>
                  <br />
                  <li>ATMOSPHERE OF FUN</li>
                </ul>
              </Col>
              <Col lg={{ span: 5, offset: 0 }} sm={12} md={6} xs={10}>
                <ul>
                  <li>EXPERIENCE THE COZY SPACE</li>
                  <br />
                  <li>EVERYTHING IS ALWAYS CLEAN AND TIDY</li>
                </ul>
              </Col>
            </Row> */}
              </p>
            </Col>
            <br />
            {/* <Button style={{ backgroundColor: '#EB003D', padding: '15px 35px', borderRadius: "30px" }}>Know More</Button> */}
          </Col>

          <Col className="col-12 col-lg-5 col-xxl-6">
            <Image
              style={{
                height: '80vh',
                width: 'auto',
                borderRadius: '30px',
              }}
              src={require('../../../assets/img/IndB7.jpeg')}
              className="HomeSecondImg mx-auto d-block col-lg-12 col-12 "
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeThirdComponent;
