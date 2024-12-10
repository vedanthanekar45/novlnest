interface genreInfoProp {
    className ?: string,
    info: string,
};

export default function GenreInfo({className, info}: genreInfoProp) {

    const renderInfo = () => {
        return info.split('\n').map((line, index) => (
            <span key={index}>
                {line} <br />
            </span>
        ));
    };

    return (
        <div className={className}>
            <h2 className="prata text-2xl text-white">
                {renderInfo()}
            </h2>
        </div>
    )
}