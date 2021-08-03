import React from 'react'
 
const RegisterBodySection = ()=>{
return(
<section className="sptb">
  <div className="container customerpage">
    <div className="row">
      <div className="single-page">
        <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
          <div className="wrapper wrapper2">
            <div className="card-body">
              <div className="btn-list d-flex">
                <a href="https://www.google.com/gmail/" className="btn btn-google btn-block"><i className="fa fa-google fa-1x mr-2" /> Google</a>
                <a href="https://twitter.com/" className="btn btn-twitter"><i className="fa fa-twitter fa-1x" /></a>
                <a href="https://www.facebook.com/" className="btn btn-facebook"><i className="fa fa-facebook fa-1x" /></a>
              </div>
            </div>
            <hr className="divider" />
            <form id="Register" className="card-body" tabIndex={500}>
              <div className="name">
                <input type="text" name="name" />
                <label>Name</label>
              </div>
              <div className="mail">
                <input type="email" name="mail" />
                <label>Mail or Username</label>
              </div>
              <div className="passwd">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div className="submit">
                <a className="btn ripple  btn-primary btn-block" href="#">Register</a>
              </div>
              <p className="text-dark mb-0">Already have an account?<a href="login.html" className="text-primary ml-1">Sign In</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}
export default RegisterBodySection;