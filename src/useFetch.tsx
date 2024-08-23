import { useState, useEffect } from "react";

// Define a type for the job object
interface Job {
  id: number;
  title: string;
  description: string;
  qualification: string;
}

const useFetch = (url: string) => {
  // Initial state with some example jobs
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortCont = new AbortController(); // Create a new AbortController

    fetch(url, { signal: abortCont.signal }) // Pass the signal to fetch options
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch the data!!");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data: Job[]) => {
        setJobs(data); // Set jobs with the fetched data
        setIsPending(false); // Stop showing the loading indicator
      })
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(e.message); // Handle other errors
        }
        setIsPending(false); // Stop showing the loading indicator
      });

    // Cleanup function to abort the fetch request if the component unmounts
    return () => abortCont.abort();
  }, [url]); // Include url in the dependency array

  return { jobs, isPending, error }; // Return the error state as well
};

export default useFetch;
