import React, { Component } from "react";

class AddCandidature extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="row py-3">
            <div className="col">
              <h3 class="text-center">
                Kandidiraj se za {this.props.role + "a"}
              </h3>
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Slika profila"
                height="100"
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                />
                <label
                  class="custom-file-label"
                  for="inputGroupFile01"
                >
                  Dodaj sliku profila
                </label>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <button class="btn btn-danger" type="button">
                Potvrdi
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCandidature;
