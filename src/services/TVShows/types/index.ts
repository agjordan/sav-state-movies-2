export type TVShow = {
  id: number;
  name: string;
  genres: string[];
  status: string;
  rating: { average: null | number };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  premiered: string;
  url: string;
};

export type TVShowEpisode = {
  id: number;
  airdate: string;
  show?: TVShow;
  image: {
    medium: string;
    original: string;
  } | null;
  season: number;
  number: number;
  url: string;
};

export type TVShowEpisodeWithShow = TVShowEpisode & { show: TVShow };

export type Season = {
  number: number;
  premiereDate: string;
  id: number;
};

export type CastMember = {
  person: {
    name: string;
  };
};
