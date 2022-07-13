import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <>
        <div className='d-flex dashboard-inner'>
          <Sidebar />
            <div className='Dashboard-Content'>
              <Topbar />

              <div className='container mt-5'>
              <div className='row align-items-center'>
                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                          <i className='bx bxs-dashboard fs-1'></i>
                            <p className='fs-md'>Dashboard</p>
                        </div></Link>
                    </div>

                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                        <i className='bx bx-message-square fs-1' ></i>
                            <p className='fs-md'>Pages</p>
                        </div></Link>
                    </div>

                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                        <i className='bx bxs-building-house fs-1'></i>
                            <p className='fs-md'>Products</p>
                        </div></Link>
                    </div>

                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                        <i className='bx bx-align-left fs-1'></i>
                            <p className='fs-md'>Category</p>
                        </div></Link>
                    </div>

                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                        <i className='bx bx-user fs-1' ></i>
                            <p className='fs-md'>Users</p>
                        </div></Link>
                    </div>

                    <div className="col-lg-2">
                        <Link to="" className="text-decoration-none  text-dark"><div className="card p-2 text-center">
                        <i className='bx bx-exit fs-1' ></i>
                            <p className='fs-md'>Orders</p>
                        </div></Link>
                    </div>
                    
              </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Dashboard