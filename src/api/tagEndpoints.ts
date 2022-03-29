import { client } from "./apiClient"

export type TaggingInfo =
    {
        _id: string,
        name: string,
        value: string,
        tag: string,
        tags: string[],
        preferredTag: string
    }

export async function API_GetNewText(inviteLink: string) {
    return client.get<TaggingInfo>(`/tag/${inviteLink}/text/`);
}