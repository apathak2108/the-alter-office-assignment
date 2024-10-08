import TEXT_AREA_ICON from "../assets/sidebar/textAreaIcon.svg";
import CATEGORIES_ICON from "../assets/sidebar/categoriesIcon.svg";
import NUMERIC_RATING_ICON from "../assets/sidebar/numericRatingIcon.svg";
import RADIO_BUTTON_ICON from "../assets/sidebar/radioButton.svg";
import SINGLE_LINE_ICON from "../assets/sidebar/singleLineIcon.svg";
import SMILEY_RATING_ICON from "../assets/sidebar/smileyIcon.svg";
import STAR_RATING_ICON from "../assets/sidebar/starRatingIcon.svg";

export const STRINGS = {
  NEW_FORM: "New Form",
  ADD_FORM_CARD_ALT: "add-form-icon",
  FEEDBACK_CARD_ALT: "feedback-card-logo",
  VIEW_SUBMISSION: "VIEW SUBMISSION",
  EDIT: "EDIT",
  DELETE: "DELETE",
  SAVE: "SAVE",
  PUBLISH: "PUBLISH",
  CREATE: "Create",
  ERROR: "error",
  CANCEL: "Cancel",
  DELIVERY: "Delivery",
  SUBMITTED: "Submitted",
  VIEWED: "Viewed",
  HEADER_LOGO: "header-logo",
  DATE_PUBLISHED: "Date Published",
  FEEDBACK_TITLE: "Feedback Title",
  STANDARD: "standard",
  MEDIUM: "medium",
  PRIMARY: "primary",
  SUCCESS: "success",
  INHERIT: "inherit",
  SUBMIT: "submit",
  LARGE: "large",
  CONTAINED: "contained",
  SECONDARY: "secondary",
  REQUIRED: "Required",
  LABEL: "Label",
  NAME_LABEL: "label",
  ERROR_MESSAGE: "Error Message",
  VALUE: "Value",
  HELPER_TEXT: "Helper Text",
  CREATE_FEEDBACK_FORM: "Create Feedback Form",
  USER_FEEDBACK: "USER FEEDBACK",
  LEFT_ARROW_ICON: "left-arrow-icon",
  EDIT_ICON: "edit-icon",
  DELETE_ICON: "delete-icon",
  ADD_FIELDS: "Add Fields",
  ADD_FIELD_ICON: "add-field-icon",
  STANDARD_REQUIRED: "standard-required",
  ADD_LOGIC: "Add Logic",
  BACK_ICON: "back-icon",
  BACK_TO_FIELDS_TEXT: "Back to Add Fields",
  EMPTY_TITLE_ERROR: "Please provide a feedback title",
  TITLE_REQUIRED: "Title is required",
  EMPTY_STRING: "",
  OPTIONS: "Options",
  TEXT: "text",
  RATING: "rating",
  CHOICE: "choice",
  MULTILINE_TEXT: "multiline-text",
  STAR_RATING: "star-rating",
  SMILEY_RATING: "smiley-rating",
  NUMERIC_RATING: "numeric-rating",
  RADIO_CHOICE: "radio-choice",
  MULTI_CHOICE: "multi-choice",
  FORMS: "forms",
  SUBMISSIONS: "submissions",
};

export const FIREBASE_MESSAGES = {
  FORM_PUBLISH_SUCEESS: "Form published successfully!",
  FORM_PUBLISHED_ALREADY: "Form is already published and cannot be published again!",
  FORM_PUBLISH_ERROR: "Error publishing form: ",
  FORM_SAVE_SUCCESS: "Form saved successfully!",
  FORM_SAVE_ERROR: "Error saving form: ",
  FORM_SUBMIT_SUCCESS: "Form submitted successfully",
  FORM_SUBMIT_ERROR: "Error submitting form: ",
  FORM_FETCH_ERROR: "Error fetching published forms: ",
  FORM_DELETE_SUCCESS: "Form deleted successfully",
  FORM_DELETE_ERROR: "Error deleting form: ",
}

export const BOOLEAN = {
  TRUE: true,
  FALSE: false,
};

export const ROUTES = {
  HOME: "/",
  NEW_FEEDBACK: "/new-feedback",
  EDIT_FEEDBACK: "/edit-feedback",
  OTHER: "*",
};

export const SIDEBAR_ADD_FIELDS = [
  {
    id: 1,
    name: "Textarea",
    icon: TEXT_AREA_ICON,
    alt: "text-area-icon",
    type: "text",
    subType: "multiline-text",
  },
  {
    id: 2,
    name: "Numeric rating",
    icon: NUMERIC_RATING_ICON,
    alt: "numeric-rating-icon",
    type: "rating",
    subType: "numeric-rating",
  },
  {
    id: 3,
    name: "Star rating",
    icon: STAR_RATING_ICON,
    alt: "star-rating-icon",
    type: "rating",
    subType: "star-rating",
  },
  {
    id: 4,
    name: "Smiley rating",
    icon: SMILEY_RATING_ICON,
    alt: "smiley-rating-icon",
    type: "rating",
    subType: "smiley-rating",
  },
  {
    id: 5,
    name: "Single line input",
    icon: SINGLE_LINE_ICON,
    alt: "single-line-icon",
    type: "text",
    subType: "singleline-text",
  },
  {
    id: 6,
    name: "Radio button",
    icon: RADIO_BUTTON_ICON,
    alt: "radio-button-icon",
    type: "choice",
    subType: "radio-choice",
  },
  {
    id: 7,
    name: "Categories",
    icon: CATEGORIES_ICON,
    alt: "categories-icon",
    type: "choice",
    subType: "multi-choice",
  },
];

export const TOGGLE_FIELDS = [
  {
    name: "Show based on URL conditions",
    type: "text",
    placeholder: "http://",
    id: "standard-required",
    variant: "standard",
  },
  {
    name: "Show on a specific date",
    type: "date",
    placeholder: "",
    id: "outlined-date",
  },
  {
    name: "Show on a specific time",
    type: "time",
    placeholder: "",
    id: "outlined-required",
  },
];

export const DEFAULT_OPTIONS = ["Option 1", "Option 2", "Option 3"];

export const DEFAULT_FIELD_CONFIG = {
  label: STRINGS.EMPTY_STRING,
  required: BOOLEAN.FALSE,
  error: STRINGS.EMPTY_STRING,
  options: DEFAULT_OPTIONS,
  value: STRINGS.EMPTY_STRING,
};
