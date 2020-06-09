import React, { Component } from "react";
import axios from "axios";

class GetData extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const id = document.getElementById("id").value;
    const phoneno = document.getElementById("phoneno").value;
    const place = document.getElementById("place").value;
    axios({
      method: "POST",
      url: "https://dreamapisandpipss.herokuapp.com/Userdata",
      data: {
        id: id,
        name: name,
        place: place,
        email: email,
        phoneno: phoneno,
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        alert("Thanks for your details our team will contact you");
        this.resetForm();
      } else {
        console.log(response.status);
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label>Name</label>

            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label>id</label>
            <input type="text" className="form-control" id="id" />
          </div>
          <div className="form-group">
            <label>Place</label>
            <input type="text" className="form-control" id="place" />
          </div>
          <div className="form-group">
            <label>Phone no</label>
            <input type="text" className="form-control" id="phoneno" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GetData;
