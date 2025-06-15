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
        console.log(res.data)
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

  if (!profile)
    return (
      <div role="status" aria-live="polite">
        Loading profile...
      </div>
    );

  return (
    <main className="flex flex-col md:flex-row gap-4 text-gray-950 dark:text-white p-4 max-w-7xl mx-auto">
      <section
        aria-labelledby="profile-heading"
        className="w-full rounded border p-4 border-gray-800/10 dark:border-gray-200/10 shadow-md"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          {/* Profile Image */}
          <aside
            className="flex-shrink-0"
            role="img"
            aria-label="GitHub profile picture"
          >
            <img
              src={profile.avatar_url}
              width={200}
              height={200}
              alt={`${profile.name}'s GitHub avatar`}
              className="rounded-full shadow-md object-cover aspect-square"
            />
          </aside>

          {/* Name & Bio */}
          <header className="space-y-2 text-center md:text-left">
            <h1 id="profile-heading" className="text-2xl font-bold">
              {profile.name}
            </h1>
            <p className="text-sm lg:text-base">{profile.bio}</p>
          </header>
        </div>

        {/* Stats */}
        <section
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-center text-green-800 dark:text-green-400"
          aria-label="GitHub statistics"
        >
          <div
            className="border p-2 rounded border-green-500/30 shadow"
            role="group"
            aria-label="Repositories"
          >
            <p className="font-bold text-lg">{profile.public_repos}</p>
            <span>Repositories</span>
          </div>
          <div
            className="border p-2 rounded border-green-500/30 shadow"
            role="group"
            aria-label="Commits"
          >
            <p className="font-bold text-lg">
              {streak?.totalContributions ?? "—"}
            </p>
            <span>Commits</span>
          </div>
          <div
            className="border p-2 rounded border-green-500/30 shadow"
            role="group"
            aria-label="Followers"
          >
            <p className="font-bold text-lg">{profile.followers}</p>
            <span>Followers</span>
          </div>
          <div
            className="border p-2 rounded border-green-500/30 shadow"
            role="group"
            aria-label="Following"
          >
            <p className="font-bold text-lg">{profile.following}</p>
            <span>Following</span>
          </div>
        </section>

        {/* Social + Skills */}
        <section className="flex flex-col md:flex-row gap-4 mt-6">
          <SocialSection />
          <SkillSection />
        </section>
      </section>
    </main>
  );
};

export default ProfileSection;
