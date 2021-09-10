import React from 'react';
import './RelatedItems.css'
import {Card} from 'react-bootstrap';

export default class RelatedItems extends React.Component {
  render() {
    return (
      <h1>
        <a href='#'>Related Items</a>
      </h1>
    );
  }
}

// export default class RelatedItems extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cardInfo: [
//          {image: 'https://toppng.com/uploads/preview/aesthetic-clothes-11563232182xv34uxhorh.png', title: 'Sample Product', text: "testing testing hello hello"},
//          {image: 'https://toppng.com/uploads/preview/aesthetic-clothes-11563232182xv34uxhorh.png', title: 'Sample Product', text: "testing testing hello hello"},
//          {image: 'https://toppng.com/uploads/preview/aesthetic-clothes-11563232182xv34uxhorh.png', title: 'Sample Product', text: "testing testing hello hello"},
//          {image: 'https://toppng.com/uploads/preview/aesthetic-clothes-11563232182xv34uxhorh.png', title: 'Sample Product', text: "testing testing hello hello"}
//        ]
//     }

//     this.renderCard = this.renderCard.bind(this);
//   }

//   renderCard(card, index) {
//     return(
//       <Card style={{ width: '18rem' }} key={index}>
//           <Card.Img variant="top" src={card.image} />
//           <Card.Body>
//             <Card.Title>{card.title}</Card.Title>
//             <Card.Text>{card.text}</Card.Text>
//           </Card.Body>
//         </Card>
//     )
//   }


//   render() {
//     return (
//       <div className='Related'>
//         {/* {this.state.cardInfo.map(renderCard())}; */}
//       </div>
//     );
//   }
// }