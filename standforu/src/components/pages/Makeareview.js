import React from 'react'
import Navbar from '../layout/Navbar' 
import './Makereview.css'
function Makeareview(props) {
  return (
    <div className='Review_page' >
        <Navbar link="makeareview" loggedIn={props.loggedIn}/>
        <div className='Review_page_container_left'>
            <div className='components'>

              <p className='title'>
              Add Review
              </p>

              <p>
              In this page you can make a comment about a car
              </p>

              <p>
              <input type="input" class="MR_form__field1" placeholder="" name="brand" id='brand' required maxLength={30}/>
              <label for="brand" class="MR_form__label1">Brand</label>
              </p>
              
              <p>
              <input type="input" class="MR_form__field2" placeholder="" name="model" id='model' required maxLength={30}/>
              <label for="model" class="MR_form__label2">Model</label>
              </p>

              <p>
              <input type="input" class="MR_form__field3" placeholder="" name="year" id='year' required maxLength={4} />
              <label for="year" class="MR_form__label3">Year</label>
              </p>

              <p>
              <textarea  type="input" class="MR_form__field4" placeholder="" name="review" id='review' required  cols="40" rows="5" maxLength={200}></textarea>
              <label for="review" class="MR_form__label4">Review</label>
              </p>

              <label className='MR_btn'>Submit</label>

            </div>
        </div>
    </div>
    
  )
}

export default Makeareview
