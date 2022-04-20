import { useParams,useNavigate } from "react-router";
import { getUser,deleteUser } from "../users";
export function User() {
  const params = useParams();
  const user=getUser(parseInt(params.userId));
  const navigate=useNavigate();

  const handleDelete = () => {
    deleteUser(user.id);
    navigate("/users",{replace:true});
  };
  if(!user){
      return <div>El usuario no exite</div>;
  }
  return (
    <div>
    <h2>{user.name}</h2>
    <div>
      <strong>Phone: </strong> {user.phone}
    </div>
    <div>
      <strong>Website: </strong> {user.website}
    </div>
    <br />
    <button onClick={handleDelete}>Delete</button>
  </div>
  );
}