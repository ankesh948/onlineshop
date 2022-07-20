import React from 'react'
import {Col, Row, Dropdown, DropdownButton } from 'react-bootstrap'

function Topbar() {
  return (
        <>
            <div className='top-bar'>
              <Row className='align-items-center justify-content-center'>
                <Col lg="6">
                  <div className='d-flex'>
                    <i className='bx bx-menu fs-2 mb-0 lh-sm"' id="collab"></i>
                  </div>
                </Col>

                <Col lg="6">
                  <div className='dropdown-custom d-flex gap-3 align-items-center justify-content-end'>
                    <img src={'img/pic.png'} width={30} alt="" />

                    <DropdownButton variant="light" align="end" title="Admin" id="dropdown-menu-align-end">
                      <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                      <Dropdown.Item eventKey="2">User Detail</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Log Out</Dropdown.Item>
                    </DropdownButton>

                  </div>
                </Col>
              </Row>
            </div>
          </>
  )
}

export default Topbar