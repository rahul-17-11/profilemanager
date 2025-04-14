import React from 'react';
import { useSelector } from 'react-redux';
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


// Individual Profile Card Component
const ProfileCard = ({ profile }) => {
  return (
    <div className="relative">
      {/* Fort-like card structure */}
      <div className="bg-amber-800 p-1 rounded-lg shadow-xl">
        {/* Card top battlements */}
        <div className="h-4 bg-amber-900 flex justify-around rounded-t-lg mb-1">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-2 h-4 bg-amber-700"></div>
          ))}
        </div>
        
        <div className="bg-amber-100 rounded-lg p-4">
          {/* Profile Header with Image */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-700 mb-2">
              {profile.imageUrl ? (
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/100/100";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold text-xl">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
                </div>
              )}
            </div>
            
            <h2 className="text-xl font-bold text-amber-900">{profile.name || "Unknown Warrior"}</h2>
            <p className="text-amber-700">{profile.email || "No email provided"}</p>
          </div>
          
          {/* Decorative Divider */}
          <div className="relative my-4">
            <div className="h-1 bg-amber-300"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-amber-800 rotate-45"></div>
          </div>
          
          {/* Profile Details */}
          <div className="mb-4 space-y-2">
            {profile.description && (
              <div className="mb-3 italic text-amber-900">{profile.description}</div>
            )}
            
            {profile.specialization && (
              <div className="flex">
                <span className="font-bold text-amber-900 w-32">Specialization:</span>
                <span className="text-amber-800">{profile.specialization}</span>
              </div>
            )}
            
            {profile.education && (
              <div className="flex">
                <span className="font-bold text-amber-900 w-32">Education:</span>
                <span className="text-amber-800">{profile.education}</span>
              </div>
            )}
            
            {profile.languages && (
              <div className="flex">
                <span className="font-bold text-amber-900 w-32">Languages:</span>
                <span className="text-amber-800">{profile.languages}</span>
              </div>
            )}
          </div>
          
          {/* Social Media */}
          {(profile.twitter || profile.instagram) && (
            <div className="mt-4 flex justify-center space-x-4">
              {profile.twitter && (
                <div className="bg-amber-700 text-amber-100 px-3 py-1 rounded-lg">
                  
                  <a href={profile.twitter} target='_blank'><BsTwitterX /></a>
                </div>
              )}
              {profile.instagram && (
                <div className="bg-amber-700 text-amber-100 px-3 py-1 rounded-lg">
                  <a href={profile.instagram} target='_blank'><FaInstagram /></a>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Card bottom design */}
        <div className="h-2 bg-amber-900 mt-1 rounded-b-lg"></div>
      </div>
      
      {/* Corner fort towers */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-900 rounded-full"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-900 rounded-full"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-900 rounded-full"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-900 rounded-full"></div>
    </div>
  );
};

// Main Profile List Component
const ProfileList = () => {

    const profiles = useSelector((state)=>state.profileList)
    console.log(profiles)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-8">
      {/* Header Banner */}
      <div className="mb-12 relative">
        <div className="bg-red-800 py-4 rounded-lg border-4 border-amber-900">
          <div className="text-center text-yellow-100">
            <h1 className="text-3xl font-bold">Profile Manager</h1>
            <p className="text-lg">Profile Gallery</p>
          </div>
        </div>
        
        {/* Decorative Flag Poles */}
        <div className="absolute -top-8 left-1/4 w-2 h-24 bg-amber-900 before:content-[''] before:absolute before:top-0 before:right-2 before:w-8 before:h-6 before:bg-red-700"></div>
        <div className="absolute -top-8 right-1/4 w-2 h-24 bg-amber-900 before:content-[''] before:absolute before:top-0 before:left-2 before:w-8 before:h-6 before:bg-red-700"></div>
      </div>
      
      {/* Main Content */}
      {profiles && profiles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      ) : (
        <div className="bg-amber-800 p-1 rounded-lg shadow-xl">
          <div className="bg-amber-100 p-8 rounded-lg text-center">
            <p className="text-xl text-amber-900">No profiles available yet!</p>
            <p className="text-amber-700">Be the first one to join the ranks.</p>
          </div>
        </div>
      )}
      
      {/* Fort Wall Footer */}
      <div className="mt-16">
        <div className="h-8 bg-amber-800 relative">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute -top-3 h-3 w-4 bg-amber-900" style={{ left: `${(i * 100) / 30}%` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;