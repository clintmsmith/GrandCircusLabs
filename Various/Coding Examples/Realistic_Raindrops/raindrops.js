function rain() {
    const image = document.getElementById('background');
    image.onload = () => {
        var RainyDay = new RainyDay({
            image: this,
            blur: 10,
            fps: 40
        })
        RainyDay.rain([
            [5,2,2]
        ], 0)
    }
    image.src ="bg.jpg";
}

rain();