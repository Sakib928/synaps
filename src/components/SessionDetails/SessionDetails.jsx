import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SessionDetails = () => {
  const id = useParams();
  // console.log(id.id);
  const { sessions } = useAuth();
  const detailsSession = sessions.filter((item) => item.id === id.id);
  console.log(detailsSession);
  return (
    <div>
      <h1>this is session details for {detailsSession.id}</h1>
    </div>
  );
};

export default SessionDetails;
