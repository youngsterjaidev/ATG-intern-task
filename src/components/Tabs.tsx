import B_Tab from 'react-bootstrap/Tab';
import B_Tabs from 'react-bootstrap/Tabs';
import { Card } from './Card';

export const Tabs = ({ dummyData }) => {
  return (
    <B_Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <B_Tab eventKey="allPosts" title="All Posts(32)">
        {dummyData.map(item => (
            <Card {...item} />
          ))}
      </B_Tab>
      <B_Tab eventKey="article" title="Article">
        <div>Profile</div>
      </B_Tab>
      <B_Tab eventKey="EVent" title="Event">
        <div>Contact</div>
      </B_Tab>
    </B_Tabs>
  );
}