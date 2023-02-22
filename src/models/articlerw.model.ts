export interface ArticleRW{
    source: {
        id: string;
        name: string;
    }
    type_of: string;
    id: number;
    title: string;
    description: string;
    user: {
        name: string;
        profile_image: string;
    }
}