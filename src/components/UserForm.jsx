import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { ADD_USER, addUser } from '../redux/actions';

const UserForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    description: "",
    languages: "",
    education: "",
    specialization: "",
    twitter: "",
    instagram: "",
    imageUrl: "",
  });

  const dispatch = useDispatch()
    
  function handleChange(e) {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value, });
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(addUser(profile))
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 p-4 flex justify-center items-center">
      <div className="w-full max-w-5xl relative">
        {/* Fort Gate Top */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-amber-900 rounded-t-lg z-10 flex justify-between px-2">
          <div className="w-4 h-8 bg-amber-700 rounded-b-lg"></div>
          <div className="w-4 h-8 bg-amber-700 rounded-b-lg"></div>
          <div className="w-4 h-8 bg-amber-700 rounded-b-lg"></div>
        </div>
        
        {/* Main Fort Structure */}
        <div className="relative z-0 bg-gradient-to-b from-amber-800 to-amber-700 p-1 rounded-lg shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-6 bg-amber-900 flex justify-around">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-3 h-6 bg-amber-700"></div>
            ))}
          </div>
          
          {/* Fort Side Towers */}
          <div className="absolute -left-8 top-1/4 w-16 h-32 bg-amber-900 rounded-l-full border-l-8 border-t-8 border-b-8 border-amber-950"></div>
          <div className="absolute -right-8 top-1/4 w-16 h-32 bg-amber-900 rounded-r-full border-r-8 border-t-8 border-b-8 border-amber-950"></div>
          
          {/* Inner Fort Area */}
          <div className="mt-8 mx-2 p-8 bg-amber-50 rounded-lg border-4 border-amber-900">
            {/* Fort Banner Header */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="h-12 w-64 bg-red-800 flex items-center justify-center">
                  <h1 className="text-2xl font-bold text-yellow-100">Profile Manager</h1>
                </div>
                <div className="absolute -bottom-4 left-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-red-950"></div>
                <div className="absolute -bottom-4 right-0 w-0 h-0 border-r-8 border-r-transparent border-t-8 border-t-red-950"></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-5">
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Name</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        value={profile.name} 
                        name="name" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Email</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        value={profile.email} 
                        name="email" 
                        type="email"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Description</label>
                    <div className="relative">
                      <textarea 
                        onChange={handleChange} 
                        placeholder="Enter your description" 
                        value={profile.description} 
                        name="description"
                        rows="4" 
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Languages</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your languages" 
                        value={profile.languages} 
                        name="languages" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-5">
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Education</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your education" 
                        value={profile.education} 
                        name="education" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Specialization</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your specialization" 
                        value={profile.specialization} 
                        name="specialization" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Twitter</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your twitter" 
                        value={profile.twitter} 
                        name="twitter" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-amber-900 font-bold mb-2 text-lg">Instagram</label>
                    <div className="relative">
                      <input 
                        onChange={handleChange} 
                        placeholder="Enter your instagram" 
                        value={profile.instagram} 
                        name="instagram" 
                        type="text"
                        className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                      />
                      <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-8">
                <label className="block text-amber-900 font-bold mb-2 text-lg">Profile Image URL</label>
                <div className="relative">
                  <input 
                    onChange={handleChange} 
                    placeholder="Enter your imageUrl" 
                    value={profile.imageUrl} 
                    name="imageUrl" 
                    type="text"
                    className="w-full px-4 py-3 border-2 border-amber-800 rounded-lg bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent shadow-inner" 
                  />
                  <div className="absolute right-2 top-2 w-6 h-6 bg-amber-800 rounded-full"></div>
                </div>
              </div>
              
              {/* Submit Button with Sword Design */}
              <div className="mt-12 flex justify-center">
                <button 
                  type="submit" 
                  className="relative group"
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full border-4 border-yellow-600"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-600"></div>
                  <div className="px-12 py-4 bg-gradient-to-b from-amber-700 to-amber-900 text-yellow-100 font-bold text-xl rounded hover:from-amber-600 hover:to-amber-800 transition-all duration-300 border-2 border-yellow-700 group-hover:border-yellow-500">
                    Add Profile
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-amber-950"></div>
                </button>
              </div>
            </form>
            
            {/* Fort Bottom Battlements */}
            <div className="mt-12 relative h-8 bg-amber-800">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute top-0 h-4 w-4 bg-amber-50" style={{ left: `${i * 5}%` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Fort Base */}
        <div className="h-8 bg-amber-950 rounded-b-lg relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-amber-900 rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;