import React from "react"
import Button from 'react-bootstrap/Button';
import { Container , Image} from "react-bootstrap"
import B_Card from 'react-bootstrap/Card';

interface Props {
    cardTitle: string,
    cardHeading: string,
    cardDetail: string,
    cardImage: string,
    profileImage: string,
    profileName: string,
    views: string
}

export const Card: React.FC<Props> = ({ cardTitle, cardHeading, cardDetail, cardImage, profileImage, profileName, views }) => {
  return (
    <B_Card className="m-3">
      <B_Card.Img variant="top" style={{
      }} src={cardImage} />
      <B_Card.Body>
        <B_Card.Title className="font-weight-bold">{cardTitle}</B_Card.Title>
        <div className="d-flex justify-content-between">
        <B_Card.Title>
            {cardHeading}
        </B_Card.Title>
        <div>Red</div>
        </div>
        <B_Card.Text>
            {cardDetail}
        </B_Card.Text>
        <Container className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <div className="p-2">
                    <Image className="rounded-pill" src={profileImage} style={{
                        width: "48px",
                        height: "48px"
                    }} alt="profile Image" />
                </div>
                <div style={{
                    fontWeight: "600",
                    fontSize: "18px"
                }}>{profileName}</div>
            </div>
            <div className="d-flex align-items-center">
            <div className="m-2">{views} views</div>
            <button>red</button>
            </div>
        </Container>
      </B_Card.Body>
    </B_Card>
  );
}