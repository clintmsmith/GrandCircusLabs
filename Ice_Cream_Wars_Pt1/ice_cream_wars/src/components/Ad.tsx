import '../css/Ad.css'

interface AdProperties{
    flavor: string,
    isLight: string,
    fontSize: number,
};

export function Ad(props:AdProperties) {
    // I added functionality here so the Ad reflects the color selected
    // With options for "Light", "Dark", and what I called "Natural"
    // which was just the base color you start with.
    // Not part of the Lab Assignment, but I thought it was a good way to 
    // try out stuff as we are learning React
    let className="Ad " + props.isLight + " " + props.flavor

    return (
        <div className={className}>
            <p>Vote For:</p>
            <p style={{fontSize: props.fontSize}}>{props.flavor}</p>
        </div>
    );
};