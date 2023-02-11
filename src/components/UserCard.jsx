import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { GameControlsContext } from '../contexts/GameControlsContext';

export const UserCard = ({id, username, accountOwner, email, avatar}) => {
  const navigate = useNavigate();
// const {setGameParameters} = useContext(GameControlsContext);

// const handleClick = () => {
//   setGameParameters(prev => ({...prev, username}));
// };

return (<Card className="user_card">
    <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link onClick={() => {
              navigate(`/patterns/${username}`);
              window.scrollTo(0, 0);
            }}>View user's patterns</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>{username}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{accountOwner}</Card.Subtitle>
    </Card.Body>
  </Card>)
};