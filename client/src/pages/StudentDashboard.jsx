import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const sectionData = [
  { title: 'Attendance', icon: '📊', content: 'Entries to be added soon.' },
  { title: 'Grades', icon: '🎓', content: 'Entries to be added soon.' },
  { title: 'Upcoming Events', icon: '📅', content: 'Entries to be added soon.' },
  { title: 'Placement Status', icon: '💼', content: 'Entries to be added soon.' }
];

const StudentDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">Smart Campus Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="college-navbar" />
          <Navbar.Collapse id="college-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Profile</Nav.Link>
              <Nav.Link href="#">Notifications</Nav.Link>
              <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-4">
        <h2 className="mb-4 text-center">Welcome to Your Student Dashboard</h2>
        <Row className="g-4">
          {sectionData.map((section, idx) => (
            <Col xs={12} md={6} lg={3} key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div style={{ fontSize: '2.5rem' }}>{section.icon}</div>
                  <Card.Title className="mt-2">{section.title}</Card.Title>
                  <Card.Text className="text-muted text-center">
                    {section.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StudentDashboard;
