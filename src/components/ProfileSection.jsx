import { useEffect, useState } from "react";
import axios from "axios";
import SocialSection from "./SocialSection";
import SkillSection from "./SkillSection";

const ProfileSection = () => {
  const [profile, setProfile] = useState(null);
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/devsagarkumarjha"
        );
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    const fetchStreak = async () => {
      try {
        const res = await axios.get(
          "https://api.franznkemaka.com/github-streak/stats/devsagarkumarjha"
        );
        setStreak(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
    fetchStreak();
  }, []);

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-2 text-gray-950 dark:text-white p-2 max-w-7xl ">
      <div>
        <img
          src={profile.avatar_url}
          alt="Avatar"
          className="min-w-xs rounded-md"
        />
      </div>

      <div className="border w-full rounded p-4 space-y-5 border-gray-800/10 dark:border-gray-200/10 shadow">
        <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
          {profile.name}
        </h2>
        <div className="flex text-green-800 dark:text-green-500 text-xs md:text-lg gap-2 w-full justify-start items-center">
          <div className="w-1/4 border p-2 rounded border-green-500/30 text-center shadow">
            <p className="font-bold">{profile.public_repos}</p>
            <h2>Repositories</h2>
          </div>
          <div className=" w-1/4  border p-2 rounded border-green-500/30 text-center shadow">
            <p className="font-bold">{streak?.totalContributions}</p>
            <h2>Contributions</h2>
          </div>
          <div className=" w-1/4 border p-2 rounded border-green-500/30 text-center shadow">
            <p className=" font-bold">{profile.followers}</p>
            <h2>Followers</h2>
          </div>
          <div className=" w-1/4  border p-2 rounded border-green-500/30 text-center shadow">
            <p className="font-bold">{profile.following}</p>
            <h2>Following</h2>
          </div>
        </div>
        <p className="my-2">{profile.bio}</p>
        <div className="flex-col md:flex-row gap-2 ">
          <SocialSection />
          <SkillSection/>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
