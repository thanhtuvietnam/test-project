export interface ApiResponse {
  data: Data;
}

export interface Data {
  seoOnPage: SeoOnPage;
  breadCrumb: BreadCrumb[];
  titlePage: string;
  items: Movie[];
  params: Params;
  type_list: string;
}

export interface SeoOnPage {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
}

export interface BreadCrumb {
  name: string;
  slug?: string;
  isCurrent: boolean;
  position: number;
}

export interface Params {
  type_slug: string;
  filterCategory: string[];
  filterCountry: string[];
  filterYear: string;
  filterType: string;
  sortField: string;
  sortType: string;
  pagination: Pagination;
}

export interface Pagination {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
}

export interface Movie {
  tmdb: Tmdb;
  imdb: Imdb;
  modified: Modified;
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  type: string;
  thumb_url: string;
  poster_url: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  year: number;
  category: Category[];
  country: Country[];
}

export interface Tmdb {
  type: string;
  id: string;
  season: number | null;
  vote_average: number;
  vote_count: number;
}

export interface Imdb {
  id: string;
}

export interface Modified {
  time: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Country {
  id: string;
  name: string;
  slug: string;
}
