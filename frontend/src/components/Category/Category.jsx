import React, { useContext, useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './Category.css';
import { DesignContext } from '../../Context/DesignContext';
import { pink } from '@mui/material/colors';

const Category = (props) => {
  const { all_designs, setAllDesigns } = useContext(DesignContext);
  const [localVotes, setLocalVotes] = useState({});

  useEffect(() => {
    const initialVotes = {};
    all_designs.forEach((design) => {
      initialVotes[design._id] = design.votes;
    });
    setLocalVotes(initialVotes);
  }, [all_designs]);

  const voteDesign = async (designId) => {
    try {
      const response = await fetch('http://localhost:4000/increasevotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'), // Assuming token is stored in localStorage
        },
        body: JSON.stringify({ id: designId }),
      });

      if (!response.ok) {
        throw new Error('Failed to increase votes');
      }

      const updatedDesign = await response.json();
      console.log('Updated votes:', updatedDesign.votes);

      // Update local state for votes
      setLocalVotes((prevVotes) => ({
        ...prevVotes,                           
        [designId]: updatedDesign.votes,
      }));

      // Update all_designs context or state if necessary
      setAllDesigns((prevDesigns) =>
        prevDesigns.map((design) =>
          design._id === designId ? { ...design, votes: updatedDesign.votes } : design
        )
      );
    } catch (error) {
      console.error('Error voting:', error.message);
      // Handle error gracefully, show error message to the user if needed
    }
  };

  // Function to sort designs by votes in descending order
  const sortDesignsByVotes = () => {
    const sortedDesigns = [...all_designs].sort((a, b) => b.votes - a.votes);
    return sortedDesigns;
  };

  return (
    <div className="category" >
      <Typography variant="h4" gutterBottom className="category-header">
        Designs for {props.category}
      </Typography>

      <div className="designcategory-products">
        {sortDesignsByVotes().map((item, index) => {
          if (props.category === item.category.toLowerCase()) {
            return (
              <Card
                sx={{ maxWidth: 300 }}
                className="designcategory-product"
                key={index}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.name}
                    style={{ objectFit: 'cover' }}
                  />
                  <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" className="design-name">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" className="design-details">
                      <p>{item.gender}</p>
                      <p>{item.category}</p>
                      <p>Votes: {localVotes[item._id] || item.votes}</p>
                    </Typography>
                    <Button
  variant="contained"
  onClick={() => voteDesign(item._id)}
  className="vote-button"
  style={{ backgroundColor: '#ff0066' }}
>
  Vote
</Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Category;
