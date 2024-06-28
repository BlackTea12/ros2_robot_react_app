import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const TableScene = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { id: 1, label: 'Button 1', content: 'Content for Button 1' },
    { id: 2, label: 'Button 2', content: 'Content for Button 2' },
    { id: 3, label: 'Button 3', content: 'Content for Button 3' },
    // Add more items as needed
  ];
  return (
    <div className="sidebar-container">
      <div className='tab'>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="sidebar">
        {items.map((item, index) => (
          <Card key={item.id} style={{ marginRight: '10px' }}>
            <Card.Header>
              <Card.Title>{item.label}</Card.Title>
              <Button variant="primary" onClick={() => setActiveIndex(index)}>
                Show Content
              </Button>
            </Card.Header>
          </Card>
        ))}
      </div>
      <div className="content">
        <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
          {items.map((item, index) => (
            <Carousel.Item key={index}>
              <p>{item.content}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    
  );
};

export default TableScene;
