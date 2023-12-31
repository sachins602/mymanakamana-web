export type SignInResponseType = {
  success?: boolean;
  token?: string;
  userMail?: string;
  role?: string;
  id?: string;
};

export type ImageResponseType = {
  status?: string;
  path?: string;
}

export type CategoryResponseType = {
  api_status?: string;
  data?: Data;
}
export type ViewCategoryResponseType = {
  api_status?: string;
  data?: Data[];
}

type Data = {
  name?: string;
  image?: string;
  slogan?: string;
  status?: boolean;
  createdon?: Date;
  updatedon?: Date;
  _id?: string;
  __v?: number;
}

export type Trip = {
  _id?: string;
  category: string;
  name: string;
  bannerImage?: string;
  tripImage?: string;
  mapImage?: string;
  price: string;
  isSpecialOffer?: boolean;
  offerPrice?: string;
  summary?: {
    duration?: string;
    destination?: string;
    startPoint?: string;
    endPoint?: string;
    maxaltitude?: string;
    bestSeason?: string;
    difficulty?: string;
    meals?: string;
    accomodation?: string;
    activities?: string;
  };
  tripHighlight?: string[];
  description?: string;
  itinerary?: {
    description?: string;
    details?: {
      head?: string;
      headDetails?: string;
      elevation?: string;
      activity?: string;
      activityDuration?: string;
      accomodation?: string;
    }[];
  };
  inclusion?: string[];
  exclusion?: string[];
  status?: boolean;
  createdby?: string;
}

export type EditTrip = {
  _id: string;
  category?: string;
  name?: string;
  price?: string;
  bannerImage?: string;
  tripImage?: string;
  mapImage?: string;
  isSpecialOffer?: boolean;
  offerPrice?: string;
  summary?: {
    duration?: string;
    destination?: string;
    startPoint?: string;
    endPoint?: string;
    maxaltitude?: string;
    bestSeason?: string;
    difficulty?: string;
    meals?: string;
    accomodation?: string;
    activities?: string;
  };
  tripHighlight?: string[];
  description?: string;
  itinerary?: {
    description?: string;
    details?: {
      head?: string;
      headDetails?: string;
      elevation?: string;
      activity?: string;
      activityDuration?: string;
      accomodation?: string;
    }[];
  };
  inclusion?: string[];
  exclusion?: string[];
  status?: boolean;
}
export type TripResponseType = {
  api_status?: string;
  data?: TripData[];
}
export type SingleTripResponseType = {
  api_status?: string;
  data?: TripData;
}

type TripData = {
  summary?: Summary;
  itinerary?: Itinerary;
  _id?: string;
  category?: string;
  name?: string;
  bannerImage?: string;
  tripImage?: string;
  video?: string;
  imageGallery?: string[];
  price?: string;
  isSpecialOffer?: boolean;
  offerPrice?: string;
  pax2Price?: string;
  pax5price?: string;
  pax15price?: string;
  pax16price?: string;
  tripHighlight?: string[];
  description?: string;
  inclusion?: string[];
  exclusion?: string[];
  aboutTrip?: AboutTrip[];
  faq?: AboutTrip[];
  customerReview?: CustomerReview[];
  totalViews?: number;
  rating?: number;
  status?: boolean;
  createdon?: Date;
  updatedon?: Date;
  __v?: number;
  mapImage?: string;
  optionalInclusion?: string[];
  pax10price?: string;
  isSpanish?: boolean;
  itemsYouNeedToBring?: string[];
}

type AboutTrip = {
  head?: string;
  headDetails?: string;
  _id?: string;
}

type CustomerReview = {
  userid?: string;
  user?: string;
  rating?: string;
  comment?: string;
  postedOn?: Date;
  _id?: string;
}

type Itinerary = {
  description?: string;
  details?: { [key: string]: null | string }[];
}

type Summary = {
  duration?: string;
  destination?: string;
  startPoint?: string;
  endPoint?: string;
  groupSize?: string;
  difficulty?: string;
  meals?: string;
  accomodation?: string;
  activities?: string;
  maxaltitude?: string;
  bestSeason?: string;
}

export type BlogResponseType = {
  api_status?: string;
  data?: BlogData[];
}

export type BlogData = {
  author?: Author;
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  category?: null | string;
  trip?: null | string;
  views?: number;
  createdon?: Date;
  updatedon?: Date;
  __v?: number;
}

export type Author = {
  id?: string;
  name?: string;
  image?: string;
  profession?: string;
}


export type AddBlogData = {
  author?: Author;
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  category?: string;
  trip?: string;
}

export type EditBlogData = {
  _id?: string;
  name?: string;
  description?: string;
  category?: string;
  trip?: string;
}

export interface UserBookingResponse {
  api_status?: string;
  data?: UserBooking[];
}

export interface UserBooking {
  _id?: string;
  packageId?: string;
  packageName?: string;
  userId?: string;
  name?: string;
  email?: string;
  totalTraveller?: string;
  date?: Date;
  address?: string;
  price?: string;
  status?: number;
  visited?: boolean;
  createdon?: Date;
  updatedon?: Date;
  __v?: number;
}

export type UserRegisterSuccessResponseType = {
  message?: string;
  success: boolean;
}