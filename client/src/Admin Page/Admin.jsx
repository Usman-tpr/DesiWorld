import React , {useState}from 'react'
import './Admin.css'
const Admin = () => {
    const [formData,setFormData] =useState({
        title:"",
        desc:"",
        price:"",
        category:"",
        Image:"",
    })
    const [image,setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
     console.log(formData)
    
    }

    const handleChange = (e) => {
        const {name,value,type} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
   const handleChangeImgae = (e) => {
    const file = e.target.files[0];
    
    setImage(file)
    console.log(image)
   }
    
     return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form className='card p-3' onSubmit={handleSubmit} encType='multipart/form-data'>
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
                            <input type="file" className='form-control' onChange={handleChangeImgae} name='image'  accept=".png, .jpg, .jpeg"/>
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