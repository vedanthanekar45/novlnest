export interface bookProp {
    image: string,
}

export function Book({image}: bookProp) {
    return (
        <div className="relative w-[250px] h-[300px] object-cover mt-4 group ml-12 mb-8">
            <img src={image} />
        </div>
    )
}