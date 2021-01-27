import { API_BASE, LOGIN_URL, REGISTER_URL } from "./APIConstants";
import { getLocalePrefix } from "./LocaleHelper"
import Request from "./Request";

export interface registerParams {
  lastname: string
  firstname: string
  birthdate: string
  email: string
  confirmEmail: string
  password: string
  box: string
  deviceUuids: string
}
export const register = async ({lastname, firstname, birthdate, email, confirmEmail, password, box, deviceUuids}: registerParams) => {
  const locale = await getLocalePrefix();
  const url = API_BASE + '/' + locale + REGISTER_URL;
  const data = {lastname, firstname, birthdate, email, confirmEmail, password, box, deviceUuids};
  return Request({ url, method: 'POST', data });
}

export interface loginParams {
  email: string
  password: string
  deviceUuids: string
}
export const login = async ({email, password, deviceUuids}: loginParams) => {
  const locale = await getLocalePrefix();
  const url = API_BASE + '/' + locale + LOGIN_URL;
  const data = { email, password, deviceUuids };
  return Request({ url, method: 'POST', data });
}