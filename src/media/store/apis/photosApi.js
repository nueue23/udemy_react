import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl : 'http://localhost:3001'
    }),
    endpoints(builder){
        return {
            fetchPhotos : builder.query({
                providesTags : (result, error, album) => {
                    const tags = result.map((photo) => {
                        return {
                            type: 'Photos',
                            id: photo.id
                        };
                    });
                    tags.push({
                        type: 'AlbumsPhotos',
                        id: album.id
                    })
                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'GET',
                        params: {
                            albumId: album.id
                        }
                    };
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags : (result, error, album) => {
                    return [{
                        type: 'AlbumsPhotos',
                        id: album.id
                    }];
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            url: faker.image.abstract(150, 150, true),
                            albumId: album.id
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags : (result, error, photo) => {
                    return [{
                        type: 'Photos',
                        id: photo.id
                    }];
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    };
                }
            })
        }
    }
});

export const {useAddPhotoMutation, useFetchPhotosQuery, useRemovePhotoMutation} = photosApi;
export {photosApi};