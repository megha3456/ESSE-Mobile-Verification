import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class VerifyMobile extends Component {
  render() {
    return (
      <div className="cont">
        <div className="position-absolute top-0 start-0"style={{
            color: "#4B6319",
            fontFamily: "Sofia pro (bold)",
            fontSize: "35px",
            marginLeft:"20px"
            
          }}>
        <i class="bi bi-arrow-left"></i>
        </div>

        <h1
          className="text-center mt-5"
          style={{
            color: "#4B6319",
            fontFamily: "Sofia pro (bold)",
            fontSize: "35px",
          }}
        >
            
          VERIFICATION
        </h1>
        <div
          className="container mt-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="card border-light shadow p-3 mb-5 bg-body rounded"
            style={{
              height: "300px",
              width: "370px",
            }}
          >
            <div class="card-body ">
              <h6
                class="card-subtitle mb-2 text-muted mb-5"
                style={{ fontSize: "13px", fontFamily: "Sofia pro (regular)" }}
              >
                4 digits verification code has been sent to your registered
                mobile number
              </h6>
              <div
                class="input-group mb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                
                    <input
                      type="number"
                      class="form-control" style={{borderColor:"#4B6319", borderWidth:"2px", borderTopLeftRadius:"15px", borderBottomLeftRadius:"15px"}}
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />

                    <input
                      type="number"
                      class="form-control" style={{borderColor:"#4B6319", borderWidth:"2px"}}
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />

                    <input
                      type="number"
                      class="form-control " style={{borderColor:"#4B6319", borderWidth:"2px"}}
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />

                    <input
                      type="number"
                      class="form-control"  style={{borderColor:"#4B6319", borderWidth:"2px", borderTopRightRadius:"15px", borderBottomRightRadius:"15px"}}
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                   
              </div>
              <div className="container mb-4">
                <a
                  href="#"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "15px",
                    color: "#1F45FC",
                  }}
                >
                  Resend code
                </a>
                <a
                  href="#"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    marginLeft: "100px",
                    fontSize: "15px",
                    color: "#1F45FC",
                  }}
                >
                  Verify number
                </a>
              </div>

              <div className="container">
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "50px",
                    background: "#4B6319",
                    border: "#ffff",
                  }}
                >
                  Confirm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
