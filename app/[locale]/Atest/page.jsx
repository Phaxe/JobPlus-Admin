"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '@/app/ReduxStore/Slices/jobsSlice';

const JobsComponent = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.data);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
console.log(jobs);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
    </div>
  );
};

export default JobsComponent;
