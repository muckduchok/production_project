import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile, ValidateProfileError } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if (errors.length > 0) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.post<Profile>('/profile', formData)

      return response.data
    } catch (err) {
      return rejectWithValue(i18n.t([ValidateProfileError.SERVER_ERROR]))
    }
  }
)
