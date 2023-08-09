import  React from 'react';
import './taskmanager.css'

const Taskmanager = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-10">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-md-10">
            <div className="card" id="list1" style={{ borderRadius: '.75rem', backgroundColor: '(0, 119, 255)' }}>
              <div className="card-body py-4 px-4 px-md-5">

                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1"></i>
                  <u>Task Manager </u>
                </p>

                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
                          placeholder="Add new..." />
                        <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                          className="fas fa-calendar-alt fa-lg me-3"></i></a>
                        <div>
                          <button type="button" className="btn btn-primary">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <select className="select">
                    <option value="1">All</option>
                    <option value="2">Completed</option>
                    <option value="3">Active</option>
                    <option value="4">Has due date</option>
                  </select>
                  <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                  <select className="select">
                    <option value="1">Added date</option>
                    <option value="2">Due date</option>
                  </select>
                  <a href="#!" style={{ color: '(0, 119, 255)' }} data-mdb-toggle="tooltip" title="Ascending"><i
                    className="fas fa-sort-amount-down-alt ms-2"></i></a>
                </div>

                <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                  <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                      <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                        aria-label="..." checked />
                    </div>
                  </li>
                  <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0">Buy groceries for next week</p>
                  </li>
                  <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                      <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                        className="fas fa-pencil-alt me-3"></i></a>
                      <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                        className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="text-end text-muted">
                      <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal rounded-0">
                  <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                      <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked2"
                        aria-label="..." />
                    </div>
                  </li>
                  <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0">Deliver to Customer 1</p>
                  </li>
                  <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                    <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
                      <p className="small mb-0">
                        <a href="#!" data-mdb-toggle="tooltip" title="Due on date">
                          <i className="fas fa-hourglass-half me-2 text-warning"></i>
                        </a>
                        28th Jun 2020
                      </p>
                    </div>
                  </li>
                  <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                      <a href="#!" className="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                        className="fas fa-pencil-alt me-3"></i></a>
                      <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                        className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="text-end text-muted">
                      <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal rounded-0 mb-2">
                  <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                      <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked3"
                        aria-label="..." />
                    </div>
                  </li>
                  <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">Sign up for online
                      course</p>
                  </li>
                  <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                      <a href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i
                        className="fas fa-trash-alt"></i></a>
                    </div>
                    <div className="text-end text-muted">
                      <a href="#!" className="text-muted" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                      </a>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Taskmanager;
