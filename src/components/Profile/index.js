import { IoIosArrowDropdown,IoIosArrowDropup } from "react-icons/io";
import { FaEdit, FaSave } from "react-icons/fa";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
 
function Profile() {
  const loginId = sessionStorage.getItem("loginId");
 
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    DOB: "",
    Enabled: "",
  });
 
  const [editingField, setEditingField] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [showProfileTable, setShowProfileTable] = useState(false);
  const [showOrderTable, setShowOrderTable] = useState(false);
  // Fetch user details & orders
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${loginId}`)
      .then(res => setUserDetails(res.data))
      .catch(err => console.log(err));
 
    axios.get(`http://localhost:3000/orders/${loginId}`)
      .then(res => {
        console.log(res)
        let orders = res.data;
        if (!Array.isArray(orders)) {
          orders = orders ? [orders] : [];
        }
        setUserOrders(orders);
      })
      .catch(err => {
        console.log(err);
        setUserOrders([]);
      });
  }, [loginId]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
 
  const handleSave = async (field) => {
    try {
      const updatedData = { [field]: userDetails[field] };
      await axios.patch(`http://localhost:3000/users/${loginId}`, updatedData);
      setEditingField(null);
      console.log("Saved:", updatedData);
    } catch (error) {
      console.error("Error saving:", error);
      alert("Failed to save changes.");
    }
  };
  function getInitials(fullName) {
    if (!fullName) return "";
 
    return fullName
      .trim()
      .split(/\s+/)        // split by spaces
      .map(word => word[0])
      .join("")
      .toUpperCase();
  }
  return (
    <div>
      {/* Personal Details */}
      <div className="d-flex">
          <h1 className="profile">{getInitials(userDetails.name)}</h1>
          <h1 className="user-name">{userDetails.name}</h1>
        </div>
      <div>
        <div className="d-flex justify-content-between profile-dropdown" onClick={() => setShowProfileTable(prev => !prev)}>
          <h2>Personal Details</h2>
          {showProfileTable ?  <IoIosArrowDropup className="profile-down-arrow" />:<IoIosArrowDropdown className="profile-down-arrow" /> }
        </div>
        <hr />
         {showProfileTable && (
        <table className="table table-bordered align-middle">
          <tbody>
            {Object.keys(userDetails)
              .filter(key => !["_id","id","__v"].includes(key))
              .map(key => (
                <tr key={key}>
                  <th>{key}</th>
                  <td className="d-flex align-items-center">
                    <input
                      name={key}
                      value={userDetails[key]}
                      type="text"
                      className="details me-2"
                      readOnly={editingField !== key}
                      onChange={handleChange}
                    />
                    {editingField === key ? (
                      <FaSave
                        className="ms-2 text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSave(key)}
                      />
                    ) : (
                      <FaEdit
                        className="ms-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => setEditingField(key)}
                      />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
         )
        }
      </div>
 
      {/* Orders */}
      <div className="mt-4">
        <div className="d-flex justify-content-between profile-dropdown" onClick={()=>setShowOrderTable(Prev => !Prev)}>
          <h2>Orders</h2>
           {showOrderTable ?  <IoIosArrowDropup className="profile-down-arrow" />:<IoIosArrowDropdown className="profile-down-arrow" /> }
        </div>
        <hr />
        {showOrderTable && (
            Array.isArray(userOrders) && userOrders.length > 0 ? (
              userOrders.map(order => (
                <div>
                  <p>Order ID : {order._id}</p>
                  <div>
                    {order.product_ids && order.product_ids.map(prod =>(
                      <div style={{margin:"5px"}}>
                        <div className="d-flex">
                          <img
                              key={prod._id}
                              src={prod.image_url}
                              alt="Product"
                              style={{
                                width: "100px",
                                height: "150px",
                                marginRight: "15px",
                                objectFit: "cover"
                              }}
                            />
                            <div>
                              <p className="fw-bold">Delivered</p>
                              
                              <p>Ordered on {new Date(order.ordered_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                              <p className="fw-bold">{order.payment_method}</p>
                              <p className="fw-lighter">Delivered to {order.address}</p>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p colSpan="11" className="text-center">No Orders Found</p>
              </div>
            )
            )
        }
      </div>
      <div className="mt-3">
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
}
 
export default Profile;