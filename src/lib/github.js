const CACHE_KEY = 'gh_stats_sanjay29_dev';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

const FALLBACK_DATA = {
  public_repos: 4,
  followers: 2,
  following: 5,
  featuredRepo: {
    name: 'pharmacare',
    description: 'Pharmacy Stock, Expiry & Demand Management System (Spring Boot + React + MySQL)',
    language: 'Java',
    updated_at: '2026-11-18'
  }
};

export async function fetchGithubStats(username = 'sanjay29-dev') {
  try {
    // Check sessionStorage cache first
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed.data;
      }
    }

    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!res.ok) {
      return FALLBACK_DATA;
    }

    const userData = await res.json();

    // Fetch featured repository details
    let repoData = FALLBACK_DATA.featuredRepo;
    try {
      const repoRes = await fetch(`https://api.github.com/repos/${username}/pharmacare`, {
        headers: { Accept: 'application/vnd.github.v3+json' }
      });
      if (repoRes.ok) {
        const repoJson = await repoRes.json();
        repoData = {
          name: repoJson.name,
          description: repoJson.description || repoData.description,
          language: repoJson.language || 'Java',
          updated_at: repoJson.updated_at ? repoJson.updated_at.split('T')[0] : repoData.updated_at
        };
      }
    } catch (e) {
      // Ignore repo fetch error and use fallback
    }

    const stats = {
      public_repos: userData.public_repos || FALLBACK_DATA.public_repos,
      followers: userData.followers || FALLBACK_DATA.followers,
      following: userData.following || FALLBACK_DATA.following,
      featuredRepo: repoData
    };

    // Cache the successful result
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data: stats
    }));

    return stats;
  } catch (err) {
    // Silently return static fallback without breaking the site
    return FALLBACK_DATA;
  }
}
