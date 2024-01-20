export default function Rating({ value, text}) {
    return  (
        <div className="flex flex-row">
            <div>
                Rating: {value}
            </div>
            <div>
                Number Reviews: {text}
            </div>
        </div>
    )
}