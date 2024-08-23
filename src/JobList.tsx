import React from "react";
import { Link } from "react-router-dom";

// Define the type for a job
interface Job {
  id: number;
  title: string;
  description: string;
  qualification: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="joblist">
      <ol>
        {jobs.map((job: Job) => (
          <li key={job.id} className="job-preview">
            <Link to={`/jobs/${job.id}`}>
              <h3>{job.title}</h3>
            </Link>

            <p>
              <strong>Description:</strong> {job.description}
            </p>
            <p>
              <strong>Qualification:</strong> {job.qualification}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default JobList;
