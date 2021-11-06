export enum authTypes {
  LOADING_REQUEST = "@login/LOADING_REQUEST",
  AUTH_REQUEST = "@login/AUTH_REQUEST",
  LOGOUT_REQUEST = "@login/LOGOUT_REQUEST",
}

export interface LoginState {
  name: string;
  loading: boolean;
}
