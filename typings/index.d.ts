declare module "model" {
    export interface BookTag {
        objectId: string,
        createdAt: string,
        updatedAt: string,
        active?: boolean,
        pages: number,
        author: string,
        name: string,
        isbn: string,
        blocked: boolean,
        curator: string,
        cover: {
            __type: string,
            name: string,
            url: string
        },
        edition: string,
        numRatings: number,
        totalRatings: number
    }
    export interface Book extends BookTag {
        goodReadsRatings: number
    }
}
