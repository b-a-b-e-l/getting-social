export interface Owner {
    id: string;
    title: "mr" | "ms" | "mrs" | "miss" | "dr" | "";
    firstName: string;
    lastName: string;
    gender: "male"| "female"| "other"| "";
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    picture: string;
    location: object;
}

export interface Post {
    id: string;
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: Owner;
}

export interface Comment {
    id: string;
    message: string;
    owner: Owner;
    post: string;
    publishDate: string;
}
