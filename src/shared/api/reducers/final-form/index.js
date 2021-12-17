// QUACK! This is a duck. https://github.com/erikras/ducks-modular-redux

const initialValues = {
        createHike: {
            dirty: false,
            dirtyFields: {},
            dirtyFieldsSinceLastSubmit: {},
            dirtySinceLastSubmit: false,
            errors: {},
            hasSubmitErrors: false,
            hasValidationErrors: false,
            invalid: false,
            modified: {
                endStartDates: false
            },
            modifiedSinceLastSubmit: false,
            pristine: true,
            submitting: false,
            submitFailed: false,
            submitSucceeded: false,
            touched: {
                endStartDates: false
            },
            valid: true,
            validating: false,
            values: {
                state: '',
                endStartDates: undefined,
            },
            visited: {
                endStartDates: false
            }
        }
}

// Actions
const UPDATE_FORM_STATE = 'final-form-redux-example/finalForm/UPDATE_FORM_STATE'

// Reducer
export default function reducer(state = initialValues, action = {}) {
    switch (action.type) {
        case UPDATE_FORM_STATE:
            return {
                ...state,
                [action.form]: action.payload
            }
        default:
            return state
    }
}

// Action Creators
export const updateFormState = (form, state) => ({
    type: UPDATE_FORM_STATE,
    form,
    payload: state
})

// Selectors
export const getFormState = (state, form) =>
    (state && state.finalForm && state.finalForm[form]) || {}

