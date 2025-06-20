
import { Code, Trophy, Target, Star, TabletIcon, Brain, Lightbulb } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "CodeChef",
      username: "rakeshvarma11",
      rating: 1667,
      problemsSolved: 350,
      rank: "3 Star",
      color: "bg-blue-600",
      url: "https://leetcode.com/u/rakeshvarma11/",
      badge: "⭐"
    },
    {
      platform: "LeetCode",
      username: "rakeshvarma11",
      rating: 1706,
      problemsSolved: 230,
      rank: "Knight Soon",
      color: "bg-orange-600",
      url: "https://www.codechef.com/users/rakeshvarma11",
      badge: "🏆"
    }
  ];

  const overallStats = [
    {
      icon: Code,
      label: "Total Problems",
      value: "600+",
      description: "Across all platforms"
    },
    {
      icon: Star,
      label: "Star",
      value: "3",
      description: "CodeChef"
    },
    {
      icon: Lightbulb,
      label: "Top",
      value: "12.58%",
      description: "LeetCode"
    },
    {
      icon: Trophy,
      label: "Achievements",
      value: "5+",
      description: "Badges"
    }
  ];

  return (
    <section id="coding" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Passionate about competitive programming and problem-solving. Here's my journey across various coding platforms.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {overallStats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={profile.platform}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${profile.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {profile.badge}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{profile.platform}</h3>
                    <p className="text-gray-400 text-sm">@{profile.username}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{profile.rank}</div>
                  {profile.rating > 0 && (
                    <div className="text-sm text-gray-300">Rating: {profile.rating}</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4 text-center border border-gray-600">
                  <div className="text-2xl font-bold text-blue-400">{profile.problemsSolved}+</div>
                  <div className="text-xs text-gray-400">Problems Solved</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-center border border-gray-600">
                  <div className="text-2xl font-bold text-blue-400">{profile.rating || "N/A"}</div>
                  <div className="text-xs text-gray-400">Current Rating</div>
                </div>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${profile.color} text-white px-4 py-2 rounded-lg text-center font-medium hover:opacity-90 transition-opacity duration-300 block`}
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
