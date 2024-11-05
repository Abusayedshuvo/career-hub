const getStoreJob = () => {
  const storeJob = localStorage.getItem("job-applications");
  if (storeJob) {
    return JSON.parse(storeJob);
  }
  return [];
};

const saveJob = (id) => {
  const storeJobs = getStoreJob();
  const exists = storeJobs.find((jobId) => jobId === id);
  if (!exists) {
    storeJobs.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storeJobs));
  }
};

export { getStoreJob, saveJob };
