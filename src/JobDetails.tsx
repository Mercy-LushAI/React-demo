import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>(); // Extract `id` from URL parameters
  const { jobs, error, isPending } = useFetch(
    `http://localhost:8000/jobs/${id}`
  ); // Use id to fetch specific job

  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="job-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {jobs && (
        <article>
          <h2>{jobs.title}</h2>
          <br></br>
          <h3>Job Description</h3>
          <p>{jobs.description}</p>
          <h3>Job Qualifications</h3>
          <p>{jobs.qualification}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default JobDetails;
