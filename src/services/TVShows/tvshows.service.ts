import {
  CastMember,
  Season,
  TVShow,
  TVShowEpisode,
  TVShowEpisodeWithShow,
} from "./types";

export const getTVShows = async (): Promise<TVShowEpisodeWithShow[]> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/schedule?country=GB`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Could not load results");
  }
};

export const searchForTVShows = async (
  keyword: string
): Promise<TVShowEpisodeWithShow[]> => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${keyword}`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("search failed");
  }
};

export const getTVShowDetails = async (id: string): Promise<TVShow> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("could not get show details");
  }
};

export const getTVShowSeasons = async (id: string): Promise<Season[]> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("could not get show seasons");
  }
};

export const getTVShowCast = async (id: string): Promise<CastMember[]> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error("could not get show seasons");
  }
};

export const getSeasonEpisodes = async (
  seasonId: number
): Promise<TVShowEpisode[]> => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/seasons/${seasonId}/episodes`
    );
    const data = await response.json();
    return data;
  } catch {
    throw new Error("could not get show details");
  }
};
