import React from 'react';
import {Row,Col} from 'reactstrap';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);
export default function Footer(){
    return (
        <div  color="blue" className="container font-small pt-4 mt-4">
          <div className="container-fluid text-center text-md-left">
            <Row>
              <Col md="6">
                <h5 className="title">About</h5>
                <p>
                  the questions are a collection from various sites 
                </p>
              </Col>
              <Col md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </li>
                    <li className="list-unstyled">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    </li>
                    <li className="list-unstyled">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </li>
                  
                </ul>
              </Col>
            </Row>
          </div>
          <div className="footer-copyright text-center py-3">
            <div className="container-fluid">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> palak thapar </a>
            </div>
          </div>
        </div>
      );
    }
