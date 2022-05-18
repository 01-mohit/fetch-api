import React from 'react'

export const Dropdown = () => {
  return (
    <>
      <h2><center>Select the Source city</center></h2>
      <div style={{ width: "30%", margin: "auto" }} className="contaner">
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <br />
      <br />
    </>
  )
}
