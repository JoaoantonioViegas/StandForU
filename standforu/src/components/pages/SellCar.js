import React from 'react'
import Navbar from '../layout/Navbar'
import './Sellcar.css';

function SellCar() {
  return (
    <div>
        <Navbar link="sellacar"/>
        <body>
          <div id="split_left">
              <div class="centered">
                  <h1>Sell a car</h1>
                  <input type="input" class="form__field1" placeholder="" name="brand" id='brand' required />
                  <label for="brand" class="form__label1">Brand</label>

                  <input type="input" class="form__field2" placeholder="" name="model" id='model' required />
                  <label for="model" class="form__label2">Model</label>

                  <input type="input" class="form__field3" placeholder="" name="kms" id='kms' required />
                  <label for="kms" class="form__label3">KMS</label>

                  <input type="input" class="form__field4" placeholder="" name="priece" id='priece' required />
                  <label for="priece" class="form__label4">Priece</label>

                  <input type="input" class="form__field5" placeholder="" name="year" id='year' required />
                  <label for="year" class="form__label5">Year</label>

                  <input type="input" class="form__field6" placeholder="" name="fuel" id='fuel' required />
                  <label for="fuel" class="form__label6">Fuel</label>

                  <input type="input" class="form__field7" placeholder="" name="engine" id='engine' required />
                  <label for="engine" class="form__label7">Engine</label>

                  <input type="input" class="form__field8" placeholder="" name="horse_power" id='horse_power' required />
                  <label for="horse_power" class="form__label8">Horse Power</label>

                  <textarea  type="input" class="form__field9" placeholder="" name="description" id='description' required  cols="40" rows="5"></textarea>
                  <label for="description" class="form__label9">Description</label>
              </div>
          </div>
          
          <div id="split_right">
              <div class="centered">
                <button className='insertphoto'> Insert Photo </button>
              </div>
          </div>
          
      </body>
    </div>
  )
}

export default SellCar
