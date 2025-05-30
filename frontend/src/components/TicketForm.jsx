import React, { useState } from 'react';
import axiosInstance from '../../axios'


const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post(' /ticket', formData)
      .then(() => {
        window.location.href='/home'
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='flex justify-center'>
      <form action="" className='rounded-xl p-4 flex flex-col gap-3 w-full md:w-1/2 ' method='post' onSubmit={handleSubmit}>
        <h3 className='text-2xl font-bold'> Create your Ticket</h3>
        <label >Title</label>
        <input type="text" id='title' name='title' required={true} value={formData.title} onChange={handleChange} className='m-1 rounded bg-[#47566a] p-1 outline-none'/>
        <label >Description</label>
        <textarea type="text" id='description' name='description' required={true} value={formData.description} onChange={handleChange} className='m-1 rounded bg-[#47566a] p-1 outline-none' rows={4}/>
        <label >Category</label>
        <select name="category" value={formData.category} onChange={handleChange} className='m-1 rounded bg-[#47566a] p-1 outline-none'>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label >Priority</label>
        <div>
          <input type="radio" id='priority-1' name='priority' onChange={handleChange} className='m-1 p-1' value={1} checked={formData.priority == 1}/>
          <label>1</label>
          <input type="radio" id='priority-2' name='priority' onChange={handleChange} className='m-1 p-1' value={2} checked={formData.priority == 2}/>
          <label>2</label>
          <input type="radio" id='priority-3' name='priority' onChange={handleChange} className='m-1 p-1' value={3} checked={formData.priority == 3}/>
          <label>3</label>
          <input type="radio" id='priority-4' name='priority' onChange={handleChange} className='m-1 p-1' value={4} checked={formData.priority == 4}/>
          <label>4</label>
          <input type="radio" id='priority-5' name='priority' onChange={handleChange} className='m-1 p-1' value={5} checked={formData.priority == 5}/>
          <label>5</label>
        </div>
        <label >Progress</label>
        <input type="range" id='progress' name='progress' value={formData.progress} min="0" max="100" onChange={handleChange}/>
        <label> Status</label>
        <select name="status" value={formData.status} onChange={handleChange} className='m-1 rounded bg-[#47566a] p-1 outline-none'>
          <option value="Not started">Not Started</option>
          <option value="Started">Started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className='m-1 rounded bg-blue-500 p-1 outline-none' value="CREATE TICKET"/>
      </form>
    </div>
  );
};

export default TicketForm;
