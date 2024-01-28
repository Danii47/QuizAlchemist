import { Button, Card } from 'react-bootstrap';

export default function Collection({ title, numberOfQuestions, color }) {
  return (
    <Card style={{ backgroundColor: color }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {numberOfQuestions || 0} preguntas
        </Card.Text>
        <Button className='shadow-lg border-black'>Acceder</Button>
      </Card.Body>
    </Card>
  )
}