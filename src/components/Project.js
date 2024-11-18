import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    // {Array.from({ length: 6 }).map((_, index) => (
    // <Card key={index} style={{ width: '18rem',marginBottom:'2rem' }}>

    //   <Card.Body>
    //     <Card.Title>Project Title</Card.Title>
    //     <Card.Text>
    //       This my college project
    //     </Card.Text>
    //     <Button variant="primary">Click here</Button>
    //   </Card.Body>
    // </Card>
    // ))}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
    {Array.from({ length: 6 }).map((_, index) => (
      <Card key={index} style={{ width: '18rem', marginBottom: '2rem' }}>
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>This is my college project</Card.Text>
          <Button variant="primary">Click here</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
}

export default BasicExample;