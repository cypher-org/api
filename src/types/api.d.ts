export interface APIReplies {
    status: number,
    message: any
}

export interface GuildReply extends APIReplies {
    guild?: any
}