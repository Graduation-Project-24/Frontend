import Input from "../../../component/Input/Input";
import { useState, useEffect} from 'react'

function Category({ handleChange }) {

  const [category, setData] = useState([])
  const api = "https://www.smarketp.somee.com/api/Category"

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    };
    getCategory()
  }, [])

  // console.log(category[0].name)
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container ms-0">
          <input type="radio" onChange={handleChange} value="" name="selectedCategory" />
          <span className="checkmark"></span>All
        </label>
        {
          category ? (
            category.map((e)=>
            <Input
              handleChange={handleChange}
              value={e.name}
              title={e.name}
              name="selectedCategory"
            />
            )
          ):<div className="parentloader"><div class="loader"></div></div>}
        
      </div>
    </div>
  );
}
export default Category;

