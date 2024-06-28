import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';
import Card from 'react-bootstrap/Card';

function OptionTransitions() {
  // const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(Array(5).fill(false));
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleCollapse = (index) => {
    setCollapsed((prevCollapsed) =>
      prevCollapsed.map((c, i) => (i === index ? !c : c))
    );
  };

  const handleCollapseSequence = (collapse) => {
    for (let i = 0; i < collapsed.length; i++) {
      setTimeout(() => {
        handleCollapse(collapse ? i : collapsed.length - 1 - i);
      }, i * 30); // Adjust the delay as needed
    }
  };

  return (
    <>
      {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}
      {/* <Collapse in={open} dimension="height">
        <div id="example-collapse-text">
          <Card body style={{ width: '200px', height: '300px' }}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente
            ea proident.
          </Card>
        </div>
      </Collapse> */}
      <Button variant="primary" onClick={handleCollapseSequence}>
        Collapse Cards
      </Button>
      {collapsed.map((isCollapsed, index) => (
          <Fade in={!isCollapsed} dimension="height">
            <Card body style={{ width: '100px', height: '50px' }}>
              Card {index + 1}
            </Card>
          </Fade>
      ))}
    </>
  );
}

export default OptionTransitions;