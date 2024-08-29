import { Card } from 'react-bootstrap'

const SingleBook = ( {libro, selectedBookAsin, changeSelectedBookAsin } ) => {

const handleCardClick = () => {
changeSelectedBookAsin(libro.asin)
}


    return (
      <Card
        className="h-100 d-flex flex-column"
        style={{
          border:
            libro.asin === selectedBookAsin
              ? '4px solid red'
              : '1px solid gray',
        }}
        data-testid = 'single-book'
      >
        <Card.Img
          style={{ height: '300px', objectFit: 'cover', width: '100%' }}
          variant="top"
          src={libro.img}
          onClick={handleCardClick}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1 text-truncate" style={{ minHeight: '3rem' }}>
            {libro.title}
          </Card.Title>
          <Card.Text>
            {libro.category} - €{libro.price}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default SingleBook