import React, { Component } from "react";
import "./AddCandidature.css";

class AddCandidature extends Component {
  render() {
    return (
      <div className="myContainer container-fluid">
        <form>
          <div className="form-row py-3">
            <div className="col">
              <h3 className="text-center">
                Kandidiraj se za {this.props.role + "a"}
              </h3>
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <img
                src="https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png"
                alt="Slika profila"
                height="100"
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                >
                  Dodaj sliku profila
                </label>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col text-center">
              <button className="btn btn-danger" type="button">
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
