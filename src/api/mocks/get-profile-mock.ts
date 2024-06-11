import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '31992922929',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
