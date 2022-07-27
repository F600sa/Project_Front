import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CamelCard } from "./CamelCard";
import TrackVisibility from 'react-on-screen';


export   function Camels() {

    const projects = [
        {
          id:1,
          title: "jjj Startup",
          description: "Design & Development",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
        },
        {
          id:2,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://th.bing.com/th/id/R.451575e14368982a9a03453a6ef894cb?rik=WMXs14nCBdHpYg&pid=ImgRaw&r=0',
        },
        {
          id:3,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://th.bing.com/th/id/R.e60c072c57aba336019be012b2431f32?rik=b6ZUo8F4LSlaCQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-qsdsjNWGhtE%2fTdNCXGlSxwI%2fAAAAAAAACjQ%2f0tIHTz_6V9E%2fs1600%2f1.jpg&ehk=14TopnUmDJShoTsVK9EC1h2KBzbQIoPFTQSBfM9koVg%3d&risl=&pid=ImgRaw&r=0',
        },
        {
          id:4,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://modo3.com/thumbs/fit630x300/255906/1640877564/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%BA%D8%B1%D9%8A%D8%A8%D8%A9_%D8%B9%D9%86_%D8%A7%D9%84%D8%AC%D9%85%D9%84.jpg',
        },
        {
          id:5,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://4.bp.blogspot.com/-qsdsjNWGhtE/TdNCXGlSxwI/AAAAAAAACjQ/0tIHTz_6V9E/s1600/1.jpg',
        },
        {
          id:7,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://cdn.britannica.com/94/152294-050-92FE0C83/Arabian-dromedary-camel.jpg',
        },
      ];
    
      return (
        <section className="camels" id="order">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>جمالنا</h2>
                    <p>البل عطايا الله في وجهها الخير …. لو الضما والجوع ساطي باهلها</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">المجاهيم</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                         <Nav.Link eventKey="third">الهامور</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                         <Nav.Link eventKey="second">الوضح</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>

                            {
                              projects.map((project, index) => {
                                return (
                                  <CamelCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>عذرا هذا النوع غير متوفر
                            <br/><br/><br/><br/>
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <CamelCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
         </section>
      )
    }
    