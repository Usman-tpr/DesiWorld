import React , {useState,useEffect}from 'react'
import './Admin.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const Admin = () => {
    const [data,setData] =useState({
        title:"",
        desc:"",
        price:"",
        category:"",
        image:"",
    })
    
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('desc', data.desc);
        formData.append('price', data.price);
        formData.append('category', data.category);
        formData.append('image', data.image);
        console.log(data.image)
        const response = await axios.post("http://localhost:5000/addProduct", formData,
        );
        if(response.data.success) {
          toast.success('Product added successfully')
        }
        else {
            toast.error("something went wrong")
        }
    
    }

    const handleChange = (e) => {
        const { name, value, type } = e.target;
      
        // If the input is for an image
        if (type === 'file') {
          const file = e.target.files[0];
          setData({
            ...data,
            [name]: file,
          });
        } else {
          // For text input fields
          setData({
            ...data,
            [name]: value,
          });
        }
      };
    
//    const handleChangeImgae = (e) => {
//     const file = e.target.files[0];
    
//     setFormData({
        
//         image:file
//     })
// }
//     // useEffect(()=>{
    //     console.log(image)
    // },[])
     return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form className='card p-3' onSubmit={handleSubmit} enctype="multipart/form-data">
                            <h2 className=''>Enter Product Details</h2>
                            <div class="mb-3">
                                <label htmlFor="exampleInputEmail1" class="form-label">title for Product</label>
                                <input type="text" class="form-control" name='title' onChange={handleChange} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" class="form-label">Description</label>
                                <input type="text" class="form-control" name='desc' onChange={handleChange}/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="price">Price</label>
                            <input type="Number" className='form-control'name='price' onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                            <label htmlFor="category">Image</label>
                            <input type="file" className='form-control' onChange={handleChange} name='image'  accept=".png, .jpg, .jpeg"/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="" className='form-control'  onChange={handleChange} >
                                <option value="">Select Category</option>
                                <option value="desi-products">Desi Products</option>
                                <option value="cloths&shoes">Cloths & Shoes</option>
                                <option value="cosmatics">Cosmatics</option>
                                <option value="perfumes">Perfumes</option>
                                <option value="gadgets">Gadgets</option>
                            </select>
                            </div>


                            <button type="submit" class="shop-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin