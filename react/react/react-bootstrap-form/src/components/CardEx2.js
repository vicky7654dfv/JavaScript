import React from "react"
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img4 from './images/img4.jpg'

const CardEx2=()=>{
    return(
        <div class='container'>
              <div class='row'>
                  <div class='col-4'>
                  <div class="card" style={{width:"18rem"}}>
                  <img src="https://picsum.photos/id/1/200/300" class="card-img-top" alt="image"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      
                  </div>
                  <div class='col-4'>
                  <div class="card" style={{width:"18rem"}}>
                    <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      
                  </div>
                  <div class='col-4'>
      
                  <div class="card" style={{width:"18rem"}}>
                    <img src="https://picsum.photos/200/300/?blur" class="card-img-top" alt="image"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      
                  </div>
      
              </div>
      
          </div>
        )
      }
export default CardEx2;