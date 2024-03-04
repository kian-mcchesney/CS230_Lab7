import React from 'react';

const Card = () => {
  return (
<div className="card-group">
<div class="card bg-primary text-white">
  <div class="card-header">Card 01</div>
  <div class="card-body">
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
 
</div>
<div class="card bg-danger text-white">
  <div class="card-header">Card 02</div>
  <div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
</div>
<div class="card bg-success text-white">
  <div class="card-header">Card 03</div>
  <div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
 
</div>
   
</div>
  );
}

export default Card;