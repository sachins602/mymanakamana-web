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

export type AddCategoryResponseType = {
  api_status?: string;
  data?: Data;
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
