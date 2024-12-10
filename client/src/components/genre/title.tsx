interface titleProp {
    className ?: string,
    titleName: string,
};

export default function Title({titleName, className}: titleProp) {
    return (
        <div className={className}>
            <h2 className="prata text-7xl text-white drop-shadow-lg">
                {titleName}
            </h2>
        </div>
    )
}