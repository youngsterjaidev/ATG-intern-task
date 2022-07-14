import React from 'react';
import { Button, Navbar, Tabs, Card, Dropdown, Input} from "./components"
import './App.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
// @ts-ignore
import Cover from "./assets/cover.png"

const dummyData = [
  {
    cardTitle: "Article",
    cardHeading: "What if famous brands has regular fonts? Meet Regular Brands!",
    cardDetail: "I've worked in UX for better part of decade, From now on, I plan to review",
    cardImage: "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=2000&lazy=load",
    profileImage: "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=2000&lazy=load",
    profileName: "Sarthak Karma",
    views: "1.4K"
},
  {
    cardTitle: "Education",
    cardHeading: "Tax Benifits for Investments under National Pension Scheme launched Government",
    cardDetail: "I've worked in UX for better part of decade, From now on, I plan to review",
    cardImage: "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=2000&lazy=load",
    profileImage: "https://images.pexels.com/photos/12383337/pexels-photo-12383337.jpeg?auto=compress&cs=tinysrgb&w=2000&lazy=load",
    profileName: "Sarah West",
    views: "1.4K"
}
]

function App() {
  return (
    <div>
      <style>
        {`
          h1 {
            color: #fff;
            font-weight: 700;
          }
        `}
      </style>
      <Navbar />
      <Container className="d-flex align-items-end" bsPrefix="md" style={{
        background: `url("${Cover}")`,
        minHeight: "80vh",
        backgroundSize: "cover",
        padding: "4rem",
        paddingBottom: "8rem"
      }}>
        <div style={{
          color: "#fff"
        }}>
          <h1 className="text-light">Computer Enginerring</h1>
          <div>142.765 Computer Engineers follows this</div>
        </div>
      </Container> 
      <Container className='p-4'>
        <Row>
        <Col>
          <Tabs dummyData={dummyData} />
        </Col>
        <Col style={{ flex: "0.5" }}>
          <Container>
            <div className='d-flex justify-content-end'>
              <Dropdown className="mr-2" />
              <Button>Join Group</Button>
            </div>
            <div className='pt-4'>
              <Input />
            </div>
          </Container>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
