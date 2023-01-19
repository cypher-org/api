export interface APIRepliesInterface {
    status: number,
    message: any
}

export interface APIGuildReply extends APIRepliesInterface {
    guild?: any
}