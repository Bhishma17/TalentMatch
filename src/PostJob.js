import React from 'react';
import './PostJobs.css';
const PostJob = () => {
  return (
    <div>
      <h1>Post a Job</h1>
      <form>
        <label>Job Title: <input type="text" name="jobTitle" /></label><br/>
        <label>Company Name: <input type="text" name="companyName" /></label><br/>
        <label>Job Description: <textarea name="jobDescription"></textarea></label><br/>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
