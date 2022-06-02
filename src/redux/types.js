export const SET_ACCOMMODATIONS = 'SET_ACCOMMODATIONS';
export const SET_LOCATIONS = 'SET_LOCATIONS';

export const SET_TRIP_REQUESTS = 'SET_TRIP_REQUESTS';
export const SET_SINGLE_TRIP_REQUEST = 'SET_SINGLE_TRIP_REQUEST';
export const CLEAR_SINGLE_TRIP_REQUEST = 'CLEAR_SINGLE_TRIP_REQUEST';
export const LOAD_SINGLE_TRIP_REQUEST = 'LOAD_SINGLE_TRIP_REQUEST';
export const DELETE_TRIP_REQUEST = 'DELETE_TRIP_REQUEST';
export const APPROVE_TRIP_REQUEST = 'APPROVE_TRIP_REQUEST';
export const REJECT_TRIP_REQUEST = 'REJECT_TRIP_REQUEST';
export const LOAD_TRIP_REQUESTS = 'LOAD_TRIP_REQUESTS';
export const SET_TRIPS_OWNERS = 'SET_TRIPS_OWNERS';

export const GET_ACCOMMODATIONS = 'GET_ACCOMMODATIONS';
export const ACCOMMODATIONS_ERROR = 'ACCOMMODATIONS_ERROR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const OPEN_GLOBAL_SNACKBAR = 'OPEN_GLOBAL_SNACKBAR';
export const CLOSE_GLOBAL_SNACKBAR = 'CLOSE_GLOBAL_SNACKBAR';

export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS';
export const MARK_ALL_AS_READ = 'MARK_ALL_AS_READ';
export const MARK_ONE_AS_READ = 'MARK_ONE_AS_READ';

export const OPEN_NOTIFICATION_PANEL = 'OPEN_NOTIFICATION_PANEL';
export const CLOSE_NOTIFICATION_PANEL = 'CLOSE_NOTIFICATION_PANEL';

export const OPEN_VIEW_TRIP = 'OPEN_VIEW_TRIP';
export const CLOSE_VIEW_TRIP = 'CLOSE_VIEW_TRIP';

export const OPEN_LOADER = 'OPEN_LOADER';
export const CLOSE_LOADER = 'CLOSE_LOADER';

export const LOGOUT = 'LOGOUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIRURE = 'USER_REGISTER_FAIRURE';

export const actionTypes = {
  SET_ACCOMMODATIONS: 'SET_ACCOMMODATIONS',
  SET_TRIPSTATISTICS: 'SET_TRIPSTATISTICS',
  GET_MOSTVISITEDLOCATION: 'GET_MOSTVISITEDLOCATION',
  GET_USERS: 'GET_USERS',
  LOAD_USERS_FAIL: 'LOAD_USERS_FAIL',
  SET_ROLES: 'SET_ROLES',
  FAILED_TO_LOAD_ROLES: 'SET_ROLES',
  UPDATE_ROLE: 'UPDATE_ROLE',
  FAILED_TO_UPDATE: 'FAILED_TO_UPDATE',
  GET_LOCATIONS: 'GET_LOCATIONS',
  GET_ACCOMMODATIONS: 'GET_ACCOMMODATIONS',
  SET_TRIP_REQUEST: 'SET_TRIP_REQUEST',
  ADD_MULTICITY: 'ADD_MULTICITY',
  SET_STEP_TWO_TRIP_REQUEST_REASON: 'SET_STEP_TWO_TRIP_REQUEST_REASON',
  SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME: 'SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME',
  SET_STEP_ONE_REQUESTS: 'SET_STEP_ONE_REQUESTS',
  SET_STEP_ONE_DEPART_DATE: 'SET_STEP_ONE_DEPART_DATE',
  SET_STEP_ONE_RETURN_DATE: 'SET_STEP_ONE_RETURN_DATE',
  INITIALIZE: 'INITIALIZE',
  UPDATE_TRIP_REQUEST:'UPDATE_TRIP_REQUEST',
  GET_USERSEARCH: 'GET_USERSEARCH',
};

// LOGIN ACTION TYPES
export const LoginTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

// ACCOMMODATION ACTION TYPE

export const accommodationFetchType = {
  ACCOMMODATION_FETCH_REQUEST: 'ACCOMMODATION_FETCH_REQUEST',
  ACCOMMODATION_FETCH_SUCCESS: 'ACCOMMODATION_FETCH_SUCCESS',
  ACCOMMODATION_FETCH_FAILURE: 'ACCOMMODATION_FETCH_FAILURE',
};

export const accommodationDeleteType = {
  ACCOMMODATION_DELETE_REQUEST: 'ACCOMMODATION_DELETE_REQUEST',
  ACCOMMODATION_DELETE_SUCCESS: 'ACCOMMODATION_DELETE_SUCCESS',
  ACCOMMODATION_DELETE_FAILURE: 'ACCOMMODATION_DELETE_FAILURE',
};

export const accommodationCreateType = {
  ACCOMMODATION_CREATE_REQUEST: 'ACCOMMODATION_CREATE_REQUEST',
  ACCOMMODATION_CREATE_SUCCESS: 'ACCOMMODATION_CREATE_SUCCESS',
  ACCOMMODATION_CREATE_FAILURE: 'ACCOMMODATION_CREATE_FAILURE',
};

export const accommodationUpdateType = {
  ACCOMMODATION_UPDATE_REQUEST: 'ACCOMMODATION_UPDATE_REQUEST',
  ACCOMMODATION_UPDATE_SUCCESS: 'ACCOMMODATION_UPDATE_SUCCESS',
  ACCOMMODATION_UPDATE_FAILURE: 'ACCOMMODATION_UPDATE_FAILURE',
};

export const accommodationReviewType = {
  ACCOMMODATION_REVIEW_REQUEST: 'ACCOMMODATION_REVIEW_REQUEST',
  ACCOMMODATION_REVIEW_SUCCESS: 'ACCOMMODATION_REVIEW_SUCCESS',
  ACCOMMODATION_REVIEW_FAILURE: 'ACCOMMODATION_REVIEW_FAILURE'
}

// DASHBOARD ACTION TYPES
export const GET_TRIPSTATISTICS = 'GET_TRIPSTATISTICS';
