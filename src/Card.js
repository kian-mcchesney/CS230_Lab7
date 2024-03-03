import React from 'react';

const Card = () => {
  return (
    <div class="card-group">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
         <div class="card-header">Card 01</div>
         <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    

    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Card 02</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Card 03</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div>



    </div>
  );
}

export default Card;