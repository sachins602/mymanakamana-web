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
  category: string;
  name: string;
  bannerImage: string;
  tripImage: string;
  mapImage: string;
  video: string;
  imageGallery: string[];
  price: string;
  isSpecialOffer: boolean;
  isSpanish: boolean;
  offerPrice?: string;
  pax2Price?: string;
  pax5price?: string;
  pax10price?: string;
  pax15price?: string;
  pax16price?: string;
  summary: {
    duration: string;
    destination: string;
    startPoint: string;
    endPoint: string;
    groupSize: string;
    maxaltitude: string;
    bestSeason: string;
    difficulty: string;
    meals: string;
    accomodation: string;
    activities: string;
  };
  tripHighlight: string[];
  description: string;
  itinerary: {
    description: string;
    details: {
      head?: string | null;
      headDetails?: string | null;
      mode?: string | null;
      routeItinerary?: string | null;
      elevation?: string | null;
      duration?: string | null;
      overnight?: string | null;
      included?: string | null;
      activity?: string | null;
      activityDuration?: string | null;
      accomodation?: string | null;
    }[];
  };
  inclusion: string[];
  optionalInclusion: string[];
  exclusion: string[];
  aboutTrip: {
    head: string;
    headDetails: string;
  }[];
  faq: {
    head: string;
    headDetails: string;
  }[];
  customerReview: {
    userid: string;
    user: string;
    rating: string;
    comment: string;
    postedOn: Date;
  }[];
  totalViews: number;
  rating: number;
  status: boolean;
  createdby: string;
}