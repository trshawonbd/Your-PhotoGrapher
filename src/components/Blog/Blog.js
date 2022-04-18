import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='my-3'>
            <h2 className='my-3'>Blogs</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between authorization and authentication
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Answer:</strong> Fistly, Authorization is the process which ensures which resources a user can access or use. On the other hand, authentication ensures that the specific user who is valid to use any resources.
                            Secondly, Authorization is implemented all the settings according to specific organization or services. On the other hand, authentication is imple through password, pins, biometric etc.
                            Lastly, Authorization can not be visible and doesnot have the permission to the user to change. But, Users are able to change authentication process.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Answer: </strong> Firebase is secure platform. It provides a secure authentication process. It is easy to configure, use and anyone can maintain the procedure so easily. It provides several options for authentication like email and password, facebook, github, facebook, apple authentication. There are several alternatives are Auth0, Okta, Keycloak, Amazon Cognito etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Answer: </strong> There are so many services are provided by Firebase. Without authentication, Firebase are providing Cloud firestore, Hosting, Google analytics, Cloud Messaging, Cloud Functions and Predictions, Dynamic links, remote config etc.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;