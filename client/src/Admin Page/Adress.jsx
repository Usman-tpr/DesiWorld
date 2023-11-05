import { useState, useEffect } from 'react'
import axios from 'axios'
const Adress = () => {
  const [address, setAddress] = useState([]);
  const [title , setTitle] = useState([]);
  const getAddress = async () => {
    const response = await axios.get('http://localhost:5000/address');
    const res = await axios.get('http://localhost:5000/getProducts')
    setTitle(res.data.products)
    setAddress(response.data.Address);
    console.log(response.data.Address);
  }
  const formatTimestamp = (timestampString) => {
    const timestamp = new Date(timestampString);
    const formattedDate = timestamp.toLocaleDateString();
    const formattedTime = timestamp.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };



  const deleteitem = async (id) => {
    const response = await axios.delete(`http://localhost:5000/address/${id}`);
    console.log(response.data);
  }
  useEffect(() => {
    getAddress();
  }, [])
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h2 className='fw-bold btn btn-success'>My Orders</h2>
          <div className="col mt-3">
            <table class="table table-striped table-responsive">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product</th>
                  <th scope="col">No of items</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Request Time</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {address && (
                  address.map((e, index) => {
                    return (
                      <tr>
                        <th scope="row" key={e._id}>{index + 1}</th>
                        <td>{e.name}</td>
                        <td>{e.title}</td>
                        <td>{e.items}</td>
                        <td>{e.address}</td>
                        <td>{e.number}</td>
                        <td>{formatTimestamp(e.createdAt)}</td>
                        <td className='btn btn-danger' onClick={() => deleteitem(e._id)}>delete</td>
                      </tr>
                    )
                  })
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row">
        <h2 className='fw-bold btn btn-success'>All Products</h2>
        <div className="col mt-3">
            <table class="table table-striped table-responsive">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Title</th>
            
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
            {
              title && title.map((e,index)=>{
                return (
                  <tr>
                  <th scope="row" key={e._id}>{index + 1}</th>
                  <td>{e.title}</td>
              
                  <td className='btn btn-danger' onClick={() => deleteitem(e._id)}>delete</td>
                </tr>
                )
              })
            }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adress