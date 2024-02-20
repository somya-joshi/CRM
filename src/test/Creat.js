import React from 'react'
import './Creat.css'
import Button from 'react-bootstrap/Button';

const Creat = () => {
  return (
    <div>
      <div class="contain">
        <div class="form-part">
          <h2>Simple Form Design</h2>
          <div class="text-input">
            <label for="country">Country</label>
            <select name="country" id="country">
              <option value="0" selected>--- Choose your country ---</option>
              <option value="1">US</option>
              <option value="2">UK</option>
              <option value="3">IN</option>
              <option value="4">CN</option>
            </select>
          </div>

          <div class="sqr-input">
            <div class="text-input">
              <label for="fname">First Name</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div class="text-input">
              <label for="lname">Last Name</label>
              <input type="text" name="lnaem" id="lnaem" />
            </div>
          </div>
          <div class="sqr-input">
            <div class="text-input">
              <label for="fname">Email</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div class="text-input">
              <label for="lname">mobile</label>
              <input type="text" name="lnaem" id="lnaem" />
            </div>
          </div>
          <div class="text-input">
            <label for="country">Address</label>
            <input type="text" name="lnaem" id="lnaem" />
          </div>

          <div class="cub-input">
            <div class="text-input">
              <label for="street">Street</label>
              <input type="text" name="street" id="street" />
            </div>
            <div class="text-input">
              <label for="postalcode">pin Code</label>
              <input type="text" name="postalcode" id="postalcode" />
            </div>
            <div class="text-input">
              <label for="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="text-input">
            <label for="country">state</label>
            <select name="country" id="country">
              <option value="0" selected>--- Choose your country ---</option>
              <option value="1">US</option>
              <option value="2">UK</option>
              <option value="3">IN</option>
              <option value="4">CN</option>
            </select>
          </div>
          <div>
          <Button variant="primary">Primary</Button>
      
          <Button variant="danger">Danger</Button>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Creat
