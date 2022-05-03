export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Credits {
    cast: Cast[];
    crew: string[];
    id: number;
}

export interface Cast {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number
    profile_path: string;
}

export interface Actor {
    profile_path: string;
    adult: boolean;
    id: string;
    known_for: Movie[];
    name: string;
    popularity: number;
}

export interface ResultsActor {
    page: number;
    results: Actor[];
    total_results: number;
    total_pages: number;
}

export interface PopularMovies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface UpcomingMovies {
    page: number;
    results: Movie[];
    dates: string[];
    total_pages: number;
    total_results: number;
}

export interface Results {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: string;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface Review {
    name: string;
    text: string;
}