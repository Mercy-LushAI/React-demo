import JobList from "./JobList";
import useFetch from "./useFetch";

const Home: React.FC = () => {
  const { jobs, isPending, error } = useFetch("http://localhost:8000/jobs");

  return (
    <div className="home">
      <h2>All Jobs</h2>
      {isPending ? <div>Loading...</div> : <JobList jobs={jobs} />}
    </div>
  );
};

export default Home;
