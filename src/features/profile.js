import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { selectLogin, selectProfile } from '../utils/selectors'

const initialState = {
    status: 'void',
    error: null,
    email: null,
    firstName: null,
    lastName: null,
    loading: true,
}

/**
 * Get the user's profile
 * @param {String} token
 * @returns
 */

export function fetchOrUpdateProfile(token) {
    return async (dispatch, getState) => {
        const status = selectProfile(getState()).status
        if (status === 'pending' || status === 'updating') return
        dispatch(actions.fetching())
        try {
            const response = await axios.post(
                'http://localhost:3001/api/v1/user/profile',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            const data = await response.data
            dispatch(actions.resolved(data))
        } catch (error) {
            dispatch(actions.rejected(error.toString()))
        }
    }
}

/**
 * Edit the user's profile
 * @param {String} firstName
 * @param {String} lastName
 * @returns
 */

export function editProfile(firstName, lastName) {
    return async (dispatch, getState) => {
        const status = selectProfile(getState()).status
        const token = selectLogin(getState()).token
        if (status === 'pending' || status === 'updating') return
        dispatch(actions.editing({ firstName, lastName }))
        try {
            const response = await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { firstName: firstName, lastName: lastName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        accept: 'application/json',
                    },
                }
            )
            const data = await response.data
            dispatch(actions.edited(data))
        } catch (error) {
            dispatch(actions.rejected(error.toString()))
        }
    }
}

const { actions, reducer } = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetching: (draft) => {
            draft.loading = true
            switch (draft.status) {
                default:
                    return
                case 'void':
                    draft.status = 'pending'
                    return
                case 'rejected': {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                case 'resolved':
                    draft.status = 'updating'
                    return
                case 'edited':
                    draft.status = 'updating'
                    return
            }
        },
        resolved: (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'resolved'
                draft.email = action.payload.body.email
                draft.firstName = action.payload.body.firstName
                draft.lastName = action.payload.body.lastName
                draft.loading = false
                return
            }
            return
        },
        rejected: (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'rejected'
                draft.error = action.payload
                return
            }
            return
        },
        editing: (draft) => {
            draft.loading = true
            switch (draft.status) {
                default:
                    return
                case 'void':
                    draft.status = 'pending'
                    return
                case 'rejected': {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                case 'resolved':
                    draft.status = 'updating'
                    return
                case 'edited':
                    draft.status = 'updating'
                    return
            }
        },
        edited: (draft, action) => {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.status = 'edited'
                draft.firstName = action.payload.body.firstName
                draft.lastName = action.payload.body.lastName
                draft.loading = false
                return
            }
            return
        },
    },
})

export default reducer
