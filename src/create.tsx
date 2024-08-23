import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

const CreateJob: React.FC = () => {
  const [title, setJobName] = useState<string>("");
  const [description, setJobDesc] = useState<string>("");
  const [qualification, setJobQf] = useState<string>("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const job = { title, description, qualification };
    fetch(
      "http://localhost:8000/jobs",

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      }
    ).then(() => {
      alert("New job posting added");
      setIsPending(false);
      history.push("/"); //Redirect to home
    });
  };

  return (
    <div className="create">
      <h2>Add a new Job</h2>

      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setJobName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setJobDesc(e.target.value)}
        />

        <label>Qualifications:</label>
        <textarea
          required
          value={qualification}
          onChange={(e) => setJobQf(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;
